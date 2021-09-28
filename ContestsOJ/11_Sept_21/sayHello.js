function sayHello(str) {
    console.log("Hello " + str);
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    sayHello(input)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`Prateek`);
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