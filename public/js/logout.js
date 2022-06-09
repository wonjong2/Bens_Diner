if (document.querySelector('.logout-button')) {
    const logoutHandler = async (event) => {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
        })

        if (response.ok) {
            alert("Logged Out!");
            document.location.replace("/");
        }
        else {
            alert(response.statusText);
        }
    }

    document
        .querySelector('.logout-button')
        .addEventListener('click', logoutHandler);
}