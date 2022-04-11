const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

// inquirer.prompt([
//   {
//     type: "input",
//     name: "title",
//     message: "What is your title?",
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?",
//   },
//   {
//     type: "input",
//     message: "What is your ID number?",
//     name: "idNum",
//   },
//   {
//     type: "input",
//     message: "What school do you attend?",
//     name: "school",
//   },
// ]);
// //   .then((data) => {
// //     const filename = createCard(data);
// //     fs.appendFile("index.html", filename, (err) => {
// //       err ? console.log(err) : console.log("Success!");
// //     });
// //   });
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
// // module.exports = Intern;
