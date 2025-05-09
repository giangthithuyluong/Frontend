let first = true
var bai3 = document.getElementById('bai3')
var so1 = bai3.querySelector('input#number1')
var so2 = bai3.querySelector('input#number2')
var lichsu = bai3.querySelector('#history')

bai3.querySelector('#form_submit').addEventListener('click', () => {
    let gtriSo1 = parseFloat(so1.value)
    let gtriSo2 = parseFloat(so2.value)
    if(gtriSo1 && gtriSo2) {
        if(first) {
            lichsu.innerHTML = `<caption>Lich su</caption>
            <tr>
                <td>So thu nhat</td>
                <td>So thu hai</td>
                <td>Tong</td>
                <td>Tich</td>
            </tr>`
            first = false
        }
        let tong = gtriSo1 + gtriSo2
        let tich = gtriSo1 * gtriSo2
        bai3.querySelector('p#tong').innerHTML = `${gtriSo1} + ${gtriSo2} = ${tong}`
        bai3.querySelector('p#tich').innerHTML = `${gtriSo1} * ${gtriSo2} = ${tich}`

        let hang = document.createElement('tr')
        hang.innerHTML = `<td>${gtriSo1}</td><td>${gtriSo2}</td><td>${tong}</td><td>${tich}</td>`
        lichsu.appendChild(hang)
    }
})