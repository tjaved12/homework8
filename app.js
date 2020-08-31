const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function getData(){
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
//ask for employee Id
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
   


    //asks project description
    {
        type: "checkbox",
        name: "role",
        message: "What is your role:",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },

])
.then(function (data) {
        if (data.role == "Manager") {
            inquirer.prompt([ {
                type: "input",
                name: "ph",
                message: "What is your Office Phone number?",
                }
    ]);
}
        else if(data.role == "Engineer") {
            inquirer.prompt([{
            type: "input",
            name: "git",
            message: "What is your gitHub User ID?",
        }
    ]);
}
        else {
            inquirer.prompt([{
            type: "input",
            name: "school",
            message: "which School you are going?",
        }
     
    ]);  
}
})
}

 getData()
 
//render(data)
    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// You can use the variable `outputPath`
// above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.