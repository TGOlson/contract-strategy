'use strict';
var R = require('ramda');
var hasLengthOfTwoOrMore = R.compose(R.gte(2), R.length);
var getIdSegments = R.split('/');
var hasTwoOrMoreSegments = R.compose(hasLengthOfTwoOrMore, getIdSegments);
function Eid(val) {
    return R.both(R.is(String), hasTwoOrMoreSegments)(val);
}
var inner_Entity = _c$1474.fun([typeof Any !== 'undefined' ? Any : _c$1474.Any], typeof Bool !== 'undefined' ? Bool : _c$1474.Bool).proj(_c$1474.Blame.create('Entity', 'function Entity', '(calling context for Entity)', 19))(function Entity$2(val) {
    return R.compose(Eid, R.prop('eid'))(val);
});
function Entity(val) {
    return inner_Entity.apply(this, arguments);
}
module.exports = {
    Eid: Eid,
    Entity: Entity
};
//# sourceMappingURL=types.js.map