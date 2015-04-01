// import @ from 'contracts.js'

'use strict';

var R = require('ramda');

var types  = require('./types');

var Eid    = types.Eid,
    Entity = types.Entity;

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
