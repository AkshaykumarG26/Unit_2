function runProgram(input) {
    // Write code here
    input = input.split("\n");
    console.log(input);
    var arrSize = input[0].split(" ").map(Number);
    console.log(arrSize)
    var line = 1;
    var arr = [];
    for (var i = 0; i < arrSize[0]; i++){
        // console.log(input[line].split(" "))
        arr.push(input[line].split(' '));
        line++
        // arr1.push(arr)
    }
    var flag = false;
    for (var i = 0; i < arrSize[0]; i++){
        for (var j = 0; j < arrSize[1]; j++){
            console.log(arr[i][j])
            if (arr[i][j] == 'a' || arr[i][j] == 'e' || arr[i][j] == 'i' || arr[i][j] == 'o' || arr[i][j] == 'u'){
                flag = true;
            }else{
                // flag = false
            }
        }
        if (flag){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }

    
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3 2\na b\nc d\ne f`);
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