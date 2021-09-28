let data = [
    {
        name: 'Ethereal Floral Diamond Hoop Earrings',
        price: 32238,
        img: "https://staticimg.titan.co.in/Tanishq/Catalog/500473HNAAAA09_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Subtle Mango Shaped Earrings",
        price: 11589,
        img: "https://staticimg.titan.co.in/Tanishq/Catalog/500925SIAAAA09_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name: "ELegant Shaped Earrings",
        price: 29166,
        img: "https://staticimg.titan.co.in/Tanishq/Catalog/502995SDPADA02_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name: "Radient ROse Gold Coloer Earrings",
        price: 87499,
        img: "https://staticimg.titan.co.in/Tanishq/Catalog/503117SCUAGA02_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name: "Resplendant Contemprory Earrings",
        price: 37696,
        img: "https://staticimg.titan.co.in/Tanishq/Catalog/503414SAWAGB02_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name:"Regal 22 Karat Yellow Earrings",
        price: 75999,
        img: "https://staticimg.titan.co.in/Tanishq/Catalog/511018DIQABA00_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name: "Star Light Silver Anklet",
        price: 29990,
        img: "https://staticimg.titan.co.in/Mia/Catalog/A14019LNUBAAPL_1.jpg?impolicy=pqmed&imwidth=640",
    },
    {
        name: "Better Fly Silver Anklet",
        price: 12000,
        img: "https://staticimg.titan.co.in/Mia/Catalog/A14019LNMBAA37_1.jpg?impolicy=pqmed&imwidth=640"
    }

]

    let parent = document.getElementById("products");

    function showProducts(x){

        parent.textContent = null
        x.forEach(function(product){

            let div = document.createElement("div");
            let img = document.createElement("img");

            img.src = product.img;

            let p_name = document.createElement("h4");
            p_name.textContent = product.name;

            let p_price = document.createElement("h4");
            p_price.textContent = product.price;

            let add_cart_btn = document.createElement("button");
            add_cart_btn.textContent = "Add to Cart";

            add_cart_btn.onclick = function(){
                addToCart(product)
            }

            div.append(img, p_name, p_price, add_cart_btn);
            parent.append(div)


        })
    
    }

    showProducts(data);

    if (localStorage.getItem("TanishqCart") === null){
        localStorage.setItem("TanishqCart", JSON.stringify([]));
    }

    function addToCart(prod){
        let products_in_cart = JSON.parse(localStorage.getItem("TanishqCart"));
        products_in_cart.push(prod);
        localStorage.setItem("TanishqCart", JSON.stringify(products_in_cart));
        // console.log(products_in_cart)
    }

    function lowTohigh(){
        let arr = data.sort(function(a,b){
            return a.price-b.price
        })
        showProducts(arr)
    }

    function highToLow(){
        let arr = data.sort(function(a,b){
            return b.price-a.price
        })
        showProducts(arr)
    }
