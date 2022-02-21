const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


const promptProject = portfolioData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
    
    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});
    




// allows the app.js file to access the fs module's functions through the fs assignment
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// // First argument is the file created, or the output file. The second argument is the data that's being written: The HTML string template. The third argument is the callback function that will handle any error as well as the success message.
// fs.writeFile('./index.html', pageHTML, err => {
//     // If an error exist, an error message is displayed using the following statement:
//     if (err) throw err;
//     // logged if ran successfully
//     console.log('Portfolio complete! Checkout index.html to see the output!');
// })




// const printProfileData = profileDataArr => {
//     // this...
//     for(let i = 0; i < profileDataArr.length; i += 1){
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }

// printProfileData(profileDataArgs);