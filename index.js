const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type:"input",
    name:"username",
    mesage:"Enter your GitHub username"
  },
  {
    type:"input",
    name:"badge",
    message:"What badge would you like?" //license-MIT-23373737
  },
  {
    type:"input",
    name:"title",
    message:"What is the project title?"
  },
  {
    type:"input",
    name:"description",
    message:"Description:"
  },
  {
    type:"input",
    name:"installation",
    message:"What needs to be installed?"
  },
  {
    type:"input",
    name:"usage",
    message:"Who can use it?"
  },
  {
    type:"input",
    name:"license",
    message:"License type?"
  },
  {
    type:"input",
    name:"contributor",
    message:"Project contributor(s)"
  },
  {
    type:"input",
    name:"tests",
    message:"Tests used"
  },
  {
    type:"input",
    name:"usage",
    message:"Intended usage"
  },
  {
    type:"input",
    name:"avatar",
    message:"GitHub avatar?" //avatars0.githubusercontent.com/u/56770936?s=460&v=4
  
  },
]).then((response)=>{
    const template=`
    # Good README Generator

    [![GitHub license]()](https://github.com/${response.username})

    Badge: https://img.shields.io/badge/${response.badge}
    ​
    ## Project Title
    ​
    ${response.title}

    # Description

    ${response.description}
    ​
    ## Table of Contents 
    ​
    * [Installation]
    ${response.installation}
    ​
    * [Usage]
    ${response.usage}
    ​
    * [License]
    ${response.license}
    ​
    * [Contributing]
    ${response.contributor}
    ​
    * [Tests]
    ${response.tests}   
    ​
    * [Questions]​
        ​
    ## Usage   ​
    ${response.usage}  ​
    ​
    ## Questions
    ​
    <img src="https://${response.avatar}" alt="avatar" style="border-radius: 16px" width="30" />
    ​
    If you have any questions about the repo, open an issue or contact [Jose](https://api.github.com/users/${response.username}) directly at null.`;
        fs.writeFile("Read_Me.md",template,(error)=>{
            if (error) {
            console.log("there is an error!");
            } else {
            console.log("ReadMe file generated");
            }
        });
    })

//const axios = require("axios");

// .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       const email = res.data.map(function(email) {
//         return repo.email;
//       });

//       const profileImage = res.data.map(function(profileImage) {
//         return repo.profileImage;

//       });   
    
//     });
//   });
  