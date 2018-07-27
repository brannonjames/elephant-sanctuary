# Elephant Sanctuary

A mobile-first CRUD elephant sanctuary made as a weekend project for users to check elephants into a sanctuary and monitor
their happiness level.

[Live demo](https://awesome-elephant-sanctuary.herokuapp.com/)

I recently start converting this project as my first React Native [app](https://github.com/brannonjames/elephant-sanctuary-native)

## Built With

AngularJS, CSS5, Node, Express, Postgres

## Getting Started

`npm install` for dependencies
`npm start` to start

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)


### Installing


```
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

```

## Screen Shot

![mobile-screen](https://i.imgur.com/LhQknNn.png)
![full-screen](https://i.imgur.com/HLkHhkh.png)

