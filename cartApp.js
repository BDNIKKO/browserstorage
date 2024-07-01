initializeCart();

function initializeCart() {
    // Check if 'cart' is not already present in localStorage
    if (!localStorage.getItem('cart')) {
        // If 'cart' is not present, initialize it as an empty array
        localStorage.setItem('cart', JSON.stringify([]));
    }
}


function addItem(item) {
    // Retrieve the cart from localStorage and parse it into an array
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    // Save the updated cart array back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from the cart by its id
function removeItem(id) {
    // Retrieve the cart from localStorage and parse it into an array
    let cart = JSON.parse(localStorage.getItem('cart'));
    //  removes the item with the specified id from the cart array by creating a new array without that item and assigning it back to cart.
    cart = cart.filter(item => item.id !== id);
    // Save the updated cart array back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    // Retrieve the cart from localStorage and parse it into an array
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

// Add an event listener to the form with id 'addItemForm' for the submit event
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the value of the input field with id 'itemName'
    const itemName = document.getElementById('itemName').value;
    // Get the value of the input field with id 'itemPrice' and convert it to a float
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    // Create a new item object with a unique id, name, and price
    const item = {
        id: Date.now(), // Use the current timestamp as a unique id
        name: itemName,
        price: itemPrice
    };
    
    addItem(item);
    this.reset();
});

// Add an event listener to the button with id 'displayCartButton' for the click event
document.getElementById('displayCartButton').addEventListener('click', displayCart);


// event.preventDefault(): Prevents the default form submission behavior (e.g., reloading the page).
// parseFloat(...): This function converts the string value obtained from the input field into a floating-point number.