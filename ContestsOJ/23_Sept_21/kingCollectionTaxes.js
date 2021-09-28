function kingCollection(n, arr){

    var sortedArr = []
    var arr1 = arr.sort()
    var n = arr.length/2
    
    // console.log(arr)
    for (var i = arr1.length-1; i >= 0; i--){
      sortedArr.push(arr1[i])
    }
    // console.log(sortedArr)
    var sum = 0
    for (var i = 0; i < n; i++){
      sum += sortedArr[i]
    }
    console.log(sum)
}
    // kingCollection(2,[1,3,1,2])

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split('\n');
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number)
    kingCollection(n, arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    1 3 1 2`);
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