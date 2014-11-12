/*!
 * helper-lorem <https://github.com/jonschlinkert/helper-lorem>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var handlebars = require('handlebars');
var loremHelper = require('./');


describe('lorem', function () {
  beforeEach(function() {
    handlebars.registerHelper('lorem', loremHelper);
  });

  describe('generate text', function () {
    it('should return lorem ipsum text:', function () {
      loremHelper().should.be.a.string;
      (loremHelper().length > 1).should.be.true;
    });
  });

  describe('options handling', function () {
    it('should set options:', function () {
      (loremHelper({count: 5, units: 'words'}).split(' ').length === 5).should.be.true;
      (loremHelper({count: 9, units: 'words'}).split(' ').length === 9).should.be.true;
    });
  });

  describe('templates', function () {
    it('should pass options (context) to a handlebar helper:', function () {
      (handlebars.compile('{{lorem this}}')({count: 3, units: 'words'}).split(' ').length === 3).should.be.true;
      (handlebars.compile('{{lorem this}}')({count: 7, units: 'words'}).split(' ').length === 7).should.be.true;
    });

    it('should pass set options using the `hash` object on a handlebar helper:', function () {
      handlebars.compile('{{lorem this}}')({units: 'words'}).should.be.a.string;
      (handlebars.compile('{{lorem count="8"}}')({units: 'words'}).split(' ').length === 8).should.be.true;
      (handlebars.compile('{{lorem count="15"}}')({units: 'words'}).split(' ').length === 15).should.be.true;
    });
  });
});

