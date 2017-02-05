'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// app modules

// angular module
const demoApp = angular.module('demoApp', []);

// angular constructus
demoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log){
  this.history = [];

  cowsay.list((err, list) => {
    this.cowfiles = list;
  });

  $log.debug('init CowsayController');

  this.title = 'Moooooo';

  this.updateCow = function(message, type){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: message || 'gimme something to say', f: type});
  };

  this.submit = function(message, type) {
    $log.debug('logging history', this.history);
    this.history.push({text: message, f: type});
  };

}
