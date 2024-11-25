\c dbEbacStor;

DROP TABLE "store".stock;
DROP TABLE "store".product;

CREATE TABLE "store".product (
    product_id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price NUMERIC(8,2) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE "store".stock (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES store.product (product_id)
);