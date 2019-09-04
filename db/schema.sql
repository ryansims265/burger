CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

  id INT NOT NULL AUTO_INCREMENT,
  burgerName varchar(40) NULL,
  devoured boolean default 0, 
  primary key (id)

);
