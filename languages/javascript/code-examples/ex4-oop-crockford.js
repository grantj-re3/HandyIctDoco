/* https://gist.github.com/benpriebe/55b7e950b5e9d056b47e?permalink_comment_id=2229105#gistcomment-2229105
 * Recipe documented by pmw57 on Oct 14, 2017 */
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
        function makeEmployee(spec) {
            const { name, employeeNum = getNextEmployeeNum() } = spec;
            let { role } = spec;

            /* Instance method: Override the default toString() */
            // ALT: const toString = function () { return `${name} (emp# ${employeeNum}) is a ${role}.` };
            const toString = () => `${name} (emp# ${employeeNum}) is a ${role}.`;

            return Object.freeze({
                get name() { return name },
                get employeeNum() { return employeeNum },
                get role() { return role },

                set role(newRole) { role = newRole },
                toString
            })
        }

        return Object.freeze({
            makeEmployee
        });
    })();

    /***** Class Leader *****/
    /* No class-level properties or methods so I don't need an IIFE. */
    function makeLeader(spec) {
        const emp = mod.makeEmployee(spec);       /* Similar to super() */

        let { subordinates } = spec;
        const subordinateNames = subordinates.map(emp => `${emp.name}(#${emp.employeeNum})`);
        const toString = () => `${emp} Leader of: ${subordinateNames.join(', ')}.`;

        return Object.freeze({
            employee: emp,      /* Favour object composition over class inheritance */
            leads: subordinates,
            toString
        });
    }

    /***** Main *****/
    const emily = mod.makeEmployee({ name: 'Emily', role: 'Payroll Officer' });
    const emerson = mod.makeEmployee({ name: 'Emerson', role: 'Payroll Officer' });
    const leanne = makeLeader({ 
        name: 'Leanne', 
        role: 'Payroll Team Leader', 
        subordinates: [emily, emerson]
    });

    console.log(`${emily}`);
    console.log(`${emerson}`);
    console.log(`${leanne}`);

    console.log("Promote Emerson and Leanne to new roles...");
    emerson.role = 'Senior Payroll Officer';
    /* Inheritance would be: leanne.role = ... Composition is: leanne.employee.role = ... 
     * I feel the line below looks a little messy, but makeLeader() looks very clean! */
    leanne.employee.role = 'Payroll Manager';

    console.log(`${emily}`);
    console.log(`${emerson}`);
    console.log(`${leanne}`);
})();
