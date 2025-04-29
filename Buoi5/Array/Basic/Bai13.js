var hoaQua = [
    {ten:"Xoai", sx:"China", sl:"100"},
    {ten:"Xoai", sx:"VietNam", sl:"130"},
    {ten:"Xoai", sx:"ThaiLan", sl:"100"},
    {ten:"Cam", sx:"China", sl:"200"},
    {ten:"Cam", sx:"ThaiLan", sl:"150"},
    {ten:"Nho", sx:"VietNam", sl:"120"},
    {ten:"Xoai", sx:"ThaiLan", sl:"100"},
];

//a
console.log(hoaQua.filter(v => v.sx == "VietNam"));

//b
console.log(hoaQua.filter(v => v.sl >= 150));

//c
function tenHoaQua(ten) {
    return hoaQua.filter(v => v.ten == ten);
}

//d
var noiSXHoaQua = new function(nuoc) {
    return hoaQua.filter(v => v.sx == nuoc);
}