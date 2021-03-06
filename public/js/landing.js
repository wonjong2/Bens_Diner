// Event handlers for the 'Login(Order Now)' button
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the main page
      document.location.replace("/api/menu/6");
    } else {
      const text = await response.json();
      if (text.message) {
        alert(text.message);
      } else {
        alert(response.statusText);
      }
    }
  }
};

// Event handler for the 'Signup' button
const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#signup-fname").value.trim();
  const last_name = document.querySelector("#signup-lname").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();
  const confirmPassword = document
    .querySelector("#signup-confirmPassword")
    .value.trim();

  if ((password === confirmPassword) & (password.length > 8)) {
    if (first_name && last_name && email && password) {
      const response = await fetch("/api/users/sign-up/", {
        method: "POST",
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/api/menu/6");
      } else {
        alert(response.statusText);
      }
    }
  } else {
    alert(
      "Passwords do not match OR password must be 8 characters. Please try again!"
    );
  }
};

// Event handler for the 'View Status' button
const viewStatusHandler = async (event) => {
  event.preventDefault();
  const orderNumber = document.querySelector("#order-number").value.trim();

  const response = await fetch(`/orderhistory/${orderNumber}`, {
    method: "GET",
  });

  if (response.ok) {
    // If successful, redirect the browser to the main page
    document.location.assign(`/orderhistory/${orderNumber}`);
  } else {
    const text = await response.json();
    if (text.message) {
      alert(text.message);
    } else {
      alert(response.statusText);
    }
  }
};

// Event handler for the 'Continue as Guest' button on the QR Code
const continueAsGuest = async (event) => {
  event.preventDefault();

  // If successful, redirect the browser to the menu page
  document.location.assign(`/api/menu/6`);
};

// 'login (Order Now)' button
document
  .querySelector("#login-btn")
  .addEventListener("click", loginFormHandler);

// 'Signup' button
document
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);

// 'View Status' button
document
  .querySelector("#check-order-btn")
  .addEventListener("click", viewStatusHandler);

// 'QRCode' button
document.querySelector("#qrCode").addEventListener("click", continueAsGuest);
