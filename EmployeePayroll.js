// UC 12: Ability to create Employee Payroll Data with id, name and salary
{
    console.log("\n*** UC12 ***");
    class EmployeePayroll {
        //properties of class
        id;
        salary;
        //defining constructor of class using constructor keeyword
        constructor(id, name, salary) {
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
    empPayroll.id = 2;
    empPayroll.name = "Shubham";
    empPayroll.salary = 50000;
    console.log(empPayroll.toString());
}

// UC 13: Ability to extend Employee Payroll Data to store gender and start date

{
    console.log("\n*** UC13 ***");
    class EmployeePayroll
    {
        //properties of class
        id;
        salary;
        gender;
        startDate;
    
        //defining constructor of class using constructor keeyword
        constructor(...params)
        {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
    
        // getter and setter methods
        get id() { return this._id; }
        set id(id){ this._id = id; }
        get name() { return this._name; }
        set name(name) { this._name = name; }
        get salary() { return this._salary; }
        set salary(salary) { this._salary = salary; }
        
        //methid to return everything in string
        toString() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = this.startDate === undefined ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary + ", " +
            "Gender = " + this.gender + ", StartDate = " + empDate;
        }
    }
    
    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    // setting values to the properties of class
    empPayroll.id=2;
    empPayroll.name = "Shubham";
    console.log(empPayroll.toString());
    let newEmployeePayroll = new EmployeePayroll(1, "Ram", 40000, "M", new Date());
    console.log(newEmployeePayroll.toString());
}


/* UC 14: Ability to check the name starts with capital and has at least 3 characters
    - Use Regex Pattern
    - Use Try Catch in case of Error
*/
{
    console.log("\n*** UC14 ***");
    class EmployeePayroll
    {
        //properties of class
        id;
        salary;
        gender;
        startDate;
    
        //defining constructor of class using constructor keeyword
        constructor(...params)
        {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
    
        // getter and setter methods
        get id() { return this._id; }
        set id(id){ this._id = id; }

        get name() { return this._name; }
        set name(name) { 
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if (nameRegex.test(name))
                this._name = name;
            else throw 'Name is Incorrect!';
        }

        get salary() { return this._salary; }
        set salary(salary) { this._salary = salary; }
        
        //methid to return everything in string
        toString() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = !this.startDate ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary + ", " +
            "Gender = " + this.gender + ", StartDate = " + empDate;
        }
    }
    
    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    
    empPayroll.id=2;
    try {
        empPayroll.name = "shubham";
        console.log(empPayroll.toString());
    }
    catch (e) {
        console.error(e);
    }

    let newEmployeePayroll = new EmployeePayroll(1, "Ram", 40000, "M", new Date());
    console.log(newEmployeePayroll.toString());    
}


/* UC 15: Ability to check the employee id and salary are non zero positive
          number, the gender is M or F and date is not a future date
          - Use Regex Pattern
          - Use Try Catch in case of Error
*/
{
    console.log("\n*** UC15 ***");
    class EmployeePayroll
    {
        //properties of class
        id;
        salary;
        gender;
        startDate;
    
        //defining constructor of class using constructor keeyword
        constructor(...params)
        {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
    
        // getter and setter methods
        get id() { return this._id };
        set id(id) {
            //pattern for id for positive numbers
            let idRegex = RegExp('^[1-9]{1}[0-9]$');
            if (idRegex.test(id))
                this._id = id;
            else throw "Error! Id format is Incorrect";
        }

        get name() { return this._name; }
        set name(name) { 
            // pattern for name. Name starts with capital and has atleast 3 characters 
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if (nameRegex.test(name))
                this._name = name;
            else throw 'Error! Name is Incorrect!';
        }

        get salary() { return this._salary; }
        set salary(salary) {
            // pattern for salary for non zero positive numbers
            let salaryPattern = RegExp('^[1-9][0-9]*$');
            if (salaryPattern.test(salary))
                this._salary = salary;
            else
                throw "Error! Salary format is Incorrect";
        }
        
        get gender() { return this._gender; }
        set gender(gender) {
            // pattern for gender either M or F
            let genderPattern = RegExp('M|F');
            if (genderPattern.test(gender))
                this._gender = gender;
            else
                throw "Error! Gender format is Incorrect";
        }

        get startDate() { return this._startDate };
        set startDate(date) {
            // Given date should not exceed todays date
            let givenDate = Date(date); //mm-dd-YYYY
            let today = new Date();
            if (givenDate <= today)
                this._startDate = date;
            else
                throw "Error! Date is greater than current date";
        }
        //methid to return everything in string
        toString() {
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary + ", " +
            "Gender = " + this.gender + ", StartDate = " + this.startDate;
        }
    }
    
    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    //setting values to the properties of class using try catch
    try {
        empPayroll.id = 2;
        empPayroll.name = "Shubham";
        empPayroll.salary = 50000;
        empPayroll.gender = 'M';
        empPayroll.startDate = '07-12-2021';//MM-DD-YYYY
        console.log(empPayroll.toString());
    }
    catch (e) {
        console.error(e);
    }

    let newEmployeePayroll = new EmployeePayroll(1, "Ram", 40000, "M", new Date());
    console.log(newEmployeePayroll.toString());        
}