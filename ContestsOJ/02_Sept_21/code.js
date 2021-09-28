function nTraversal(matrix) {
    var newMatrix = []
    for (var i = matrix.length-1; i >= 1; i--){
        // console.log(matrix[i][0])
        newMatrix.push(matrix[i][0])
    }
    for (var i = 0; i < matrix.length-1; i++){
        // console.log(matrix[i][i])
        newMatrix.push(matrix[i][i])
    }
    for  (var i = matrix.length-1; i >= 0; i--){
        // console.log(matrix[i][matrix.length-1])
        newMatrix.push(matrix[i][matrix.length-1])
    }
    console.log(newMatrix.join(" "))
}

// nTraversal([[1,2,3],[4,5,6],[7,8,9]])



function maximumOccuringElement(A,N){
    var obj = {}
      for (i = 0; i < N; i++) {
        var chars = A[i]
        // console.log(chars)
      
     if (obj[chars] == undefined) {
        //  console.log(chars)
       obj[chars] = 1
    //    console.log(obj)
     } else {
       var prev = obj[chars]
       obj[chars] = prev + 1
    //    console.log(obj)
     }
    }
      
      var count = 0
     for (value in obj) {
       
       if (obj[value] > count) {
        count = obj[value]
        var ans = value
     }
     }
        console.log(ans)
}
// maximumOccuringElement([0,2,0,6,9],5)