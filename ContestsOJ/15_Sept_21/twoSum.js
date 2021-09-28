function twoSum(n, k, arr) {
    var left = 0;
    var right = n-1;
    while (left < right){
        var sum = 0
        sum = arr[left] + arr[right]
        if (sum == k){
            return ([left, right].join(' '))
        }else if (sum > k){
            right--
        }else{
            left++
        }
    }
    return ([-1, -1].join(" ")) 
}
// twoSum(2,100,[48,49])

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var testCases = +input[0];
    var lineOfnk = 1;
    var lineOfArr = 2;
    for (var i = 0; i <= testCases-1; i++){
        [n, k] = input[lineOfnk].trim().split(" ").map(Number);
        lineOfnk += 2
        // console.log(n,k)
        arr = input[lineOfArr].trim().split(" ").map(Number);
        lineOfArr += 2;
        // console.log(arr)
        console.log(twoSum(n, k, arr))

    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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