\c dbEbacStore

INSERT INTO store.customer (name, surname, username, email, cpf, tell) VALUES ('Rodrigo', 'Marcedo', 'Roma', 'roma@gmail.com', '123.456.789-01','(71) 9 8765 4321');
INSERT INTO store.customer (name, surname, username, email, cpf, tell) VALUES ('Alessandra', 'Gomez', NULL, 'Ale2024@gmail.com', '012.345.678-90','(71) 3131-3131');
INSERT INTO store.customer (name, surname, username, email, cpf, tell) VALUES ('Roberta', 'Costa', NULL, 'roco@gmail.com', '234.567.890-12', '(71) 9 1234-5678');

CREATE OR REPLACE FUNCTION inserir_na_tabela_stock()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO store.stock (product_id, product_name, quantity) VALUES (NEW.product_id, NEW.product_name, 0);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_inserir_na_tabela_stock
AFTER INSERT ON store.product
FOR EACH ROW
EXECUTE FUNCTION inserir_na_tabela_stock();

INSERT INTO store.product (name, type, price, description) VALUES ('Heineken', 'Cerveja', 8.99, NULL);
INSERT INTO store.product (name, type, price, description) VALUES ('Skol', 'Cerveja', 4.99, 'A cerveja que desce redondo');
INSERT INTO store.product (name, type, price, description) VALUES ('Coca-Cola', 'Refrigerante', 8.99, NULL);

UPDATE store.stock SET quantity = 150 WHERE WHERE product_name = 'Heineken';
UPDATE store.stock SET quantity = 115 WHERE WHERE product_name = 'Skol';
UPDATE store.stock SET quantity = 515 WHERE WHERE product_name = 'Coca-Cola';
