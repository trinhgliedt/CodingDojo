const faker = require('faker');
const express = require('express');
//import express from 'express';

const app = express();

app.use(express.json()); //so that we'll have access to the body of the requested data. And this needs to be above all the routes.

class User {
  constructor(){
    this.id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor(){
    this.id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.street = faker.address.streetName();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}

app.get("/api/users/new", (request, response) => {
  const newUser = new User();
  response.json(newUser);
});

app.get("/api/companies/new", (request, response) => {
  const newCompany = new Company();
  response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
  const newUser = new User();
  const newCompany = new Company();
  response.json([newUser, newCompany]);
});

app.listen(4000, () => console.log('listening on port 4000...'));