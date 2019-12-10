let o = {x:10};
console.log(`x in o ${o.x}`);
let o1 = o; // same reference pointing
o1.x = 20;
console.log(`x in o1 ${o1.x}`);
console.log(`x in o ${o.x}`);

let m = {x:10};
console.log(`x in m ${m.x}`);
let n = Object.assign({}, m); // deep copy of m in n but references are separate
n.x = 100;
console.log(`x in m ${m.x}`);
console.log(`x in n ${n.x}`);



