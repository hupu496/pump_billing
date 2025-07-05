// Format date as dd/mm/yy
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
}

// Format time as hh:mm AM/PM
function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
}

// Toggle sidebar visibility
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Initialize responsive behavior
function initResponsiveBehavior() {
    // Check screen size on load
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
}

function handleResize() {
    if(window.innerWidth <= 768) {
        // Mobile view
        const menuToggle = document.querySelector('.menu-toggle');
        if(menuToggle) menuToggle.style.display = 'block';
        const sidebar = document.getElementById('sidebar');
        if(sidebar) sidebar.classList.remove('active');
    } else {
        // Desktop view
        const menuToggle = document.querySelector('.menu-toggle');
        if(menuToggle) menuToggle.style.display = 'none';
        const sidebar = document.getElementById('sidebar');
        if(sidebar) sidebar.classList.add('active');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initResponsiveBehavior();
    
    // Set current date and time for any bill preview elements
    const billDateElements = document.querySelectorAll('.bill-date');
    const billTimeElements = document.querySelectorAll('.bill-time');
    const now = new Date();
    
    billDateElements.forEach(el => {
        el.textContent = formatDate(now);
    });
    
    billTimeElements.forEach(el => {
        el.textContent = formatTime(now);
    });
});