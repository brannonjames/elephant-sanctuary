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
	thumbnail VARCHAR(220),
	url VARCHAR(220),
	reddit_id VARCHAR(10),
	created TIMESTAMP DEFAULT Now()
);

CREATE VIEW get_humans AS
	SELECT humans.id, humans.name, count(humans.id = elephants.owner) AS elephant_count
	FROM humans
	LEFT OUTER JOIN elephants ON elephants.owner = humans.id
	GROUP BY humans.id
	ORDER BY elephant_count DESC;
	
CREATE VIEW get_elephants AS
	SELECT * FROM elephants
	ORDER BY created DESC;