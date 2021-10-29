CREATE TABLE CLIENTS
(
    id           INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    first_name   TEXT    NOT NULL,
    last_name    TEXT    NOT NULL,
    mobile       TEXT    NOT NULL,
    photo        TEXT    NOT NULL,
    time_created TEXT    NOT NULL
);
