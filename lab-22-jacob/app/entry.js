'use strict';

require('./scss/main.scss');
const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', CowsayController]); //CowsayController is pointing to constructor function below
//log is debug stuff
//scope links us back to variables we had before

function CowsayController($log) { //angular is taking care of dependency injection behind scenes
  this.title = 'Moooooo',
  this.list = [];
  this.updateCow = function(input) {
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
  },
  this.helloClick = function(input) {
    $log.log(input);
    return '\n' + cowsay.say({text: input});
  };
  this.submit = function() { //thank you angular docs.
    console.log('FUNCTION HIT');
    if (this.text) {
      console.log('LOG 2');
      this.list.push(this.text)
      this.text = ''
    }
  }
  this.count = function(index) {
    return '\n' + cowsay.say({text:index += 1});
  };
}
