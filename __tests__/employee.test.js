const Employee = require("../lib/employee");

test("Can create a new employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Can set name in employee object", () => {
  const employee = new Employee("Jimmy");
  expect(employee.name).toBe("Jimmy");
});

test("Can set id in employee object", () => {
  const employee = new Employee("Jimmy", 123456);
  expect(employee.id).toBe(123456);
});

test("Can set email in employee object", () => {
  const employee = new Employee("Jimmy", 123456, "jimmy@employer.com");
  expect(employee.email).toBe("jimmy@employer.com");
});

test("Can set name from getName() method", () => {
  const employee = new Employee("Jimmy", 123456, "jimmy@employer.com");
  expect(employee.getName()).toBe("Jimmy");
});

test("Can set name from getId() method", () => {
  const employee = new Employee("Jimmy", 123456, "jimmy@employer.com");
  expect(employee.getId()).toBe(123456);
});

test("Can set name from getEmail() method", () => {
  const employee = new Employee("Jimmy", 123456, "jimmy@employer.com");
  expect(employee.getEmail()).toBe("jimmy@employer.com");
});

test("Can set role from getRole() method", () => {
  const employee = new Employee(
    "Jimmy",
    123456,
    "jimmy@employer.com",
    "Employee"
  );
  expect(employee.getRole()).toBe("Employee");
});
