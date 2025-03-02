create type role as enum ('USER', 'ADMIN');

alter type role owner to postgres;

create table "users"
(
    id       serial
        constraint user_pk
            primary key,
    username varchar,
    password varchar,
    role     role
);

alter table "user"
    owner to postgres;

INSERT INTO "user" (id, username, password, role) VALUES (1, 'test', '12345', 'USER');
INSERT INTO "user" (id, username, password, role) VALUES (2, 'admin123', 'abc12345', 'ADMIN');