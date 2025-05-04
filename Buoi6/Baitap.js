// string
{
    // replace, replaceAll, trim, toUpperCase(lower): return copy, not change true string
    let arr = ['thai', 'linh', 'tung', 'quan', 'khang']
    let arrUp = arr.map(value => value.replace(value[0], value[0].toUpperCase()))
    console.log(arrUp)
    
    let string = 'nguyen thanh tung' 
    string = string.trim().split(' ').map(v=> v.replace(v[0], v[0].toUpperCase())).join(' ')
    console.log(string)
    
    let date = '15/10/2022'
    date = date.split('/').reverse().join('/')

    let greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'
    console.log(greeting.length)
    let copy = greeting.toLowerCase()
    let dem = ''
    while(copy.length>0) {
        dem += copy[0]
        copy = copy.replaceAll(copy[0], '')
    }
    console.log(dem + dem.length)
    console.log(greeting.indexOf('nodemy'))
    console.log(greeting.indexOf('Nodemy'))
    console.log(greeting.startsWith('Welcome'));
    console.log(greeting.substring(greeting.indexOf('Academy'), greeting.indexOf('Academy')+7))
    console.log(greeting.split(' '))
    console.log(greeting.trim())
    console.log(greeting.includes('Nodemy'))
    console.log(greeting.replace('Nodemy', 'NODEMY'))
    console.log(greeting.toUpperCase())
    console.log(greeting.charAt(4))
    
    console.log(greeting)   
}

// array
{
    let data = [1,2,3,1,2,3,4,5,6,5,4,6]
    let arr = data.reduce((a, v) => {
        a.indexOf(v) == -1 && a.push(v)
        return a
    }, [])
}

// date
{
    let now = new Date()
    let sinhNhat = new Date('2000-05-10')
    console.log(sinhNhat)
    let tuoi = sinhNhat.getMonth() > now.getMonth() || (sinhNhat.getMonth() == now.getMonth() && sinhNhat.getDate() > now.getDate())
    ? now.getFullYear() - sinhNhat.getFullYear() - 1
    : now.getFullYear() - sinhNhat.getFullYear()
    console.log(tuoi)
    
    let phucBirthday = '26-11-1992'
    let cuongBirthday = '27-11-1994'
    phucBirthday = phucBirthday.split('-').reverse().join('-')
    cuongBirthday = cuongBirthday.split('-').reverse().join('-')
    let pBd = new Date(phucBirthday)
    let cBd = new Date(cuongBirthday)
    console.log(pBd.getTime() > cBd.getTime() ? 'Cuong lon hon Phuc' : pBd.getTime() == cBd.getTime() ? 'Cuong va Phuc sinh cung ngay' : 'Phuc lon hon Cuong');
    let tinh = new Date(pBd.getTime()+100*24*60*60*10*10*10)
    console.log(tinh.toLocaleString('vi-VN', {weekday: 'long', day: 'numeric'}));
}

// math
{
    let arr1 = [1,2,3,5,7]
    let arr2 = [7,5,3,5,7,9]
    let max = Math.max(...arr1, ...arr2)
    console.log(max)
    
    let number = Math.random()*9+1 // Math.ramdom()*(max-min)+min
    console.log(number)
    let x =7.434345
    console.log(Math.round(x) + " " + Math.ceil(x) + " " + Math.floor(x))
    console.log(x.toFixed(2))
    console.log(x)
    Math.pow(2, 10)
}

// Bai tap
{
    let doan = {
        name: 'Doan',
        age: 22,
        salary: 1000
    }
    let trung = Object.assign({}, doan)
    trung.clone = true
}