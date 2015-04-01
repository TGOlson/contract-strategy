'use strict';

var R = require('ramda');

function isContractErr(err) {
  return R.match(/contract violation/, err.message);
}

function tryCatch(fn, catchWith) {
  try {
    fn();
  } catch(err) {
    catchWith(err);
  }
}

function toThrowContractError() {
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

module.exports = {
  toThrowContractError: toThrowContractError
};
