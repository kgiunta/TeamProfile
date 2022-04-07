const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// total random puesdo for constructors
// function userInputs(name, role, id, email, github, school)
// this.name = name;
// this.role = role;
// this.id = id;
// this.email = email;
// this.github = github;
// this.school = school;
// this.cardMaker = () =>{
// if
// }

// const employee = new userInputs()
// const manager= new userInputs(name,role,id,email,github,)
// const engineer= new userInputs(name,role,id,email,github,)
// const intern= new userInputs(name,role,id,email,github,school,)

inquirer
  .prompt([
    {
      type: "list",
      name: "role",
      message: "Please select the role you would like to fill out: ",
      choices: ["Manager", "Engineer", "Intern"],
    },

    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "idNum",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your phone number?",
      name: "phone",
    },
  ])
  .then((data) => {
    const filename = createCard(data);
    fs.appendFile("index.html", filename, (err) => {
      err ? console.log(err) : console.log("Success!");
    });
  });

function createCard(data) {
  return `
            <div class="card row" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.idNum}</li>
                <li class="list-group-item">Phone: ${data.phone}</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div>
        </body>
      </html>
      `;
}
