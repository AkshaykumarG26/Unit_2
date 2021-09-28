//Enter code here
function pairLessThanK(n,k,arr){

    var sum = -1
    for (var i = 0; i < n; i++){
        for (var j = i; j < n; j++){
            if (arr[i] + arr[j] < k){
                // sum.push(arr[i]+arr[j])
                sum = arr[i]+arr[j]
            // break
        }
    }
}
if (sum === -1){
    // console.log(-1)
    return -1
}else{
    // console.log(Math.max(...sum))
    // return Math.max(...sum)
    return sum
}
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split("\n");
    var testCases = +input[0];
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var n = +input[line++]
        // linen += 3
        // console.log(n)
        var arr = input[line++].trim().split(" ").map(Number);
        // arrLine += 3
        // console.log(arr)
        var k = +input[line++]
        // linek += 3

       console.log(pairLessThanK(n,k,arr))
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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