var o = { x: 10 };
console.log("x in o " + o.x);
var o1 = o; // same reference pointing
o1.x = 20;
console.log("x in o1 " + o1.x);
console.log("x in o " + o.x);
var m = { x: 10 };
console.log("x in m " + m.x);
var n = Object.assign({}, m);
n.x = 100;
console.log("x in m " + m.x);
console.log("x in n " + n.x);
