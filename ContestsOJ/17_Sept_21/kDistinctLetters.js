function kDistinctLetters(n,k,str){
    var obj = {};
    var unique = [];
    var count = 0;
    for (var i = 0; i < n; i++){
        obj[str[i]] = 1
    }
    // console.log(obj)
    for (var key in obj){
        unique.push(key)
    }
    // console.log(unique.join(""))
    var newStr = unique.join("");
    for (var i = 0; i < newStr.length; i++){
        for (var j = i+1; j <= newStr.length; j++){
            if (newStr.slice(i,j).length === k){
                count++
            }
        }
    }
    return count
}
// kDistinctLetters(4,2,'abcc')

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    var [n,k] = input[0].trim().split(" ").map(Number);
    // console.log(n,k)
    var str = input[1].trim();
    // console.log(str)
    console.log(kDistinctLetters(n,k,str))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4 2
    abcc`);
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