var list = document.querySelector("div.list");

function ao(data) {
    var text = data?.map((value, index) => 
        `<div class="item" id="stt${index}">
            ${value.image ? "<img src='"+value.image+"' />" : "" }
            ${value.type ? "<p class='type'>"+value.type+"</p>" : ""}
            ${value.title ? "<p class='title'>"+value.title+"</p>" : ""}
            <p>
                ${value.isSale ? "<span class='oldCost'>$"+value.cost+"</span> $"+value.sale : "$"+value.cost}
            </p>
        </div>`
    ).join("");
    list.innerHTML = text;
}