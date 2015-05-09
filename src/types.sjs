'use strict';

var R = require('ramda');


var hasLengthOfTwoOrMore = R.compose(R.gte(2), R.length);

var getIdSegments = R.split('/');

var hasTwoOrMoreSegments = R.compose(hasLengthOfTwoOrMore, getIdSegments);


var isEid = R.both(R.is(String), hasTwoOrMoreSegments);

var isEntity = R.compose(Eid, R.prop('eid'));


// Use named functions for better contract outputs
// Unnamed functions or functions resulting from composition
// results in cryptix or unnamed contract errors
@ (Any) -> Bool
function Eid(val) {
  return isEid(val);
}

@ (Any) -> Bool
function Entity(val) {
  return isEntity(val);
}

module.exports = {
  Eid: Eid,
  Entity: Entity
};
