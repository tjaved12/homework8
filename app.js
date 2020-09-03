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
        //asks ID of Team member
        type: "input",
        name: "id",
        message: "What is your Employee ID?"
    },
//ask for email Id in correct format
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
   
   //asks office Number for the Manager
    
   {
    type: "input",
    name: "officeNumber",
    message: "What is your office phone number",
    
},
//Ask if more team members need to be entered
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
    //if else depending on role
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
//function to push in data to array
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
        //asks id of Team member
        type: "input",
        name: "id",
        message: "What is your Employee ID?"
    },
//ask for employee email Id
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
   
   //asks git UserID for the team member
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
}
engineerArray(data)
//function to push in data to array
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
   
   //asks schoolof the team member
    
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
//function to push in data to array
function internArray(data){
const intern = new Intern(data.name,data.id, data.email, data.school)             
employeeArray.push(intern)
rendermyEmployees()
   
}
};
//write information into html file
function rendermyEmployees() {
 fs.writeFileSync(outputPath, render(employeeArray),
 function (err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");

});
}

 getManager()


