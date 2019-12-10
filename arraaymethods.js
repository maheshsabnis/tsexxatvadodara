var names = ['James Bond', 'Ethan Hunt', 'Indiana Jones', 'Jsaon Bourn'];
// itartion methods
names.forEach(function (v, i) {
    console.log("Name at " + i + "ths position " + v);
});
console.log();
names.map(function (v, i) {
    console.log("Name at " + i + "ths position " + v);
});
console.log();
console.log('Names greater than 10');
names.map(function (v, i) {
    if (v.length > 10) {
        console.log("Name at " + i + "ths position " + v);
    }
});
console.log();
console.log('Names greater than 10 using filter');
var res = names.filter(function (v, i) {
    return v.length > 10;
});
res.map(function (v, i) {
    console.log("Name at " + i + "ths position " + v);
});
console.log();
console.log('Using arrow operator');
res.map(function (v, i) {
    console.log("Name at " + i + "ths position " + v);
});
