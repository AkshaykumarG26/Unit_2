function removeToSort(n, arr) {
    
    var emptyArr = [];
    var result = [];
    emptyArr[0] = arr[0];
    var count = 1;
    
    for (var i = 1; i < n; i++){
        // console.log(arr[i])
        if (emptyArr[count-1] <= arr[i]){
            emptyArr[count] = arr[i]
            count++
        }
    }
    for (var k = 0; k < count; k++){
        // console.log(emptyArr[k])
        result.push(emptyArr[k])
    }
    console.log(result).join(" ")
}
// console.log(typeof(result))

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    // console.log(input)
    removeToSort(n, arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`10
    1 2 4 3 5 7 8 6 9 10`);
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

