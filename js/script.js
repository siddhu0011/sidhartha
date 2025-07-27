document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations using Intersection Observer
    const animatedElements = document.querySelectorAll('section, .card, blockquote');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Stop observing once animated
            } else {
                // Optional: remove 'show' class if you want elements to re-animate on scroll back
                // entry.target.classList.remove('show');
                // entry.target.classList.add('hidden');
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.classList.add('hidden'); // Add hidden class initially
        observer.observe(element);
    });
});