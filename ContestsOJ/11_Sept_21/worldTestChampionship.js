function worldTestChampionship(indiaPoints, austreliaPoints, indiaMathces, austreliaMatches) {
    if(indiaPoints > austreliaPoints || indiaMathces < austreliaMatches){
        console.log("India")
    }else if (austreliaPoints > indiaPoints || indiaMathces > austreliaMatches){
        console.log("Austrelia")
    }else if (indiaPoints == austreliaPoints || indiaMathces == austreliaMatches){
        console.log("Play another game!")
    }
}


function runProgram(input) {
    // Write code here
    input = input.split('\n').map(Number)
    // console.log(input)
    var [indiaPoints, austreliaPoints, indiaMathces, austreliaMatches] = input
    worldTestChampionship(indiaPoints, austreliaPoints, indiaMathces, austreliaMatches)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`500\n500\n9\n10`);
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