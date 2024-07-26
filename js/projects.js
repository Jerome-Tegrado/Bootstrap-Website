document.addEventListener("DOMContentLoaded", function() {
    // Existing code for typing animation
    const element = document.querySelector('.introduction');
    const textWidth = element.scrollWidth;
  
    // Set custom property for the typing animation
    element.style.setProperty('--text-width', `${textWidth}px`);
  
    // New code for slide-in and slide-out transitions
    function transitionToPage(url) {
        document.body.classList.add('slide-out');
        setTimeout(() => {
            window.location.href = url;
        }, 500); // Match this with the CSS transition duration
    }
  
    document.querySelectorAll('a.transition-link').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = event.target.getAttribute('href');
            if (href && !href.startsWith('#')) { // Check if href is not an internal link
                event.preventDefault();
                transitionToPage(href);
            }
        });
    });
  });
  