// Event handler for the 'Cancel Order' button
const cancelOrderHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector("[data-id]").dataset.id;
  if (id) {
    const response = await fetch(`/api/order/order-summary/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Your order has been cancelled!");
      document.location.replace("/api/menu/6");
    } else {
      alert(response.statusText);
    }
  }
};

//Countdown Timer in the
function Timer() {
  var imported_time = document.querySelector(".countdown_timer").textContent;
  if (imported_time == "Order ready for pickup!") {
    var secondsLeft = 0;
  }
  else {
    var secondsLeft = parseInt(imported_time);
  }
  var seconds_remaining = secondsLeft;
  var seconds_remaining_string = "";
  console.log(imported_time);

  // Sets interval in variable
  var timerInterval = setInterval(function () {
    // Each time the interval triggers, we subtract an interval amount
    secondsLeft--;
    seconds_remaining = secondsLeft;
    // This updates the timer count at the top of the webpage
    while (seconds_remaining > 600) {
      seconds_remaining -= 600;
    }

    if (seconds_remaining > 100) {
      seconds_remaining_string = seconds_remaining;
    } else {
      seconds_remaining_string = `0${Math.floor(seconds_remaining / 10)}`;
    }

    if (imported_time != "Order ready for pickup!") {
      if (document.querySelector(".countdown_timer") != null) {
        document.querySelector(".countdown_timer").textContent =
          "0" + Math.floor(secondsLeft / 60) + ":" + seconds_remaining_string;
      }
    };
    // If statement filters if we've run out of time
    if (secondsLeft <= 0) {
      // Stops the timer at 0 or less seconds
      secondsLeft = 0;
      // Displays an alternate message instead of the timer
      if (document.querySelector(".countdown_timer") != null) {
        document.querySelector(".countdown_timer").textContent =
          "Order ready for pickup!";
      }
      // Clears the interval to stop counting  time
      clearInterval(timerInterval);
    }
  }, 100); // NOTE: DECI-SECOND NOTATION, EVERY 1/10th OF A SECOND WE COUNT DOWN
}

//Starts running the countdown timer by default
Timer();

// 'Cancel Order' button
document
  .querySelector("#cancel-btn")
  .addEventListener("click", cancelOrderHandler);
