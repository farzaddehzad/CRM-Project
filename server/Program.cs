using System.Text.Json;
using Npgsql;
using server;
using server.Classes;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
  options.IdleTimeout = TimeSpan.FromMinutes(20);
  options.Cookie.HttpOnly = true;
  options.Cookie.IsEssential = true;
});

Database database = new Database();
NpgsqlDataSource db = database.Connection();
builder.Services.AddSingleton(db);

var app = builder.Build();

app.UseSession();

app.MapGet("/", () => "Hello World!");
app.MapGet("/api/login", (Func<HttpContext, Task<IResult>>)GetLogin);
app.MapPost("/api/login", (Func<HttpContext, LoginRequest, NpgsqlDataSource, Task<IResult>>)Login);
app.MapDelete("/api/login", (Func<HttpContext, Task<IResult>>)Logout);

//app.MapGet("/api/admin/data", () => "This is very secret admin data here..").RequireRole(Role.ADMIN);
//app.MapGet("/api/user/data", () => "This is data that users can look at. Its not very secret").RequireRole(Role.USER);

static async Task<IResult> GetLogin(HttpContext context)
{
  Console.WriteLine("GetSession is called..Getting session");
  var key = await Task.Run(() => context.Session.GetString("User"));
  if (key == null)
  {
    return Results.NotFound(new { message = "No one is logged in." });
  }
  var user = JsonSerializer.Deserialize<User>(key);
  Console.WriteLine("user: " + user);
  return Results.Ok(user);
}

static async Task<IResult> Login(HttpContext context, LoginRequest request, NpgsqlDataSource db)
{
  if (context.Session.GetString("User") != null)
  {
    return Results.BadRequest(new { message = "Someone is already logged in." });
  }
  Console.WriteLine("SetSession is called..Setting session");

  await using var cmd = db.CreateCommand("SELECT * FROM users WHERE username = @username and password = @password");
  cmd.Parameters.AddWithValue("@username", request.Username);
  cmd.Parameters.AddWithValue("@password", request.Password);

  await using (var reader = await cmd.ExecuteReaderAsync())
  {
    if (reader.HasRows)
    {
      while (await reader.ReadAsync())
      {
        User user = new User(
            reader.GetInt32(reader.GetOrdinal("id")),
            reader.GetString(reader.GetOrdinal("username")),
            Enum.Parse<Role>(reader.GetString(reader.GetOrdinal("role")))
            );
        await Task.Run(() => context.Session.SetString("User", JsonSerializer.Serialize(user)));
        return Results.Ok(new { username = user.Username });
      }
    }
  }

  return Results.NotFound(new { message = "No user found." });
}

static async Task<IResult> Logout(HttpContext context)
{
  if (context.Session.GetString("User") == null)
  {
    return Results.Conflict(new { message = "No login found." });
  }
  Console.WriteLine("ClearSession is called..Clearing session");
  await Task.Run(context.Session.Clear);
  return Results.Ok(new { message = "Logged out." });
}

await app.RunAsync();