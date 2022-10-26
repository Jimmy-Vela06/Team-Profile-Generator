// import employee constructor
const employee = require("./employee.js");

// engineer constructor extends employee constructor
class engineer extends employee {
  // engineer constructor
  constructor(name, id, email, github) {
    // calling 'emoloyee' constructor
    super(name, id, email);
    this.github = github;
  }
  // returning 'engineers' github
  getGithub() {
    return this.github;
  }
  // return overides 'emoployee' role to engineer
  getRole() {
    return "Engineer";
  }
}

// exports engineer js
module.exports = engineer;
