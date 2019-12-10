class Employee {
    constructor(public Eno: number, public Ename: string){}
}
class EmployeeDAL {
    private emp: Employee;
    private emps: Array<Employee>;

    constructor(){
        this.emp = new Employee(0, '');
        this.emps = new Array<Employee>();
        this.loaddata();
    }
    private loaddata(){
        this.emps.push(new Employee(1,'A'));
        this.emps.push(new Employee(2,'B'));
        this.emps.push(new Employee(3,'C'));
    }
    getAll(): Array<Employee> {
        return this.emps;
    }
    save(e:Employee): Array<Employee> {
        this.emps.push(e);
        return this.emps;
    }
}

let dal = new EmployeeDAL();
dal.getAll().forEach((e,i) => {
    console.log(`Employee at ${i}th position is ${JSON.stringify(e)}`);
});
console.log();
let emp = new Employee(4, 'D');
dal.save(emp).forEach((e,i) => {
    console.log(`Employee at ${i}th position is ${JSON.stringify(e)}`);
});;
