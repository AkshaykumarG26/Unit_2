function multiplyBy50(N) {
    console.log(N*50)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var N = +(input)
    multiplyBy50(N)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2`);
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