'use strict';

require('./scss/main.scss');

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  this.title = 'Make us speak!';
  this.history = [];

  cowsay.list((err, list) => {
    this.list = list;
    this.currentCow = 'kitty';
  });

  this.updateCow = function(input){
    return '\n' + cowsay.think({text: input || 'What am I thinking about', f: this.currentCow});
  };

  this.currText = function(input){
    this.prevText = this.updateCow(input);
    this.history.push(this.prevText);
  };

  this.undo = function(){
    this.history.pop();
    this.prevText = this.history.pop();
  };

  this.helloClick = function(input){
    $log.log(input);
  };

}
