
const signupButton = document.querySelector("#dangKy");
let validation = new Validation();
signupButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Nhập dữ liệu đăng ký từ người dùng
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#matKhau").value;
    let name = document.querySelector("#name").value;
    let gender = "";
    let checkbox = document.getElementsByName("gender")
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            gender = checkbox[i].value;
        }
    }
    let phone = document.querySelector("#sdt").value;
    console.log("gender", gender);
    // Kiểm tra tính hợp lệ của dữ liệu
    let isValid = true;

    //email
    isValid &= validation.checkEmpty(email, "Email không được để trống", "tbDKemail") && validation.checkEmail(email, "Email chưa đúng định dạng", "tbDKemail");

    //mật khẩu
    isValid &= validation.checkEmpty(password, "Mật khẩu không được để trống", "tbDKMK") && validation.matKhau(password, "Mật khẩu từ 6-10 ký tự, ít nhất 1 chữ cái và 1 số", "tbDKMK");

    //name
    isValid &= validation.checkEmpty(name, "Tên không được để trống", "tbDKname") && validation.checkName(name, "Tên phải là chữ", "tbDKname");

    //phone
    isValid &= validation.checkEmpty(phone, "Số điện thoại không được để trống", "tbDKsdt") && validation.checkPhone(phone, "Phone phải là số từ 9 -11 ký tự", "tbDKsdt");

    //gender
    isValid &= validation.checkGender(gender, "Hãy chọn giới tính của bạn", "tbDKgioiTinh")



    if (isValid) {
        let data = {
            email: email,
            password: password,
            name: name,
            gender: gender,
            phone: phone,
        };

        // Gửi dữ liệu đăng nhập đến API
        DangKy(data).then((response) => {
            if (response.status === 200) {
                // Đăng ký thành công
                alert("Đăng ký thành công");
                // console.log(response.data.content.accessToken);
                localStorage.setItem("token", JSON.stringify(response.data.content.accessToken))

                window.location.href = "./login.html";

            } else {
                // Đăng ký thất bại
                alert("Đăng ký thất bại");
            }
        }).catch((error) => {
            alert("Đăng ký thất bại")
            console.log(error);
        });
    }

});






