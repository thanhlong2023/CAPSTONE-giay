document.getElementById("dangNhap").onclick = dangNhap;

let validation = new Validation();
function dangNhap(event) {
    event.preventDefault();

    // Nhập dữ liệu đăng nhập từ người dùng
    let email = document.querySelector("#userName").value;
    let password = document.querySelector("#userPassword").value;

    let isValid = true;

    //email
    isValid &= validation.checkEmpty(email, "Email không được để trống", "tbUsername") && validation.checkEmail(email, "Email chưa đúng định dạng", "tbUsername");

    //mật khẩu
    isValid &= validation.checkEmpty(password, "Mật khẩu không được để trống", "tbUserMK") && validation.matKhau(password, "Mật khẩu từ 6-10 ký tự, ít nhất 1 chữ cái và 1 số", "tbUserMK")

    if (isValid) {
        let data = {
            email: email,
            password: password
        }

        // Gửi dữ liệu đăng nhập đến API
        DangNhap(data).then((response) => {
            if (response.status === 200) {
                // Đăng nhập thành công
                alert("Đăng nhập thành công")

                // console.log(response.data.content.accessToken);
                localStorage.setItem("token", JSON.stringify(response.data.content.accessToken))



                window.location.href = "/";

            } else {
                // Đăng nhập thất bại
                alert("Tài khoản hoặc mật khẩu không chính xác");
            }
        }).catch((error) => {
            alert("Tài khoản hoặc mật khẩu không chính xác");
            console.log(error);
        });
    }

};
