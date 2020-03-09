process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});


process.stdin.on('data', (data) => {

  if(data.toString().trim() === "pwd"){
    const currentDirectory =`Current directory is ${process.cwd()}`

    console.log(currentDirectory)
  }

})
