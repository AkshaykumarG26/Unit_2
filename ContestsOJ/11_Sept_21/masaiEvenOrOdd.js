function masaiEvenOrOdd(num){
    if (num % 2 == 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var num = +(input)
    // console.log(input)
    masaiEvenOrOdd(num)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5`);
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