function spirallyTraversingAMatrix(N, matrix){
    //write code here
    var top = 0;
    var left = 0;
    var bottom = N - 1;
    var right = N - 1;
    var count = 0;
    var emptyArr = []
    while (count < N*N){
        for (var i = left; i <= right; i++){
            // console.log(matrix[top][i])
            emptyArr.push(matrix[top][i])
            count++
        }
        top++

        for (var i = top; i <= bottom; i++){
            // console.log(matrix[i][right])
            emptyArr.push(matrix[i][right])
            count++
        }
        right--

        for (var i = right; i >= left; i--){
            // console.log(matrix[bottom][i])
            emptyArr.push(matrix[bottom][i])
            count++
        }
        bottom--

        for (var i = bottom; i >= top; i--){
            // console.log(matrix[i][left])
            emptyArr.push(matrix[i][left])
            count++
        }
        left++

    }
    console.log(emptyArr.join(" "))
}
spirallyTraversingAMatrix(4,[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])


function sumWithoutBorders(N, M, matrix){
    //write code here
    N = matrix.length
    M = matrix[0].length
    var sum = 0;
    for (var i = 1; i < N-1; i++){
        for (var j = 1; j < M-1; j++){
                // console.log(matrix[i][j])
                sum = sum + (matrix[i][j])
            }
        }
    console.log(sum)
}
// sumWithoutBorders(4,4,[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])


function isItPalindrome(n, arr){
    //write code here
    var c1 = 0;
    var c2 = 0;
    for (var i = 0; i < n; i++){
        if  (arr[i] == 1){
            c1++
        }
        if (arr[i] == 2){
            c2++
        }
    }
    if (c1 % 2 == 0 || c2 % 2 == 0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
