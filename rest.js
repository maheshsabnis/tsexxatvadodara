var DataClass = /** @class */ (function () {
    function DataClass() {
    }
    DataClass.prototype.add = function () {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        var sum = 0;
        if (x.length > 0) {
            x.forEach(function (n, i) {
                sum += n;
            });
        }
        return sum;
    };
    return DataClass;
}());
var obj1 = new DataClass();
console.log("2 Parameters " + obj1.add(2, 3));
console.log("3 Parameters " + obj1.add(2, 3, 4));
console.log("4 Parameters " + obj1.add(2, 3, 4, 5));
