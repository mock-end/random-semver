'use strict';

var nil        = require('is-nil');
var toString   = require('to-str');
var pickItem   = require('pick-item');
var pickWeight = require('pick-weight');
var randomRpg  = require('random-rpg');

module.exports = function (options) {

  options = options || {};

  var range = '';

  if (!nil(options.range)) {
    range = options.range === true
      ? pickItem(['^', '~', '<', '>', '<=', '>=', '='])
      : toString(options.range);
  }

  var preRelease = '';

  if (!nil(options.preRelease)) {
    preRelease = options.preRelease === true
      ? pickWeight(['-dev', '-beta', '-alpha'], [10, 5, 1])
      : toString(options.preRelease);
  }

  return range + randomRpg('3d9').join('.') + preRelease;

};
