// Book Opening Animation - Only on Page Load (index.html only)
// Book Opening Animation on Page Load Only (skip for myexpertise.html)

document.addEventListener('DOMContentLoaded', function() {
    // Skip book opening animation on myexpertise.html
    if (window.location.pathname.includes('myexpertise.html') || 
        document.querySelector('.expertise-card')) {
        return;
    }

    // Create book cover overlay
    const bookCover = document.createElement('div');
    bookCover.className = 'book-cover';
    bookCover.innerHTML = `
        <div class="book-left-page"></div>
        <div class="book-right-page"></div>
    `;
    document.body.appendChild(bookCover);

    // Trigger opening animation
    setTimeout(() => {
        bookCover.classList.add('opening');
    }, 100);

    // Remove cover after animation
    setTimeout(() => {
        bookCover.style.pointerEvents = 'none';
        setTimeout(() => {
            bookCover.remove();
        }, 1000);
    }, 1500);
});

// Smooth scroll for anchor links (no animation, just smooth scroll)
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '') {
                return;
            }

            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add entrance animation to main content
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main, .container, .expertise-card, .courses-section');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 800);
    }
});

// Add text animation for myexpertise.html hero and card headers
document.addEventListener('DOMContentLoaded', function() {
    // Hide all content except headers initially
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCards.forEach(card => {
        const allContent = card.querySelectorAll('.expertise-description, .skills-container, .worksample, h2, h3, .project-item');
        allContent.forEach(item => {
            item.style.opacity = '0';
            item.style.visibility = 'hidden';
        });
    });
    
    // Animate hero title and subtitle
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animate card headers
    const cardHeaders = document.querySelectorAll('.card-header h1');
    cardHeaders.forEach((header, index) => {
        header.style.opacity = '0';
        header.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            header.style.transition = `opacity 0.8s ease ${0.5 + index * 0.2}s, transform 0.8s ease ${0.5 + index * 0.2}s`;
            header.style.opacity = '1';
            header.style.transform = 'translateX(0)';
        }, 500);
    });
    
    // Show all other content after header animations complete (around 1.5 seconds)
    setTimeout(() => {
        expertiseCards.forEach((card, cardIndex) => {
            const allContent = card.querySelectorAll('.expertise-description, .skills-container, .worksample, h2, h3, .project-item');
            allContent.forEach((item, itemIndex) => {
                setTimeout(() => {
                    item.style.visibility = 'visible';
                    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, itemIndex * 100); // Stagger each item by 100ms
            });
        });
    }, 1500); // Wait for all header animations to complete
});
