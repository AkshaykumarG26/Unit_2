function rowSymmetric(n, arr){
    var low = 0;
    var high = n-1;
    while(low < high){
        for (var i = 0; i < n; i++){
            if (arr[low][i] != arr[high][i]){
                return false;
            }
        low++
            high--     
        }
       
    }
  return true
}
function columnSymmetric(n, arr){
    var low = 0;
    var high = n-1;
    while(low < high){
        for (var i = 0; i < n; i++){
            if (arr[i][low] != arr[i][high]){
                return false
            }
      low++
            high--      
        }
      
        
    }
  return true
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var testcase = +input[0];
    var line = 1;
   	 for (var i = 0; i < testcase; i++) {
        var n = Number(input[line++]);
        var arr = [];
        for (var j = 0; j < n; j++) {
            arr.push(input[line++].trim().split(""));
        }
        var column = columnSymmetric(n, arr);
        var row = rowSymmetric(n, arr);
        if (column == true && row == true) {
            console.log("Yes");
        }  else if (column == false && row == true) {
            console.log("No");
        }
        else if (column == true && row == false) {
            console.log("No");
        }
        
        else {
            console.log("NO");
        }
    }
}
if (process.env.USERNAME === "akshra") {
    runProgram(`3
    4
    ..
    ..
    ..
    ..
    3
    .*.
    .
    .*.
    3
    ..*
    **.
    ..*`);
}
  else {
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


