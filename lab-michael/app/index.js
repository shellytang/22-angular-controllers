// APP LOGIC GOES HERE
require('./scss/main.scss'); // require in CSS

// npm / yarn modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular module
const cowsayDemoApp = angular.module('cowsayDemoApp', []);

// angular controllers
cowsayDemoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log) {
  $log.debug('init CowsayController');
  this.title = 'Moooooo';
  this.updateCow = function(input) {
    return '\n' + cowsay.say({text: input || 'Eat Mor Chikin'});
  };

  this.helloClick = function(input){
    $log.log(input);
  };
}
