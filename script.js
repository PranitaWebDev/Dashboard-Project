document.addEventListener("DOMContentLoaded", function() {
    
    // Get the toggle button and the page wrapper
    const toggleButton = document.getElementById('sidebar-toggle-btn');
    const pageWrapper = document.querySelector('.page-wrapper');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            // Toggle the 'sidebar-toggled' class on the page-wrapper
            pageWrapper.classList.toggle('sidebar-toggled');
        });
    }

});