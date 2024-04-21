function saveToLocalStorage() {
    localStorage.setItem("myCard", JSON.stringify(addCard))
    localStorage.setItem("totalQty", soLuongGioHang + "")
}
function domSLGioHang() {
    document.querySelector(".cardNumber").innerText = soLuongGioHang
}

// -----------------------------------------------------------------

let danhSachSP = ""
for (let i = 0; i < arrSP.length; i++) {
    let obj = JSON.stringify(arrSP[i])

    danhSachSP += `
    <div class="card col-lg-4 col-md-6">
        <div class="model_box">
            <div class="model_img">
                <a href="./HTML/${arrSP[i].ten}.html">
                    <img src="./img/${arrSP[i].hinh[0]}" class="card-img-top" alt="...">
                </a>
                <div class="model_footer">
                    <a href="./HTML/${arrSP[i].ten}.html"><button class="btn_click_trang">Xem thêm</button></a>
                    <a >
                        <button class="btn_click_do" onclick=\'themGioHang(\`${obj}\`)\'>Thêm giỏ hàng</button>
                    </a>
                </div>
            </div>
            <div class="model_body">
                <a href="./HTML/${arrSP[i].ten}.html">${arrSP[i].ten}</a><br>
                <p>Giá từ ${Number(arrSP[i].gia).toLocaleString()} VNĐ*</p>
            </div>
        </div>
    </div>
    `

}

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
    soLuongGioHang++
    domSLGioHang()
    saveToLocalStorage()
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