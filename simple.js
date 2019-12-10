function doWork(x) {
    if (x) {
        var i = 10;
        console.log('in if ' + i);
    }
    i++;
    console.log('out of if ' + i);
}

// doWork(true);
// doWork(false);

for (var i = 0; i < 5; i++) {
    console.log('i = ' + i);
}
i++;
console.log(i);