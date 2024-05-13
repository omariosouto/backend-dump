1. Open the pgAdmin web interface in your web browser. (http://localhost:5050/)
1. Log in using the email and password that you set in the `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` environment variables in the docker compose file.
1. In the Create — Server dialog that appears, enter a name for the server in the Name field.
  - In the Connection tab, enter the following information:
  - Host name/address: the hostname or IP address of the machine where the PostgreSQL database is running. If you are running the PostgreSQL container on the same machine as the pgAdmin container, you can use postgres as the hostname.
  - Port: the port number where the PostgreSQL database is listening for connections. In the Docker Compose file I provided earlier, the PostgreSQL container is exposing port 5432, so you can use 5432 as the port number.
  - Maintenance database: the name of the database that you want to use for maintenance tasks. You can use the postgres database for this purpose.
  - Username: the username that you want to use to connect to the database. You can use the POSTGRES_USER environment variable that you set in the Docker Compose file.
  - Password: the password for the user that you want to use to connect to the database. You can use the POSTGRES_PASSWORD environment variable that you set in the Docker Compose file.
  - Click the Save button to create the server.

1. To ensure that it's working
```sql
CREATE TABLE test (id INT, name VARCHAR(255));
INSERT INTO test VALUES (1, 'postgres');
INSERT INTO test VALUES (2, 'pg-admin');
INSERT INTO test VALUES (3, 'docker');
SELECT * FROM test;
```