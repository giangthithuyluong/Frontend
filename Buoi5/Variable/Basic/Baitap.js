// Bai 1
console.log('BootCamp thuc hanh buoi 14');
console.log(123456);
var name = "Luong", age = 22, address = "Ha Noi";
console.log(`${name} ${age} ${address}`);

// Bai 2
var human = {
    name: "Luong",
    gender: "Female",
    age: 22,
    birthday: new Date('2003-08-13'),
    isStudent: true
};
console.log(human);
for (const k in human) {
    if (Object.prototype.hasOwnProperty.call(human, k)) {
        const element = human[k];
        console.log(k + " : " + element);
    }
}
human.name = "Huyen";
human['age'] = 20;
human.ethnic = "Kinh";
console.log(Object.keys(human).map(k => `${k} - ${human[k]}`).join("\n"));

// Bai 3
var user = {
    ten: 'tung',
    tuoi: 20
};
console.log(user.ten + " " + user.tuoi);
user.ho = "nguyen";
user['tuoi'] = 30;

// Bai 4
var monthSalary = {
    January:    1000,
    February:    4000,
    March:      5400,
    April:      6040,
    May:        1700,
    June:       1000,
    July:       8000,
    August:     1600,
    September:  1000,
    October:    1700,
    November:   1903,
    December:   9050
}
console.log(Object.keys(monthSalary).slice(0, 3).map(key => monthSalary[key]).reduce((pre, value) => pre + value, 0));
let tong = 0;
for (const key in monthSalary) {
    if(monthSalary.hasOwnProperty(key)) {
        tong += monthSalary[key];
    }
}
console.log(tong/(Object.keys(monthSalary).length));
monthSalary.thang13 = 1000;
tong = 0;
for (const key in monthSalary) {
    if(monthSalary.hasOwnProperty(key)) {
        tong += monthSalary[key];
    }
}
console.log(tong/(Object.keys(monthSalary).length));

// Bai 5
var x = [1,3,5];
x[0] = x[2];
x[1] = x[0]
console.log(x);
// [5,5,5]

x = [1,3,5];
var y = [0,5,7];
x[0] = x[1] + y[2];
y[1] = y[2] - x[0];
console.log(x);
console.log(y);
// [10,3,5] [0,-3,7]

x = [1,3,5,8];
x[0] = x[x.length-1];
console.log(x);
// [8,3,5,8]

x = [1,3,5,8];
var temp = x[x.length-1];
x[x.length-1] = x[0];
x[0] = temp;
console.log(x);
// [8,3,5,1]

// Bai 6
var array = [1,6,8,7,6,9];
console.log(array.length);
console.log(array[0] + " " + array[array.length-1]);
array.push(5);
array[0] = 10;
array[array.length-1] = 10;

// Bai 7
var arr = [1,6,8,7,10,[6,8,7,4,3,5],3];
var sum = arr[0] + arr[arr.length-1] + sumCon();
function sumCon() {
    let arrCon = arr.find(v => Array.isArray(v));
    let sum = arrCon.reduce((pre, value) => pre + value, 0);
    return sum;
}
console.log(sum);
arr.push(10);
sum = arr[0] + arr[arr.length-1] + sumCon();
console.log(sum);
