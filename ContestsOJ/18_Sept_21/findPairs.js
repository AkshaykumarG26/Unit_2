function findPairs(n,m,arr){

    var count = 0;
    for (var i = 0; i < n; i++){
        for (var j = i; j < n; j++){
            if (arr[i] * arr[j] == m){
                count++
            }
        }
    }
    console.log(count)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    var testCases = +input[0]
    var lineOfnm = 1;
    var lineOfArr = 2;

    for (var i = 0; i < testCases; i++){
        var [n,m] = input[lineOfnm].trim().split(" ").map(Number);
        lineOfnm += 2;
        // console.log('n - ' + n)
        // console.log('m - ' + m)
        var arr = input[lineOfArr].trim().split(" ").map(Number);
        lineOfArr += 2
        // console.log(arr)
        findPairs(n,m,arr)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    3 0
    1 3 2
    5 4
    3 2 2 1 5`);
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