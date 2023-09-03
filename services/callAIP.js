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