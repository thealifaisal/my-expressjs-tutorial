// CommonJS format for importing packages.
// var express = require('express');
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');

// ES6 format for importing modules
import express from 'express';

// Since body-parser is CommonJS module and not ES6 module,
// it can always be imported via the default export, for example using:
// $ import pkg from 'body-parser';
// $ const { urlencoded, json } = pkg;
// otherwise for using:
// $ import { urlencoded, json } from 'body-parser';
// Syntax Error is thrown
import pkg from 'body-parser';
const { urlencoded, json } = pkg;

// ES6 format for importing modules
import cookieParser from 'cookie-parser';

// above ES6 format gives syntax error:
// Cannot use import statement outside a module
// the solution is to add: {"type": "module"} in package.json
// but this is also giving error because, node version is 12
// ES6 imports are allowed in node version 13 or greater.
// So updating to node 13 or greater, which is 14.15.4 LTS

var app = express();

// using bodyParser populates the body of the request, otherwise body is unidentified
// app.use(bodyParser()); // Deprecated

// using cookieParser populates the cookies of the request, req.cookies, otherwise cookie is unidentified
app.use(cookieParser());

// since the above constructor is deprecated, bodyParser(),
// the below commands are required to run seperately
app.use(urlencoded({extended: true}));
app.use(json());

// require router defined in movies.js
import movies from './movies.js';

// use the router on the sub-route /movies
// eg: when client a sends a request using, localhost:3000/movies,
// the request will be re-routed to ./movies.js file which is referenced
// by movies variable 
app.use('/movies', movies);

// when client a sends a request using, localhost:3000/
// below handler will run
app.get('/', function(req, res){
    console.log('Welcome to index.js');
    res.status(200).send('Welcome to index.js');
});

// the node app listens for client requests on port 3000
app.listen(3000);

console.log('server listening on port 3000');

// for a better insight what above commands/keywords mean, you can visit:
// https://www.javatpoint.com/expressjs-tutorial

// for RESTful APIs:
// https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm