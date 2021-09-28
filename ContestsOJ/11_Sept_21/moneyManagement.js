function maneyManagement(N, array, salary) {
    var sumOut = 0;
    for (var i = 0; i < N; i++){
        sumOut = sumOut + array[i]
    }

    if (sumOut > salary){
        console.log("Debt");
    }else if (sumOut < salary){
        console.log("Save");
    }else if (sumOut == salary){
        console.log("Neutral")
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split('\n')
    var N = +(input[0])
    var array = input[1].split(' ').map(Number);
    var salary = +(input[2])
    maneyManagement(N, array, salary)   
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5\n1 2 3 4 5\n16`);
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