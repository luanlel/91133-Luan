create database if not exists estoque;

use estoque;

create table if not exists usuarios (
    id int auto_increment primary key,
    usuario varchar(50) not null unique,
    senha varchar(255) not null
);

insert into usuarios (usuario, senha)
values ('admin', password('admin123'));