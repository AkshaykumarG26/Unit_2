var items = [1,2,3,4,5,6];

var product = function (el,ac) {
    return ac * el
}

var pro = items.reduce(product);
console.log(pro)