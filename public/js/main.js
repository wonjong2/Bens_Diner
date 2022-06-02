// Event handlers for clicking a menu from menu lists
const selectMenuHandler = async (event) => {
    // Update the Cart
    // And then save menu lists in the Cart to the localstorage
}

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
}

// Event handler for the 'Submit Order' button
const submitOrderHandler = async (event) => {
    // POST ("api/order/order-summary") - create the order and render the order summary page "Submit Order" button at the bottom of cart

    // event.preventDefault();

    //     // Send a PUT request to the API endpoint
    //     const response = await fetch('/api/order/order-summary', {
    //         method: 'POST',
    //         
    //     });

    //     if (response.ok) {
    //         document.location.replace('??');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }

}

// Click a menu item
// document
//     .querySelector('.menu-list)
//     .addEventListener('submit', selectMenuHandler);

// Click 'delete' icon from the cart
// document
//     .querySelector('.cart-menus')
//     .addEventListener('submit', deleteMenuHandler);

// 'Submit Order' button
// document
//     .querySelector('.submit-order')
//     .addEventListener('submit', submitOrderHandler);
