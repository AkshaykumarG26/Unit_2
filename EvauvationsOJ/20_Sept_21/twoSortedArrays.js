function twoSortedArrays(n,arr1,arr2){
    var low = 0;
    var high = n-1;
    var count = 0;
    while((low <= n-1) && (high >= 0)){
        if (arr1[low] == arr2[high]){
            low++;
            high--
            count++
        }else if (arr1[low] < arr2[high]){
            low++
        }else{
            high--
        }
    }
    console.log(count)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var testcases = +input[0];
    var line = 1;
    for (var i = 0; i < testcases; i++){
        var n = +input[line++];
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);
        twoSortedArrays(n, arr1, arr2)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
