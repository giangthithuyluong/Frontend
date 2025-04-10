var container = document.querySelector("div.main");

function lstDv(data) {
    let text = data?.map((value, index) =>
        `<div class="dongvat" id="stt${index}">
            <div>
                <img src="${value.image}" alt="loi">
                ${value.isSale ? `<p class="isSale">Giam gia ${(value.cost-value.sale)/value.cost*100}%</p>` : ""}
            </div>
            <div>
                ${value.isSale ? '<p class="oldCost">Gia goc: '+value.cost+' dong</p><p class="cost">Giam gia con '+value.sale+' dong</p>' : '<p class="cost">Gia chi '+value.cost+' dong</p>'}
                
            </div>
        </div>`
    ).join("");
    container.innerHTML += text;
}

var dv = [{
    image: "./src/image/Bài 1.jpg",
    isSale: true,
    cost: 100,
    sale: 70
}];

function lstDd(data) {
    let numFormat = new Intl.NumberFormat("vn-VI", { style: "currency", currency: "VND" });
    let text = data?.map((value, index) => 
        `<div class="didong" id="stt${index}">
            <div class="image">
                ${value.type ? `<p class="type">${value.type}</p>` : ""}
                ${value.isSale ? `<p class="isSale">-${Math.round((value.cost-value.sale)/value.cost*100)}%</p>` : ""}
                ${value.image ? `<img src="${value.image}" alt="loi">` : ""}
            </div>
            ${value.title ? `<p class="title">${value.title}${value.info ? " - "+value.info : ""}</p>` : ""}
            ${value.isSale ? `<p class="oldCost">${numFormat.format(value.cost)}</p><p class="cost">${numFormat.format(value.sale)}</p>` : `<p class="cost">${numFormat.format(value.cost)}</p>`}
        </div>`
    ).join("");
    container.innerHTML += text;
}

var dd = [{
    image: "./src/image/bài 2.png",
    type: "hot",
    title: "Apple iPhone 11 Pro",
    info: "64GB Chinh hang VN/A",
    isSale: true,
    cost: 30990000,
    sale: 27290000
}]