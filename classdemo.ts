class MyClass {
    // private a: number = 0;
    // private b: number = 0;
    // constructor(a: number, b:number){
    //     this.a = a;
    //     this.b = b;
    // }
    private x:number = 0;
    constructor(private a: number, private b: number){}
    add(x:number, y: number): number {
        return x+y;
    }
    sub(): number {
        return this.a - this.b;
    }
    set X(value:number){
        this.x = value;
    }
    get X(): number {
        return this.x;
    }
    
}
let obj = new MyClass(10,20);
console.log(`Add = ${obj.add(400,500)}`);
console.log(`Sub = ${obj.sub()  }`);
obj.X = 100;
console.log(`x = ${obj.X}`);


