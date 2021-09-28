function sumsubarr(n,k,arr){
    function sumarr(ar){
    sum=0;
    for(i=0;i<ar.length;i++){
        sum=sum+ar[i];
    }
    return sum;
    }     
    if(sumarr(arr)==k){
        return "Yes"
    }
    for(j=0;j<n;j++){
        for(l=j+1;l<=n;l++){
            if(sumarr(arr.slice(j,l))===k){
                return "Yes"
            }
    }
    } 
     return "No" ;
    }
    
// console.log(sumsubarr(3,2,[1,2,1]))

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    let testCases = +input[0];
    var lineOfnk = 1
    var arrLine = 2;
    for (var i = 0; i < testCases; i++){
        var [n,k] = input[lineOfnk].trim().split(" ").map(Number)
        lineOfnk = lineOfnk + 1
        // console.log(n,k)
        var arr = input[arrLine].trim().split(" ").map(Number)
        arrLine = arrLine + 1;
        // console.log(arr)

        console.log(sumsubarr(n,k,arr))
    }

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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