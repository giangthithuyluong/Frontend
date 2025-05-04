var sum =-1;
	for(var i = 0; i<100; i++){
		var sum = i * 100
	}
console.log(sum, i);

var person2 = {
    name: 'hiep', birthDay: '1999-01-26'
}
function formatBirthday() {
    let date = new Date(this.birthDay)
    this.birthDay = date.toLocaleString('vi-VN', {day: 'numeric', month: '2-digit', year: 'numeric'}).replaceAll('/', '-')
}
function capitalName(){
    this.name = this.name.toUpperCase();
}
formatBirthday.call(person2)
capitalName.call(person2)
console.log(person2)

// const x = setInterval(() => {
//     console.log('hello')
// }, 1000)

var result1, result2, result3
var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(2)
    }, 3000);
})
var promise2 = (result1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(result1*3)
        }, 2000);
    })
}
var promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(result2>10 ? 'true' : 'false')
    }, 2000);
})

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })


async function test() {
    result1 = await promise1    
    result2 = await promise2(result1)
    result3 = await promise3
    
    console.log(result1, result2, result3)
}

test()

{
    let shop = 100
    let khachHang = 10

    const result = async () => {
        let x = await new Promise((res, rej) => {
            setTimeout(() => res(khachHang > 3 ? true : false), 1000)
        })
            .then(checkSodu => {
                return new Promise((res, rej) => {
                    if(checkSodu) {
                        khachHang -= 3
                        shop += 3
                        res([khachHang, shop])
                    } else 
                        rej('So du khong du')
                })
            })
            .then(() => {
                return new Promise((res, rej) => {
                    khachHang += 3/100*10
                    shop -= 3/100*10
                    res([khachHang, shop])
                })
            })
            .catch((err) => console.log(err))
        console.log(x)
    } 
    result()
}

// Bat dong bo (Brower API(setTimeout, event, ...), Promise)
// Promise (pending, fulfiled, reject)
// .all([promises]) / .allSettled
// async await