
const fs = require('fs');
// const bash = require('./bash')

// let fileName =



 function catFunction (fileName){

  console.log("consolelog of file name", fileName)

  fs.readFile(fileName, 'utf8', (err, data) => {
    console.log("hello in cat function")
      if (err) throw err;
      console.log(data);
    });

 }









module.exports = catFunction
