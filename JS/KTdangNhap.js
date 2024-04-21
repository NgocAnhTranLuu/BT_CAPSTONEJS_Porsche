

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
        btnUser = KTUser.slice(0, 6) + "..."
    } else {
        btnUser = `Đăng nhập`
    }
    document.querySelector(".btn_user").innerHTML = btnUser
}
tenTaiKhoanHeader()


function clickTaiKhoan() {
    let btnUser = ``
    if (kiemTraUser) {
        const button = document.querySelector('[data-target="#anUser"]');
        const targetElement = document.querySelector('#anUser');
    
        // targetElement.classList.toggle('show');
        button.addEventListener('click', function () {
            targetElement.classList.toggle('show');
        });
        btnUser = KTUser
        document.querySelector(".btn_user_tenND").innerHTML = "Tài khoản: " + btnUser
    } else {
        alert("Đăng nhập ngay để mua sắm thỏa thích")
        window.location.href = "Dangnhap.html"
    }


}
clickTaiKhoan()