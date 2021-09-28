function findSumOfMultiples(X, K, Y) {
    var array = [];
    for (var i = 1; i <= K; i++){
      array.push(X*i)
    }
    // console.log(array)

    var sum = 0;
    for (var i = 0; i < array.length; i++){
      if (array[i] % Y == 0){
        sum = sum + array[i]
      }
    }
    console.log(sum)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var arr = input.split(" ").map(Number);
    var [X, K, Y] = arr;
    findSumOfMultiples(X, K, Y)

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3 10 5`);
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