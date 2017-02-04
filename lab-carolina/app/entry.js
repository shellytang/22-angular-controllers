'use strict';

require('./scss/main.scss');

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  this.title = 'Moooooo';
  this.history = [];

  cowsay.list((err, list) => {
    this.list = list;
    this.currentCow = this.list[0];
  });

  this.updateCow = function(input){
    return '\n' + cowsay.think({text: input || 'What am I thinking about'});
  };

  this.saveText = function(input){
    this.currText = this.updateCow(input);
    this.history.push(this.currText);
  };

  this.helloClick = function(input){
    $log.log(input);
  };

}
