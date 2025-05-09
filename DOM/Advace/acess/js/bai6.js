const user = [
    {username:'username1', password:'password1'},
    {username:'nguyen van nam', password:'1232123'},
    {username:'hoang van dai', password:'45456456'},
    {username:'nguyen the nam', password:'1342442442'},
]
var bai6 = document.getElementById('bai6')
var dangnhap = bai6.querySelector('#form_submit_signin')
var dangky = bai6.querySelector('#form_submit_signup')
var danhSach = bai6.querySelector('#bai6_list')

function Themthongtin(username, password, isChan) {
    const thongtin = document.createElement('p')
    isChan && thongtin.classList.add('chan')
    thongtin.innerHTML = `<span class="thongtin">${username}</span> <span class="thongtin">${password}</span>`
    danhSach.appendChild(thongtin)
}

window.addEventListener('load', () => {
    user.forEach((u, i) => {
        Themthongtin(u.username, u.password, i%2!=0)
    })
})

dangnhap.addEventListener('click', (e) => {
    let taikhoan = bai6.querySelector('#user').value
    let matkhau = bai6.querySelector('#pass').value
    const ktra = user.some(u => u.username == taikhoan && u.password == matkhau)
    ktra ? alert('Dang nhap thanh cong') : alert('Tai khoan khong ton tai')
})

dangky.addEventListener('click', (e) => {
    let taikhoan = bai6.querySelector('#user').value
    let matkhau = bai6.querySelector('#pass').value
    const ktra = user.some(u => u.username == taikhoan && u.password == matkhau)
    !ktra ? user.push({username: taikhoan, password: matkhau}) && Themthongtin(taikhoan, matkhau, length) : alert('Tai khoan da ton tai')
})