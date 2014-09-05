'use strict';

require('angular');
require('angular-route');

var Log                   = require('./config/Log');
var Route                 = require('./config/Route');

var PageController        = require('./controllers/PageController');


angular.module('markdown.pages', [ 'ngRoute' ])
    .config(Log)
    .config(Route)
    .controller('PageController', PageController);