function checkVowel(N, str) {
    var flag = false
    for (var i = 0; i < N; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            // console.log(true)
            flag = true
        }
    }
    if (flag == true){
        console.log(true)
    }else{
        console.log(false)
    }
}



function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var N = +(input[0])
    var str = input[1]
    // console.log(str)
    checkVowel(N, str)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4\nstvr`);
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