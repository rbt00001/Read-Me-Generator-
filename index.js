// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: "input",
            message: "Please describe this project?",
            name: "description",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "input",
            message: "Would you like to include a Table of Contents?",
            name: "contents",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "input",
            message: "How would you like to run the installation?",
            name: "installation",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "input",
            message: "How does this app work?",
            name: "usage",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "list",
            message: "what license was used?",
            name: "license",
            choices: ["GNU","MIT", "BSD2", "BSD3", "Boost Software", "Eclipse", "GNU", "N/A",],
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "input",
            message: "Who were the Contributors?",
            name: "contributors",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "input",
            message: "GitHub Username",
            name: "GitU",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },
        {
            type: "input",
            message: "Email Address",
            name: "Email",
            validate: (value)=> { 
                if(value) {
                return true 
            } else {
                return "Please enter a value to continue"
                }
            }
        },

    ]
) .then(({

    title,
    description,
    contents,
    installation,
    usage,
    license,
    contributors,
    GitU,
    Email

    })  => {
    const template =

    `# ${title}

    *[installation](#installation)
    *[usage](#usage)
    * [contributors](#contributors)
    * [license](#license)
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contributor(s)
    ${contributors}
    ##Description
    ${description}
    ##License
    ${license}
    
    #Contact Information
    *GitHub :${GitU}
    *Email : ${Email}
    
    `
    fs.writeFileSync(`OUTPUTREADME.md`, template, (err)=>{
    if(err){
        console.log(err)
    }
    
})
console.log("Yore ReadMe has been created",template);
})

