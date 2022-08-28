const { assert } = require('chai');
const {Y, Z} = require('../index.js')

// Factorial function
const F = f => x => (x === 0 ? 1 : x * f(x - 1));

assert.equal(Y(F)(5), 120, 'shoud equal 120 for F and 5');
assert.equal(Z(F)(5), 120, 'shoud equal 120 for F and 5');
