-- create database demozoo;


-- create tables

drop table if exists animals;
drop table if exists categories;
drop table if exists zookeepers;
drop table if exists habitats;

create table categories (
	categoryId serial primary key,
	categoryName varchar(64) not null,
	subCategory bit not null,
	parentCategoryId int null references categories(categoryId),
	createDate date default current_timestamp
);

create table habitats (
	habitatId serial primary key,
	country varchar(32),
	environment varchar(32),
	createDate date default current_timestamp
);

create table animals (
	animalId serial primary key,
	animalName varchar(32) not null,
	categoryId int references categories(categoryId),
	habitatId int references habitats(habitatId),
	createDate date default current_timestamp
);

create table zookeepers (
	zookeeperId serial primary key,
	firstName varchar(32),
	lastName varchar(32),
	createDate date default current_timestamp
);

create table care (
	zookeeperId int references zookeepers(zookeeperId),
	animalId int references animals(animalId),
	createDate date default current_timestamp
)