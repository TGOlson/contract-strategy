/* jshint ignore:start */
import @ from 'contracts.js'

var types = require('./types');

var Eid    = types.Eid,
    Entity = types.Entity;
/* jshint ignore:end */


'use strict';


var R = require('ramda');


var registry = {};


/* jshint ignore:start */
@ (Eid) -> Void or Entity
/* jshint ignore:end */
function getFromRegistry(eid) {
  return R.prop(eid, registry);
}


/* jshint ignore:start */
@ (Eid) -> Bool
/* jshint ignore:end */
function hasInRegistry(eid) {
  return R.has(eid, registry);
}


/* jshint ignore:start */
@ (Entity) -> Void
/* jshint ignore:end */
function putToRegistry(entity) {
  registry[entity.eid] = entity;
}


module.exports = {
  get: getFromRegistry,
  has: hasInRegistry,
  put: putToRegistry
};
