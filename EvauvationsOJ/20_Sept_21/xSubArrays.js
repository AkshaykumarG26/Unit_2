function xsub(n,k,x,arr){
    var count=0;
    function isgreater(ar,k){
    for(i = 0; i < ar.length; i++){
        if(ar[i]>k){
            return false
        }
    }
    return true;
}

  var i=0;
  while(i <= n-x){
  if(isgreater(arr.slice(i,x))){count++}
      i++;
      x++;
   }
    return count;
  }
  
function runProgram(input) {
     input=input.trim().split("\n");
      var line=1;
      var x=input.length;
      while(line<x){
      [n,k,x]=input[line].trim().split(" ").map(Number);
      line++
       arr=input[line].trim().split(" ").map(Number)
       line++
      console.log(xsub(n,x,k,arr))
        
        }
    // Write code here
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1
    5 3 2
    1 3 2 5 1`);
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