var bai7 = document.getElementById('bai7')
var chuoi = bai7.querySelector('#text')
var nut = bai7.querySelector('#form_submit')

function Chuyen(text) {
    return text.split('').map(char => {
        return char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    }).join('')
}

nut.addEventListener('click', () => {
    let noidung = chuoi.value
    bai7.querySelector('p#result').innerHTML = Chuyen(noidung)
})