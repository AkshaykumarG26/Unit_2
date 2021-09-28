var array = [2,4,5,3,6,8];
function evenIndexNumber(ac, el){
    return ac % 2 == 0 && el % 2 == 0;
}
console.log(array.filter(evenIndexNumber))