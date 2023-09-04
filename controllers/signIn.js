document.getElementById("dangNhap").onclick = dangNhap;

// function dangNhap(event) {
//     event.preventDefault();

//     // Nhập dữ liệu đăng nhập từ người dùng
//     const email = document.querySelector("#userName").value;
//     const password = document.querySelector("#userPassword").value;
//     console.log(email, password);
//     // Kiểm tra tính hợp lệ của dữ liệu


//     // Gửi dữ liệu đăng nhập đến API
//     const request = new XMLHttpRequest();
//     request.open("POST", "https://shop.cyberlearn.vn/api/Users/signin");
//     request.setRequestHeader("Content-Type", "application/json");

//     const data = JSON.stringify({
//         email: email,
//         password: password,
//     });

//     request.send(data);

//     // Xử lý phản hồi từ API
//     request.onload = () => {
//         if (request.status === 200) {
//             // Đăng nhập thành công
//             alert("Đăng nhập thành công");

//             // Lưu thông tin đăng nhập vào cookie
//             // const token = request.getResponseHeader("Authorization");
//             // document.cookie = "token=" + token;
//             // console.log(token);

//             // Chuyển hướng người dùng đến trang chủ
//             // window.location.href = "/";

//         } else if (request.status === 401) {
//             // Đăng nhập thất bại
//             alert("Đăng nhập thất bại");
//         }
//     };
// };




function dangNhap(event) {
    event.preventDefault();

    // Nhập dữ liệu đăng nhập từ người dùng
    const email = document.querySelector("#userName").value;
    const password = document.querySelector("#userPassword").value;

    let data = {
        email: email,
        password: password
    }

    // Gửi dữ liệu đăng nhập đến API
    axios({
        method: 'post',
        url: `https://shop.cyberlearn.vn/api/Users/signin`,
        data: data
    }).then((response) => {
        if (response.status === 200) {
            // Đăng nhập thành công
            alert("Đăng nhập thành công");
            // console.log(response.data.content.accessToken);
            localStorage.setItem("token", JSON.stringify(response.data.content.accessToken))



            window.location.href = "/";
            
        } else {
            // Đăng nhập thất bại
            alert("Đăng nhập thất bại");
        }
    }).catch((error) => {
        console.log(error);
    });
};
