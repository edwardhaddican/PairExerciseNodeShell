
const fs = require('fs');
// const bash = require('./bash')


 const catFunction = fs.readFile(fileName, (err, data) => {
  console.log("hello in cat function")
    if (err) throw err;
    console.log(data);
  });







module.exports = catFunction
