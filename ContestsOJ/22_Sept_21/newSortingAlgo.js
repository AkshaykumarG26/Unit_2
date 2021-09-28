function newSortingAlgo(n,k,arr) {
    for(var i = 0; i < n-1; i++){
		var flag = false;
	   for(var j = 0; j < n-i-1; j++){
		 if(arr[j] % k > arr[j+1] % k){
		   var temp = arr[j];
		   arr[j] = arr[j+1];
		   arr[j+1]=temp;
		   flag = true;
		 }
	   }
	   if(!flag){
		 break;
	   }
	 }
	
	  console.log(arr.join(" "));
}


function runProgram(input) {
	input = input.trim().split("\n")
	var [n,k] = input[0].trim().split(" ").map(Number)
	var arr = input[1].trim().split(" ").map(Number)
	//console.log(n,k,arr);
    newSortingAlgo(n,k,arr)
    
	 
   
  }
  if (process.env.USERNAME === "akshra") {
	runProgram(`5 6
	12 18 17 65 46`);
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