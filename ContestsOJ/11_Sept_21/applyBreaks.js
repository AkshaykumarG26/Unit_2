function applyBreaks(distance, time) {
    var speed = distance/time;
    // console.log(speed)
    if (speed > 40){
        console.log("Apply Brake")
    }else{
        console.log("Keep Going")
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var arr = input.split(" ")
    var distance = arr[0];
    // console.log(distance)
    var time = arr[1]
    // console.log(time)
    applyBreaks(distance, time)
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`40 2`);
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