CREATE DATABASE dbEbacStore;

\c dbEbacStor;

CREATE SCHEMA store;

CREATE TABLE "store".customer (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    username VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    tell VARCHAR(255) NOT NULL
);

CREATE TABLE "store".product (
    product_id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price NUMERIC(8,2) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE "store".stock (
    product_id INTEGER NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL
);
