// Event handlers for the 'Login(Order Now)' button
const loginFormHandler = async (event) => {
    // event.preventDefault();

    // // Collect values from the login form
    // const user_email = document.querySelector('#username-login').value.trim();
    // const password = document.querySelector('#password-login').value.trim();

    // if (user_email && password) {
    //     // Send a POST request to the API endpoint
    //     const response = await fetch('/api/users/login', {
    //         method: 'POST',
    //         body: JSON.stringify({ user_email, password }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });

    //     if (response.ok) {
    //         // If successful, redirect the browser to the main page
    //         document.location.replace('/api/menu');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
}

// Event handler for the 'Order as Guest' button
const guestOrderHandler = async (event) => {
    // event.preventDefault();
    // document.location.replace('/api/menu');
}

// Event handler for the 'Signup' button
const signupFormHandler = async (event) => {
    ///////////////////////////////////////////////////////////////////
    // Need to add the code to compare passwords entered by the user
    ///////////////////////////////////////////////////////////////////

    // event.preventDefault();

    // const user_email = document.querySelector('#username-signup').value.trim();
    // const password = document.querySelector('#password-signup').value.trim();

    // if (user_email && password) {
    //     const response = await fetch('/api/users', {
    //         method: 'POST',
    //         body: JSON.stringify({ user_email, password }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     console.log(response);
    //     if (response.ok) {
    //         document.location.replace('/api/menu');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
}

// Event handler for the 'View Status' button
const viewStatusHandler = async (event) => {
    // console.log(event);
    // const id = event.target.dataset.postId ? event.target.dataset.postId : event.target.parentElement.dataset.postId;

    // if (id) {
    //     document.location.assign(`/${id}`);
    // }
}

// 'login (Order Now)' button
// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

// 'Order as Guest' button
// document
//     .querySelector('.order-guest')
//     .addEventListener('submit', guestOrderHandler);

// 'Signup' button
// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);

// 'View Status' button
// document
//     .querySelector('.viewStatus')
//     .addEventListener('submit', viewStatusHandler);