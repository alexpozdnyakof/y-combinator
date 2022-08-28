const Y = g => ( x => x(x) )( x => g(y => x(x)(y)) )
const Z = g => ( x => g( v => x(x)(v) ) )( x => g( v => x(x)(v) ) )

module.exports = {Y, Z}