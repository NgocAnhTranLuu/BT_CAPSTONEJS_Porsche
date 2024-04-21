

let soLuongGioHang = localStorage.getItem("totalQty")
if (soLuongGioHang == null) {
    soLuongGioHang = 0;
}
document.querySelector(".cardNumber").innerText = soLuongGioHang
// console.log(soLuongGioHang)

// let addCard = localStorage.getItem("myCard")
// if (addCard == null) {
//     addCard = [];
// } else {
//     addCard = JSON.parse(localStorage.getItem("myCard"))
// }


// let tongTien = 0
// let strHeader = `
//     <tr>
//         <th>Sản phẩm</th>
//         <th>Hình</th>
//         <th>Giá</th>
//         <th>Số lượng</th>
//         <th>Thành tiền</th>
//         <th></th>
//     </tr>
// `
// let strData = ""

// addCard.forEach(item => {
//     strData += `
//     <tr>
//         <td>${item.sp.ten}</td>
//         <td>
//             <img src="../img/10.HinhGioHang/${item.sp.hinh[1]}" alt="" width="150px">
//         </td>
//         <td>${Number(item.sp.gia).toLocaleString()}</td>
//         <td>
//             <button class="btn btn-outline-dark">-</button>
//             <input class="btn btn-outline-dark" type="number" name="txtQty" id="txtQty" value="${item.qty}">
//             <button class="btn btn-outline-dark">+</button>
//         </td>
//         <td>${Number(item.sp.gia * item.qty).toLocaleString()}</td>
//         <td>
//             <button class="btn btn-danger">Xóa</button>
//         </td>
//     </tr>
//     `
//     tongTien += item.sp.gia * item.qty
// });

// document.querySelector("#tb_DSGioHang").innerHTML = strData
// document.querySelector("#TongTien").innerHTML = Number(tongTien).toLocaleString() + "VNĐ"



// for (const item of addCard) {
//     soLuongGioHang2 += item.qty;
//   }