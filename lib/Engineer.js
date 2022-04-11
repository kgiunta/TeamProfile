const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.gitHub;
  }
}

module.exports = Engineer;

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//     {
//       type: "input",
//       message: "What is your ID number?",
//       name: "idNum",
//     },
//     {
//       type: "input",
//       message: "What is your email?",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "What is your Github?",
//       name: "github",
//     },
//   ])
//   // blank variable for each role, and iterate through to redner. and then have the function call itself..

//   .then((data) => {
//     const filename = createCard(data);
//     fs.appendFile("index.html", filename, (err) => {
//       err ? console.log(err) : console.log("Success!");
//     });
//   });

// // function createCard(data) {
// //   return `
// //             <div class="card row" style="width: 18rem">
// //               <div class="card-body">
// //                 <h5 class="card-title">${data.name}</h5>
// //                 <p class="card-text">
// //                   Some quick example text to build on the card title and make up the
// //                   bulk of the card's content.
// //                 </p>
// //               </div>
// //               <ul class="list-group list-group-flush">
// //                 <li class="list-group-item">ID: ${data.idNum}</li>
// //                 <li class="list-group-item">Phone: ${data.phone}</li>
// //                 <li class="list-group-item">Vestibulum at eros</li>
// //               </ul>
// //               <div class="card-body">
// //                 <a href="#" class="card-link">Card link</a>
// //                 <a href="#" class="card-link">Another link</a>
// //               </div>
// //             </div>
// //           </div>
// //         </body>
// //       </html>
// //       `;
// // }
// // module.exports = Engineer;
