const Mangager = require("../lib/manager");

test("Can create a new manager object", () => {
  const manager = new Mangager();
  expect(typeof manager).toBe("object");
});

test("Can set name in manager object", () => {
  const manager = new Mangager("Jimmy");
  expect(manager.name).toBe("Jimmy");
});

test("Can set id in manager object", () => {
  const manager = new Mangager("Jimmy", 123456);
  expect(manager.id).toBe(123456);
});

test("Can set email in manager object", () => {
  const manager = new Mangager("Jimmy", 123456, "jimmy@employer.com");
  expect(manager.email).toBe("jimmy@employer.com");
});

test("Can set office number in manager object", () => {
  const manager = new Mangager("Jimmy", 123456, "jimmy@employer.com", "29");
  expect(manager.officeNumber).toBe("29");
});

test("Can set office numer from getOfficeNumber() method", () => {
  const manager = new Mangager("Jimmy", 123456, "jimmy@employer.com", "29");
  expect(manager.getOfficeNumber()).toBe("29");
});

test("Can set role from getRole() method", () => {
  const manager = new Mangager(
    "Jimmy",
    123456,
    "jimmy@employer.com",
    "SMU",
    "Manager"
  );
  expect(manager.getRole()).toBe("Manager");
});
