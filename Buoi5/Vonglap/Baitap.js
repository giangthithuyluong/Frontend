// Basic

// 1
{
    let array = [1,5,7,8,9,15,8]
    let tong = 0
    for (const e of array) {
        e%2==0 && console.log(e)
        e%5==0 ? tong = tong + e : ""
    }
    let tich = 1
    for (let i = 0; i< 3; i++) {
        array.length-1 >= i ? tich *= array[i] : ""
    }
    let index = 0
    let dem = 0
    while(index < array.length) {
        array[index] == 5 && console.log("Phan tu thu " + index + " la 5")
        array[index] == 8 && dem++
        index++
    }
    console.log(dem)
    
    console.log(tong)
}

// 2
{
    let data = [3,2,4,1,8,7,1,10,1,2]
    let vitri = -1
    for (let i = 0; i < data.length; i++) {
        const element = data[i]
        element == 1 && vitri == -1 && console.log("So 1 dau tien o vi tri: " + i)
        element == 1 ? vitri = i : ""
    }
    console.log(vitri != -1 ? "So 1 cuoi cung o vi tri: " + vitri : "Khong co so 1 trong day")
}

// 3 
{
    let data = [3,2,4,'5',1,8,7,'9']
    // 951879
    let reverse = []
    for (const e of data) {
        reverse.unshift(e)
    }
}

// Advace

// 1 
{
    let array =  [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2]
    let data = []
    for (const e of array) {
        e%10 == 1 && data.push(e)
    }
    console.log(data)
    console.log(array);
    
    const findIndexOf = (value, index, from = 0) => {
        let vitri = 0
        do {
            for(let i = from; i < array.length; i++) {
                if(array[i] == value) {
                    from = i
                    vitri++
                    break
                }
            }
        } while(vitri != index && from++)
        return from
    }
    console.log(findIndexOf(2, 3))
    let lap = {}
    for (const e of array) {
        lap.hasOwnProperty(e) ? lap[e]++ : lap[e] = 1
    }
    let max = Object.keys(lap).reduce((max, key) => lap[key] > lap[max] ? key : max, lap[array[0]])
    console.log(max)
}

// 2
{
    let array = [1,5,7,6,4,9,5,7,5,1]
    let min = Math.min(...array)
    let max = Math.max(...array)
    console.log(min + " " + max)
    
    for (let i = min+1; i < max; i++) {
        array.indexOf(i)==-1 && console.log(i)
    }
}

// 4
{
    let n = 5
    let giaithua = n
    for (let i = 1; i <= Math.floor(n/2); i++) {
        n - i == i ? giaithua *= i : giaithua *= i*(n-i)
    }
    console.log(giaithua);
}