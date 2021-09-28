function findPairsII(n,m,arr){
    var count = 0
    for (i = 0; i < n-1; i++){
        for (var j = i; j < n-1; j++){
            console.log(arr[i] + arr[j])

        }
        if ((arr[i] + arr[i]) % m == 0){
            count++
        }
    }
    console.log(count)
}
findPairsII(5,4,[3, 2, 2, 1, 5])