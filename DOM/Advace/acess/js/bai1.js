var bill = document.querySelector('input#bill')
var billAlert = document.querySelector('p#bill_alert')
var tip = document.querySelector('select#service')
var tipAlert = document.querySelector('p#service_alert')
var people = document.querySelector('input#people')
var peopleAlert = document.querySelector('p#people_alert')

document.getElementById('calculator_submit').addEventListener('click', (e) => {
    billAlert.innerHTML = bill.value ? '' : 'Vui long nhap hoa don'
    tipAlert.innerHTML = tip.value ? '' : 'Hay danh gia dich vu'
    peopleAlert.innerHTML = people.value ? '' : 'Nhap so nguoi chia bill'
    if(bill.value && tip.value && people.value) {
        let tienBill = parseInt(bill.value)
        let dichVu = parseInt(tip.value)
        let soNguoi = parseInt(people.value)
        let tienTip = (tienBill * dichVu / 100) / soNguoi
        alert('So tien tip cua moi nguoi la ' + tienTip + '$')
    }
})