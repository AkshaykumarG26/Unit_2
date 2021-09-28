var items = [1,2,3,4,5,6];

function isOdd(num) {
    return num % 2 == 1
}

var oddNum = items.filter(isOdd);
console.log(oddNum)