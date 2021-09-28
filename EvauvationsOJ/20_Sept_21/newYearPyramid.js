//Enter code here

function runProgram(input) {
  // Write code here
  // console.log(input)
  var num = +input
  var count = 0
  var a = 1;
  var b = 0;
  var c = 0;
  while(a < num){
      b += a;
      c += b;
      if (c <= num){
          count++
      }else {
          break;
      }
      a++
  }
  console.log(count)
 
}
if (process.env.USERNAME === "akshra") {
  runProgram(`25`);
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