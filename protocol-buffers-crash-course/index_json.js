const fs = require("fs");

const employees = []

employees.push({
    "name": "Jeff",
    "salary": 1000,
    "id": 1001
})

const frank = {
    "name": "Frank",
    "salary": 9000,
    "id": 1002
}

employees.push(frank);

employees.push({
    "name": "Rick",
    "salary": 5000,
    "id": 1003
})
console.log(employees)
fs.writeFileSync("data.json", JSON.stringify(employees));