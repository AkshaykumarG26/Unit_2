function digitSumArray(n, arr) {
    
    var sumArr = [];
    for (var i = 0; i < n; i++){
        var sum = 0;
        for (var j = i; j < arr[i]; j++){
            // console.log(arr[j])
            j = arr[i].split('')
            for (var k = 0; k < j.length; k++){
                
                sum = sum + (+j[k])
            }
            sumArr.push(sum);
        }
        
    }
    console.log(sumArr.join(" "))
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    var testCases = +input[0];
    let lineOfnk = 1;
    let arrLine = 2;
    for (var i = 0; i < testCases; i++){
        var n = input[lineOfnk].trim().split(" ").map(Number);
        lineOfnk +=2 ;
        // console.log(n);
        var arr = input[arrLine].trim().split(" ");
        arrLine += 2;
        // console.log(arr)
        digitSumArray(n, arr)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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