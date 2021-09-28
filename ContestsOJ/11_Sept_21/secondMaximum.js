function secondMaximum(a, b, c) {
  // write code here
  if (a < b && a > c){
      console.log(a);
  }else if (b < c && b > a){
      console.log(b)
  }else if(c < a && c > a){
      console.log(c)
  }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split(' ').map(Number)
    var a = input[0];
    var b = input[1];
    var c = input[2]
    secondMaximum(a,b,c)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3 5 7`);
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