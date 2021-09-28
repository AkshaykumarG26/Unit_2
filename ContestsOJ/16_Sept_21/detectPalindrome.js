function detectPalindrome(inp){
    var left = 0;
    var right = inp.length-1;
    var flag = true
    while(left < right){
        if (inp[left] !== inp[right]){
            flag = false
        }
        left++
        right-- 
    }
    if (flag){
        console.log("Yes")
    }else{
        console.log("No")
    }
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    detectPalindrome(input)
   
  }
  if (process.env.USERNAME === "username") {
    runProgram(`1221`);
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


