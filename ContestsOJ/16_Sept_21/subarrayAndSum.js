
function subarrayAndSum(n,k,arr){

  var sum = 0;
  var max = 0
  
  for (var i = 0; i <= k-1; i++){
    sum += arr[i]
  }
  if (max < sum){
    max = sum
  }
  for (var i = k; i < n; i++){
    sum += arr[i];
    sum -= arr[i-k];
    if (max < sum){
      max = sum;
    }
  }
  var count = 0
  if (max % k != 0){
    count++
  }
  console.log(count)
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var [n,k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    subarrayAndSum(n,k,arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5 3\n2 4 3 5 1`);
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




