const Engineer = require("../lib/engineer");

test("Can create a new engineer object", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});

test("Can set name in engineer object", () => {
  const engineer = new Engineer("Jimmy");
  expect(engineer.name).toBe("Jimmy");
});

test("Can set id in engineer object", () => {
  const engineer = new Engineer("Jimmy", 123456);
  expect(engineer.id).toBe(123456);
});

test("Can set email in engineer object", () => {
  const engineer = new Engineer("Jimmy", 123456, "jimmy@employer.com");
  expect(engineer.email).toBe("jimmy@employer.com");
});

test("Can set github in engineer object", () => {
  const engineer = new Engineer(
    "Jimmy",
    123456,
    "jimmy@employer.com",
    "Jimmy-Vela06"
  );
  expect(engineer.github).toBe("Jimmy-Vela06");
});

test("Can set github from getGithub() method", () => {
  const engineer = new Engineer(
    "Jimmy",
    123456,
    "jimmy@employer.com",
    "Jimmy-Vela06"
  );
  expect(engineer.getGithub()).toBe("Jimmy-Vela06");
});

test("Can set role from getRole() method", () => {
  const engineer = new Engineer(
    "Jimmy",
    123456,
    "jimmy@employer.com",
    "Jimmy-Vela06",
    "Engineer"
  );
  expect(engineer.getRole()).toBe("Engineer");
});
