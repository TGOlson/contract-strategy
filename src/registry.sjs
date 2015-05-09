// Contract Imports
/* jshint ignore:start */
import @ from 'contracts.js'

var types = require('./types');

var Eid    = types.Eid,
    Entity = types.Entity;
/* jshint ignore:end */

// Begin core module code
// Must be below the contract imports
'use strict';

var R = require('ramda');

var registry = {};


@ (Eid) -> Void or Entity
function getFromRegistry(eid) {
  return R.prop(eid, registry);
}


@ (Eid) -> Bool
function hasInRegistry(eid) {
  return R.has(eid, registry);
}


@ (Entity) -> Void
function putToRegistry(entity) {
  registry[entity.eid] = entity;
}


module.exports = {
  get: getFromRegistry,
  has: hasInRegistry,
  put: putToRegistry
};
