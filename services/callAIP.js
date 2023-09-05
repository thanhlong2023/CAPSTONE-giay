//Lấy toàn bộ sản phẩm
function CallAPI() {
    return axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product`
    })

}

//Lấy sản phẩm theo id
function getSP(id) {
    return axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    })
}

//api đăng nhập
function DangNhap(data) {
    return axios({
        method: 'post',
        url: `https://shop.cyberlearn.vn/api/Users/signin`,
        data: data
    })
}

//api dăng ký
function DangKy(data) {
    return axios({
        method: 'post',
        url: `https://shop.cyberlearn.vn/api/Users/signup`,
        data: data
    })
}