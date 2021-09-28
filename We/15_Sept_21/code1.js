var items = [
    {name: "Akshay", age: 24, gender: "M"},
    {name: "abc", age: 24, gender: "F"}
]

var isMale = function (el) {
    return el.gender === "M"
}

var MItems = items.filter(isMale);
console.log(MItems)