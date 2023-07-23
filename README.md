# 13 Object-Relational Mapping (ORM): E-Commerce Back End

# Description

The challenge is to build a back-end for an e-commerce site by modifying the starter code. It involves configuring a working Express.js API to use Sequelize to interact with a MySql database. 

The tasks included building the models associated with the DB tables (Category, Product, Product Tag, Tag), modifying the routes, and using Insomnia to test GET, POST, PUT, and DELETE routes. 

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

# Technologies used

* JS
* Node.js
* MySQL
* Insomnia
* Dependencies 
    - dotenv 8.2.0
    - express 4.17.1
    - mysql2 2.1.0
    - sequelize 5.22.5

# How to Install

On the Visual Studio terminal do the following: 

* Install [Node.js](https://nodejs.org/) if it is not installed on your machine
* git clone https://github.com/mayperalta/week-13-ecommerce.git
* npm init 
* install the dependencies
* Connect to mySQL by adding an .ENV file containing the DB name, user, and password

On Insomnia, do the following:

* Add a New Environment ("domain": "http://localhost:3001/api")
* Create folders (CATEGORIES, PRODUCTS, TAGS)
* Create New HTTP Request for each folder
    - CATEGORIES
        - GET {{domain}}/categories
        - POST {{domain}}/categories
        - GET {{domain}}/categories/8
        - PUT {{domain}}/categories/8
        - DELETE {{domain}}/categories/8
    - PRODUCTS
        - GET {{domain}}/products
        - POST {{domain}}/products
        - GET {{domain}}/products/5
        - PUT {{domain}}/products/5
        - DELETE {{domain}}/products/5
    - TAGS
        - GET {{domain}}/tags
        - POST {{domain}}/tags
        - GET {{domain}}/tags/9
        - PUT {{domain}}/tags/9
        - DELETE {{domain}}/tags/9



* git clone https://github.com/mayperalta/week-12-sql-employee-tracker.git
* npm init
* npm i inquirer@8.2.5
* npm i mysql12@3.4.5

On the MySQL Workbench, do the following:

* execute schema.sql
* execute seeds.sql