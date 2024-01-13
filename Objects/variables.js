
/**
 * Primitives / Value Types: Number, String, Boolean, Symbol, undefined, null
 * Primitives are copied by their value.
 */

let x = 10;
let y = x;
x = 20;
console.log('y', y);


/**
 * Objects / Reference Types: Object, Function, Array
 * Objects are copied by their reference.
 */

let a = { value: 10 };
let b = a;
a.value = 20;
console.log('b', b);
