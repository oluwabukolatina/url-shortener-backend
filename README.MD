# Task
Write a simple full-stack application that provides URL shortening functionality. The application needs to use vue.js on the frontend (SPA) and have an express driven API on the backend. All the code should be written in Typescript. Styling of the frontend app should be done using vanilla CSS.


# ShortenUrl
> Betachop helps users shortens url

## Functionality

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

## Getting Started

>  [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Acknowledgments](#acknowledgments) &middot; [Author](#author)
---

## Heroku App

Application is deployed on Heroku. Use public URL [https://fierce-wildwood-87279.herokuapp.com](https://betachop.herokuapp.com) with API endpoints.

## Swagger API Documentation
API Documentation generated with [swagger](https://fierce-wildwood-87279.herokuapp.com/api-docs).

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

- Clone this project to your local machine `https://github.com/oluwabukolatina/shorten-url.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:2021` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| GET    | Get all urls               | `/api/v1/urls`           |
| POST   | generate url                       | `/api/v1/urls`           |
| get    | Get a url                         | `/api/v1/orders/:code` |
## Tests
- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```
## Author
- [Tina](https://github.com/oluwabukolatina)
