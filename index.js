const employee = {
    name: "Diana Smith",
    streetAddress: "1st Floor Yaya Center Ngong Road",
}

function updateEmployeeWithKeyAndValue() {
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    delete newEmployee.name;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee
}
