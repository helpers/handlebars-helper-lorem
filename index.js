'use strict';

var lorem = require('helper-lorem');

module.exports = function() {
  return lorem.apply(this, arguments);
};

/**
 * Assemble pre v0.6.0 compatibility
 */

module.exports.register = function(handlebars) {
  handlebars.registerHelper('lorem', function () {
    return lorem.apply(this, arguments);
  });
};
