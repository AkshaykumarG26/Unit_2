function evenArray(N, array) {
    for(var i = 0; i < N; i++){
        if (array[i] % 2 == 0){
            console.log(array[i])
        }
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split('\n');
    var N = +(input[0]);
    // console.log(N)
    var array = input[1].split(" ").map(Number);
    // console.log(array)

    evenArray(N, array)
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