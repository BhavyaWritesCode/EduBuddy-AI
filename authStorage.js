// Function to save user data to localStorage during Sign Up
function signUpUser(username, email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("User with this email already exists. Please log in.");
        return false;
    }

    // Add new user
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign Up successful. Please log in!");
    return true;
}

// Function to check user data during Login
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email and password
    const validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
        
        

        localStorage.setItem("loggedInUser", JSON.stringify(validUser)); // Save logged-in user
        return true;
    } else {
        alert("Invalid email or password. Please try again.");
        return false;
    }
}

// Event listeners for Sign-Up and Login forms
document.addEventListener("DOMContentLoaded", () => {
    // Sign-Up form logic
    const signUpForm = document.getElementById("signup-form");
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (signUpUser(username, email, password)) {
            signUpForm.reset();
        }
    });

    // Login form logic
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (loginUser(email, password)) {
            window.location.href = "homepage.html"; // Redirect to dashboard on success
        }
    });
});