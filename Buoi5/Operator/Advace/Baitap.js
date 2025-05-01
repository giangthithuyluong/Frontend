// Bai 1
{
    let x = 8;
    let a = 1 + x++ + 9; // 18 : x = 9
    let b = 7 + ++x + 3; // 20 : x = 10
    let c = 5 + x-- + 10; // 25 : x = 9
    let d = 6 + --x + 11; // 25 : x = 8
    console.log(`${x} ${a} ${b} ${c} ${d}`);
}

// Bai 2
{
    let a = 7, b = 7, c = 7;
    let p = (a+b+c)/2;
    console.log("Chu vi: " + p*2);
    a==b && a==c ? 
    console.log("Tam giac deu, Dien tich: "+ (Math.sqrt(p*(p-a)*(p-b)*(p-c))))
    : 
    console.log("Khong phai tam giac deu");
}

// Bai 3
{
    let r = 3;
    let d = r*2;
    let s = Math.PI*Math.pow(r, 2);
    let p = 2*Math.PI*r; // Math.PI*d
    console.log(`${r} ${d} ${s} ${p} `);   
}

// Bai 4
{
    let diem =7;
    console.log(diem < 0 ? "khong hop le" : diem < 5 ? "kem" : diem < 6.5 ? "trung binh" : diem < 8 ? "kha" : diem <= 10 ? "gioi" : "khong hop le");
}

// Bai 5
{
    let soDienThoai = ['+',8,4,9,7,2,9,5,4,1];
    console.log(soDienThoai.length==0 ? "khong duoc de trong" : soDienThoai.length==10 ? "sdt hop le" : "sdt khong hop le");
}

// Bai 6
{
    let x = -5;
    console.log(`So ${x} la so ${x<0 ? "am" : x>0 ? "duong" : "khong"}`);
    console.log(`So ${x} ${Math.round(x) == x ? "la" : "khong la"} so nguyen (so thap phan)`);    
}

// Bai 7
{
    let tuoi = 22;
    console.log(tuoi < 13 ? "tre em" : tuoi <= 17 ? 'thieu nien' : tuoi <=39 ? 'truong thanh' : tuoi <=65 ? 'trung nien' : 'gia');   
}

// Bai 9
{
    let a = 6; // chieu cao
    let b = 7; // chieu rong
    let c = 10; // chieu dai
    console.log(a*b*c);
    a==b&&a==c && console.log("Hinh lap phuong. The tich: "+(Math.pow(a, 3)));
    console.log("Duong cheo: " + Math.sqrt(Math.pow(b,2)+Math.pow(c,2)));
    console.log("Chu vi hinh hop: "+ 4*(a+b+cc));
    let sXQ = 2*a*(b+c);
    let sTP = sXQ + 2*(b*c);
    console.log(sXQ + " " + sTP);
}

// Bai 10
{
    let pi = 3.14;
    let r=8, d=r*2;
    let S = 4*pi*r*r; // pi*d*d
    let V = (4/3)*pi*Math.pow(r, 3);
    console.log(`${r} ${d} ${S} ${V}`);
}

// Bai 12 
{
    let tienLuong = 30; // trieu
    let thue = tienLuong > 80 ? 30*tienLuong/100 : tienLuong >= 20 ? 20*tienLuong/100 : 10*tienLuong/100;
    console.log("Thue: "+ thue);
    console.log("Thu nhap: "+ tienLuong - thue);
}