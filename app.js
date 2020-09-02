const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray =[]

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function getManager(){
    inquirer.prompt([{
        //asks Name of Team member
        type: "input",
        name: "name",
        message: "What is your Name?"
    },
    {
        //asks Name of Team member
        type: "input",
        name: "id",
        message: "What is your Employee ID?"
    },
//ask for employee emial Id
 {
        type: "input",
        name: "email",
        message: "What is your email ID?",
        default: () => {},
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
             
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
      },
   
   //asks role of the team member
    
   {
    type: "input",
    name: "officeNumber",
    message: "What is your office phone number",
    
},
{
    type: "input",
    name: "team",
    message: "Do you want to enter more team members? Y/N",
    
},
])
.then(function (data) {
if(data.team=="Y"){
    inquirer.prompt([{
        //asks role of Team member
        type: "checkbox",
        name: "role",
        message: "What is the role of the team member?",
        choices:[
            "Intern",
            "Engineer",
        ]
    },
]).then(function (data) {
if(data.role =="Intern"){
    getIntern()
}

else{
    getEngineer()
}
})

}
managerArray(data)

});
function managerArray(data){
const manager = new Manager(data.name,data.id, data.email, data.officeNumber)             

employeeArray.push(manager)
rendermyEmployees()
}


function getEngineer(){
    inquirer.prompt([{
        //asks Name of Team member
        type: "input",
        name: "name",
        message: "What is your Name?"
    },
    {
        //asks Name of Team member
        type: "input",
        name: "id",
        message: "What is your Employee ID?"
    },
//ask for employee emial Id
 {
        type: "input",
        name: "email",
        message: "What is your email ID?",
        default: () => {},
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
             
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
      },
   
   //asks role of the team member
   {
    type: "input",
    name: "git",
    message: "What is your gitHub User ID?",
},
{
    type: "input",
    name: "team",
    message: "Do you want to enter more team members? Y/N",
    
},
])

.then(function (data) {
if(data.team=="Y"){
    inquirer.prompt([{
        //asks role of Team member
        type: "checkbox",
        name: "role",
        message: "What is the role of the team member?",
        choices:[
            "Intern",
            "Engineer"
        ]
    },
]).then(function(data){

if(data.role =="Intern"){
    getIntern()
}

else if (data.role =="Engineer"){
    getEngineer()
}
}) 
engineerArray(data)
}
function engineerArray(data){
const engineer = new Engineer(data.name,data.id, data.email, data.git)             
employeeArray.push(engineer)
rendermyEmployees()
}
})
}

function getIntern(){
    inquirer.prompt([{
        //asks Name of Team member
        type: "input",
        name: "name",
        message: "What is your Name?"
    },
    {
        //asks Name of Team member
        type: "input",
        name: "id",
        message: "What is your Employee ID?"
    },
//ask for employee emial Id
 {
        type: "input",
        name: "email",
        message: "What is your email ID?",
        default: () => {},
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
             
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
      },
   
   //asks role of the team member
    
   {
    type: "input",
    name: "school",
    message: "Which School you go to?",
    
},
{
    type: "input",
    name: "team",
    message: "Do you want to enter more team members? Y/N",
    
},
]).then(function (data) {
if(data.team=="Y"){
    inquirer.prompt([{
        //asks role of Team member
        type: "checkbox",
        name: "role",
        message: "What is the role of the team member?",
        choices:[
            "Intern",
            "Engineer"
        ]
    },
]).then(function(data){
if(data.role =="Intern"){
    getIntern()
}

else{
    getEngineer()
}
})}
internArray(data)

})}
function internArray(data){
const intern = new Intern(data.name,data.id, data.email, data.school)             
employeeArray.push(intern)
rendermyEmployees()
   
}
};

function rendermyEmployees() {
 fs.writeFileSync("test.html", render(employeeArray),
 function (err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");

});
}

 getManager()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
