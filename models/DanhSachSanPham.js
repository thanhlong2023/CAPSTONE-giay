function DanhSachSanPham() {
    this.mangSP = [{
        "id": 6,
        "name": "Adidas Tenisky Super Star",
        "img": "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
        "price": 250,
        "quantityOrder": "1"
    }];

    this.themSP = function (sp) {
        this.mangSP.push(sp);
    }
    this.capNhatSL = function (spUpdate) {
        let indexUpdate = this.mangSP.findIndex(function (sp) {
            return sp.id == spUpdate.id;
        })
        if (indexUpdate > -1) {
            this.mangSP[indexUpdate] = spUpdate;
        }
    }
    this.xoaSP = function (maXoa) {
        let indexXoa = this.mangSP.findIndex(function (sp) {
            return sp.id == maXoa;
        })
        this.mangSP.splice(indexXoa, 1);
    }

}