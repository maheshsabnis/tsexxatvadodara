class DataClass {
    add(...x:number[]) : number{
         let sum: number = 0;
         if(x.length > 0){
            x.forEach((n,i)=>{
                sum+=n;
            });
         }
         return sum;
    }   
}

let obj1 = new DataClass();
console.log(`2 Parameters ${obj1.add(2,3)}`);
console.log(`3 Parameters ${obj1.add(2,3,4)}`);
console.log(`4 Parameters ${obj1.add(2,3,4,5)}`);
