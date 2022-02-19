// allows the app.js file to access the fs module's functions through the fs assignment
const fs = require('fs');
const generatePage = require('./src/page-template.js');
// 2 is to make a new args aside from the original args of the file. Kind of like another branch from the main.
// slice a brand-new array based on process.argv(what's inputed after node app.js)
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// First argument is the file created, or the output file. The second argument is the data that's being written: The HTML string template. The third argument is the callback function that will handle any error as well as the success message.
fs.writeFile('./index.html', generatePage(name, github), err => {
    // If an error exist, an error message is displayed using the following statement:
    if (err) throw err;
    // logged if ran successfully
    console.log('Portfolio complete! Checkout index.html to see the output!');
})

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