const menuEls = document.querySelectorAll(".menu-card");

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
    // Create all elements for the cart menu
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
    // Calculate the total price for the cart menu
    totalPrice += cartMenu[i].price * cartMenu[i].qty;
  }
  const totPriceEl = document.querySelector("#total-price");
  totPriceEl.textContent = totalPrice.toFixed(2);

  // Add event listeners for the trash icons
  const deleteEls = document.querySelectorAll(".deleteBlog");
  deleteEls.forEach((item) => {
    item.addEventListener("click", deleteMenuHandler);
  });
};

// Event handlers for clicking a menu card from menu lists
const selectMenuHandler = (event) => {
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

// Event handler for deletion from the cart menus
const deleteMenuHandler = (event) => {
  const index = event.currentTarget.dataset.index;
  deleteMenuFromCart(index);
  renderCart();
};

// Delete all menus from the cart
const delAllMenuFromCart = () => {
  cartMenu = [];
  saveCartToStorage(currentUser, cartMenu);
};

// Event handler for the 'Submit Order' button
const submitOrderHandler = async (event) => {
  event.preventDefault();

  const price_total = document.querySelector("#total-price").textContent;

  let item_list = [];
  for (i = 0; i < cartMenu.length; i++) {
    item_list.push(cartMenu[i].id);
  }

  // Send a POST request to the API endpoint
  const response = await fetch("/api/order/order-summary", {
    method: "POST",
    body: JSON.stringify({ item_list, price_total }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    delAllMenuFromCart();
    const body = await response.json();
    document.location.replace(`/orderhistory/${body.id}`);
  } else {
    alert(response.statusText);
  }
};

// Click a menu card
menuEls.forEach((menuCard) => {
  menuCard.addEventListener("click", selectMenuHandler);
});

// 'Submit Order' button
document
  .querySelector("#submit-order-btn")
  .addEventListener("click", submitOrderHandler);

// Initialize the cart
const initCart = () => {
  cartMenu = getCartFromStorage(currentUser);

  if (cartMenu) {
    renderCart();
  } else {
    cartMenu = [];
  }
};

initCart();
