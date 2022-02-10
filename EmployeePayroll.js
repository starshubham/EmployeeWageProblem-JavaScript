class EmployeePayroll
{
    //properties of class
    id;
    salary;
    //defining constructor of class using constructor keeyword
    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter methods
    get name() { return this._name; }
    set name(name) { 
        console.log("Setting: " + name);  // To see the execution process
        this._name = name; 
    }
    
    //methid to return everything in string
    toString() {
        return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary;
    }
}

// Object for class using parameterized conbstructor
let empPayroll = new EmployeePayroll(1, "Mark", 30000);
console.log(empPayroll.toString());
// setting values to the properties of class
empPayroll.id=2;
empPayroll.name = "Shubham";
empPayroll.salary = 50000;
console.log(empPayroll.toString());