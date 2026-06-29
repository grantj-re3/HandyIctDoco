;(function () {
    'use strict';
    
    /***** Class Employee *****/
    class Employee {
        /* Constructor */
        constructor(name, role) {
            this.name = name;
            this.role = role;
            this.employeeNum = Employee.getNextEmployeeNum();
        }

        /* Instance method */
        toString() { /* Override the default toString() */
            return `${this.name} (emp# ${this.employeeNum}) is a ${this.role}.`;
        }

        /* Class-level property */
        static employeeNumDispenser = 1000;

        /* Class-level method */
        static getNextEmployeeNum() {
            return ++Employee.employeeNumDispenser;
        }
    }

    /***** Class Leader *****/
    class Leader extends Employee {
        /* Constructor */
        constructor(name, role, ...subordinates) {
            super(name, role);                  /* Call Employee's constructor */
            this.leads = subordinates;          /* Array of Employee-objects led by this leader */
        }

        /* Instance method */
        toString() { /* Override the parent's toString() */
            const subordinateNames = this.leads.map(emp => `${emp.name}(#${emp.employeeNum})`);
            const parentToString = super.toString(); /* Call Employee's toString() */
            return `${parentToString} Leader of: ${subordinateNames.join(', ')}.`;
        }
    }

    /***** Main *****/
    const emily = new Employee('Emily', 'Payroll Officer');
    const emerson = new Employee('Emerson', 'Payroll Officer');
    const leanne = new Leader('Leanne', 'Payroll Team Leader', emily, emerson);

    console.log(`${emily}`);
    console.log(`${emerson}`);
    console.log(`${leanne}`);

    console.log("Promote Emerson and Leanne to new roles...");
    emerson.role = 'Senior Payroll Officer';
    leanne.role = 'Payroll Manager';

    console.log(`${emily}`);
    console.log(`${emerson}`);
    console.log(`${leanne}`);
})();
