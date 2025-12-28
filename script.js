document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    
    // Add animation delays to categories
    const categories = document.querySelectorAll('.category');
    categories.forEach((cat, index) => {
        cat.style.animationDelay = `${index * 0.1}s`;
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const tags = card.dataset.tags ? card.dataset.tags.toLowerCase() : '';
            const desc = card.querySelector('p').innerText.toLowerCase();
            const url = card.querySelector('.url-preview').innerText.toLowerCase();

            if (title.includes(query) || tags.includes(query) || desc.includes(query) || url.includes(query)) {
                card.style.display = 'block';
                // Reset animation to make it feel responsive (optional)
                card.style.animation = 'fadeInUp 0.5s forwards';
            } else {
                card.style.display = 'none';
            }
        });

        // Hide empty categories logic could go here, but keeping it simple for now
    });

    // Optional: Add a subtle tilt effect to cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate percentage
            // const xPercent = x / rect.width;
            // const yPercent = y / rect.height;
            
            // Subtle glow follow cursor
            // card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), var(--card-bg))`;
        });
        
        card.addEventListener('mouseleave', () => {
            // card.style.background = 'var(--card-bg)';
        });
    });
});
