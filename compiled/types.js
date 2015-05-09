'use strict';
var R = require('ramda');
var hasLengthOfTwoOrMore = R.compose(R.gte(2), R.length);
var getIdSegments = R.split('/');
var hasTwoOrMoreSegments = R.compose(hasLengthOfTwoOrMore, getIdSegments);
var isEid = R.both(R.is(String), hasTwoOrMoreSegments);
var isEntity = R.compose(Eid, R.prop('eid'));
var // Use named functions for better contract outputs
// Unnamed functions or functions resulting from composition
// results in cryptix or unnamed contract errors
inner_Eid = _c$7565.fun([typeof Any !== 'undefined' ? Any : _c$7565.Any], typeof Bool !== 'undefined' ? Bool : _c$7565.Bool).proj(_c$7565.Blame.create('Eid', 'function Eid', '(calling context for Eid)', 22))(function Eid$2(val) {
    return isEid(val);
});
function Eid(val) {
    return inner_Eid.apply(this, arguments);
}
var inner_Entity = _c$7565.fun([typeof Any !== 'undefined' ? Any : _c$7565.Any], typeof Bool !== 'undefined' ? Bool : _c$7565.Bool).proj(_c$7565.Blame.create('Entity', 'function Entity', '(calling context for Entity)', 27))(function Entity$2(val) {
    return isEntity(val);
});
function Entity(val) {
    return inner_Entity.apply(this, arguments);
}
module.exports = {
    Eid: Eid,
    Entity: Entity
};
//# sourceMappingURL=types.js.map