'use strict';

var Registry = require('../compiled/registry'),
    ContractMatchers = require('./contract-matchers');

describe('Registry', function() {

  beforeEach(function() {
    this.addMatchers(ContractMatchers);
  });

  it('should throw a contract error if passed a invalid eid', function() {
    var getInvalidEid = Registry.get.bind(null, 123);
    expect(getInvalidEid).toThrowContractError('Eid');
  });

  it('should throw a contract error if passed a invalid entity', function() {
    var putInvalidEntity = Registry.put.bind(null, 'a/bcd', {});
    expect(putInvalidEntity).toThrowContractError('Entity');
  });

  it('should be able to get and set entities in the registry', function() {
    var dummyData = {eid: '0/123'};
    expect(Registry.get('123')).toBeUndefined();

    Registry.put(dummyData);
    expect(Registry.get('0/123')).toBe(dummyData);
  });

  it('should know if an entity is in the registry', function() {
    var dummyData = {eid: '4/567'};
    expect(Registry.has('4/567')).toBe(false);

    Registry.put(dummyData);
    expect(Registry.has('4/567')).toBe(true);
  });
});
