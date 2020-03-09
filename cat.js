
const fs = require('fs');
// const bash = require('./bash')

// let fileName =



 function catFunction (fileName){

  fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });

 }

module.exports = catFunction
