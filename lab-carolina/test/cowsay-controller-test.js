'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('testing cowsayCtrl', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('testing inital properties', () => {
    it('should have a title that is Make us speak!', () => {
      expect(this.cowsayCtrl.title).toBe('Make us speak!');
    });
  });

});
