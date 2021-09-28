//Enter code here
function smallerNeighbourElement(n, arr) {
    
    var count = 1
    var result = [-1]
    
    while (count < n){
        for (var j = count-1; j >= 0; j--){
            if (arr[j] < arr[count]){
                //console.log(arr[j]);
                result.push(arr[j])
                break;
            }
        }
        if (j == -1){
            // console.log(-1)
            result.push(-1)
        }
        count++
    }
    console.log(result.join(" "));
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split("\n")
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number)
    smallerNeighbourElement(n,arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(``);
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