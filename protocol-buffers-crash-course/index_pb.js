// This is the protobuf version of index_json.js

const fs = require("fs")

// import from compiled file
const Schema = require("./generated/employees_pb");

//create a new instance of Employee
let jeff = new Schema.Employee();
jeff.setId(1001);
jeff.setName("Jeff");
jeff.setSalary(1001);

let frank = new Schema.Employee();
frank.setId(1002);
frank.setName("Frank");
frank.setSalary(9000);

let rick = new Schema.Employee();
rick.setId(1003);
rick.setName("Rick");
rick.setSalary(5000);

// Create array
let employees = new Schema.Employees();
// a 'repeated' element has an add<TYPE> function.
employees.addEmployee(jeff);
employees.addEmployee(frank);
employees.addEmployee(rick);

// Convert to binary, to send across the wire. 
const bytes = employees.serializeBinary();
console.log("binary: " + bytes)
fs.writeFileSync("data.bin", bytes)

// Convert from binary (theoretically received on the wire) to a new object
const employees2 = Schema.Employees.deserializeBinary(bytes);
let list = employees2.getEmployeeList();
console.log("Deserialized:")
for (employee of list) {
    console.log("-> " + employee.toString())
}