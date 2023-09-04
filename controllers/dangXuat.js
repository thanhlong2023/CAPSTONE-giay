
function dangXuat() {
    localStorage.removeItem("token")
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") == null) {
        alert("Bạn đã đăng xuất thành công")
    }
}