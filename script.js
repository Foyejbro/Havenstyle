window.onload = function () {
    document.querySelector('.loading-screen').style.display = 'none';
}

// Add Wave Effect to Button Clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('wave');
        setTimeout(() => this.classList.remove('wave'), 500);
    });
});

// Scroll effect (Wave animation on Scroll)
window.addEventListener('scroll', () => {
    document.body.style.transform = `translateX(${window.scrollY * 0.1}px)`;
});
