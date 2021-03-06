/*!
 * handlebars-helper-lorem <https://github.com/jonschlinkert/handlebars-helper-lorem>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var handlebars = require('handlebars');
var loremHelper = require('..');


describe('lorem', function () {
  beforeEach(function() {
    loremHelper.register(handlebars);
  });

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

