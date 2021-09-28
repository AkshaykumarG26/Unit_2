function sumOfFive(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    console.log(sum)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var arr = input.split(" ").map(Number)
    // console.log(arr)
    sumOfFive(arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1 2 3 4 5`);
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