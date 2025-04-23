-- Criação do banco de dados
create database estoque;

-- Seleciona o banco de dados para uso
use estoque;

-- Criação da tabela de produtos
create table produtos (
    id int auto_increment primary key,
    produto varchar(100) not null,
    tipo varchar(50) not null,
    quantidade int not null
);