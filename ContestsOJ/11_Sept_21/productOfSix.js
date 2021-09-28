function productOfSix(array) {
    var product = 1;
    for (var i = 0; i < array.length; i++){
        product = product * array[i]
    }
    console.log(product)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split(" ").map(Number)
    // console.log(input)
    productOfSix(input)

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1 2 3 4 5 6`);
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