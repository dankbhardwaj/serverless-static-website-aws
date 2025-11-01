// Simple visitor counter using localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Get current count or initialize
    let visitCount = localStorage.getItem('visitCount');
    
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    
    // Update counter
    localStorage.setItem('visitCount', visitCount.toString());
    document.getElementById('counter').textContent = visitCount;
    
    // Add some interactive effects
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});