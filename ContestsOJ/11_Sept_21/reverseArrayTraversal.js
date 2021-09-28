function reverseArrayTraversal(size, arr) {
    var arrayOut = []
    for (var i = size-1; i >= 0; i--){
        arrayOut.push(arr[i])
    }
    console.log(arrayOut.join(" "))
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split("\n")
    // console.log(input)
    var size = +(input[0])
    // console.log(size)
    var arr = input[1].split(" ").map(Number)
    // console.log(arr)
    reverseArrayTraversal(size, arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5\n1 2 3 4 5`);
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