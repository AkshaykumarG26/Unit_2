function sumOfEvenNumbers(n, arr){
    var sum = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 == 0){
            sum += arr[i]
        }
    }
    console.log(sum)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var testCases = +input[0]
    // console.log(testCases)
    var lineOfn = 1;
    var lineOfArr = 2;
    for (var i = 0; i < testCases; i++){
        var n = +(input[lineOfn].trim())
        lineOfn = lineOfn + 2
        // console.log(n)
        var arr = input[lineOfArr].trim().split(" ").map(Number);
        lineOfArr += 2
        // console.log(arr);

        sumOfEvenNumbers(n, arr)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    3
    1 2 3
    5
    2 2 2 2 1`);
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