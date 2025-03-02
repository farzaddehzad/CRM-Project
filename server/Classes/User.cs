namespace server.Classes;

using System.Text.Json.Serialization;

public class User
{
  public int Id { get; set; }
  public string Username { get; set; }
  [JsonConverter(typeof(JsonStringEnumConverter))]
  public Role Role { get; set; }

  public User(int id, string username, Role role)
  {
    Id = id;
    Username = username;
    Role = role;
  }
}