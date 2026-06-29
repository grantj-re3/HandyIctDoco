;(function () {
    'use strict';
    
    /* Module Pattern via IIFE contains class-level properties & methods within the IIFE. */
    let mod = (function () { 
        /* Class-level property */
        let employeeNumDispenser = 1000;

        /* Class-level method */
        function getNextEmployeeNum() {
            return ++employeeNumDispenser;
        }

        /***** Class Employee *****/
        function constructEmployee(name, role) {
            const employeeNum = getNextEmployeeNum();

            /* Instance method: Override the default toString() */
            // ALT: const toString = function () { return `${name} (emp# ${employeeNum}) is a ${role}.` };
            const toString = () => `${name} (emp# ${employeeNum}) is a ${role}.`;

            return {
                get name() { return name },
                get employeeNum() { return employeeNum },
                get role() { return role },

                set role(newRole) { role = newRole },
                toString
            }
        }

        return {
            constructEmployee
        };
    })();

    /***** Class Leader *****/
    /* No class-level properties or methods so I don't need an IIFE. */
    function constructLeader(name, role, ...subordinates) {
        const emp = mod.constructEmployee(name, role);         /* Similar to super() */
        const subordinateNames = subordinates.map(emp => `${emp.name}(#${emp.employeeNum})`);
        const toString = () => `${emp} Leader of: ${subordinateNames.join(', ')}.`;

        // Return-object A: Explicitly write each getter & setter.
        // return {
        //     get name() { return emp.name; },
        //     get employeeNum() { return emp.employeeNum; },
        //     get role() { return emp.role; },

        //     set role(value) { emp.role = value; },            
        //     leads: subordinates,
        //     toString
        // };

        // Return-object B: Tell leader to use emp's getters & setters.
        const leader = {
            leads: subordinates,
            toString
        };
        Object.defineProperties(leader, {
            name:           Object.getOwnPropertyDescriptor(emp, 'name'),
            employeeNum:    Object.getOwnPropertyDescriptor(emp, 'employeeNum'),
            role:           Object.getOwnPropertyDescriptor(emp, 'role')
        });
        return leader;
    }

    /***** Main *****/
    const emily = mod.constructEmployee('Emily', 'Payroll Officer');
    const emerson = mod.constructEmployee('Emerson', 'Payroll Officer');
    const leanne = constructLeader('Leanne', 'Payroll Team Leader', emily, emerson);

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
