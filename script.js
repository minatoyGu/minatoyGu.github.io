// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Smooth Scrolling for navigation links
const navLinkElements = document.querySelectorAll('.nav-link');

navLinkElements.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetID = href.substr(1);
            const targetSection = document.getElementById(targetID);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Portfolio Filtering Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.classList.remove('hidden');
                // Add animation delay for staggered effect
                item.style.transitionDelay = `${Array.from(portfolioItems).indexOf(item) * 0.1}s`;
            } else {
                item.classList.add('hidden');
                item.style.transitionDelay = '0s';
            }
        });
    });
});

// Enhanced hover effects for project cards
const projectCards = document.querySelectorAll('.project-card, .portfolio-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const heroParticles = document.querySelector('.hero-particles');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (heroParticles) {
        heroParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Smooth reveal animation for floating cards
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
    card.style.opacity = '0';
    card.style.animation = `fadeIn 1s ease forwards ${index * 0.5}s, float 3s ease-in-out infinite ${index * 0.5 + 1}s`;
});

// Interactive skill items
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Button hover effects
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Sidebar navigation enhancement
const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Add a subtle ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(249, 115, 22, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to main content
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        setTimeout(() => {
            main.style.transition = 'opacity 0.8s ease';
            main.style.opacity = '1';
        }, 100);
    }
});

// Enhanced mobile menu functionality
const sidebar = document.querySelector('.sidebar');

// Add touch support for mobile
if ('ontouchstart' in window) {
    sidebarLinks.forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        link.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can be added here
}, 16)); // ~60fps

// Add loading animation for images
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 100);
    });
});

// Console welcome message
console.log('%c🚀 Welcome to Edwin Yeung\'s Portfolio!', 'color: #F97316; font-size: 20px; font-weight: bold;');
console.log('%c💻 Check out the source code and let\'s connect!', 'color: #667eea; font-size: 14px;');

document.addEventListener('DOMContentLoaded', () => {
  // Portfolio card video hover logic
  document.querySelectorAll('.portfolio-card').forEach(card => {
    const video = card.querySelector('video');
    const img = card.querySelector('img');
    if (video && img) {
      card.addEventListener('mouseenter', () => {
        img.style.opacity = '0';
        video.style.opacity = '1';
        video.style.pointerEvents = 'auto';
        video.currentTime = 0;
        video.play();
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.style.opacity = '0';
        video.style.pointerEvents = 'none';
        img.style.opacity = '1';
      });
    }
    // Make the whole card clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Prevent click if selecting text
      if (window.getSelection().toString().length === 0) {
        const link = card.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank');
        }
      }
    });
  });

  // Add loading spinner logic for portfolio videos
  document.querySelectorAll('.portfolio-video').forEach(video => {
    const spinner = video.parentElement.querySelector('.video-loading-spinner');
    const imageContainer = video.parentElement;
    if (!spinner) return;

    function showLoading() {
      spinner.style.display = 'block';
      imageContainer.classList.add('video-loading-active');
    }
    function hideLoading() {
      spinner.style.display = 'none';
      imageContainer.classList.remove('video-loading-active');
    }

    video.addEventListener('waiting', showLoading);
    video.addEventListener('loadstart', showLoading);
    video.addEventListener('stalled', showLoading);
    video.addEventListener('playing', hideLoading);
    video.addEventListener('canplay', hideLoading);
    video.addEventListener('canplaythrough', hideLoading);
    video.addEventListener('pause', hideLoading);
    video.addEventListener('ended', hideLoading);
    // Hide spinner if video is already ready
    if (video.readyState >= 3) {
      hideLoading();
    }
  });
});

// Add IntersectionObserver for .portfolio-video
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.portfolio-video');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, { threshold: 0.25 }); // Play when at least 25% visible

    videos.forEach(video => {
      observer.observe(video);
    });
  } else {
    // Fallback: play all videos
    videos.forEach(video => video.play());
  }
});
