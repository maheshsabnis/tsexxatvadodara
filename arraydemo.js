var values = [];
for (var i = 0; i < 5; i++) {
    values.push(i);
}
// simple iteration
for (var j = 0; j < values.length; j++) {
    console.log("For loop " + values[j]);
}
console.log();
for (var j in values) {
    console.log("For in loop " + values[j]);
}
console.log();
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var v = values_1[_i];
    console.log("Using for..of " + v);
}
