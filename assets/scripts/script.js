var a; // variable declaration
console.log(a);
a=10;
console.log(a);

var b = 20; //variable declaration with assignment


//datatypes in javascript

//primitive datatypes
var cx = 10; //number
var bx = true; //boolean
var sx = "hello"; //string
var ux = undefined; //undefined
var nx = null; // null

//derived datatypes
var ax = [1,2,3,4]; // array
var ox = {          //object
    a: 'hello',
    b: 'hai'
};


var qw = 'hello';

var az = "world";

console.log(qw+' '+az);


//explanation of arrays
var gx = [1,2,3,4];

var tx = gx;

tx[0]= 8;
tx.pop();

console.log('tx values', tx);
console.log('gx values', gx);

//explanation of objects
var obj = {
    name: "sourav"
};

var obj2 = obj;
console.log(obj2.name);
obj2.name = 'bru';

console.log(obj2.name);


//what are the ways of creating an array
/*
1. Using []
*/ 
var arr = [null, true, 1, 'hello', [12,34,56],{name:12}];
arr[0] = 10;
console.log("array values");
for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
arr[4][1] = 44;
arr[5]['name'] = 'abc';
console.log('updated array values', arr);
/*
 2. Using Array constructor
*/

var newax = new Array('1',2,3,4,5);

console.log('newax', newax);

//objects

//1. Using {}

var objx = {};
objx.a = 'b';
objx['c'] = 'd';

console.log("objx", objx);

// 2. Using Object constructor

var objz = new Object();
objz.a = 'b';// dot notation
objz['c'] = 'd';//box notation

console.log('objz', objz);