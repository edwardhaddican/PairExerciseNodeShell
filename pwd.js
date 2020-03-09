
const pwdFunction = process.stdin.on('data', (data) => {

    if(data.toString().trim() === "pwd"){
      const currentDirectory =`Current directory is ${process.cwd()}`
  
      process.stdout.write(currentDirectory)
      process.stdout.write('\nprompt > ');
    }
  
  })
  
  module.exports = pwdFunction