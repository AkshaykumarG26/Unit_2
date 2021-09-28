function productOfEvenIndexes(size,array) {
    var product = 1
    for (var i = 0; i < size; i++){
        if (i % 2 == 0){
            product = product * array[i]
        }
    }
    console.log(product)
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    var arr = input.split("\n")
    // console.log(arr)
    var size = +(arr[0])
    // console.log(size)
    var array = arr[1].trim().split(",").map(Number)
    // console.log(array)
    productOfEvenIndexes(size,array)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4\n1,2,3,4`);
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