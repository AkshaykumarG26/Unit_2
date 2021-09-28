function infinityStones(one, two, three, four, five, six) {
    var outSum = (one) + (two*2) + (three*3) + (four*3) + (five*2) + (six*2)
    console.log(outSum)
}


function runProgram(input) {
    // Write code here
    input = input.trim().split(" ").map(Number)
    // console.log(input);
    var [one, two, three, four, five, six] = input
    infinityStones(one, two, three, four, five, six)

   
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