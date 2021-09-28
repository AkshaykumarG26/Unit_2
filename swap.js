function swap(fstNum, sndNum){
    var temp = fstNum;
    fstNum = sndNum;
    sndNum = temp;
    return [fstNum, sndNum]
}
var fstNum = 3;
var sndNum = 2
console.log(swap(fstNum,sndNum))

