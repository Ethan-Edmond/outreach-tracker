DELETE FROM USERS;

INSERT INTO USERS (userid, username, password)
VALUES (1, 'asdf', 'asdf');

alter sequence hibernate_sequence restart with 15;
