function takeOutMaximum(n, k, arr) {
    var max = [];
    var sum = 0;
    for (var i = 0; i < k; i++){
        sum += arr[i]
        max.push(sum)
    }
    //  console.log(sum)
    //  console.log(max)
     for (var i = k; i < n; i++){
         sum -= arr[i-k];
        //  console.log(arr[i-k])
         sum += arr[i];

        //  console.log(sum)
        max.push(sum)
     }
    //  console.log(max)
     var maxValue = max[0];
     for (var i = 0; i < max.length; i++){
         if (maxValue < max[i]){
             maxValue = max[i]
         }
     }
     console.log(maxValue)
}


// takeOutMaximum(10, 3, [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9])

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    // console.log(input)
    var [n, k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(' ').map(Number);
    takeOutMaximum(n, k, arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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