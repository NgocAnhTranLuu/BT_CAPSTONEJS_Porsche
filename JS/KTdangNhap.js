

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
    const btn1 = document.querySelector('.btn_user1');
    const btn2 = document.querySelector('.btn_user2');

    if (kiemTraUser) {
        btn1.style.display = 'none';
        btn2.style.display = 'block';
        btnUser = KTUser.slice(0, 6) + "..."
        document.querySelector(".btn_user2_text").innerHTML = btnUser
    } else {
        btn1.style.display = 'block';
        btn2.style.display = 'none';
    }
}
tenTaiKhoanHeader()



const button = document.querySelector('[data-target="#anUser"]');
const targetElement = document.querySelector('#anUser');

// button.addEventListener('click', function () {
//     targetElement.classList.toggle('show');
// });
document.querySelector(".btn_user_tenND").innerHTML = "Tài khoản: " + KTUser


function dangNhapKoTK() {
    window.location.href = "Dangnhap.html"
}

function logOutUser() {
    if (kiemTraUser) {
        localStorage.removeItem("UserChinh");
        window.location.href = "../index.html"
    }
}




//3: chỉnh lại API
//Giỏ hàng lưu local, API: 1. danh sách sản phẩm, có id, ảnh,... 2.lọc sản phẩm 3.lấy chi tiết sản phẩm 4.đăng nhập và đăng ký

//lọc sản phẩm theo danh mục, tăng giảm giá, hoặc tìm kiếm


// nếu có thời gian, xem lại SASS và phân chia lại vị trí folder
