

const pwd = require('./pwd')
const ls = require('./ls')

const fs = require('fs');

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const inputString = data.toString().trim().split(' ')
  const cmd = inputString[0]
  const args = inputString[1, inputString.length-1]

  process.stdout.write('You typed the command: ' + cmd);
  process.stdout.write('\nYour args are: ' + args);
  process.stdout.write('\nprompt > ');
});

pwd
ls