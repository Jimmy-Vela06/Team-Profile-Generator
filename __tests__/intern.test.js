const Intern = require("../lib/intern");

test("Can create a new intern object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});

test("Can set name in intern object", () => {
  const intern = new Intern("Jimmy");
  expect(intern.name).toBe("Jimmy");
});

test("Can set id in intern object", () => {
  const intern = new Intern("Jimmy", 123456);
  expect(intern.id).toBe(123456);
});

test("Can set email in intern object", () => {
  const intern = new Intern("Jimmy", 123456, "jimmy@employer.com");
  expect(intern.email).toBe("jimmy@employer.com");
});

test("Can set school in intern object", () => {
  const intern = new Intern("Jimmy", 123456, "jimmy@employer.com", "SMU");
  expect(intern.school).toBe("SMU");
});

test("Can set school from getSchool() method", () => {
  const intern = new Intern("Jimmy", 123456, "jimmy@employer.com", "SMU");
  expect(intern.getSchool()).toBe("SMU");
});

test("Can set role from getRole() method", () => {
  const intern = new Intern(
    "Jimmy",
    123456,
    "jimmy@employer.com",
    "SMU",
    "Intern"
  );
  expect(intern.getRole()).toBe("Intern");
});
