var arr = [1,3,2,4];
var n = arr.length;
var count = 1;
var result = [];

for(var i = 0; i < n; i++){
    if (result.length == 0){
        result.push(arr[i]);
    }

    while(result.length == 0 && result.length < arr[i]){
        console.log(result[result.length]+arr[i]);
        // console.log(result)
        result.pop()
        // count++
    }

}