// var array = ["A", "Good", "Problem"]
var array =  ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

function oddLength(str){
    return str.length % 2 == 1
}
function oddLen(str){
    return str.length
}
function sum(ac,el){
    return ac + el;
}

console.log(array.filter(oddLength).map(oddLen).reduce(sum))