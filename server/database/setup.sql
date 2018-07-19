-- Server will depend on views as well as tables

CREATE DATABASE elephant_sanctuary;

CREATE TABLE humans (
	id SERIAL PRIMARY KEY,
	name VARCHAR(20),
	created TIMESTAMP DEFAULT Now()
);

CREATE TABLE elephants (
	id SERIAL PRIMARY KEY,
	name VARCHAR(20),
	owner integer REFERENCES humans,
	happiness_level integer,
	preview_url text,
	url text,
	created TIMESTAMP DEFAULT Now()
);

CREATE VIEW get_humans AS
	SELECT humans.id, humans.name, count(humans.id = elephants.owner) AS elephant_count
	FROM humans
	LEFT OUTER JOIN elephants ON elephants.owner = humans.id
	GROUP BY humans.id
	ORDER BY elephant_count DESC;
	
CREATE VIEW get_elephants AS
	SELECT * FROM elephants;