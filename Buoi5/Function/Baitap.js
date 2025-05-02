// Basic
{
    const bai1 = (array) => {
        let tong = 0
        let tich = 1
        if(Array.isArray(array)) {
            tong = array.reduce((tong, giatri) => tong+giatri, 0)
            tich = array.reduce((tich, giatri) => tich*giatri, 1)
        }
        return [tong, tich]
    }
    const bai3 = (array) => {
        if(Array.isArray(array)) {
            return array.reverse()
        }
        return null
    }
    const bai4 = (number, array) => {
        if(typeof(number) == 'number' && Array.isArray(array)) {
            return array.filter(v => v == number).length
        }
        return null
    }
    const bai6 = (string) => {
        if(typeof(string) == 'string') {
            string.replaceAll(' ', '-')
        }
        return string
    }
    var shop = [
        {id: 1, product:'Dày da  ', price: 259000, store: 100},
        {id: 2, product: 'Dép lào', price: 129000, store: 230},
        {id: 3, product: 'Giày cao gót', price: 749000, store: 130},
        {id: 4, product: 'Dép tông', price: 499000, store: 240},
    ] 
    const bai12 = (name, quantity, shop = shop) => {
        let sp = shop.find(v => v.product == name)
        if (sp.store <= 0) console.log("Shop da het SP ban can mua")
        else {
            sp.store = Math.max(sp.store - quantity, 0)
            return sp.price * quantity
        }
    }
    const bai14 = (sanPham) => {
        let tongDoanhThu = sanPham.map(value => value.gia*value.doanhThu).reduce((tong, doanhThu) => tong+doanhThu, 0)
        return tongDoanhThu
    }
}

// Advace
{
    let options = {hour: 'numeric', minute: 'numeric', second: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric'}
    let date = new Date('2025-05-02T17:22:53.528Z').toLocaleString("vi-VN", options)
    console.log(date);
    
    const bai2 = (d = date) => {
        let options = {hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric'}
        let [[hour, minute, second], [day, month, year]] = d.split(' ').map((v, i) => v.split(i == 0 ? ':' : '/'))
        month--;
        let date  = new Date(year, month, day, hour, minute, second)
        let result = {}
        result.Nhat = date.toLocaleTimeString("vi-VN", {timeZone: 'Asia/Tokyo', ...options})
        result.Anh = date.toLocaleString("vi-VN", {timeZone: 'Europe/London', ...options})
        result.My = date.toLocaleString("vi-VN", {timeZone: 'America/New_York', ...options})
        console.log(result);
        
    }
    bai2();
}