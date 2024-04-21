

let KTUser = localStorage.getItem("UserChinh")
// console.log(KTUser)

let kiemTraUser = localStorage.getItem("UserChinh") ? true : false


function kiemTraLogin() {
    if (kiemTraUser) {
        window.location.href = "GioHang.html"
    } else {
        alert("Đăng nhập ngay để mua sắm thỏa thích")
        window.location.href = "Dangnhap.html"
    }
}

function tenTaiKhoanHeader() {
    let btnUser = ``
    if (kiemTraUser) {
        btnUser = KTUser
    } else {
        btnUser = `Đăng nhập`
    }
    document.querySelector(".btn_user").innerHTML = btnUser
}
tenTaiKhoanHeader()
