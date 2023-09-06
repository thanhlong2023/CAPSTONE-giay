
function dangXuat() {
    localStorage.removeItem("token")
    localStorage.removeItem("email")

    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("email"));

    if (localStorage.getItem("token") == null) {
        alert("Bạn đã đăng xuất thành công")
        document.getElementById("btnDN").style.display = "inline";
        document.getElementById("btnDK").style.display = "inline";

        document.getElementById("ttDangNhap").style.display = "none";
        document.getElementById("btnDX").style.display = "none";
    } else {
        document.getElementById("btnDN").style.display = "none";
        document.getElementById("btnDK").style.display = "none";

        document.getElementById("ttDangNhap").style.display = "inline";
        document.getElementById("btnDX").style.display = "inline";

        document.getElementById("ttDangNhap").innerHTML = userName;
    }
}

function hienThiDangNhap() {
    if (localStorage.getItem("token") !== null) {
        let userName = JSON.parse(localStorage.getItem("email"))

        document.getElementById("btnDN").style.display = "none";
        document.getElementById("btnDK").style.display = "none";

        document.getElementById("ttDangNhap").style.display = "inline";
        document.getElementById("btnDX").style.display = "inline";

        document.getElementById("ttDangNhap").innerHTML = userName;
    } else {
        document.getElementById("btnDN").style.display = "inline";
        document.getElementById("btnDK").style.display = "inline";

        document.getElementById("ttDangNhap").style.display = "none";
        document.getElementById("btnDX").style.display = "none";
    }
}
hienThiDangNhap();
