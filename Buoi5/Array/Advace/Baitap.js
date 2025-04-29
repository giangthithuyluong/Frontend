// Bai 1
var bienLai = [
    {ten: "an", giaTri: 300},
    {ten: "binh", giaTri: 180},
    {ten: "hoang", giaTri: 170},
    {ten: "van", giaTri: 100},
    {ten: "lam", giaTri: 200},
    {ten: "thinh", giaTri: 210},
    {ten: "diep", giaTri: 100},
    {ten: "huong", giaTri: 100}
]
console.log(bienLai.filter(v => v.giaTri > 200));
console.log(bienLai.findIndex(v => v.ten == "lam"));
var equal = bienLai.reduce((pre, value) => {
    pre.length == 0 || pre.find(v => v.giaTri == value.giaTri) == undefined ?
    pre.push({ten: [value.ten], giaTri: value.giaTri})
    :
    pre.find(v => v.giaTri == value.giaTri).ten.push(value.ten);
    return pre;
}
, []);
console.log(equal);
bienLai = bienLai.map(v => {
    v.giaTri > 200 ? v.rank = "Vip" : v.rank = "normal";
    return v;
})
bienLai.sort((a, b) => b.giaTri - a.giaTri);
console.log(bienLai);

// Bai 2
var arr2 = [2,5,7,8,3,4,1,3,6,4,3,0];
console.log(arr2.slice(2,6));
arr2.forEach((v, i, arr) => {
    if(arr.indexOf(v, i+1) != -1 || (i > 0 && arr.lastIndexOf(v, i-1) != -1)) {
        console.log(i);
    }
})
console.log(arr2.find(v => {
    if(v == 2) return true;
    for(let i=2; i<Math.ceil(Math.sqrt(v)); i++) {
        if(v%i==0) return false;
    }
    return true;
}));

// Bai 3
var hoaQua = [
    {ten:"Xoai", sx:"China", sl:"100"},
    {ten:"Xoai", sx:"VietNam", sl:"130"},
    {ten:"Xoai", sx:"ThaiLan", sl:"100"},
    {ten:"Cam", sx:"China", sl:"200"},
    {ten:"Cam", sx:"ThaiLan", sl:"150"},
    {ten:"Nho", sx:"VietNam", sl:"120"},
    {ten:"Xoai", sx:"ThaiLan", sl:"100"},
];
hoaQua.forEach((v, i) => {
    v.ten == "Xoai" && console.log(i);
})
hoaQua.sort((a, b) => a.sl - b.sl);
console.log(hoaQua.at(hoaQua.length-1));
console.log(hoaQua.findIndex(v => v.sl == 400));

// Bai 4
var hocSinh=[
    {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
    {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
    {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
];
    
var khoiThi = [
    {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
    {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
    {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
];

hocSinh = hocSinh.map(hs => {
    let khoi = khoiThi.find(v => v.khoi == hs.khoi);
    let heSo = khoi.heSo;
    let tong = Object.keys(hs.diem).map(k => hs.diem[k]*heSo[k]).reduce((pre, diem) => pre+diem, 0);
    hs.tongDiem = tong;
    tong >= khoi.diemSan ? hs.ketQua = "Do" : hs.ketQua = "Truot";
    return hs;
})
console.log(hocSinh);

// Bai 5
var all = [
    {name: 'huy', score: 10, class: 'A'},
    {name: 'hai', score: 7, class: 'B'},
    {name: 'hung', score: 8, class: 'A'},
    {name: 'kien', score: 6, class: 'A'},
    {name: 'vinh', score: 9, class: 'B'},
    {name: 'binh', score: 8, class: 'B'},
    {name: 'cuong', score: 5, class: 'B'},
    {name: 'chien', score: 6, class: 'A'},
    {name: 'minh', score: 7, class: 'B'},
]
var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']
var arrayA = all.filter(v => v.class == "A");
var array = all.filter(v => v.score <= 6);
var arrayVip = all.filter(v => doiTuyen.indexOf(v.name) != -1);

// Bai 6: trung Bai 4

// Bai 7
var persons = [
    {
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '02-05-2020',
        age: 20
    },
    {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06-01-2020',
        age: 19
    },
    {
        name: 'Nam',
        class: 'Nodemy02',
        dateJoin: '25-01-2020',
        age: 20
    }
];
persons.sort((a, b) => a.age -b.age);
persons.sort((a, b) => {
    let [dayA, monthA, yearA] = a.dateJoin.split('-');
    let [dayB, monthB, yearB] = b.dateJoin.split('-');
    let dateA = new Date(yearA, monthA, dayA);
    let dateB = new Date(yearB, monthB, dayB);
    return dateA.getTime() - dateB.getTime();
});
persons.filter(v => Number.parseInt(v.dateJoin.split('-')[1]) < 2);
persons = persons.map(v => {
    v.name = v.name.toUpperCase();
    return v;
})
console.log(persons);

// Bai 8
var khachHang = [
    {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
    {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
    {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
    {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
    {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
    {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
    {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
]
var danhSachLoai = [
    {loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
]
khachHang = khachHang.map(v => {
    let loai = danhSachLoai.find(l => l.loai == v.phanLoai);
    let dinhMuc = v.giohang.trongLuong*loai.heSo;
    v.dinhMuc = dinhMuc;
    v.uudai = dinhMuc < loai.dinhMuc ? true : false;
    return v;
});
console.log(khachHang);
