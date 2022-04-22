//item.children[0]this brings out the content of the first child in the div that has an id of item  the .src brings out the source of the image
let addItemId = 0;
let value = 0
function addTocart(item) {
    if (item.id === item.id) {
        console.log(item.id, item)
        addItemId += 1
        value +=1
        const cart = document.querySelector('.cart-container');
        cart.innerHTML = `
    <div class="order-card"><img class="order-img" src="${item.children[0].src}" alt=""
    srcset="">
<div class="order-detail">
    <p>${item.children[1].children[0].innerText}</p>
    <i class="fas fa-times"></i> <input type="number" value='${value}'>
</div>
<h4 class="order-price">${item.children[1].children[1].innerText
            }</h4>
</div>
</div>`
    }else{
        addItemId += 1
        value =1
        const cart = document.querySelector('.cart-container');
        cart.innerHTML += `
    <div class="order-card"><img class="order-img" src="${item.children[0].src}" alt=""
    srcset="">
<div class="order-detail">
    <p>${item.children[1].children[0].innerText}</p>
    <i class="fas fa-times"></i> <input type="number" value='${value}'>
</div>
<h4 class="order-price">${item1.children[1].children[1].innerText
            }</h4>
</div>
</div>`
    }
}

