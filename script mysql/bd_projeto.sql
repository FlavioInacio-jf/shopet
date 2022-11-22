create database dbApiLoja;

use dbApiLoja;

CREATE TABLE produtos (
  cod_produto int primary key auto_increment,
  nome_produto varchar(45) ,
  quant_estoque int,
  preco_custo float ,
  preco_venda float,
  UNIQUE (cod_produto)
  );

insert into produtos (nome_produto, quant_estoque, preco_custo, preco_venda) values ("ps4", 10, 500, 2.000);
select * from produtos;
