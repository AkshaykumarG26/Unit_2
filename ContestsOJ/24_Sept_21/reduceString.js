function reduceString(str) {
    for(let i = 0; i < str.length; i++) { 
        if(str[i] === str[i+1]) {
          console.log(str[i])
          str.splice(i, 2);
          i = -1;
        }
      }
      if(str.length === 0) {
          console.log('Empty String');
        }
        console.log(str.join(''));
}


function runProgram(input) {
    // Write code here
    var str = input.trim().split("")
    reduceString(str)
    
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`aaabccddd`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }