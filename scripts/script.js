// Get all the FAQ buttons
const faqButtons = document.querySelectorAll('.faq-question');

// Add an event listener to each button
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

window.addEventListener('scroll', function() {
    const topBar = document.querySelector('.top-bar');
    if (window.scrollY > 50) {
        topBar.classList.add('header-hidden');
    } else {
        topBar.classList.remove('header-hidden');
    }
});
