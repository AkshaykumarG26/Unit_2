function commonIndexOfArray(n1, n2, arr1, arr2) {
    var first = 0;
    var second = 0;
    var result = [];
    while(first < n1 && second < n2){
      if (arr1[first] == arr2[second]){
        result.push(arr1[first]);
        first++
        second++
      }else if(arr1[first] > arr2[second]){
        second++
      }else{
        first++
      }
    }
    if(res.length == 0){
      return -1
  }
    console.log(result)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split("\n");
    var testCases = +input[0];
    var line = 1;
    var arrLine = line + 1;
    for (var i = 0; i < testCases; i++){
        var n1 = +input[line].trim();
        // console.log("n1 "+n1)
        line += 2
        var n2 = +input[line].trim()
        // console.log("n2 " + n2)
        line += 2
        var arr1 = input[arrLine].trim().split(" ").map(Number);
        // console.log("arr1 " + arr1)
        arrLine += 2;
        var arr2 = input[arrLine].trim().split(' ').map(Number);
        // console.log("arr2 " + arr2)
        arrLine+=2
        commonIndexOfArray(n1,n2, arr1, arr2)

    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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



  //Enter code here
function commonIndexOfArray(n1, n2, arr1, arr2) {
    
  var obj = {}
  var arr = []
  var flag = false
  for (var i = 0; i < n1; i++){
      for (var j = 0; j < n2; j++){
          if (arr1[i] == arr2[j]){
              // console.log(arr1[i])
              obj[arr1[i]] = arr1[i]
              //    flag = true
          }
      }
  }
  if (Object.keys(obj).length == 0){
      console.log(-1)
  }else{
      for (keys in obj){
          // console.log(keys)
          arr.push(keys)
      }
      console.log(arr.join(" "))
  }
}

function runProgram(input) {
  // Write code here
  // console.log(input)
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  var arrLine = line + 1;
  for (var i = 0; i < testCases; i++){
      var n1 = +input[line].trim();
      // console.log("n1 "+n1)
      line += 2
      var n2 = +input[line].trim()
      // console.log("n2 " + n2)
      line += 2
      var arr1 = input[arrLine].trim().split(" ").map(Number);
      // console.log("arr1 " + arr1)
      arrLine += 2;
      var arr2 = input[arrLine].trim().split(' ').map(Number);
      // console.log("arr2 " + arr2)
      arrLine+=2
      commonIndexOfArray(n1,n2, arr1, arr2)

  }
 
}
if (process.env.USERNAME === "akshra") {
  runProgram(`2
  6
  1 2 3 4 5 6
  3
  3 3 5
  4 
  1 2 3 4
  4 
  5 6 7 8`);
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



function commonIndexOfArray(n1, n2, arr1, arr2) {
  var first = 0;
  var second = 0;
  var res = [];
  while(first < n1 && second < n2){
      
    if (arr1[first] == arr2[second]){
        res.push(arr1[first]);
      first++
      second++
    }else if(arr1[first] > arr2[second]){
      second++
    }else{
      first++
    }
  }
  if(res.length == 0){
      return -1
  }
  return res.join(" ")
  
  
}

function runProgram(input) {
  // Write code here
  // console.log(input)
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++){
      var n1 = +input[line++]
      var arr1 = input[line++].trim().split(" ").map(Number)
      var n2 = +input[line++]
      var arr2 = input[line++].trim().split(" ").map(Number)
      
      console.log(commonIndexOfArray(n1,n2, arr1, arr2))

  }
 
}
if (process.env.USERNAME === "user") {
  runProgram(`2
  6
  1 2 3 4 5 6
  3
  3 3 5
  4 
  1 2 3 4
  4 
  5 6 7 8`);
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