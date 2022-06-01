//item.children[0]this brings out the content of the first child in the div that has an id of item  the .src brings out the source of the image
let cartItems = []
const cart = document.querySelector('.cart-container');
let countValue = document.querySelector('.count-value');


function calcSumPrice() {
    
}
function updateCartItems(item, itemsInCart) {   //function to update cart list
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].productId == item.id) {  //check if the cartitem is already in the list so it wont create another product with same content instead it increases the count
            cartItems[i].count += 1;
            cartItems[i].price = cartItems[i].count * cartItems[i].basePrice; //calculates the price per count increase

            return
        }
    }
    
    cartItems.push(itemsInCart);
}
function updateCartView() { //function to update cart view in HTML
    if (cartItems.length >= 0) { //This checks if the cart is empt so it can hide the procced to check out button and the total
        let result = cartItems.map(product => {
            return `
            <div class="order-card"><img class="order-img" src="${product.image}" alt="" srcset="">
            <div class="order-detail">
            <p>${product.name}</p>
            <i class="fas fa-times"></i> <input type="number" class="count-value" value='${product.count}'>
            </div>
            <h4 class="order-price"><span style="font-weight: 700;">&#x20A6</span>${product.price}</h4>
            </div>
            </div>`
        })
        cart.innerHTML = result.join('')
    }
    else {
        console.log('cruise');
        document.querySelector('.sumandcheckout').style.display = 'none';
        cart.innerHTML = `<h4>Your cart is empty</h4>`
    }
}
function addTocart(item) {

    let itemsInCart = {
        productId: item.id,
        name: item.children[1].children[0].innerText,
        image: item.children[0].src,
        price: +item.children[1].children[1].children[1].innerText,
        basePrice: +item.children[1].children[1].children[1].innerText,
        count: 1,
        // totalCost: ,
    }
    updateCartItems(item, itemsInCart);
    updateCartView();

}


updateCartView()
