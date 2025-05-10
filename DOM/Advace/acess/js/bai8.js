const sanpham = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71']

var danhsach = document.getElementById('products')
var sp = document.getElementById('new_product')
var btnThem = document.getElementById('form_submit_add')
var btnSua = document.getElementById('form_submit_edit')
btnSua.style.display = 'none'
var index // trIndex

const Themsanpham = (sp) => {
    let tensp = document.createElement('td')
    tensp.className = 'name'
    tensp.innerText = sp
    let sua = document.createElement('td')
    sua.appendChild(Nutsua())
    let xoa = document.createElement('td')
    xoa.appendChild(Nutxoa())

    let tr = document.createElement('tr')
    danhsach.querySelectorAll('tr').length % 2 != 0 && tr.classList.add('chan')
    tr.appendChild(tensp)
    tr.appendChild(sua)
    tr.appendChild(xoa)
    tr.appendChild(document.createElement('td'))
    danhsach.appendChild(tr)
}
const Capnhatsoluong = () => {
    document.querySelector('#bai8 #list #count').innerText = sanpham.length + ' products'
}

window.onload = () => {
    sanpham.forEach(sp => {
        Themsanpham(sp)
    })
    Capnhatsoluong()
}
btnThem.addEventListener('click', (e) => {
    e.preventDefault()
    if(Ktradauvao()) {
        sanpham.push(sp.value)
        Themsanpham(sp.value)
        sp.value = ''
    }
})
btnSua.addEventListener('click', (e) => {
    e.preventDefault()
    if(Ktradauvao()) {
        sanpham.splice(index-1, 1, sp.value)
        danhsach.querySelectorAll('tr')[index-1].querySelector('.name').innerText = sp.value
        sp.value = ''
        e.target.style.display = 'none'
        btnThem.style.display = 'inline-block'
        document.querySelector('#add_form .title').innerHTML = 'add new product'
    }
})

function Ktradauvao() {
    let check = (sp.value != '') && (sanpham.indexOf(sp.value) == -1)
    check || alert('Chua nhap hoac san pham da ton tai')
    return check
}

function Nutsua() {
    let sua = document.createElement('button')
    sua.innerText = 'Edit'
    sua.addEventListener('click', (e) => {
        document.querySelector('#add_form .title').innerHTML = 'edit product'
        btnThem.style.display = 'none'
        btnSua.style.display = 'inline-block'
        let tr = e.target.parentElement.parentElement  //tr
        index = tr.rowIndex
        sp.value = sanpham[index - 1]
    })
    return sua
}
function Nutxoa() {
    let xoa = document.createElement('button')
    xoa.innerText = 'Delete'
    xoa.addEventListener('click', (e) => {
        let tr = e.target.parentElement.parentElement  //tr
        let index = tr.rowIndex - 1
        if (confirm('Ban co chac muon xoa san pham ' + sanpham[index] + ' khong?')) {
            sanpham.splice(index, 1)
            tr.remove()
            Capnhatsoluong()
        }
    })
    return xoa
}