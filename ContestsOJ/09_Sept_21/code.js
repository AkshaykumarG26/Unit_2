function masaiTraversalAndQueries(N, M, q, arr){
    //write code here
    var emptyArr = [];
if (q == 1){
    for (var i = 0; i < N; i++){
        if (i % 2 == 0){
            for (var j = 0; j < M; j++){
                emptyArr.push(arr[i][j])
            }
        }else if (i % 2 !== 0){
            for (var j = M-1; j >= 0; j--){
                emptyArr.push(arr[i][j])
            }

        }
    }
}
if (q == 2){    
    for (var i = 0; i < N; i++){
        if (i % 2 == 0){
        for (var j = M-1; j >= 0; j--){
                // console.log(arr[i][j])
                emptyArr.push(arr[i][j])
            }
        }else if (i % 2 !== 0){
            for (var j = 0; j < M; j++){
                // console.log(arr[i][j])
                emptyArr.push(arr[i][j])
            }
                }
            }
        }
console.log(emptyArr.join(" "))
}
// masaiTraversalAndQueries(3,3,1,[[1,2,3],[4,5,6],[7,8,9]])



function spiralTraversal(N, M, arr){
    //write code here
    var top = 0;
    var bottom = N-1;
    var left = 0;
    var right = M-1;
    var count = 0;
    var emptyArr = []
    var value = N*M
    while(count < value){
        for (var i = top; i <= bottom && (count<value); i++){
            emptyArr.push(arr[i][left])
            count++
        }
        left++

        for (var i = left; i <= right && (count<value); i++){
            emptyArr.push(arr[bottom][i])
            count++
        }
        bottom--

        for (var i = bottom; i >= top && (count<value); i--){
            emptyArr.push(arr[i][right])
            count++
        }
        right--

        for (var i = right; i >= left && (count<value); i--){
            emptyArr.push(arr[top][i])
            count++
        }
        top++
    }
    console.log(emptyArr.join(" "))
  
}
spiralTraversal(3,4,[[1,2,3,4],[5,6,7,8],[9,10,11,12]])


function equilibriumElement(N, arr){
    //write code here
    if (N % 2 !== 0){
        var firstSum = 0;
        var secondSum = 0;
        var middleValue = ((N-1)/2);
        // console.log("MiddleValue " + middleValue)

        for (var i = 0; i < middleValue; i++){
            firstSum = firstSum + arr[i]
            // console.log("firstSum " + firstSum)
        }

        for (var i = N-1; i > middleValue; i--){
            secondSum = secondSum + arr[i]
            // console.log("secondSum " + secondSum)
        }

        if (firstSum == secondSum){
            console.log(middleValue+1)
        }else{
            console.log(-1)
        }
    }else{
        console.log(-1)
    }
}
// equilibriumElement(5,[3,3,5,5,1])