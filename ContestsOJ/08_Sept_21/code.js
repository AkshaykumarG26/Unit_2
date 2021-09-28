function cirTraversal(matrix,N) {
    //write code here
    var emptyArr = []
    for(var i= N-1;i >= 0;i--){
    emptyArr.push(matrix[i][0])
}

for(var i = 1; i < N; i++){
    emptyArr.push(matrix[0][i])
    
}
for(var i = 1;i < N; i++){
    emptyArr.push(matrix[i][N-1])
}
for(var i= N-2; i > 0;i--){
    emptyArr.push(matrix[N-1][i])
}

console.log(emptyArr.join(" "));
}

// cirTraversal([[1,2,3],[4,5,6],[7,8,9]],3)


function partyPlanning(N,PamID,M,JimID){
    //write code here
    var pamObj = {}
    var jimObj = {}

    for (var i = 0; i < N; i++){
        pamObj[PamID[i]] = PamID[i]
    }
    console.log(pamObj)

    for (var i = 0; i < M; i++){
        jimObj[JimID[i]] = JimID[i]
    }
    console.log(jimObj)
    // pamArr = []
    pamStr = ''
    for (key in pamObj){
        // pamArr.push(key)
        pamStr = pamStr + key
    }
    // console.log(pamArr)
    // console.log(pamStr)

    // jimArr = []
    jimStr = ''
    for (key  in jimObj){
        // jimArr.push(key)
        jimStr = jimStr + key
    }
    // console.log(jimArr)
    // console.log(jimStr)

    if (pamStr == jimStr){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
partyPlanning(5,[2,7,9,4,4],5,[4,2,6,9,1])



function detectPalII(N, string){
    var c1 = 0
    var c2 = 0
   var obj = {}

   for (i = 0; i < N; i++) {
       var chars = string[i]
       if (obj[chars] === undefined) {
               obj[chars] = 1
       } else {
           var prev = obj[chars]
           obj[chars] = prev + 1
       }
   }
//    console.log(obj)

   for (key in obj) {
      if (key) {
      c1++
      }
   if (obj[key]%2==0) {
       c2++
   }
}

    // console.log(c1)
    // console.log(c2)
   if (c2 == c1  || c1-1 == c2) {
       console.log("Possible!")
   } else {
      console.log("Not Possible!")
   }

}

detectPalII(6,'aabbcc',5,'aabcd')