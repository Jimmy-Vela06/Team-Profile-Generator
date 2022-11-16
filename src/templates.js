// Manager card
const generateManager = (manager) => {
  const { name, id, email, officeNumber } = manager;

  return `
    <div class="col-4 m-4">
        <div class="card h-100">
            <div class="card-header p-3" id="managerHeader">
                <h3>${name}</h3>
                <h4>Manager</h4>
                <i class="material-icons">person</i>
                <i class="material-icons">content_paste</i>
            </div>
            <div class="card-body m-2">
                <p class="id">ID: ${id}</p>
                <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="office">Office Number: ${officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// // Engineer card
const generateEngineer = (engineer) => {
  const { name, id, email, github } = engineer;

  return `
    <div class="col-4 m-4">
        <div class="card h-100">
            <div class="card-header p-3" id="engineerHeader">
                <h3>${name}</h3>
                <h4>Engineer</h4><i class="material-icons">engineering</i>
            </div>
            <div class="card-body m-2">
                <p class="id">ID: ${id}</p>
                <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="github">Github: <a href="https://github.com/${github}">${github}</a></p>
            </div>
        </div>
    </div>
    `;
};

// Intern card
const generateIntern = (intern) => {
  const { name, id, email, school } = intern;

  return `
    <div class="col-4 m-4">
        <div class="card h-100">
            <div class="card-header p-3" id="internHeader">
                <h3>${name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>
            <div class="card-body m-2">
                <p class="id">ID: ${id}</p>
                <p class="email">Email:<a href="mailto:${email}">${email}</a></p>
                <p class="school">School: ${school}</p>
            </div>
    </div>
</div>
    `;
};

module.exports = { generateManager, generateEngineer, generateIntern };
