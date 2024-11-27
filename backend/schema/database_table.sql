CREATE TABLE users(
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)

CREATE TABLE customers(
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    image_url VARCHAR(255) NOT NULL   
)

CREATE TABLE invoices(
    customer_id UUID PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(10) CHECK(status IN('pending','paid')) NOT NULL,
    date DATE NOT NULL
)

CREATE TABLE revenue(
    id SERIAL PRIMARY KEY,
    month VARCHAR(3) NOT NULL,
    revenue DECIMAL(10, 2) NOT NULL
)