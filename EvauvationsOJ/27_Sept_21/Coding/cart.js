let parent = document.getElementById("products");

let cartItems = JSON.parse(localStorage.getItem("TanishqCart"));
// console.log(cartItems)

function showProducts(){

    cartItems.forEach(function(product){
        let div = document.createElement("div");
        let img = document.createElement("img");

        img.src = product.img;

        let p_name = document.createElement("h4");
        p_name.textContent = product.name;

        let p_price = document.createElement("h4");
        p_price.textContent = product.price;

        div.append(img, p_name, p_price);
        parent.append(div)


    })

}

showProducts();



function applyCoupen(){
    let prices = [];
    let total = 0
    cartItems.forEach(function(p){
        prices.push(p.price)
    })
    // console.log(prices)

    let t = prices.reduce(function(ac,el){
        return ac+el
        // console.log(ac+el)
    })
    // return t;

    total =  t - Math.floor(t*0.3)
    return total;


}

console.log(applyCoupen())

function apply(){
    let code = document.getElementById("masia_30");
    code = code.value;
    // console.log(code)
    if (code == 'masai30'){
        let totalPrice = document.getElementById("totalPrice");
        totalPrice.textContent = applyCoupen()
    }else{
        alert("enter valid coupen code")
    }
}
