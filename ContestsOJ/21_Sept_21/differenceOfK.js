function differenceOfK(n, k, arr){
    var flag = false
    for (var i = 0; i < n; i++){
        for (var j = i; j <= n; j++){
            if(Math.abs(arr[i] - arr[j]) == k){
                flag = true
            }
        }
    }
    if(flag){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0]
  var line = 1
  for (var i = 0; i < testCases; i++){
      var [n, k] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
    //   console.log(n, k, arr)
      differenceOfK(n,k,arr)
  }
}
if (process.env.USERNAME === "akshra") {
  runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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
    process.exit(0);
  });
}
