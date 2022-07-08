// Write your solution in this file!
const employee = {
   name: "Nick",
   streetAddress: "Paonia",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdate = { ...employee };
    employeeUpdate[key] = value;
    return employeeUpdate;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}