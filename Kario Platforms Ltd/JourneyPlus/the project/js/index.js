    // Toggle mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    // Testimonial slider
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = dot.getAttribute('data-index');
            
            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Scroll to the testimonial
            const testimonialWidth = testimonials[0].offsetWidth;
            slider.scrollTo({
                left: testimonialWidth * index,
                behavior: 'smooth'
            });
        });
    });
    
    // Detect scroll in testimonial slider
    slider.addEventListener('scroll', () => {
        const scrollPosition = slider.scrollLeft;
        const testimonialWidth = testimonials[0].offsetWidth;
        const index = Math.round(scrollPosition / testimonialWidth);
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    });
    
    // Form submission
    const submitForm = document.getElementById('submit-form');
    const emailModal = document.getElementById('email-modal');
    const closeModal = document.querySelector('.close-modal');
    const successMessage = document.getElementById('success-message');
    
    submitForm.addEventListener('click', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // In a real implementation, you would send this data to your server
            // For this demo, we'll just show the success message and modal
            
            // Normally you would use server-side code like this:
            // const formData = new FormData();
            // formData.append('name', name);
            // formData.append('email', email);
            // formData.append('message', message);
            // fetch('your-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            
            // Display success message
            successMessage.style.display = 'block';
            
            // Show modal after a short delay
            setTimeout(() => {
                emailModal.classList.add('active');
                
                // Reset form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
            }, 1000);
        }
    });
    
    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('active');
        successMessage.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === emailModal) {
            emailModal.classList.remove('active');
            successMessage.style.display = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.textContent = '☰';
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        });
    });
    
    // Dynamic content loading
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').textContent = `© ${currentYear} Journey Plus. All rights reserved.`;
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });