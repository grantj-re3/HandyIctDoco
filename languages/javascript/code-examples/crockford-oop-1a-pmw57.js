/*
 * https://gist.github.com/benpriebe/55b7e950b5e9d056b47e?permalink_comment_id=2229105#gistcomment-2229105
 * Title: Douglas Crockford - Create Object Recipe (2014)
 * Sample code below by pmw57 on Oct 14, 2017.
 */
/***** Class Person *****/
function makePerson(spec) {
    let {firstName, lastName} = spec;

    function getDisplayName() {
        return firstName + " " + lastName;
    }

    return Object.freeze({
        getDisplayName
    });
}

/***** Class Employee ('inherits' from Person) *****/
function makeEmployee(spec) {
    let {employeeId, hourlyRate} = spec;
    let {getDisplayName} = makePerson(spec);

    function calculatePay(hoursWorked) {
        return hourlyRate * hoursWorked;
    }

    return Object.freeze({
        getDisplayName,
        calculatePay
    });
}

/***** Main *****/
const ben = makeEmployee({
    firstName: "Ben",
    lastName: "Priebe",
    hourlyRate: 120,
    employeeId: 1
});

console.log(ben.getDisplayName());
console.log(ben.calculatePay(38));
