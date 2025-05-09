var bai4 = document.getElementById('bai4')
var nut = bai4.querySelector('.handle')
var anh = bai4.querySelector('.picDiv')
nut.classList.add('showPic')
nut.addEventListener('click', () => {
    nut.classList.toggle('showPic')
    nut.classList.toggle('hidePic')
    anh.classList.toggle('picture')
})