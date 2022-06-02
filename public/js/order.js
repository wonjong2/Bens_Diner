// Event handler for the 'New Order' button
const newOrderHandler = async (event) => {
    // GET ("/api/menu/") - render the menu with default category

    // event.preventDefault();
    // document.location.assign('/api/menu');
}

// Event handler for the 'Cancel Order' button
const cancelOrderHandler = async (event) => {
    // DELETE ("api/order/order-summary/:id") - delete the newly created order "Cancel Order" button on order summary page

    // event.preventDefault();

    // const id = document.querySelector('.card').dataset.postId;

    // if (id) {
    //     const response = await fetch(`/api/order/order_summary/${id}`, {
    //         method: 'DELETE',
    //     });

    //     if (response.ok) {
    //         document.location.assign('/api/menu');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
}

// Event handler for the 'Return Home' button
const returnHomeHandler = async (event) => {
    // GET ("/api/menu/") - render the menu with default category

    // event.preventDefault();
    // document.location.assign('/api/menu');
}

// 'New Order' button
// document
//     .querySelector('.new-order')
//     .addEventListener('submit', newOrderHandler);

// 'Cancel Order' button
// document
//     .querySelector('.cancel-order')
//     .addEventListener('submit', cancelOrderHandler);

// 'Return Home' button
// document
//     .querySelector('.return-home')
//     .addEventListener('submit', returnHomeHandler);