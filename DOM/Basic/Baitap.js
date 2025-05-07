// Bai1
var bai1Form = document.getElementById('bai1_form')
var bai1So = bai1Form.querySelector("#bai1_input")
var bai1Nut = bai1Form.querySelector('#bai1_button')
bai1Nut.addEventListener('click', () => {
    let so = bai1So.value
    document.querySelector('#bai1_p').innerHTML = so%2==0 ? so + ' la so chan' : so + ' la so le'
})

// Bai2
var bai2Nut = document.querySelector('button#bai2_button')
bai2Nut.addEventListener('click', () => {
    if(bai2Nut.innerHTML == 'An') {
        document.getElementById('bai2_p').style.visibility = 'hidden'
        bai2Nut.innerHTML = 'Hien'
    } else {
        document.getElementById('bai2_p').style.removeProperty('visibility')
        bai2Nut.innerHTML = 'An'
    }
})

// Bai3
var bai3To = document.querySelector('#bai3_buttonTo')
var bai3Nho = document.querySelector('#bai3_buttonNho')
const DoiChieuDai = (e) => {
    let thaydoi = e.target.innerHTML == 'To hon' ? 'To' : 'Nho'
    let element = document.getElementById('bai3_square')
    let canh = parseInt(element.style.width)
    element.style.width = (thaydoi == 'To' ? canh*2 : canh/2) + 'px'
    element.style.height = (thaydoi == 'To' ? canh*2 : canh/2) + 'px'
}
bai3To.onclick = DoiChieuDai
bai3Nho.addEventListener('click', DoiChieuDai)

// Bai 4
var bai4Chieucao = document.querySelector('#bai4_inputChieucao')
var bai4Cannang = document.querySelector('#bai4_inputCannang')
document.getElementById('bai4_button').onclick = (e) => {
    let chieucao = bai4Chieucao.value
    let cannang = bai4Cannang.value
    let BMI = cannang / (chieucao*chieucao)
    console.log(BMI)
    
    let text = BMI < 16 ? 'Gay do III' : BMI < 17 ? 'Gay do II' : BMI < 18.5 ? 'Gay do I' : BMI < 25 ? 'Binh thuong' : BMI < 30 ? 'Thua can' : BMI < 35 ? 'Beo phi do I' : BMI < 40 ? 'Beo phi do II' : 'Beo phi do III'
    document.querySelector('#bai4_p').innerHTML = text
}

// Bai 5
var bai5Text = ['Gioi thieu ban than: sap ra truong, dang that nghiep:((((', 'Khong biet viet gi']
var bai5Nut = document.getElementById('bai5_button')
bai5Nut.dataset.id = 1
bai5Nut.addEventListener('click', (e) => {
    let id = parseInt(bai5Nut.dataset.id)
    document.querySelector('#bai5_p').innerHTML = bai5Text[id]
    bai5Nut.dataset.id = id == 0 ? 1 : 0
})

// Bai 6
var bai6Anh = document.getElementById('bai6_anh')
function DoiViTri (e) {
    let left = bai6Anh.offsetLeft
    bai6Anh.style.marginLeft = (e.target.id == 'bai6_buttonLeft' ? (left > 100 ? left - 100 : 0) : left + 100) + 'px'
}
document.getElementById('bai6_buttonLeft').onclick = DoiViTri
document.getElementById('bai6_buttonRight').onclick = DoiViTri

// Bai 8
var bai8Text = document.getElementById('bai8_input')
document.getElementById('bai8_button').onclick = (e) => {
    let p = document.getElementById('bai8_p')
    let text = bai8Text.value
    p.innerHTML = `${text}${text.match(/^-?(\d)+$/) ? ' la so' : text.match(/^\W+$/) ? ' la ky tu dac biet' : ' la chu'}`
}

// Bai 12
const BienMat = (e) => {
    e.target.style.display = 'none'
}
document.querySelector('#bai12_div1').addEventListener('click', BienMat)
document.querySelector('#bai12_div2').addEventListener('click', BienMat)
document.querySelector('#bai12_div3').addEventListener('click', BienMat)

// Bai 14
document.querySelector('#bai14_button').onclick = () => {
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    document.body.style.background = `rgb(${r}, ${g}, ${b})`
}

// Bai 15
var bai15Form = document.querySelector('#bai15_form')
document.getElementById('bai15_openform').addEventListener('click', (e) => {
    bai15Form.style.display = 'block'
    e.target.style.display = 'none'
})
document.getElementById('bai15_closeform').addEventListener('click', (e) => {
    bai15Form.style.display = 'none'
    document.getElementById('bai15_openform').style.display = 'block'
})