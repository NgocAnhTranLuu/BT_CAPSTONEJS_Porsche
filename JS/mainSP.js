function saveToLocalStorage() {
    localStorage.setItem("myCard", JSON.stringify(addCard))
    localStorage.setItem("totalQty", soLuongGioHang + "")
}
function domSLGioHang() {
    document.querySelector(".cardNumber").innerText = soLuongGioHang
}


// -----------------------------------------------------------------

function layDanhSachTen() {
    let objAxios = axios({
        method: 'get',
        url: 'https://6625f889052332d5532128e0.mockapi.io/maSP',
    })

    objAxios.then(function (response) {
        // console.log(response.data)
        hienthiAPI(response.data)
        gioThemSP(response.data)

    }).catch(function (response) {
    });
}

layDanhSachTen()


function hienthiAPI(mang) {
    let arrSP2 = mang
    let danhSachSP = ""
    // let danhSachThemSP = ""
    for (let i = 0; i < arrSP2.length; i++) {
        let obj = JSON.stringify(arrSP2[i])

        danhSachSP += `
        <div class="card col-lg-4 col-md-6">
            <div class="model_box">
                <div class="model_img">
                    <a href="./${arrSP2[i].ten}.html">
                        <img src="../img/${arrSP2[i].hinh[0]}" class="card-img-top" alt="...">
                    </a>
                    <div class="model_footer">
                        <a href="./${arrSP2[i].ten}.html"><button class="btn_click_trang">Xem thêm</button></a>
                        <a >
                            <button class="btn_click_do" onclick=\'themGioHang(\`${obj}\`)\'>Thêm giỏ hàng</button>
                        </a>
                    </div>
                </div>
                <div class="model_body">
                    <a href="./${arrSP2[i].ten}.html">${arrSP2[i].ten}</a><br>
                    <p>Giá từ ${Number(arrSP2[i].gia).toLocaleString()} VNĐ*</p>
                </div>
            </div>
        </div>
        `

    }
    document.querySelector(".model_card").innerHTML = danhSachSP


}
// -----------------------------------------------------------------
function gioThemSP(mang) {
    let arrSP2 = mang
    let mangObj = {}
    let tenValue = document.querySelector(".gioThemSanPham").value

    if (tenValue !== null) {
        for (let i = 0; i < arrSP2.length; i++) {
            let obj = JSON.stringify(arrSP2[i])
            if (tenValue == arrSP2[i].ma) {
                mangObj = obj
            }
    
        }
    
        const gioHang = document.querySelectorAll(".gioThemSP");
    
        gioHang.forEach(element => {
            const button = document.createElement("button");
            button.className = "btn_click_do";
            button.textContent = "Thêm giỏ hàng";
            button.onclick = function() {
                themGioHang(mangObj);
              };
      
            element.appendChild(button);
        });
    }

}
// -----------------------------------------------------------------



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
    addStrData()

}


// -----------------------------------------------------------------
function addStrData() {
    let strData = ``;
    let tongTien = 0

    let KTID1 = document.querySelector("#tb_DSGioHang")
    let KTID2 = document.querySelector("#TongTien")
    // console.log(KTID1, KTID2)
    if (KTID1 !== null && KTID2 !== null) {
        addCard.map((item, index) => {
            strData += `
            <tr>
                <td><a href="./${item.sp.ten}.html">${item.sp.ten}</a></td>
                <td>
                    <img src="../img/10.HinhGioHang/${item.sp.hinh[1]}" alt="" width="150px">
                </td>
                <td>${Number(item.sp.gia).toLocaleString()}</td>
                <td>
                    <button onclick='minusQuantity(${index}, ${item.qty})' class="btn btn-secondary">-</button>
                    <span class='mx-2'>${item.qty}</span>
                    <button onclick='plusQuantity(${index})' class="btn btn-secondary">+</button>
                </td>
                <td>${Number(item.sp.gia * item.qty).toLocaleString()}</td>
                <td>
                    <button onclick='deleteSP(${index})' class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
            `;
            tongTien += item.sp.gia * item.qty
        });
        document.querySelector("#tb_DSGioHang").innerHTML = strData
        document.querySelector("#TongTien").innerHTML = Number(tongTien).toLocaleString() + " VNĐ"
    }

}


function plusQuantity(index) {
    addCard[index] = {
        ...addCard[index],
        qty: ++addCard[index].qty
    };
    soLuongGioHang++
    domSLGioHang()
    saveToLocalStorage();
    addStrData();
}

function minusQuantity(index, qty) {
    if (qty > 1) {
        addCard[index] = {
            ...addCard[index],
            qty: --addCard[index].qty
        };
        soLuongGioHang--
        domSLGioHang()
        saveToLocalStorage();
        addStrData();
    } else {
        alert('Quantity min is 1');
    }
}


function deleteSP(index) {
    soLuongGioHang -= addCard[index].qty
    addCard.splice(index, 1);

    saveToLocalStorage();
    addStrData();
    domSLGioHang()
}

// function cartLoadPage() {
addStrData();
// }