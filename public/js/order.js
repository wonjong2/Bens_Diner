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
      document.location.assign("/api/menu/6");
    } else {
      alert(response.statusText);
    }
  }
};

//Countdown Timer in the
function Timer(time_of_order) {
  var secondsLeft = 30;
  var seconds_remaining = secondsLeft;
  var seconds_remaining_string = "";
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    // Each time the interval triggers, we subtract an interval amount
    secondsLeft--;
    seconds_remaining = secondsLeft;
    // This updates the timer count at the top of the webpage
    while(seconds_remaining > 600) {
        seconds_remaining -= 600;
    }

    if(seconds_remaining>100){
        seconds_remaining_string=seconds_remaining;
    } else {
        seconds_remaining_string=`0${Math.floor(seconds_remaining/10)}`;
    }

    if (document.querySelector(".countdown_timer") != null) {
      document.querySelector(".countdown_timer").textContent =
        "0" + Math.floor(secondsLeft / 60) + ":" +seconds_remaining_string;
    }

    // If statement filters if we've run out of time
    if (secondsLeft <= 0) {
      // Stops the timer at 0 or less seconds
      secondsLeft = 0;
      // Displays an alternate message instead of the timer
      if (document.querySelector(".countdown_timer") != null) {
        document.querySelector(".countdown_timer").textContent =
          "Food is ready for pickup!";
      }
      // Clears the interval to stop counting  time
      clearInterval(timerInterval);
    }
  }, 100); // NOTE: DECI-SECOND NOTATION, EVERY 1/10th OF A SECOND WE COUNT DOWN
}

// 'New Order' button
// document
//     .querySelector('.new-order')
//     .addEventListener('submit', newOrderHandler);

//Starts running the countdown timer by default
Timer(time_of_order);

// 'Cancel Order' button
document
  .querySelector("#cancel-btn")
  .addEventListener("click", cancelOrderHandler);
