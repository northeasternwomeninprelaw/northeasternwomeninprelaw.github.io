// FAQ BUTTONS
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// change nav bar position
function updateNavBarPosition() {
    requestAnimationFrame(() => { 
        const title = document.getElementById("page-title");
        const navBar = document.getElementById("nav-bar");

        if (!title || !navBar) return;

        if (window.scrollY > 50) {
            navBar.style.position = "fixed";
            navBar.style.top = "0";
            navBar.style.width = "100%";
            navBar.style.zIndex = "1000";
            title.classList.add("hidden-title");
        } else {
            const titleHeight = title.getBoundingClientRect().height;
            navBar.style.position = "absolute";
            navBar.style.top = `${title.offsetTop + titleHeight - 10}px`;
            title.classList.remove("hidden-title");
        }
    });
}

window.addEventListener("load", updateNavBarPosition);
window.addEventListener("resize", updateNavBarPosition);
window.addEventListener("orientationchange", updateNavBarPosition);
window.addEventListener("scroll", updateNavBarPosition);

