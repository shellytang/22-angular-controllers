require('./test-helper');
//the above needs to be created

let angular = require('angular');
let cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(function() {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.controller =  new $controller('CowsayController');
    });
  });

  describe('initial properties', function() {
    it('should have a title that says Welcome to Cowville.', function() {
      expect(this.cowsayCtrl.title).toBe('Welcome to Cowville');
    });
  });
});
