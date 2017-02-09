// 'use strict';
//
// require('../../app/entry.js');
// require('angular-mocks');
//
// const angular = require('angular');
// const cowsay = require('cowsay-browser');
//
// describe('Cowsay Controller', function() {
//   beforeEach(() => {
//     angular.mock.module('demoApp');
//     angular.mock.inject($controller => {
//       this.cowsayCtrl = new $controller('CowsayController');
//     });
//   });
//   describe('initial properties', () => {
//     it('title property should equal\'Cows Say the Darndest Things\'', () => {
//       expect(this.cowsayCtrl.title).toBe('Cows Say the Darndest Things');
//     });
//   });
// });
//
// describe('#submit', () => {
//   it('should add a cow to history', () => {
//     let expected = '\n' + cowsay.say({text: 'Hello', f: this.cowsayCtrl.current})
//     this.cowsayCtrl.text = 'Hello'
//     this.cowsayCtrl.submit()
//     expect(this.cowsawCtrl.newCow).to()
//   })
// })
