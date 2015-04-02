'use strict';

var R = require('ramda');


var hasLengthOfTwoOrMore = R.compose(R.gte(2), R.length);

var getIdSegments = R.split('/');

var hasTwoOrMoreSegments = R.compose(hasLengthOfTwoOrMore, getIdSegments);

// Use named functions for better contract outputs

function Eid(val) {
  return R.both(R.is(String), hasTwoOrMoreSegments)(val);
}

@ (Any) -> Bool
function Entity(val) {
  return R.compose(Eid, R.prop('eid'))(val);
}

module.exports = {
  Eid: Eid,
  Entity: Entity
};
