function differenceOfK(n,k,arr) {
    var flag = false;
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            if (arr[i] - arr[j] == k){
                flag = true
                // count++
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
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var testCases = +input[0]
    var line = 1;
    var arrLine = line + 1;
    for (var i = 0; i < testCases; i++){
        var [n,k] = input[line].trim().split(" ").map(Number);
        line++
        var arr = input[arrLine].trim().split(" ").map(Number)
        arrLine++

        differenceOfK(n,k,arr)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5
    1 5
    3
    6 0
    -8 -7 5 6 6 9
    1 4
    -3
    2 6
    -2 1
    3 3
    -5 -3 0 `);
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