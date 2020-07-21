Write a simple full-stack application that provides URL shortening functionality. The application needs to use vue.js on the frontend (SPA) and have an express driven API on the backend. All the code should be written in Typescript. Styling of the frontend app should be done using vanilla CSS.

The specs for the application are:
- A user needs to be able to enter a URL and they will get an 8 character (lowercase-alphanumeric) shortened version of the URL.
- URLs are shortened and persisted into MongoDB via a REST API.
- The frontend app will display a list of previously shortened URLs.
- New URLs will be generated and added to the frontend list.
- The same 8-characters cannot be used twice i.e. each shortened URL needs to be unique.
- The URLs need to be shortened with the following domain 'pbid.io' e.g. https://pbid.io/f3x2ab1c
- The shortened URL do not need to actually redirect/work as the domain doesn’t exist.
- The entire system needs to be runnable using Docker, a simple compose file will do.
- Appropriate tests should be added to the code, using the jest framework.
- The app layout should be responsive.
- Add a root README.md describing what the application is, and how to run it.
- Layout and style are up to you, this is not a design test, just make it functional and easy to use.
- Add any extra tweaks to increase usability.
- When you are ready upload the code onto a public git repo somewhere and let us know.

Thanks
Aaron


<!-- ## ![alt text](https://res.cloudinary.com/betachop/image/upload/c_scale,h_42,w_190/v1550524399/betachop/beta-chop-logo.png) -->

# BetaChop 🍽🥗🍗 &middot; [![Build Status](https://travis-ci.org/timi-codes/BetaChop.svg?branch=develop)](https://travis-ci.org/timi-codes/BetaChop) [![Coverage Status](https://coveralls.io/repos/github/timi-codes/BetaChop/badge.svg?fbfbfbhfdhfhdfhdhfdhfdhffbfbbfbfddd=fhdfhdhfdhfhdhfhd)](https://coveralls.io/github/timi-codes/BetaChop) [![Maintainability](https://api.codeclimate.com/v1/badges/da4ef2d2fe0db5b689ec/maintainability)](https://codeclimate.com/github/timi-codes/BetaChop/maintainability)

> Betachop helps user(customer) find and order available resturants and available meal for the day. Vendors can also set up menu for the day and recieve orders.

## Getting Started

> [UI Templates](#ui-templates) &middot; [Pivotal Tracker](#pivotal-tracker) &middot; [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Acknowledgments](#acknowledgments) &middot; [Author](#author)

---

## UI Templates

UI Template for the application can be found here [Github pages](https://timi-codes.github.io/BetaChop/UI/index.html).

## Heroku App

Application was deployed to Heroku. Use public URL [https://betachop.herokuapp.com](https://betachop.herokuapp.com) with API endpoints.

## Pivotal Tracker

Pivotal Tracker Stories can found here [Pivotal tracker](https://www.pivotaltracker.com/n/projects/2242112).

## Swagger API Documentation

API Documenttion was generated with [swagger](https://betachop.herokuapp.com/api-docs).

---

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node) A run time environment based off Chrome's v8 Engines for writing Javascript server-side applications.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.

## Testing Tools

- [Mocha](https://mochajs.org/) A javascript testing framework.
- [Chai](https://chaijs.com) A test assertion library for Javascript.

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `https://github.com/timi-codes/BetaChop.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm start
  ```
- Use `http://localhost:7778` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| GET    | Get all the meal options                | `/api/v1/meals`           |
| POST   | Add a meal option                       | `/api/v1/meals`           |
| PUT    | Update the information of a meal option | `/api/v1/meals/:mealId`   |
| DELETE | Remove a meal option                    | `/api/v1/meals/:mealId`   |
| POST   | Setup the menu for the day              | `/api/v1/menu`            |
| GET    | Get the menu for the day                | `/api/v1/menu`            |
| POST   | Select the meal option from the menu    | `/api/v1/orders`          |
| PUT    | Modify an order                         | `/api/v1/orders/:orderId` |
| GET    | Get all the orders                      | `/api/v1/orders`          |

## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm test
  ```

## Acknowledgments

- [Andela](https://andela.com/)
- [forloop Africa](https://forloop.africa/)

## Author

- [Timi David Tejumola](https://twitter.com/timicodes)
