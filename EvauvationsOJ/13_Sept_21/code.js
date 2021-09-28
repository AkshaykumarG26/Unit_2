function spiralTraversalV(N, matrix){
    //write code here
    var top = 0;
    var bottom = N-1;
    var left = 0;
    var right = N - 1;
    var count = 0;
    var outArr = []

    while(count < N*N){
        for (var i = top; i <= bottom; i++){
            outArr.push(matrix[i][left])
            count++
        }
    left++
    
    for (var i = left; i <= right; i++){
        outArr.push(matrix[bottom][i])
        count++
    }
    bottom--

    for (var i = bottom; i >= top; i--){
        outArr.push(matrix[i][right])
        count++
    }
    right--
    
    for (var i = right; i >= left; i--){
        outArr.push(matrix[top][i])
        count++
    }
    top++
}   

    
    console.log(outArr.join(" "))
}
// spiralTraversalV(3, [[1,2,3],[4,5,6],[7,8,9]])


function elementInTheMiddle(N, arr) {
    if (N % 2 != 0){
        // console.log(Math.floor(N/2))
        var middleValue = Math.floor(N/2)
        var value = arr[middleValue]
        var flag = false
        for (var i = 0; i < middleValue; i++){
            // console.log(arr[i])
            for (var j = middleValue; j < N; j++){
                if (arr[i] > arr[j]){
                    // console.log(-1)
                    flag = false
                }else if (arr[i] < arr[j]){
                    // console.log(1)
                    flag = true
                }
            }
        }
        if (flag){
            console.log(value)
        }else{
            console.log(-1)
        }
    }else{
        console.log(-1)
    }
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var inpArr = input.split("\n")
    // console.log(inpArr)
    var N = +(inpArr[0])
    var arr = inpArr[1].trim().split(" ").map(Number)
    // console.log(arr)
    elementInTheMiddle(N, arr)

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5\n4 3 6 7 8`);
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



function threeMaxThreeMin(N,arr){
    //write code here
    // console.log(arr.sort())
    var obj = {};

    for (var i = 0; i < N; i++){
        var char = arr[i];
        if (obj[char] == undefined){
            obj[char] = 1;
        }else{
            var p = obj[char];
            obj[char] = p + 1;
        }
    }

    // console.log(obj)
    var newArr = []
    for (key in obj){
        newArr.push(key)
    }
    newArr = ((newArr).map(Number))
    // console.log(newArr)

    var middleValue1 = newArr.length/2
    var firstArr = [];
    var secondArr = [];
    for (var i = 0; i < middleValue1; i++){
        if (newArr[i] < newArr[i+1]){
            firstArr.push(newArr[i])
        }
    }
    for (var i = middleValue1; i <= newArr.length; i++){
        if (newArr[i] < newArr[i+1]){
            secondArr.push(newArr[i])
        }
    }

    console.log(firstArr)
    console.log(secondArr)
}
threeMaxThreeMin(8,[1,2,3,4,2,1,6,5])