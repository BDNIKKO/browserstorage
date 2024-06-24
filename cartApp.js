
function initializeCart() {
    if (!localStorage.getItem('cart')) {
          localStorage.setItem('cart', JSON.stringify([])); 
        }
}

function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const item = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
    };
    addItem(item);
    this.reset();
});

document.getElementById('displayCartButton').addEventListener('click', displayCart);

// event.preventDefault(): Prevents the default form submission behavior (e.g., reloading the page).