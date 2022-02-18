// 2 is to make a new args aside from the original args of the file. Kin of like another branch from the main.
// slice a brand-new array based on process.argv(what's inputed after node app.js)
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // this...
    for(let i = 0; i < profileDataArr.length; i += 1){
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDataArgs);