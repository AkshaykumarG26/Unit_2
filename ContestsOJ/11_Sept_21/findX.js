function findX(N) {
    console.log((N*3)+10)
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    var N = +(input)
    // console.log(N)
    findX(N)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3`);
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