$(document).ready(function() {
    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 500, 'linear');
    });

    // Form validation
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        let isValid = true;

        // Basic validation
        if (!name) {
            alert('Please enter your name');
            isValid = false;
        }
        if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email');
            isValid = false;
        }
        if (!message) {
            alert('Please enter a message');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            this.reset();
        }
    });
});