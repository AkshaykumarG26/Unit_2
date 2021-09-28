// Problem-1
// Given an array of numbers print the square of those numbers

var items = [1,2,3,4,5];
items.forEach(function (el) {
    console.log("Square of", el, "is", el*el)
})


// Problem-2
// Given an array of numbers generate an array containing the double value of the numbers

var nums2 = [1,2,3,4,5];
function double(num) {
    return num * 2
}
console.log("Double values - ", nums2.map(double))


// Problem-3
// Given an array of numbers extract the numbers which are odd

var nums3 = [1,2,3,4,5,6,7];
function isOdd(num){
    return num % 2 == 1;
}
var oddNums = nums3.filter(isOdd)
console.log("Odd Nums - ",oddNums)


// Problem-4
// Given an array of numbers print the product of all numbers

var nums4 = [1,2,3,4,5];
function product(ac, el){
    return ac * el
}
var products = nums4.reduce(product)
console.log("Total product is - ", products)


// Problem-5
// Given an array of numbers find the sum of odd elements

var nums5 = [1,2,3,4,5,6,7];
var odd = nums5.filter(isOdd)
// console.log(odd)
var sum = function(ac, el){
    return ac + el
}
var oddSum = odd.reduce(sum)
console.log("Odd Sum - ", oddSum)


// Problem-6
// Given an array of numbers find the sum of cubes if the number is divisible by 3

var nums6 = [1,2,3,4,5,6]
function divisibleBy3 (num){
    return num % 3 == 0
}
function cube(num){
    return num ** 3;
}
var out = nums6.filter(divisibleBy3).map(cube).reduce(sum)
console.log("Total Sum - ",out)


