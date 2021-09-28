function printGrade(N) {
    if(N == 100){
        console.log("A")
    }else if (N >= 90){
        console.log("B")
    } else if (N >= 80){
        console.log("C")
    } else{
        console.log("F")
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var N = +(input)
    printGrade(N)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`80`);
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