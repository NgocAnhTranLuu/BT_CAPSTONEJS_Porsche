
function saveToLocalStorage() {
    localStorage.setItem("myCard", JSON.stringify(addCard))
    localStorage.setItem("totalQty", soLuongGioHang + "")
}
function domSLGioHang() {
    document.querySelector(".cardNumber").innerText = soLuongGioHang
}

// -----------------------------------------------------------------


//mỗi lần duyệt sẽ ra 1 cái card, nên dùng vòng lặp for để mỗi lần duyệt mảng SP sẽ ra 1 card sản phẩm
//gán chuỗi rỗng để add card vào chuỗi rỗng này
let danhSachSP = ""
for (let i = 0; i < arrSP.length; i++) {
    //do arrSP[i] khi onclick lưu là obj nên buộc phải ép chuỗi JSON hoặc phải để arrSP[i].ma để lấy mã SP000 ra khi click vào 1 SP
    let obj = JSON.stringify(arrSP[i])

    danhSachSP += `
    <div class="card col-lg-4 col-md-6">
        <div class="model_box">
            <div class="model_img">
                <a href="./${arrSP[i].ten}.html">
                    <img src="../img/${arrSP[i].hinh[0]}" class="card-img-top" alt="...">
                </a>
                <div class="model_footer">
                    <a href="./${arrSP[i].ten}.html"><button class="btn_click_trang">Xem thêm</button></a>
                    <a >
                        <button class="btn_click_do" onclick=\'themGioHang(\`${obj}\`)\'>Thêm giỏ hàng</button>
                    </a>
                </div>
            </div>
            <div class="model_body">
                <a href="./${arrSP[i].ten}.html">${arrSP[i].ten}</a><br>
                <p>Giá từ ${Number(arrSP[i].gia).toLocaleString()} VNĐ*</p>
            </div>
        </div>
    </div>
    `
    //đây là chuỗi card. bên HTML. chú ý phải có dấu ``. Thay đường link, tên, hình bằng: ${arrSP[i].hinh
    //price = Number(arrSP[i].gia).toLocaleString() ép kiểu số về chuỗi dấu ,
    //phải có onclick="" vào các nút

}

//in ra vị trí thẻ card
document.querySelector(".model_card").innerHTML = danhSachSP





// -----------------------------------------------------------------

let soLuongGioHang = localStorage.getItem("totalQty")
if (soLuongGioHang == null) {
    soLuongGioHang = 0;
}
domSLGioHang()

let addCard = localStorage.getItem("myCard")
if (addCard == null) {
    addCard = [];
} else {
    addCard = JSON.parse(localStorage.getItem("myCard"))
}

function themGioHang(objSP) {
    //phía trên đã ép kiểu nên trong này phải chuyển ngược lại là obj để xử lý
    objSP = JSON.parse(objSP)

    let flag = false

    for (let i = 0; i < addCard.length; i++) {
        if (addCard[i].sp.ma == objSP.ma) {
            addCard[i].qty++;
            flag = true;
            break;
        }

    }
    if (flag == false) {
        let cardItem = { sp: objSP, qty: 1 }
        addCard.push(cardItem)
    }

    // mỗi lần ấn là số ở giỏ hàng nhảy lên và phải dùng innerText vì nó add thông tin text vào thẻ p. và mỗi lần ấn là 1 lần lưu thông số sản phẩm
    soLuongGioHang++
    domSLGioHang()

    // lưu tạm vào local
    //phải chuyển về string thì local mới đọc đc, để number ko đọc đc
    saveToLocalStorage()
    // addStrData()

}




// -----------------------------------------------------------------
function gioHangChung(objSP) {
    let tenValue = document.querySelector(".gioHangChung").value

    for (let i = 0; i < arrSP.length; i++) {
        if (arrSP[i].ma == tenValue) {
            objSP = arrSP[i]
        }

    }
    soLuongGioHang++
    domSLGioHang()


    let flag = false
    for (let i = 0; i < addCard.length; i++) {
        if (addCard[i].sp.ma == objSP.ma) {
            addCard[i].qty++;
            flag = true;
            break;
        }

    }
    if (flag == false) {
        let cardItem = { sp: objSP, qty: 1 }
        addCard.push(cardItem)
    }

    saveToLocalStorage()
}


// -----------------------------------------------------------------
// function addStrData() {
//     let strData = ``;
//     let tongTien = 0
//     addCard.map((item, index) => {
//         strData += `
//         <tr>
//             <td>${item.sp.ten}</td>
//             <td>
//                 <img src="../img/10.HinhGioHang/${item.sp.hinh[1]}" alt="" width="150px">
//             </td>
//             <td>${Number(item.sp.gia).toLocaleString()}</td>
//             <td>
//                 <button onclick='minusQuantity(${index}, ${item.qty})' class="btn btn-secondary">-</button>
//                 <span class='mx-2'>${item.qty}</span>
//                 <button onclick='plusQuantity(${index})' class="btn btn-secondary">+</button>
//             </td>
//             <td>${Number(item.sp.gia * item.qty).toLocaleString()}</td>
//             <td>
//                 <button onclick='deleteSP(${index})' class="btn btn-danger">Xóa</button>
//             </td>
//         </tr>
//         `;
//         tongTien += item.sp.gia * item.qty
//     });
//     document.querySelector("#tb_DSGioHang").innerHTML = strData
//     document.querySelector("#TongTien").innerHTML = Number(tongTien).toLocaleString() + " VNĐ"
// }


// function plusQuantity(index) {
//     addCard[index] = {
//         ...addCard[index],
//         qty: ++addCard[index].qty
//     };
//     soLuongGioHang++
//     domSLGioHang()
//     saveToLocalStorage();
//     addStrData();
// }

// function minusQuantity(index, qty) {
//     if (qty > 1) {
//         addCard[index] = {
//             ...addCard[index],
//             qty: --addCard[index].qty
//         };
//         soLuongGioHang--
//         domSLGioHang()
//         saveToLocalStorage();
//         addStrData();
//     } else {
//         alert('Quantity min is 1');
//     }
// }


// function deleteSP (index) {
//     soLuongGioHang -= addCard[index].qty
//     addCard.splice(index, 1);

//     saveToLocalStorage();
//     addStrData();
//     domSLGioHang()
//   }

// // function cartLoadPage() {
//     addStrData();
// // }