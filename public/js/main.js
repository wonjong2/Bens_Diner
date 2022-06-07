// Variable to have the latest cart menu, Array of menu objects
let cartMenu = [];

// Who is the current user?
const getUserInfo = () => document.querySelector(".username").textContent;

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
    const user = getUserInfo();
    saveCartToStorage(user, cartMenu);
};

/**
 * Function for deleting a menu from the cart and the localStorage
 * @param {number} index : The index to be deleted item in the cart
 * @returns {void} Nothing
 */
const deleteMenuFromCart = (index) => {
    cartMenu.splice(index, 1);
    const user = getUserInfo();
    saveCartToStorage(user, cartMenu);
};

/**
 * Function for the adding a menu to the cart and the localStorage
 * @param {number} index : The index to be deleted item in the cart
 * @returns {void} Nothing
 */
const renderCart = () => {
    let totalPrice = 0;
    const cartEl = document.querySelector("#cart-list");

    while (cartEl.firstChild) {
        cartEl.removeChild(cartEl.firstChild);
    }

    for (let i = 0; i < cartMenu.length; i++) {
        let menu = document.createElement("li");
        menu.innerHTML = `              <div class="d-flex justify-content-between">
        <p class="d-inline">${cartMenu[i].name}</p>
        <p class="d-inline">$${cartMenu[i].price}</p>
        <button class="deleteBlog no-button">
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
    let totPriceEl = document.querySelector("#total-price");
    totPriceEl.textContent = totalPrice;
};

// Event handlers for clicking a menu from menu lists
const selectMenuHandler = (event) => {
    // Update the Cart
    // And then save menu lists in the Cart to the localstorage
    let name = event.target;
    let price = event.target;

    const menu = {
        name,
        price,
    };

    addMenuToCart(menu);
    renderCart();
};

const initCart = () => {
    // cartMenu = [];
    // const user = getUserInfo();
    // cartMenu = getCartFromStorage(user);

    // TEST CODE
    cartMenu = [
        {
            name: "Beer1",
            price: 1.0,
        },
        {
            name: "Beer2",
            price: 1.5,
        },
        {
            name: "Beer3",
            price: 2.0,
        },
        {
            name: "Beer4",
            price: 2.5,
        },
    ];
    // TEST CODE
    if (cartMenu) {
        renderCart();
    }
};

// Event handler for deletion from the cart menus
const deleteMenuHandler = async (event) => {
    // DELETE ("api/order/cart/:id") - delete an item in the cart Trash can next to item in cart
    // event.preventDefault();
    // const id = document.querySelector('.card').dataset.postId;
    // if (id) {
    //     const response = await fetch(`/api/order/cart/${id}`, {
    //         method: 'DELETE',
    //     });
    //     if (response.ok) {
    //         document.location.assign('/api/menu');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
};

// Event handler for the 'Submit Order' button
const submitOrderHandler = async (event) => {
    // POST ("api/order/order-summary") - create the order and render the order summary page "Submit Order" button at the bottom of cart
    // event.preventDefault();
    //     // Send a PUT request to the API endpoint
    //     const response = await fetch('/api/order/order-summary', {
    //         method: 'POST',
    //         body: JSON.stringify({ cartMenu }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     if (response.ok) {
    //         document.location.replace('??');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
};

// Click a menu item
document
    .querySelectorAll(".menu-card")
    .addEventListener("submit", selectMenuHandler);

// Click 'delete' icon from the cart
// document
//     .querySelector('.cart-menus')
//     .addEventListener('submit', deleteMenuHandler);

// 'Submit Order' button
// document
//     .querySelector('.submit-order')
//     .addEventListener('submit', submitOrderHandler);

// Initialize the cart
initCart();
