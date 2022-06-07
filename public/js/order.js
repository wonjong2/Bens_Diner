// Event handler for the 'New Order' button, it leads to the main page
// const newOrderHandler = async (event) => {
//     event.preventDefault();
//     document.location.replace("/api/menu");
// };

// Event handler for the 'Cancel Order' button
const cancelOrderHandler = async (event) => {
  // DELETE ("api/order/order-summary/:id") - delete the newly created order "Cancel Order" button on order summary page
  event.preventDefault();
  const id = document.querySelector("[data-id]").dataset.id;
  if (id) {
    const response = await fetch(`/api/order/order-summary/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Your order has been cancelled!");
      document.location.assign("/api/menu");
    } else {
      alert(response.statusText);
    }
  }
};

// 'New Order' button
// document
//     .querySelector('.new-order')
//     .addEventListener('submit', newOrderHandler);

// 'Cancel Order' button
document
  .querySelector("#cancel-btn")
  .addEventListener("click", cancelOrderHandler);
