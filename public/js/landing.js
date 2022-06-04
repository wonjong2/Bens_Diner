// Event handlers for the 'Login(Order Now)' button
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const user_email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-pwd").value.trim();

    if (user_email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ user_email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // If successful, redirect the browser to the main page
            document.location.replace("/api/menu");
        } else {
            alert(response.statusText);
        }
    }
};

// Event handler for the 'Order as Guest' button
// const guestOrderHandler = async (event) => {
// event.preventDefault();
// document.location.replace('/api/menu');
// }

// Event handler for the 'Signup' button
const signupFormHandler = async (event) => {
    ///////////////////////////////////////////////////////////////////
    // Need to add the code to compare passwords entered by the user
    ///////////////////////////////////////////////////////////////////

    event.preventDefault();

    const user_firstName = document.querySelector("#signup-fname").value.trim();
    const user_lastName = document.querySelector("#signup-lname").value.trim();
    const user_email = document.querySelector("#signup-email").value.trim();
    const user_phone = document.querySelector("#signup-phone").value.trim();
    const password = document.querySelector("#signup-password").value.trim();
    const confirmPassword = document
        .querySelector("#signup-confirmPassword")
        .value.trim();

    if (password === confirmPassword) {
        if (
            user_firstName &&
            user_lastName &&
            user_email &&
            user_phone &&
            password
        ) {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({
                    user_firstName,
                    user_lastName,
                    user_email,
                    user_phone,
                    password,
                }),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                document.location.replace("/api/menu");
            } else {
                alert(response.statusText);
            }
        }
    } else {
        alert(
            "Password and Confirm Password do not match. Please enter them again!"
        );
    }
};

// Event handler for the 'View Status' button
const viewStatusHandler = async (event) => {
    event.preventDefault();
    const orderNumber = document.querySelector("#order-number").value.trim();

    if (orderNumber) {
        document.location.assign(`/${orderNumber}`);
    }
};

// 'login (Order Now)' button
document
    .querySelector("#login-btn")
    .addEventListener("click", loginFormHandler);

// 'Order as Guest' button
// document
//     .querySelector('.order-guest')
//     .addEventListener('submit', guestOrderHandler);

// 'Signup' button
document
    .querySelector("#signup-btn")
    .addEventListener("click", signupFormHandler);

// 'View Status' button
document
    .querySelector("#check-order-btn")
    .addEventListener("click", viewStatusHandler);
