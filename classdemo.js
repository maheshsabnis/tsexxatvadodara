var MyClass = /** @class */ (function () {
    function MyClass(a, b) {
        this.a = a;
        this.b = b;
        // private a: number = 0;
        // private b: number = 0;
        // constructor(a: number, b:number){
        //     this.a = a;
        //     this.b = b;
        // }
        this.x = 0;
    }
    MyClass.prototype.add = function (x, y) {
        return x + y;
    };
    MyClass.prototype.sub = function () {
        return this.a - this.b;
    };
    Object.defineProperty(MyClass.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return MyClass;
}());
var obj = new MyClass(10, 20);
console.log("Add = " + obj.add(400, 500));
console.log("Sub = " + obj.sub());
obj.X = 100;
console.log("x = " + obj.X);
