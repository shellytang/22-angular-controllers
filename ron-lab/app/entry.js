'use strict';

require('./scss/main.scss');

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log){
  $log.debug('init cowsayCtrl');
  this.title = 'Moooooo';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.currentCow = this.cowfiles[0];
    console.log('this.cowfiles', this.cowfiles);
  });

  this.updateCow = function(input){
    $log.debug('this.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say', f: this.currentCow});
  };

  this.speak = function(input){
    $log.debug('this.updateCow()');
    this.spoken = this.updateCow(input);
    this.history.push(this.spoken);
    console.log('this.history', this.history);
  };

  this.undo = function(){
    $log.debug('this.undo()');
    console.log('this.history', this.history);
    this.history.pop();
    this.spoken = this.history.pop() || ''; 
  };
}
