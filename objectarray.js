var Employee = /** @class */ (function () {
    function Employee(Eno, Ename) {
        this.Eno = Eno;
        this.Ename = Ename;
    }
    return Employee;
}());
var EmployeeDAL = /** @class */ (function () {
    function EmployeeDAL() {
        this.emp = new Employee(0, '');
        this.emps = new Array();
        this.loaddata();
    }
    EmployeeDAL.prototype.loaddata = function () {
        this.emps.push(new Employee(1, 'A'));
        this.emps.push(new Employee(2, 'B'));
        this.emps.push(new Employee(3, 'C'));
    };
    EmployeeDAL.prototype.getAll = function () {
        return this.emps;
    };
    EmployeeDAL.prototype.save = function (e) {
        this.emps.push(e);
        return this.emps;
    };
    return EmployeeDAL;
}());
var dal = new EmployeeDAL();
dal.getAll().forEach(function (e, i) {
    console.log("Employee at " + i + "th position is " + JSON.stringify(e));
});
console.log();
var emp = new Employee(4, 'D');
dal.save(emp).forEach(function (e, i) {
    console.log("Employee at " + i + "th position is " + JSON.stringify(e));
});
;
