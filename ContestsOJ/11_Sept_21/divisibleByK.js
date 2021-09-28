function divisibleByK(N, k) {
    for (var i = 1; i <= N; i++){
        if (i % k == 0){
            console.log(i)
        }
    }
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    var arr = input.split(" ").map(Number)
    // console.log(arr)
    var N = arr[0];
    // console.log(N)
    var k = arr[1];
    // console.log(k)
    divisibleByK(N, k)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`7 2`);
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