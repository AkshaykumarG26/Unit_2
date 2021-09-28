function sumOfOddNumbersII(n, arr){

    var sum = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 == 1){
            sum += arr[i]
        }
    }
    // console.log(sum)
    if (sum % 2 == 0){
        console.log("It is Even")
    }else{
        console.log("It is Odd")
    }
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    // console.log(input)
    // console.log(testCases)
    var lineOfn = 1;
    var arrline = 2;
    for (var i = 0; i < testCases; i++){
        var n = +(input[lineOfn].trim())
        lineOfn = lineOfn + 2
        // console.log(n)
        var arr = input[arrline].trim().split(" ").map(Number)
        arrline += 2;
        // console.log("arr - " + arr)
        
        sumOfOddNumbersII(n, arr)
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