function startAnimation() {
    const button = document.querySelector(".start-button");
    button.style.animation = "textPopUp 0.6s ease-in-out";
    setTimeout(() => {
        button.style.animation = ""; // Reset the animation
    }, 600);
    alert("Welcome! Let's get started!");
}
// Language Switcher
function changeLanguage() {
    const language = document.getElementById('languages').value;
    const description = document.getElementById('description');
    const features = document.querySelectorAll('#features li');
    
    if (language === 'en') {
        description.textContent = "This platform offers AI-powered educational tools to help marginalized communities access quality learning materials in multiple languages.";
        features[0].textContent = "Multilingual Support";
        features[1].textContent = "AI-based Personalized Learning";
        features[2].textContent = "Offline Access (optional)";
        features[3].textContent = "Interactive Tutorials and Quizzes";
    } else if (language === 'hi') {
        description.textContent = "यह मंच एआई-आधारित शैक्षिक उपकरण प्रदान करता है जो हाशिए पर रहने वाले समुदायों को कई भाषाओं में गुणवत्ता वाली शैक्षिक सामग्री तक पहुंचने में मदद करता है।";
        features[0].textContent = "बहुभाषी समर्थन";
        features[1].textContent = "एआई आधारित व्यक्तिगत शिक्षा";
        features[2].textContent = "ऑफ़लाइन एक्सेस (वैकल्पिक)";
        features[3].textContent = "इंटरएक्टिव ट्यूटोरियल और प्रश्नोत्तरी";
    } else if (language === 'kn') {
        description.textContent = "ಈ ವೇದಿಕೆಯನ್ನು ಎಐ-ಆಧಾರಿತ ಶೈಕ್ಷಣಿಕ ಉಪಕರಣಗಳನ್ನು ಪ್ರદાન ಮಾಡುತ್ತದೆ, ಇದು ಹಾಶಿಯ ಮೇಲೆ ಇರುವ ಸಮುದಾಯಗಳನ್ನು ಅನೇಕ ಭಾಷೆಗಳಲ್ಲಿ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ಸಾಮಗ್ರಿಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.";
        features[0].textContent = "ಬಹುಭಾಷಾ ಬೆಂಬಲ";
        features[1].textContent = "ಎಐ ಆಧಾರಿತ ವೈಯಕ್ತಿಕ ಶಿಖ್ಷಣ";
        features[2].textContent = "ಆಫ್‌ಲೈನ್ ಪ್ರವೇಶ (ಆಪ್ಶನಲ್)";
        features[3].textContent = "ಇಂಟರ್ಯಾಕ್ಟಿವ್ ಟ್ಯುಟೋರೀಯಲ್ ಮತ್ತು ಕ್ವಿಜ್‌ಗಳು";
    }
}

// Basic Chatbot Response
function getChatbotResponse() {
    const userInput = document.getElementById('chatbot-input').value;
    const response = document.getElementById('chatbot-response');
    
    if (userInput.toLowerCase().includes("hello")) {
        response.textContent = "Hello! How can I assist you today?";
    } else {
        response.textContent = "Sorry, I couldn't understand that. Can you ask something else?";
    }
}
// Function to redirect to another HTML file
function redirectToCourses() {
    const button = document.querySelector(".start-button");
    button.style.animation = "textPopUp 0.6s ease-in-out";
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to courses.html
    }, 600); // Match the animation duration (0.6s)
}
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Function to add a message to the chat body
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the latest message
}

// Handle user input
sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user");
        userInput.value = ""; // Clear input
        // Simulate bot response
        setTimeout(() => {
            addMessage("I'm here to help you! How can I assist?", "bot");
        }, 1000);
    }
});

// Handle "Enter" key press for sending messages
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendButton.click();
    }
});
