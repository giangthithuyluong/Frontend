// Bai 1
{
    let arr = [1,2,'Nam','Hai',5,8,'Huy',3,6,'Nam'];
    console.log(`${arr[0]} ${arr[3]} ${arr[5]}`);
    arr[2] = "Luong";
    console.log(arr[2]);
    console.log("Phan tu dau tien la " + arr[0]);
    console.log("Phan tu cuoi cung la " + arr[arr.length-1]);
}
// Bai 2
{
    let arr2 = ["Lam", "Hai", "Huy", "Anh", "Duy"];
    console.log(arr2.length);
    console.log(arr2[0] + " " + arr2[arr2.length-1]);
    let temp = arr2[0];
    arr2[0] = arr2[arr2.length-1];
    arr2[arr2.length-1] = temp;
    arr2[4] = "Thai";
    console.log(arr2);
}
// Bai 3
{
    let luongt5 = {
        Anh: 1222000,
        Duy: 2250000,
        Thai: 222225455
    };
    console.log(luongt5.Duy);
    luongt5.Thai = 40000000;
    luongt5.Truong = 4444444;
    let sum = Object.keys(luongt5).map(key => luongt5[key]).reduce((pre, value) => pre+value, 0);
    console.log("Tong luong thang 5 cua Anh, Duy, Thai, Truong la "+sum);
}
// Bai 4
{
    let arr004 = [1,13,5,7,8,9,[6,9,12,5],10,[12,21,3],24, 22];
    let arr = arr004.filter(v => Array.isArray(v));
    arr.forEach(v => {
        console.log(`${v[0]} ${v[v.length-1]}`);
    })
    arr004.push(2);
    let sum = arr004[0] + arr004[arr004.length-1] + arr.map(v => v[0] + v[v.length-1]).reduce((pre, value) => pre+value, 0);
    console.log(sum);
}

// Bai 5
{
    let arr1 = [1,12,3,5,7,8,9,15,2] ;  
    let arr2 =  [7,2,3,5,3,8,9,15,2] ;
    console.log(`${arr1[0]} ${arr1[arr1.length-1]} ${arr2[0]} ${arr2[arr1.length-1]}`);
    let temp = arr1[0];
    arr1[0] = arr1[arr1.length-1];
    arr1[arr1.length-1] = temp;
    let first = arr2.shift();
    arr2.unshift(arr2.pop());
    arr2.push(first);
    console.log(arr1 + "  " + arr2);
    let sum = arr1[0] + arr1[arr1.length-1] + arr2[0] + arr2[arr2.length-1];
    let sub = arr1[0] - arr1[arr1.length-1] - arr2[0] - arr2[arr2.length-1];
    console.log(sum + ", " + sub);
    arr1.push(7,9,11,13);
    arr2.push(1,5,7);
    let tong = arr1.concat(arr2).reduce((pre, value) => pre + value, 0);
    console.log(tong);
    sum = arr1[0] + arr1[arr1.length-1] + arr2[0] + arr2[arr2.length-1];
    sub = arr1[0] - arr1[arr1.length-1] - arr2[0] - arr2[arr2.length-1];
    console.log(sum + ", " + sub);
}

// Bai 6
{
    let Nodemy = [
        {
            ho: 'Nguyen',
            ten: 'A',
            class: 'b1',
            subject: [{name: 'html'},{name: 'css'},{name: 'js'}]}, 
        {
            ho: 'Tran',
            ten: 'B',
            class: 'b2',
            subject: [{name: 'React'},{ name: 'js'}]}, 
        {
            ho: 'Nguyen',
            ten: 'C',
            class: 'b3',
            subject: [{name: 'css'},{name: 'React'}]},
        {
            ho: 'Dang',
            ten: 'D',
            class: 'b1',
            subject: [{name: 'css'},{name: 'js'},{name: 'React'}]
        }
    ];
    let nodeClass = Nodemy.reduce((pre, stu) => {
        if(pre.hasOwnProperty(stu.class)) {
            pre[stu.class].push(`${stu.ho} ${stu.ten}`);
        } else {
            pre[stu.class] = [`${stu.ho} ${stu.ten}`];
        }
        return pre;
    }, {});
    for(let key in nodeClass) {
        console.log('Lop: ' + key);
        nodeClass[key].forEach(stu => {
            console.log(stu);
        })
    }
    Nodemy = Nodemy.map(stu => {
        let index = stu.subject.findIndex(sub => sub.name == 'html');
        if(index != -1) stu.subject[index] = "Ruby";
        return stu;
    })
    Nodemy.push({
        ho: "Hoang",
        ten: "Van Duy",
        class: "b4",
        subject: [{name: "html"}, {name: "css"}, {name: "js"}, {name: "react"}]
    });
    Nodemy.forEach(stu => {
        console.log(`Hoc vien ${stu.ho} ${stu.ten} hoc ${stu.subject.length} mon hoc`);
    })
}

// Bai 8
{
    let user = {
        ten: 'tung',
        tuoi: 20,
        banBe: ['vy', 'tung', 'tuan'],
        diaChi: {
            tinh: 'HCM',
            quan: 'Q1'
        }
    }
    console.log(user.banBe);
    console.log(user.banBe.length > 0 ? user.banBe[user.banBe.length-1] : "Khong co ban:>");
    console.log(user.diaChi);
    console.log(`ten toi la ${user.ten}, toi ${user.tuoi}, toi o ${user.diaChi.quan} tinh ${user.diaChi.tinh}`);
    user.diaChi['duong'] = 'nguyen tuan';
    user.banBe.push('thai');
}