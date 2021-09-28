function rotateTheArrayReturnsBack (n, k, arr){
  var revArr = [];
  for (var i = n-1; i >= 0; i--){
    revArr.push(arr[i])
  }
  // console.log(revArr);
  var r = k % n;
  var outArr = [];
  for (var i = r-1; i >= 0; i--){
    outArr.push(revArr[i])
  }
  for (var i = n-1; i >= r; i--){
    outArr.push(revArr[i])
  }
  return outArr.join(" ")
}
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var testCases = +(input[0])
    // console.log(testCases);
    var lineOfnk = 1;
    var lineOfArr = 2;
    for (var i = 0; i < testCases; i++){
      var [n,k] = input[lineOfnk].trim().split(" ").map(Number);
      lineOfnk = lineOfnk + 2;
      // console.log(n,k)
      var arr = input[lineOfArr].trim().split(" ").map(Number);
      lineOfArr += 2;
      // console.log(arr)
      console.log(rotateTheArrayReturnsBack(n,k,arr))

    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3\n2 1\n1 2\n2 2\n1 2\n3 1\n1 2 3`);
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



// rotateTheArrayReturnsBack(5,7,[1,2,3,4,5])