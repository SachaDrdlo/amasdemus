create database if not exists amasdemus; 
 
use amasdemus;
 
create table if not exists flavours(
    id smallint primary key auto_increment,
    flavour varchar(30)
);
 
create table if not exists locations(
    id smallint primary key auto_increment,
    location varchar(60)
);
 
create table if not exists breweries(
    id smallint primary key auto_increment,
    name varchar(60),
    description text,
    logo text,
    address varchar(60),
    url text
);
 
create table if not exists glasses(
    id smallint primary key auto_increment,
    glass varchar(30),
    logo text
);
 
create table if not exists types(
    id smallint primary key auto_increment,
    type varchar(30)
);

create table if not exists formats(
    id smallint primary key auto_increment,
    format varchar(30)
);
 
create table if not exists beers(
    id smallint primary key auto_increment,
    name varchar(60),
    level decimal(3,1),
    title varchar (60),
    description TEXT,
    description2 text,
    image text,
    id_brewery smallint,
    id_location smallint,
    id_glass smallint ,
    id_type smallint,
    foreign key (id_brewery) references breweries(id),
    foreign key (id_location) references locations(id),
    foreign key (id_glass) references glasses(id),
    foreign key (id_type) references types(id)
);
 
create table if not exists beers_flavours(
    id_beer smallint ,
    id_flavour smallint,
    primary key (id_beer, id_flavour),
    foreign key (id_beer) references beers(id),
    foreign key (id_flavour) references flavours(id)
);

create table if not exists beers_formats(
    id_beer smallint,
    id_format smallint,
    primary key (id_beer, id_format),
    foreign key (id_beer) references beers(id),
    foreign key (id_format) references formats(id)
);

INSERT INTO flavours
(flavour)
VALUES
("malt"),
("houblon"),
("épices"),
("fleurs"),
("fruits"),
("fruits secs"),
("caramel"),
("chocolat"),
("café"),
("acidulée"),
("champagne"),
("whisky"),
("rhum"),
("miel"),
("vanille"),
("céréales");
 
insert into formats
(format) 
values
('25cl'),
('33cl'),
('50cl'),
('75cl');

insert into locations
(location) 
values
('Nord'),
('Pas de Calais'),
('Belgique');

insert into types
(type) 
values
('triple'),
('blonde'),
('brune'),
('blanche'),
('noire'),
('IPA'),
('ambrée');
 
insert into breweries 
(name)  
values 
('Brouwerij Bosteels'),
('Brasserie 3-Monts'),
('Brasserie du pays flamand');
 
insert into beers 
(name, level) 
values
('Tripel Karmeliet', '8.4'),
('3 Monts Cuivrée', '7.5'),
('Anosteke', '8');
 
INSERT INTO glasses
(glass)
VALUES
('Tulipe'),
('Calice'),
('Ballon'),
('Weizen'),
('Pinte');

insert into beers_flavours
(id_beer, id_flavour)
values 
(1, 2),
(1, 4),
(1, 16);