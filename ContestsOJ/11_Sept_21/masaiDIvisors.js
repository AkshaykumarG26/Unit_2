function masaiDivisors(left, right, k) {
    var numbers = [];
    for (var i = left; i <= right; i++){
        numbers.push(i)
    }

    var divisibleNumbers = [];
    var count = 0
    for (var i = 0; i < numbers.length; i++){
        if (numbers[i] % k == 0){
            count++
        }
    }
    console.log(count)
}



function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split(" ").map(Number)
    var [left, right, k] = input
    masaiDivisors(left, right, k)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1 10 3`);
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
