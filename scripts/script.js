// Get all the FAQ buttons
const faqButtons = document.querySelectorAll('.faq-question');

// Add an event listener to each button
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

let lastScrollTop = 0;
const title = document.getElementById("page-title");
const navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let isSmallScreen = window.innerWidth <= 600;
    let topPosition = isSmallScreen ? "150px" : "90px";

    if (scrollTop > 50) {
        title.classList.add("hidden-title");
        navBar.style.top = "0"; // Moves navbar to the top
    } else {
        title.classList.remove("hidden-title");
        navBar.style.top = topPosition; // Adjust top position based on screen size
    }

    lastScrollTop = scrollTop;
});