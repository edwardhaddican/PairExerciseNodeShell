

const pwd = require('./pwd')
const ls = require('./ls')
const cat = require("./cat")
const fs = require('fs');




process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const inputString = data.toString().trim().split(' ')
  const cmd = inputString[0]
  const args = inputString.slice(1)

  console.log("args 0", args[0])

  if(cmd === "cat"){
    console.log("args 0 in if statement", args[0])
    cat("./" + args[0])
  }

  process.stdout.write('You typed the command: ' + cmd);
  process.stdout.write('\nYour args are: ' + args);
  process.stdout.write('\nprompt > ');
});



pwd
ls
