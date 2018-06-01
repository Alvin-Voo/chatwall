'use strict';

require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../dist/server/main');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const messageRouter = require('./routes/message');

const mongoose = require('./db/mongoose');

app.engine('html', ngUniversal.ngExpressEngine({//all html page rendering will be via this callback
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));
app.set('view engine', 'html');
app.set('views', path.join(__dirname,'../dist/browser'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//allows for cross server communication (in case client side and server side code resides in different servers)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');//allow incoming http request for any domain to access this server
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth');//which headers is allowed for the incoming request
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');//which methods are allowed
    next();
});

app.use('/message', messageRouter);
app.use('/user', userRouter);
app.use('/', indexRouter);//--> root page is NOT served as a static file, but as Angular file

// catch 404 and forward to error handler
//always let angular app handle the any 404 error (path location strategy)
app.use(indexRouter);

app.use(express.static(path.join(__dirname,'../dist/browser')));

app.use('*', indexRouter);//--> everything else is a static file


module.exports = app;
