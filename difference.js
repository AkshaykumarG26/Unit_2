var arr = [1,2,3,4,5];
var left = 0;
var k = 3
var right = left+1;
while(left < right){
    if (arr[left] - arr[right] == k){
        console.log("Yes")
    }else{
        console.log("No")
    }
    left++
    right--
}