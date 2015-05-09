'use strict';

var DummyModule = require('../compiled/dummy-module'),
    ContractMatchers = require('./contract-matchers');

describe('DummyModule', function() {

  beforeEach(function() {
    this.addMatchers(ContractMatchers);
  });

  it('should throw a contract error if passed a invalid number', function() {
    var invalidIntToBool = DummyModule.intToBool.bind(null, 'a');
    expect(invalidIntToBool).toThrowContractError('Num');
  });

  it('should return false for 0', function() {
    expect(DummyModule.intToBool(0)).toBe(false);
  });

  it('should return true for all other number', function() {
    expect(DummyModule.intToBool(-1)).toBe(true);
    expect(DummyModule.intToBool(1)).toBe(true);
  });
});
