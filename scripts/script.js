// FAQ BUTTONS
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Position the navbar below the title
function updateNavBarPosition() {
    requestAnimationFrame(() => { 
        const title = document.getElementById("page-title");
        const navBar = document.getElementById("nav-bar");

        if (!title || !navBar) return;

        // Get accurate height, including mobile rendering quirks
        const titleHeight = title.getBoundingClientRect().height;

        // Place navbar right below the title
        navBar.style.position = "absolute";
        navBar.style.top = `${title.offsetTop + titleHeight - 10}px`;
    });
}

window.addEventListener("load", function() {
    setTimeout(updateNavBarPosition, 50); // Small delay for mobile rendering
});

window.addEventListener("resize", updateNavBarPosition);
window.addEventListener("orientationchange", updateNavBarPosition);

// Update navbar position on scroll
window.addEventListener("scroll", function () {
    const title = document.getElementById("page-title");
    if (!title) return;

    if (window.scrollY > 50) {
        title.classList.add("hidden-title");
    } else {
        title.classList.remove("hidden-title");
    }
    updateNavBarPosition();
});
