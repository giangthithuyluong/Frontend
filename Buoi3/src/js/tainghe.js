var container = document.querySelector("div.main");

var data = [
    {
        image: "./src/image/bài 2.png",
        tragop: true,
        title: "Tai nghe Bluetooth sac khong day AirPods 2 Apple MRXJ2 Trang",
        isSale: false,
        cost: 5990000,
        sale: 0,
    },
    {
        image: "./src/image/Bài 1.jpg",
        tragop: true,
        title: "Tai nghe Bluetooth sac khong day AirPods 2 Apple MWP22 Trang",
        isSale: false,
        cost: 7990000,
        sale: 0,
    },
    {
        image: "./src/image/bài 2.png",
        tragop: true,
        title: "Tai nghe Bluetooth AirPods 2 Apple MV7N2 Trang",
        isSale: false,
        cost: 4990000,
        sale: 0,
    },
    {
        image: "./src/image/Bài 1.jpg",
        tragop: false,
        title: "Tai nghe nhet tai trong EarPods Lightning Apple MMTN2",
        isSale: false,
        cost: 790000,
        sale: 0,
    },
    {
        image: "./src/image/bài 2.png",
        tragop: false,
        title: "Adapter sac khong day Apple Watch MU9K2 Trang",
        isSale: false,
        cost: 850000,
        sale: 0,
    }
];
let f = new Intl.NumberFormat("vn-VI", {style: "currency", currency: "VND"});
let text = data.map((v, i) => 
    `<div class="tainghe" id="stt${i}">
        <div class="image">
            ${v.image ? `<img src='${v.image}'>` : ""}
            ${v.tragop ? `<p class="tragop">Tra gop 0%</p>` : ""}
        </div>
        ${v.title ? `<p class="title">${v.title}</p>` : ""}
        ${v.isSale ? `<p class="oldCost">${f.format(v.cost)}</p><p class="cost">${f.format(v.sale)}</p>` : `<p class="cost">${f.format(v.cost)}</p>`}
        
    </div>`
).join('');
container.innerHTML += text;