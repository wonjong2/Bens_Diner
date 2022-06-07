const menuEls = document.querySelectorAll(".menu-card");
// const deleteEls = document.querySelectorAll(".deleteBlog");

// Variable to have the latest cart menu, Array of menu objects
let cartMenu = [];

// Who is the current user?
const currentUser = document.querySelector(".username").textContent;

/**
 * Function for getting the cart data from the localStorage
 * @param {string} user : Current user's name or email
 * @returns {array} : Array of menu objects (name, price, qty)
 */
const getCartFromStorage = (user) => JSON.parse(localStorage.getItem(user));

/**
 * Function for saving data to the localStorage
 * @param {string} user : Current user's name or email
 * @param {array} menulist : Array of menu objects (name, price, qty)
 * @returns {void} Nothing
 */
const saveCartToStorage = (user, menuList) =>
    localStorage.setItem(user, JSON.stringify(menuList));

/**
 * Function for adding a menu to the cart and the localStorage
 * @param {object} menu : Selected menu by user (name, price, qty)
 * @returns {void} Nothing
 */
const addMenuToCart = (menu) => {
    cartMenu.push(menu);
    saveCartToStorage(currentUser, cartMenu);
};

/**
 * Function for deleting a menu from the cart and the localStorage
 * @param {number} index : The index to be deleted item in the cart
 * @returns {void} Nothing
 */
const deleteMenuFromCart = (index) => {
    cartMenu.splice(index, 1);
    saveCartToStorage(currentUser, cartMenu);
};

/**
 * Function for the adding a menu to the cart and the localStorage
 * @param {number} index : The index to be deleted item in the cart
 * @returns {void} Nothing
 */
const renderCart = () => {
    let totalPrice = 0;
    const cartEl = document.getElementById("cart-list");

    while (cartEl.firstChild) {
        cartEl.removeChild(cartEl.firstChild);
    }

    for (let i = 0; i < cartMenu.length; i++) {
        let menu = document.createElement("li");
        menu.innerHTML = `              <div class="d-flex justify-content-between">
        <p class="d-inline">${cartMenu[i].name}</p>
        <p class="d-inline">$${cartMenu[i].price}</p>
        <button class="deleteBlog no-button" data-index="${i}">
          <i
            class="avoid-clicks fa fa-trash"
            style="font-size: 24px"
          ></i>
        </button>
      </div>`;
        cartEl.appendChild(menu);
        console.log(typeof cartMenu[i].price, typeof cartMenu[i].qty);
        totalPrice += cartMenu[i].price * cartMenu[i].qty;
    }
    const totPriceEl = document.querySelector("#total-price");
    totPriceEl.textContent = totalPrice;

    const deleteEls = document.querySelectorAll(".deleteBlog");
    deleteEls.forEach((item) => {
        item.addEventListener("click", deleteMenuHandler);
    })
};

// Event handlers for clicking a menu card from menu lists
const selectMenuHandler = (event) => {
    // Update the Cart
    // And then save menu lists in the Cart to the localstorage
    const id = event.currentTarget.id;
    const name = event.currentTarget.querySelector("h5.card-title").textContent;

    const price = event.currentTarget.querySelector("p.card-text").textContent;

    const menu = {
        id,
        name,
        price,
        qty: "1",
    };

    addMenuToCart(menu);
    renderCart();
};

const initCart = () => {
    cartMenu = getCartFromStorage(currentUser);

    if (cartMenu) {
        renderCart();
    } else {
        cartMenu = [];
    }
};


// Event handler for deletion from the cart menus
const deleteMenuHandler = (event) => {
    // DELETE ("api/order/cart/:id") - delete an item in the cart Trash can next to item in cart
    const index = event.currentTarget.dataset.index;
    deleteMenuFromCart(index);
    renderCart();
};

const delAllMenuFromCart = () => {
    cartMenu = [];
    saveCartToStorage(currentUser, cartMenu);
}
// Event handler for the 'Submit Order' button
const submitOrderHandler = async (event) => {
    // POST ("api/order/order-summary") - create the order and render the order summary page "Submit Order" button at the bottom of cart
    event.preventDefault();

    const price_total = document.querySelector('#total-price').textContent;
    // Client knows only user's first name
    const user_id = document.querySelector('p.username').textContent;

    // Send a PUT request to the API endpoint
    const response = await fetch("/api/order/order-summary", {
        method: "POST",
        body: JSON.stringify({ item_list: cartMenu, price_total, user_id }),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        delAllMenuFromCart();
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
};

// Click a menu card
menuEls.forEach((menuCard) => {
    menuCard.addEventListener("click", selectMenuHandler);
});

// Click 'trash' icon from the cart
// deleteEls.forEach((item) => {
//     item.addEventListener("click", deleteMenuHandler);
// });

// 'Submit Order' button
document
    .querySelector("#submit-order-btn")
    .addEventListener("click", submitOrderHandler);

// Initialize the cart
initCart();
