/**
  * Dummy module for test multiple files using contracts in same project
  */

// Contract Imports
/* jshint ignore:start */
import @ from 'contracts.js'
/* jshint ignore:end */

// Begin core module code
// Must be below the contract imports
'use strict';

@ (Num) -> Bool
function intToBool(v) {
  return !!v;
}

module.exports = {
  intToBool: intToBool
};
