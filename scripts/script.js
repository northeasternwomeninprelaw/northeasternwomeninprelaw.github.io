// FAQ BUTTONS
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Position and Spacing
function updateNavBarPosition() {
    const title = document.getElementById("page-title");
    const navBar = document.getElementById("nav-bar");
    const titleHeight = title.offsetHeight;
    
    let scrollTop = window.scrollY;
    let topPosition = title.classList.contains("hidden-title") ? "0" : `${titleHeight - 10}px`;
    navBar.style.top = topPosition;
}

window.addEventListener("scroll", function() {
    const title = document.getElementById("page-title");
    if (window.scrollY > 50) {
        title.classList.add("hidden-title");
    } else {
        title.classList.remove("hidden-title");
    }
    updateNavBarPosition();
});

document.addEventListener("DOMContentLoaded", updateNavBarPosition);
window.addEventListener("resize", updateNavBarPosition);
window.addEventListener("orientationchange", updateNavBarPosition);