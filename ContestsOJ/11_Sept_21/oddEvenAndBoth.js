function oddEvenAndBoth(array) {
    if (array[0] % 2 == 0 && array[1] % 2 == 0){
        console.log("Even")
    }else if (array[0] % 2 !== 0 && array[1] % 2 !== 0){
        console.log("Odd")
    }else{
        console.log("Even-Odd")
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var array = input.split(" ").map(Number)
    // console.log(array)
    oddEvenAndBoth(array)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3 6`);
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