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

    it('should return kitty as currentCow', () => {
      expect(this.cowsayCtrl.currentCow).toEqual('kitty');
    });

  });

  describe('testing updateCow()', () => {
    it('should return a kitty thinking hi', () => {
      let example = '\n' + cowsay.think({text: 'hi', f: this.cowsayCtrl.currentCow});
      let result = this.cowsayCtrl.updateCow('hi');
      expect(result).toEqual(example);
    });

    it('tests currText()', () => {
      let example = '\n' + cowsay.think({text: 'hi', f: this.cowsayCtrl.currentCow});
      this.cowsayCtrl.currText('hi');
      expect(this.cowsayCtrl.prevText).toEqual(example);
      expect(this.cowsayCtrl.history[0]).toEqual(example);
    });

  });

});
