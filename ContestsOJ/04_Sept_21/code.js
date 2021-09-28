function dayOfTheWeek(day, N) {
    //write code here
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var count = N % 7
    // console.log(count)
    for (var i = 0; i < days.length; i++){
        if (day == days[i]){
            // console.log(i)
            // console.log((i+count))
            var nextDay = (i+count)
            if (nextDay >= 7){
                var ress = days[nextDay % 7]
                console.log(ress)
            }else{

                var res = days[nextDay]
                console.log(res)
            }
        }
    }
}
dayOfTheWeek("Wednesday", 14)  




function twoArrayAndProduct(n, m, matrix, p){
    //write code here
  
}


function Array3D(N,M,K,array) {
    //write code here
    for (var i = 0; i < N; i++){
        for (var j = 0; j < M; j++){
              var emptyArr = [];
            for (var k = 0; k < K; k++){
                emptyArr.push(array[i][j][k])
            }
                console.log(emptyArr.join(" "))

        }
    }
}


function rotateBy90Clockwise(R, matrix){
    //write code here
    for (var i = Math.floor(R/2); i > 0; i--){
        var ak = []
        for (var j = R-i-2; j >= i; j--){
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


rotateBy90Clockwise(4,[[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]])
