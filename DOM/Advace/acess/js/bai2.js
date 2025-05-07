const api = 'http://localhost:3000/bai2'
var dulieu = []
// dang nhap
var dangnhap = document.getElementById('bai2_dangnhap')
if(dangnhap) {
    dangnhap.querySelector('#form_submit').onclick = DangNhap
}

// dang ky
var dangky = document.getElementById('bai2_dangky')
if(dangky) {
    dangky.querySelector('#form_submit').onclick = DangKy
}

async function GetData() {
    try {
        dulieu = await fetch(api)
            .then(res => res.json())
    } catch(err) {console.log(err)}
}
GetData()

async function PostData(taikhoanmoi) {
    const options = {
        method: 'POST',
        body: JSON.stringify(taikhoanmoi)
    }
    try {
        await fetch(api, options)
        dulieu.push(taikhoanmoi)
        return true
    } catch(err) {
        console.log(err)
        return false
    }
}

function DangNhap() {
    let taikhoan = dangnhap.querySelector('#user').value
    let matkhau = dangnhap.querySelector('#pass').value
    let kiemtra = dulieu.some(value => value.taikhoan == taikhoan && value.matkhau == matkhau)
    if(kiemtra) {
        alert('Dang nhap thanh cong')
        globalThis.location.href = 'Bai1.html'
    } else 
        alert('Tai khoan hoac mat khau khong chinh xac')
}
function DangKy() {
    let taikhoan = dangky.querySelector('#user').value
    let matkhau = dangky.querySelector('#pass').value
    let xacnhan = dangky.querySelector('#confirm').value
    let kiemtra = xacnhan == matkhau && !dulieu.some(value => value.taikhoan == taikhoan && value.matkhau == matkhau)
    kiemtra && PostData({
        taikhoan: taikhoan,
        matkhau: matkhau
    }) && history.back()
}