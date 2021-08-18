// Any DataType

let a:any = 12;
a = 20;

function sum(a:any, b:any) {
  return a+b;
}

console.log(sum(50,50));

// Unknown Data Type

let a:unknown = 10;
let s:string = a;

a.trim(); // run time error
b.trim(); // editor error

function multiply (a:unknown, b:unknown) {
  if(typeof a === "number" && typeof b === 'number') {
    return a*b
  }
}

console.log(multiply(25,2))


// String Data Type 

let a:string = "Hello";
const b:string = " World";
// let c = "some"; 
let c:"hi"; // type literal
c = "hi";

// Boolean Data Type

let a:boolean = true;
let b:boolean = false;

let c:false;
c = false;

console.log(c);


// Number Data Type 

let a:number = 10;
let b:number = 20;

let sum:number = a + b;
console.log(sum);

const c:number = 1.0;
let d:1;
d:1.0;
d:1.0000000;
d: -1;

// BigInt Data Type

let a:bigint = 10n;
a = 2n*3n;
console.log(a);



