const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the promises's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesn't accisentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the promise and send the error to the promises's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesn't accisentally execute the resolve() function as well
                return;
            }
        
            // if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
 }

 module.exports = { writeFile, copyFile };