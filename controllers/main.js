

// ===========================================================================

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
        <h1><a href="./views/chiTietSP.html?productid=${sp.id}">Adidas Prophere</a></h1>

        <p><span class="price">500</span>.000 đ</p>
    </div>

</div>
    `
    })
    document.getElementById("showSP").innerHTML = content;
}
function laySP() {
    CallAPI().then((result) => {
        showSP(result.data.content)
    }).catch((error) => {
        console.log(error);
    })
}
laySP();

// ==================================================================================
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid')

    function laySP(id) {
        getSP(id).then(function (result) {
            let size = result.data.content.size;
            // console.log(result.data.content);
            let content = "";
            // console.log(result);
            // console.log("size", size);
            size.map(function (s) {
                content += `
                <li><button onclick="getSize('${s}')">${s}</button></li>
                `
            })
            showSPdaChon(result.data.content)
            document.querySelector(".chonSize").innerHTML = content;

        }).catch(function (error) {
            console.log(error);
        })
    }
    laySP(myParam);

    function showSPdaChon(sp) {
        let content = `
        <div class="row">
        <div class="col-12 col-md-6">
            <figure>
                <img id="anhSP" src=${sp.image} alt="">
            </figure>

        </div>
        <div class="col-12 col-md-6">
            <div class="product__name">
                <h4 id="tenSP">${sp.name}</h4>
                <p>Đã bán: <span id="daBan">${sp.quantity}</span></p>
            </div>

            <p id="moTa">${sp.shortDescription}</p>
            <h3><span id="giaSP">${sp.price}</span>.000đ</h3>

            <sup class="kt">Kích thước: <span class="size">36</span></sup>
            <div class="form-size">


                <ul class="chonSize">
                    <li><button>36</button></li>
                    <li><button>37</button></li>
                    <li><button>38</button></li>
                    <li><button>39</button></li>
                    <li><button>40</button></li>
                    <li><button>41</button></li>
                </ul>

            </div>
            <div class="soLuong">
                <button class="btn" id="Giam" onclick="giamBien()">-</button>

                <div>
                    <p class="sl">1</p>
                </div>

                <button class="btn" id="Tang" onclick="tangBien()">+</button>
            </div>
            <button id="addSP" onclick="addToCart('${sp.id}')">Thêm vào giỏ hàng</button>
        </div>

    </div>
        `
        document.querySelector(".prodyct__buy .row").innerHTML = content;
    }

    function realateProduct(id) {
        getSP(id).then(function (result) {
            let array = [...result.data.content.relatedProducts]
            // console.log("array", array);
            showSP(array)
        }).catch(function (error) {
            console.log(error);
        })
    }
    realateProduct(myParam)

    function showSP(mang) {
        var content = "";
        mang.map(function (sp) {
            content += `
            <div class="product-item col-6 col-md-4">
            <div class="item">
                <a href="../views/chiTietSP.html?productid=${sp.id}">
                    <img src=${sp.image} alt="">
                </a>
            </div>
            <div class="product-item-text">
                <h1><a href="../views/chiTietSP.html?productid=${sp.id}">${sp.name}</a></h1>

                <p><span class="price">${sp.price}</span>.000 đ</p>
            </div>

        </div>
        `
        })
        document.getElementById("showSP").innerHTML = content;
    }
    tongTien();
}

// ===================================================================
// const btn = document.querySelectorAll(".product-item button")
// // console.log(btn);
// btn.forEach(function (button, index) {
//     button.addEventListener("click", function (event) {
//         let btnItem = event.target;
//         let product = btnItem.parentElement;

//         let productImg = product.querySelector("img").src;
//         let productName = product.querySelector("h1").innerHTML;
//         let productPrice = product.querySelector("span").innerHTML;

//         addCart(productImg, productName, productPrice);
//     })
// })
// function addCart(productImg, productName, productPrice) {
//     let content = document.createElement("tr")

//     let cartItem = document.querySelectorAll("#tbody tr")
//     for (let i = 0; i < cartItem.length; i++) {
//         let product = document.querySelectorAll(".title")
//         if (product[i].innerHTML == productName) {
//             alert("Sản phẩm đã có trong giỏ hàng")
//             return
//         }
//     }

//     let trContent = `

//     <td class="anhSP"><img style="width: 87px;"
//                                 src=${productImg}
//                                 alt=""><span class="title">${productName}</span></td>
//                         <td>
//                             <p><span class="price">${productPrice}</span><sup>đ</sup></p>
//                         </td>
//                         <td><input type="number" value="1" min="0" id="soLuong"></td>
//                         <td class="btnXoa">Xóa</td>
//     `
//     content.innerHTML = trContent

//     document.querySelector("#tbody").append(content)

//     cartTotal();
// }
// function cartTotal() {
//     let tong = 0;


//     let cartItem = document.querySelectorAll("#tbody tr")
//     // console.log(cartItem);
//     for (let i = 0; i < cartItem.length; i++) {
//         let inputValue = cartItem[i].querySelector("input").value;
//         // console.log(inputValue);
//         let productPrice = cartItem[i].querySelector(".price").innerHTML;
//         // console.log(productPrice);
//         let totalA = inputValue * productPrice * 1000
//         // totalB =totalA.toLocaleString("de-DE")
//         // console.log(totalB);


//         tong += totalA;
//         // console.log(tong);
//     }



//     document.querySelector(".price-total span").innerHTML = tong.toLocaleString();

//     inputChange()

// }
// function inputChange() {
//     var cartItem = document.querySelectorAll("#tbody tr")
//     for (var i = 0; i < cartItem.length; i++) {
//         var inputValue = cartItem[i].querySelector("input")
//         inputValue.addEventListener("change", function () {
//             cartTotal()
//         })
//     }
// }
const cartbtn = document.querySelector(".close")
const cartShow = document.querySelector(".fa-cart-arrow-down")

cartShow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0";

})
cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%"
})
// ==================================================

function tangBien() {
    let soLuong = Number(document.querySelector(".sl").innerHTML)
    let tang = soLuong += 1;
    document.querySelector(".sl").innerHTML = tang
}
function giamBien() {
    let giam = 0;
    let soLuong = Number(document.querySelector(".sl").innerHTML)
    if (soLuong > 1) {
        giam = soLuong -= 1;
    } else {
        giam = 1;
    }

    document.querySelector(".sl").innerHTML = giam
}
// ========================================Carts

function setLocalSorage() {
    localStorage.setItem("DSSP", JSON.stringify(dssp.mangSP));
}
function getLocalStorage() {
    if (localStorage.getItem("DSSP") != null) {
        dssp.mangSP = JSON.parse(localStorage.getItem("DSSP"));
        hienThiCart(dssp.mangSP)
    }

}

let dssp = new DanhSachSanPham();

function addToCart(id) {
    var quantityOrder = document.querySelector(".sl").innerHTML;
    getSP(id).then((result) => {
        let spget = result.data.content;
        let sp = new SanPham(spget.id, spget.name, spget.image, spget.price, quantityOrder);

        if (dssp.mangSP.length < 0) {
            dssp.themSP(sp);

            tongTien();

            hienThiCart(dssp.mangSP);
            setLocalSorage();
        } else {
            let HaveId = dssp.mangSP.find(function (sp) {
                return sp.id == spget.id
            })
            let spdaCo = { ...HaveId }

            if (spget.id == spdaCo.id) {
                let quantityUpdate = Number(spdaCo.quantityOrder) + Number(quantityOrder);
                let spUpdate = new SanPham(spget.id, spget.name, spget.image, spget.price, quantityUpdate)

                dssp.capNhatSL(spUpdate);

                tongTien();

                setLocalSorage();
                getLocalStorage();

            } else {
                dssp.themSP(sp);

                tongTien();
                hienThiCart(dssp.mangSP);
                setLocalSorage();
            }
        }
    }).catch(function (error) {
        console.log(error);
    })
}

getLocalStorage();

function hienThiCart(mang) {
    let content = "";

    mang.map(function (sp) {
        content += `
    <tr>
    <td>
        <img width="80px" src=${sp.img} alt="">
        <p>${sp.name}</p>
    </td>
    <td>${sp.price}<span>.000 đ</span></td>
    <td>
        <div class="soLuongCart">
       
            <p class="slorder">${sp.quantityOrder}</p>
           
        </div>
    </td>
    <td><button type="button" class="btn btn-danger" onclick="xoaSP('${sp.id}')">X</button></td>
</tr>
    `
    })
    document.getElementById("tbody").innerHTML = content;
}

function xoaSP(maXoa) {
    dssp.xoaSP(maXoa);

    setLocalSorage();

    getLocalStorage();

    tongTien();
}
tongTien();

function tongTien() {
    let tong = 0;
    let oder = 0;
    dssp.mangSP.map(function (sp) {
        tong += Number(sp.price) * Number(sp.quantityOrder)
        oder += sp.quantityOrder
    })
    document.getElementById("tienThanhToan").innerHTML = tong.toLocaleString()
    document.querySelector(".cart__text").innerHTML = oder;
}

function chotDon() {

    if (dssp.mangSP.length > 0) {
        document.querySelector(".tbThanhToan").style.display = "block"
        setTimeout(function () {
            document.querySelector(".tbThanhToan").style.display = "none"
        }, 2000);
    }

    dssp.mangSP = [];
    hienThiCart(dssp.mangSP);
    tongTien();
    setLocalSorage();

    setTimeout(function () {
        document.querySelector(".cart").style.right = "-100%";
    }, 3000);


}
// ====================================================
window.getSize = getSize;
function getSize(size) {
    document.querySelector(".size").innerHTML = size;
}
