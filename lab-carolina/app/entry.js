'use strict';

require('./scss/main.scss');

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  let cowsayCtrl = this.cowsayCtrl = {};
  this.title = 'Moooooo';

  this.updateCow = function(input){
    return '\n' + cowsay.think({text: input || 'What am I thinking about'});
  };

  this.helloClick = function(input){
    $log.log(input);
  };

}
