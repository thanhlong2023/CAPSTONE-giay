
const signupButton = document.querySelector("#dangKy");

signupButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Nhập dữ liệu đăng ký từ người dùng
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#matKhau").value;
    const name = document.querySelector("#name").value;
    let gender = "";
    const checkbox = document.getElementsByName("gender")
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            gender = checkbox[i].value;
        }
    }
    console.log(gender);

    const phone = document.querySelector("#sdt").value;

    // Kiểm tra tính hợp lệ của dữ liệu


    // Gửi dữ liệu đăng ký đến API
    const request = new XMLHttpRequest();
    request.open("POST", "https://shop.cyberlearn.vn/api/Users/signup");
    request.setRequestHeader("Content-Type", "application/json");

    const data = JSON.stringify({
        email: email,
        password: password,
        name: name,
        gender: gender,
        phone: phone,
    });

    request.send(data);

    // Xử lý phản hồi từ API
    request.onload = () => {
        if (request.status === 200) {
            // Đăng ký thành công
            alert("Đăng ký thành công");
            // Chuyển hướng người dùng đến trang chủ
            window.location.href = "/";
            
        } else if (request.status === 400) {
            // Đăng ký thất bại
            alert("Đăng ký thất bại");

        }
    };
});






