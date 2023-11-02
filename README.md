# E-Commerce Store

## Description

This is a back-end deployment of a practice E-Commerce Store ran with mysql, express and sequelize. You are able to use Insomnia or another similar application to identify products of the store in and out. This app is not deployed but is able to be downloaded and used for your back-end experiene of how a store works. Similar to warehouse handling of stock in the back.



## Installation - Getting Started

1) Download the code from the repo to a local folder.
2) Type `npm install` in your CLI of VS Code to install the node modules, express and sequelize.

## How to Run
1) In CLI, use `mysql -u root -p` to login to mySQL
2) Create your ``.env file` to store your mySQL db ('ecommerce_db'), username and password for access upon connecting to server.
3) Use `source ./db/schema.sql;` to use database e-commerce
4) Use `npm run seed` to seed data
5) Use `npm start` to start the local application
6) Use insomnia or similar application to connect to local url and use routes as listed to explore or add/delete/update to the store. 

## Routes

1) Get All Categories: `GET` `http://localhost:3001/api/categories`
2) Get One Category: `GET` `http://localhost:3001/api/categories/:category_id`
3) Create New Category: `POST` `http://localhost:3001/api/categories`
4) Update A Category: `PUT` `http://localhost:3001/api/categories/:category_id`
5) Delete A Category: `DELETE` `http://localhost:3001/api/categories/:category_id`
6) Get All Products: `GET` `http://localhost:3001/api/products`
7) Get One Product: `GET` `http://localhost:3001/api/products/:product_id`
8) Create New Product: `POST` `http://localhost:3001/api/products`
9) Update A Product: `PUT` `http://localhost:3001/api/products/:product_id`
10) Get All Tags: `GET` `http://localhost:3001/api/tags`
11) Get One Tag: `GET` `http://localhost:3001/api/tags/:tag_id`
12) Create A Tag: `POST` `http://localhost:3001/api/tags`
13) Update A Tag: `PUT` `http://localhost:3001/api/tags/:tag_id`
14) Delete A Tag: `DELETE` `http://localhost:3001/api/tags/:tag_id`

## Video Walkthough

`https://drive.google.com/file/d/1b94D4JaTt7NqOGoVMRr3Welidxq-hfje/view`


## Credit

1) UNC CH BootCamp Staff
2) UNC CH BootCamp Classmates
3) BCS Assistant