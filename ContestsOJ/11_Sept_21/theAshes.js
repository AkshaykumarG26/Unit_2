function theAshes(Australia, England) {
    if (Australia > England){
        console.log("Australia")
    }else if (England > Australia){
        console.log("England")
    }else if (Australia == England){
        console.log("Tie")
    }
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split(' ').map(Number)
    var [Australia, England] = input
    theAshes(Australia, England)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`46 67`);
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