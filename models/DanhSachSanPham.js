function DanhSachSanPham() {
    this.mangSP = [];

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
    this.renderSPtang = function (id) {

        let indexChange = this.mangSP.find(function (sp) {
            return sp.id == id;
        })


        // console.log((this.mangSP).indexOf(indexChange));
        // console.log((this.mangSP)[(this.mangSP).indexOf(indexChange)]);

        indexChange.quantityOrder++

        // console.log(indexChange);
        (this.mangSP)[(this.mangSP).indexOf(indexChange)] = indexChange;


    }
    this.renderSPgiam = function (id) {

        let indexChange = this.mangSP.find(function (sp) {
            return sp.id == id;
        })
        if (indexChange.quantityOrder > 1) {
            indexChange.quantityOrder--
        } else {
            indexChange.quantityOrder = 1;
        }

        (this.mangSP)[(this.mangSP).indexOf(indexChange)] = indexChange;


    }

}