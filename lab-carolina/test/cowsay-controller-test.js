'use strict';

require('./lib/test-setup.js');

const cowsay = require('cowsay-browser');
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

    it('should have an empty history array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
    });

    it('should have the same select value as select name', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.list).toEqual(list);
      });
    });


  });

});
