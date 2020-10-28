# This file is the python version of index_pb.js

import generated.employees_pb2 as Schema

# create a new instance of Employee
jeff = Schema.Employee()
jeff.id = 1001
jeff.name = "Jeff"
jeff.salary = 1001

frank = Schema.Employee()
frank.id = 1002
frank.name = "Frank"
frank.salary = 9000

rick = Schema.Employee()
rick.id = 1003
rick.name = "Rick"
rick.salary = 5000

# Create array
employees = Schema.Employees()
employees.employee.append(jeff)  # would create a copy of `jeff`, and append
employees.employee.append(frank)
employees.employee.append(rick)

# To avoid ending up creating a copy, we can do:

tristan = employees.employee.add()
tristan.id = 1004
tristan.name = "Tristan"
tristan.salary = 7000

print(employees)
byte_arr = employees.SerializeToString()
print(byte_arr)
with open("./data.bin", "wb") as fd:
    fd.write(byte_arr)

# Convert from binary (theoretically received on the wire) to a new object
received_employees = Schema.Employees()
received_employees.ParseFromString(byte_arr)
for employee in received_employees.employee:
    print(employee, end="")
