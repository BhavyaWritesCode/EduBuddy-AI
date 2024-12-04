document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        alert("You must log in to access this page.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        console.log(Welcome, ${loggedInUser.username});
        // You can display more user-specific info here
    }
});