// Matrix Rain Animation
function createMatrixRain() {
    const matrixBg = document.getElementById('matrixBg');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Create columns
    const numColumns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < numColumns; i++) {
        createColumn(i * 20);
    }
    
    function createColumn(x) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = x + 'px';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        // Create characters in column
        const height = Math.random() * 300 + 100;
        for (let j = 0; j < height / 18; j++) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.animationDelay = Math.random() * 2 + 's';
            column.appendChild(char);
        }
        
        matrixBg.appendChild(column);
        
        // Remove and recreate column after animation
        setTimeout(() => {
            if (matrixBg.contains(column)) {
                matrixBg.removeChild(column);
                setTimeout(() => createColumn(x), Math.random() * 1000);
            }
        }, parseFloat(column.style.animationDuration) * 1000);
    }
}

// Initialize matrix rain
createMatrixRain();

// Recreate columns on window resize
window.addEventListener('resize', () => {
    const matrixBg = document.getElementById('matrixBg');
    matrixBg.innerHTML = '';
    createMatrixRain();
});

// Terminal typing effect
document.addEventListener('DOMContentLoaded', function() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        setTimeout(() => {
            let i = 0;
            element.style.width = 'auto';
            const typeInterval = setInterval(() => {
                element.textContent = text.substring(0, i + 1);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                }
            }, 100);
        }, index * 2000);
    });
});

// Add glitch effect on hover
document.querySelectorAll('.nav-link, .navbar-brand').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s';
    });
    
    element.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// Add glitch keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active navigation item
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#00ff00';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#fff';
            link.style.textShadow = '0 0 10px #00ff00';
        }
    });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate sending message
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'SENDING...';
    button.style.background = '#ffaa00';
    
    setTimeout(() => {
        button.textContent = 'MESSAGE SENT!';
        button.style.background = '#00ff00';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#00ff00';
            this.reset();
        }, 2000);
    }, 1500);
});

// Console welcome message
console.log(`
╔═══════════════════════════════════════╗
║        WELCOME TO ERWIN TERMINAL      ║
║        ====================          ║
║                                       ║
║  > Accessing portfolio data...        ║
║  > Connection established             ║
║  > Ready for interaction              ║
║                                       ║
║        System initialized ✓           ║
╚═══════════════════════════════════════╝
`);
