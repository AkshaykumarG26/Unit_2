function selectionSort(n, arr){
    for (var i = 0; i < n; i++){
        var min = i;
        for (var j = i+1; j < n; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        if (min != i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr.join(" ")        
}
// console.log(selectionSort(5,[3,5,0,9,8]))
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    console.log(selectionSort(n,arr))
   
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
