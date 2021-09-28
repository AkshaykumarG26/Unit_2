function rotateBy90(R, matrix){
    //write code here
    for (var i = 0; i < Math.floor(R/2); i++){
        var ak = []
        for (var j = i; j < R-i-1; j++){
            var arr = matrix[i][j];
            matrix[i][j] = matrix[j][R-1-i];
            matrix[j][R-1-i] = matrix[R-1-i][R-1-j];
            matrix[R-1-i][R-1-j] = matrix[R-1-j][i];
            matrix[R-1-j][i] = arr
        }
    }
    // console.log(matrix)
    for (var i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(" "))
    }
    
}
rotateBy90(4,[[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]])

function zTraversal(N,arr){
    var arr_1 = []
    for (i=0; i<arr.length-1; i++) {
        arr_1.push(arr[0][i])
    }
  
   for (j=0; j<arr.length; j++) {
       for (l=0; l<arr[0].length; l++) {
           if (j + l == N-1) {
               arr_1.push(arr[j][l])
            }
        }
     
    }

    for (k=1; k<arr.length; k++) {
        arr_1.push(arr[N-1][k])  
    }

    console.log(arr_1.join(" "))
}
// zTraversal(3,[[1,2,3],[4,5,6],[7,8,9]])