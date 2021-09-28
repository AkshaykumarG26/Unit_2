function bubbleSort(n, arr,arr1){
  var ar = []
    for (var i = 0; i < n; i++){
        var flag = false;
        for (var j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true
              }
              
              ar.push(j)
            }
    }
    console.log(ar)
    }
bubbleSort(5,[3,5,0,9,8],[3,5,0,9,8])


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var n = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number);

    // bubbleSort(n,arr,arr1)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5
    3 5 0 9 8`);
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
