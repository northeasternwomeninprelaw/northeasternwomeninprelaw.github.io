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
    if (!title || !navBar) return;

    const titleHeight = title.offsetHeight;
    let topPosition = `${titleHeight}px`; // Set navbar directly below title
    navBar.style.top = topPosition;
}

window.addEventListener("scroll", function() {
    const title = document.getElementById("page-title");
    if (!title) return;

    if (window.scrollY > 50) {
        title.classList.add("hidden-title");
    } else {
        title.classList.remove("hidden-title");
    }
    updateNavBarPosition();
});

window.addEventListener("resize", updateNavBarPosition);

document.addEventListener("DOMContentLoaded", updateNavBarPosition);
