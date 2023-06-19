console.log("-----Using var-----");

var a = 100;
console.log(a); //assign the value

a = 200; // value changed
console.log(a);

var a = 300; // re-declare variable with same name
console.log(a);

console.log("\n-----Using let-----");

let b = 1000; //value assign
console.log(b);

b = 2000; //value changed
console.log(b);


//let b = 3000;// re-declare variable with same name


console.log("-----Using const-----");

const c = 4000; // assign the value
console.log(c);

//c = 5000;
//console.log(c);

//const c = 6000;

/**
 * The difference between var, let and const
 * => value change 
 *      var will allow to change value
 *      let will allow to change value
 *      const will not allow to change value 
 * => re-declaration
 *      var allow to re-declare variable with same
 *      let will not allow to re-declare a variable with same
 *      const will not allow to re-declare a variable with same
 * 
 * => scope of variable
 *      var global variable
 *      let has block level scope - we cannot access out of block
 *      const has block level scope - we cannot access out of block
 * -----------------------------------------------------------------
 * 
 */