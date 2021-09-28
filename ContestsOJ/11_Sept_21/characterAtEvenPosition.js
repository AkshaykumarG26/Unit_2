function characterAtEvenPosition(N, str) {
    for (var i = 0; i < N; i++){
        if (i % 2 == 0){
            console.log(str[i])
        }
    }
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var N = +(input[0]);
    var str = input[1]
    // console.log(str)
    characterAtEvenPosition(N, str)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`6\nankush`);
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