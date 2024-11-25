--------------------------------DDL--------------------------------

--product
CREATE TABLE product (
	product_id serial NOT NULL,
	"name" varchar(25) NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	CONSTRAINT product_pkey PRIMARY KEY (product_id)
);

-- stock

CREATE TABLE stock (
	id serial NOT NULL,
	product_id int4 NOT NULL,
	quantity int4 NOT NULL,
	CONSTRAINT stock_pkey PRIMARY KEY (id)
);


--------------------------------DML--------------------------------


--1 
insert into product (name) values ('celular');
insert into product (name) values ('livro');
insert into product (name) values ('tablet');
insert into product (name) values ('notebook');
insert into product (name) values ('roteador');


insert into stock (product_id, quantity) values (1, 5);
insert into stock (product_id, quantity) values (2, 3);
insert into stock (product_id, quantity) values (3, 0);
insert into stock (product_id, quantity) values (4, 1);
insert into stock (product_id, quantity) values (5, 0);


--2

-- Dica 1 há um erro de sintaxe (lembre que o Group By precisa estar com a mesma quantidade de colunas do SELECT)
-- Dica 2 ordene pela quantidade decrescente de produtos

SELECT
	name AS product_name,
	stock.quantity AS product_stock
FROM
	product
INNER JOIN stock USING (product_id)    	
GROUP BY
	name, stock.quantity
ORDER BY stock.quantity;


--3
select 
	sum(quantity) AS total_stock -- campo para somar a quantidade de itens no stock
from stock;
