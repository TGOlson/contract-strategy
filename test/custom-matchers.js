'use strict';

var R = require('ramda');

function toThrowContractError(expected) {
  var result = false;

  tryCatch(this.actual, function(err) {
    if(isContractErr(err)) {
      result = true;
    } else {
      this.message = 'Expected Function to throw contract error but it threw ' + err.message;
    }
  }.bind(this));

  return result;
}

function tryCatch(fn, catchWith) {
  try {
    fn();
  } catch(err) {
    catchWith(err);
  }
}

function isContractErr(err) {
  return R.match(/contract violation/, err.message);
}

module.exports = {
  toThrowContractError: toThrowContractError
};
