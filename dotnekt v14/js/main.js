/* =========================================================
   DOTNEKT V14 — MAIN JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // =====================================================
    // SCROLLBAR SHOW ON SCROLL
    // =====================================================

    let scrollTimeout;
    document.documentElement.classList.add('scrollbar-hidden');

    window.addEventListener('scroll', () => {
        document.documentElement.classList.remove('scrollbar-hidden');
        document.documentElement.classList.add('scrollbar-visible');

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            document.documentElement.classList.remove('scrollbar-visible');
            document.documentElement.classList.add('scrollbar-hidden');
        }, 1500);
    });

    // =====================================================
    // NAVIGATION SCROLL EFFECT
    // =====================================================

    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // =====================================================
    // ACTIVE NAV LINK
    // =====================================================

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuClose = document.getElementById('menuClose');

    if (menuButton && mobileMenu && menuClose) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // =====================================================
    // WORK FILTERS
    // =====================================================

    const filterButtons = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // For now, just animate the cards (no actual filtering logic)
            workCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            });
        });
    });

    // =====================================================
    // CONTACT FORM
    // =====================================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'SENT ✓';
                submitBtn.style.background = '#1A6B5A';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }

    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation (excluding service-card and work-card for tilt)
    document.querySelectorAll('.about-image, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // =====================================================
    // PARALLAX EFFECT ON HERO
    // =====================================================

    const heroOrbit = document.querySelector('.hero-orbit-wrapper');
    const heroCharacterWrapper = document.querySelector('.hero-character-wrapper');
    const heroBrushTeal = document.querySelector('.brush-teal');
    const heroBadge = document.querySelector('.hero-badge');

    if (heroOrbit || heroCharacterWrapper) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;

            if (heroOrbit) {
                heroOrbit.style.transform = `translateY(${-rate}px)`;
            }

            if (heroCharacterWrapper) {
                heroCharacterWrapper.style.transform = `translateY(${-rate * 0.8}px)`;
            }

            if (heroBrushTeal) {
                heroBrushTeal.style.transform = `translateY(${-rate * 0.8}px)`;
            }

            if (heroBadge) {
                heroBadge.style.transform = `translateY(${-rate * 0.6}px)`;
            }
        });
    }

    // =====================================================
    // TILT EFFECT ON CARDS
    // =====================================================

    document.querySelectorAll('.project-card, .work-card, .service-card, .hero-tag').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

});
