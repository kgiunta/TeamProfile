const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const allEmployees = [];
const engineerArr = [];
const internArr = [];
const managerArr = [];

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
      let teamMember;
      switch (data.role) {
        case "Manager":
          teamMember = new Manager(
            data.name,
            data.idNum,
            data.email,
            data.number
          );
          managerArr.push(teamMember);
          break;
        case "Engineer":
          teamMember = new Engineer(
            data.name,
            data.idNum,
            data.email,
            data.github
          );
          engineerArr.push(teamMember);
          break;
        case "Intern":
          teamMember = new Intern(
            data.name,
            data.idNum,
            data.email,
            data.school
          );
          internArr.push(teamMember);
          break;
        default:
      }

      if (data.option === "Yes") {
        // console.log(allEmployees);
        return createCards();
      } else {
        const fileContent = createFileContent();
        fs.appendFile("index.html", fileContent, (err) => {
          err ? console.log(err) : console.log("Success!");
        });
      }
    });
  //   creates html string and returns it
  function createFileContent() {
    let html = "";
    managerArr.forEach((manager) => {
      html += `
            <div class="card row" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">
                  Manager
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email:<a href = "mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Phone:${manager.officeNumber}</li>
              </ul>
              <div class="card-body">
               
              </div>
            </div>
          </div>
       
     ;`;
    });

    internArr.forEach((intern) => {
      html += `
            <div class="card row" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">
                  Intern
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email:<a href = "mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School:${intern.school}</li>
              </ul>
              <div class="card-body">

              </div>
            </div>
          </div>

     ;`;
    });

    engineerArr.forEach((engineer) => {
      html += `<div class="card row" style="width: 18rem">
               <div class="card-body">
                 <h5 class="card-title">${engineer.name}</h5>
                 <p class="card-text">
                  Engineer
                 </p>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: ${engineer.id}</li>
                 <li class="list-group-item">Email:<a href = "mailto:${engineer.email}">${engineer.email}</a></li>
               </ul>
               <div class="card-body">
                 <a href="https://github.com/${engineer.gitHub}"target="_blank" class="card-link">Github</a>
                
               </div>
             </div>
           </div>

       `;
      console.log(engineer.gitHub);
    });
    return (
      html +
      `</body> 
    </html>
    `
    );
  }
}

createCards();
