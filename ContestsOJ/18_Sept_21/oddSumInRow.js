function oddSumInRow(r,c,arr){
    for (var i = 0; i < r; i++){
        var sum = 0;
        for (var j = 0; j < c; j++){
            // console.log(arr[i][j])
            if (arr[i][j] % 2 !== 0){
                sum += arr[i][j]
            }
        }
        console.log(sum)
    }
}

// oddSumInRow(3,3,[[1,2,3],[4,5,6],[7,8,9]])

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    console.log(input);
    var [r,c] = input[0].trim().split(" ").map(Number)
    console.log(r,c)
    
    
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3 3\n1 2 3\n4 5 6\n7 8 9`);
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