'use strict';

var R = require('ramda');


var hasLengthOfTwoOrMore = R.compose(R.gte(2), R.length);

var getIdSegments = R.split('/');

var hasTwoOrMoreSegments = R.compose(hasLengthOfTwoOrMore, getIdSegments);

var isEid = R.both(R.is(String), hasTwoOrMoreSegments);

var isEntity = R.compose(isEid, R.prop('eid'));


module.exports = {
  Eid: isEid,
  Entity: isEntity
};
