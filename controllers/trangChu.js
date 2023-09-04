
function showSP(mang) {
    var content = "";
    mang.map(function (sp) {
        content += `
    <div class="product-item col-6 col-md-3">
    <div class="item">
        <a href="./views/chiTietSP.html?productid=${sp.id}">
            <img src=${sp.image} alt="">
        </a>
    </div>
    <div class="product-item-text">
        <h1><a href="./views/chiTietSP.html?productid=${sp.id}">${sp.name}</a></h1>

        <p><span class="price">${sp.price}</span>.000 đ</p>
    </div>

</div>
    `
    })
    document.getElementById("showSP").innerHTML = content;
}
function laySP() {
    CallAPI().then((result) => {
        console.log(result.data.content);
        showSP(result.data.content)
    }).catch((error) => {
        console.log(error);
    })
}
laySP();
function laySPbyCategory() {
    let hang = document.querySelector("#hang").value;
    let Nike = [];
    let Adidas = [];
    let Van = [];

    CallAPI().then((result) => {

        let array = [...result.data.content]
        for (let product of array) {
            if ((JSON.parse(product.categories))[0].category == "ADIDAS") {
                Adidas.push(product);
            } else if ((JSON.parse(product.categories))[0].category == "VANS CONVERSE") {
                Van.push(product);
            } else {
                Nike.push(product);
            }
        }
        if (hang == "ADIDAS") {
            // console.log(Adidas);
            showSP(Adidas);
        } else if (hang == "VANS CONVERSE") {
            // console.log(Van);
            showSP(Van);
        } else if (hang == "NIKE") {
            showSP(Nike);
            // console.log(Nike);
        } else if (hang == "1") {
            showSP(array)
        }
        // console.log(Adidas);
        // console.log(Nike);
        // console.log(Van);



    }).catch((error) => {
        console.log(error);
    })
}
