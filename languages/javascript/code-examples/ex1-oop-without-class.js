//javascript:
;(function () {
    'use strict';

    /***** Class Employee *****/
    /* Similar to: class constructor */
    function Employee(name, role) {
        this.name = name;
        this.role = role;
        this.employeeNum = Employee.getNextEmployeeNum();
    };

    /* Similar to: instance method */
    Employee.prototype.toString = function () { /* Override the default toString() */
        return `${this.name} (emp# ${this.employeeNum}) is a ${this.role}!`;
    };

    /* Similar to: class-level (static) properties */
    Employee.employeeNumDispenser = 1000;

    /* Similar to: class-level (static) method */
    Employee.getNextEmployeeNum = function () {
        return ++Employee.employeeNumDispenser;
    };

    /***** Class Leader *****/
    /* Similar to: class constructor */
    function Leader(name, role, ...subordinates) {
        Employee.call(this, name, role);    /* Call Employee's constructor */
        this.leads = subordinates;          /* Array of Employee-objects led by this leader */
    };

    /* Make Leader a sub-class of Employee... */
    Leader.prototype = Object.create(Employee.prototype);
    Leader.prototype.constructor = Leader;  /* ...but it has a different constructor. */

    /* Similar to: instance method */
    Leader.prototype.toString = function () { /* Override the parent's toString() */
        /* parentMethod = Employee.prototype.toString; */  /* Same as statement below */
        const parentMethod = Object.getPrototypeOf(Leader.prototype).toString;
        const subordinateNames = this.leads.map(emp => `${emp.name}(#${emp.employeeNum})`);
        return `${parentMethod.call(this)} Leader of: ${subordinateNames.join(', ')}`;
    };

    /***** Main *****/
    const emily = new Employee('Emily', 'Payroll Officer');
    const emerson = new Employee('Emerson', 'Junior Payroll Officer');
    const leanne = new Leader('Leanne', 'Payroll Manager', emily, emerson);
    console.log(`${emily}`);
    console.log(`${emerson}`);
    console.log(`${leanne}`);

})();
