// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');
    let isMenuOpen = false;

    // Toggle menu function with enhanced animations
    function toggleMenu(event) {
        if (event) event.stopPropagation();
        isMenuOpen = !isMenuOpen;
        
        // Animate hamburger
        navToggle.classList.toggle('open');
        
        // Animate menu
        navLinks.classList.toggle('active');
        
        // Update ARIA
        navToggle.setAttribute('aria-expanded', isMenuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        
        // Add transition class to nav
        nav.classList.toggle('menu-open');
    }

    // Handle link clicks
    function handleLinkClick(event) {
        const href = event.currentTarget.getAttribute('href');
        
        // Only handle anchor links
        if (href.startsWith('#')) {
            event.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                // Close menu if open
                if (isMenuOpen) {
                    toggleMenu();
                }
                
                // Smooth scroll to section
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                updateActiveLink(href);
            }
        }
    }

    // Update active link based on scroll position
    function updateActiveLink(forcedHash = null) {
        const scrollPosition = window.scrollY;
        const navHeight = nav.offsetHeight;
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section) {
                    const sectionTop = section.offsetTop - navHeight - 100; // Add offset for better UX
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (forcedHash === href || (scrollPosition >= sectionTop && scrollPosition < sectionBottom)) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            }
        });
    }

    // Handle scroll behavior
    function handleScroll() {
        const scrollPosition = window.scrollY;
        
        // Add/remove scrolled class to nav
        if (scrollPosition > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Update active link
        updateActiveLink();
    }

    // Close menu when clicking outside
    function handleClickOutside(event) {
        if (isMenuOpen && !navToggle.contains(event.target) && !navLinks.contains(event.target)) {
            toggleMenu();
        }
    }

    // Handle escape key
    function handleEscKey(event) {
        if (isMenuOpen && event.key === 'Escape') {
            toggleMenu();
        }
    }

    // Initialize event listeners
    if (navToggle && navLinks) {
        // Menu toggle
        navToggle.addEventListener('click', toggleMenu);
        
        // Link clicks
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
        
        // Click outside
        document.addEventListener('click', handleClickOutside);
        
        // Escape key
        document.addEventListener('keydown', handleEscKey);
        
        // Scroll behavior
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial active state
        updateActiveLink(window.location.hash);
    }
}); 