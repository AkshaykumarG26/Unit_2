var array = ["apple", "windows", "ubuntu", "cola", "system"];
function evenIndex(num, i){
    return i % 2 == 0;
}
var arrayStringPattern = array.filter(evenIndex)
console.log(arrayStringPattern)