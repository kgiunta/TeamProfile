const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let allEmployees = [];

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

// put prompt into a function to call back to run through questions again call at bottom
function createCards() {
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
        message: "Please enter office number",
        name: "number",
        when: (response) => {
          if (response.role === "Manager") return true;
        },
      },
      {
        type: "input",
        message: "Please enter your GitHub",
        name: "github",
        when: (response) => {
          if (response.role === "Engineer") return true;
        },
      },
      {
        type: "input",
        message: "What school do you attend?",
        name: "school",
        when: (response) => {
          if (response.role === "Intern") return true;
        },
      },
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "option",
        choices: ["Yes", "No"],
      },
    ])

    .then((data) => {
      if (data.option === "Yes") {
        allEmployees.push(data);
        return createCards();
      } else {
        const filename = createCard(data);
        fs.appendFile("index.html", filename, (err) => {
          err ? console.log(err) : console.log("Success!");
        });
      }
    });
  // push data to buildTeam
  function createCard(data) {
    if ((data.role = "Manager")) {
      return `
            <div class="card row" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">
                  ${data.role}
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.idNum}</li>
                <li class="list-group-item">Email: <a href ="mailto:${data.email}></a></li>
                <li class="list-group-item">Phone:${data.number}</li>
              </ul>
              <div class="card-body">
               
              </div>
            </div>
          </div>
       
     ;`;
    }

    if ((data.role = "Engineer")) {
      return `<div class="card row" style="width: 18rem">
               <div class="card-body">
                 <h5 class="card-title">${data.name}</h5>
                 <p class="card-text">
                  ${data.role}
                 </p>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: ${data.idNum}</li>
                 <li class="list-group-item">Phone: ${data.email}</li>
               </ul>
               <div class="card-body">
                 <a href="https://github.com/${data.github}"target=""_blank"> class="card-link">Github</a>

               </div>
             </div>
           </div>

       `;
    }
    if ((data.role = "Intern")) {
      return `
               <div class="card row" style="width: 18rem">
                 <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p ${data.role}
                     </p>
                   </div>
                   <ul class="list-group list-group-flush">
                     <li class="list-group-item">ID: ${data.idNum}</li>
                     <li class="list-group-item">Phone: ${data.email}</li>
                     <li class="list-group-item">School: ${data.school}</li>
                   </ul>
                   <div class="card-body">
                   </div>
                 </div>
               </div>
    
           `;
    }
  }
}
createCards();
