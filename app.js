const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

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