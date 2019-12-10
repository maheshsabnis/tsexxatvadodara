function printX(x) {
    var i = 0;
    if (x) {
        i = 10;
        console.log('In if' + i);
    }
    i++;
    console.log('Out of if' + i);
}
printX(true);
printX(false);
