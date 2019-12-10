let values =[];
for (let i=0; i< 5; i++){
    values.push(i)
}
// simple iteration
for(let j=0;j<values.length; j++){
    console.log(`For loop ${values[j]}`);
}
console.log();
for(let j in values){
    console.log(`For in loop ${values[j]}`);
}
console.log();

for(let v of values) {
    console.log(`Using for..of ${v}`);
    
}
