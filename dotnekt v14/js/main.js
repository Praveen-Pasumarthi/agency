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


    // =====================================================
    // PROJECT DETAIL — DYNAMIC DATA LOADING
    // =====================================================

    const projects = [
        {
            id: 1,
            label: '01 / BRANDING',
            title: 'NKS GAMING<br>GOS',
            category: 'BRAND IDENTITY / VISUAL DESIGN',
            about: 'A complete brand identity project designed for a gaming community that wanted to stand out in the crowded gaming space. The project involved creating a bold, energetic visual language.',
            services: 'Branding<br>Visual Identity<br>Graphic Design',
            image: 'images/project01.jpeg',
            nextId: 2,
            nextTitle: 'RVS LOADERS'
        },
        {
            id: 2,
            label: '02 / BRANDING',
            title: 'RVS<br>LOADERS',
            category: 'LOGO DESIGN / BRAND STRATEGY',
            about: 'Brand identity and logo design for RVS Loaders, focusing on industrial strength and reliability. The visual language communicates power and professionalism.',
            services: 'Logo Design<br>Brand Strategy<br>Visual Identity',
            image: 'images/project02.jpeg',
            nextId: 3,
            nextTitle: 'SHADOW LEGENDS'
        },
        {
            id: 3,
            label: '03 / CONTENT',
            title: 'SHADOW<br>LEGENDS',
            category: 'CONTENT CREATION / VISUAL DESIGN',
            about: 'Content creation and visual design for Shadow Legends campaign. Engaging visuals crafted to maximize audience engagement and brand recall.',
            services: 'Content Creation<br>Visual Design<br>Social Media',
            image: 'images/project03.jpeg',
            nextId: 4,
            nextTitle: 'NKS BLACKWORKS'
        },
        {
            id: 4,
            label: '04 / BRANDING',
            title: 'NKS<br>BLACKWORKS',
            category: 'BRAND IDENTITY / PACKAGING',
            about: 'Dark, edgy brand identity for NKS Blackworks sub-brand. The design captures the rebellious spirit while maintaining brand cohesion with the parent brand.',
            services: 'Brand Identity<br>Packaging Design<br>Art Direction',
            image: 'images/project04.jpeg',
            nextId: 5,
            nextTitle: 'PROJECT CHAOS'
        },
        {
            id: 5,
            label: '05 / VIDEO EDIT',
            title: 'PROJECT<br>CHAOS',
            category: 'VIDEO EDITING / MOTION GRAPHICS',
            about: 'High-energy video editing and motion graphics for gaming content. Dynamic transitions and effects that capture the intensity of competitive gaming.',
            services: 'Video Editing<br>Motion Graphics<br>Color Grading',
            image: 'images/project05.jpeg',
            nextId: 6,
            nextTitle: "KETHU'S CHAOS"
        },
        {
            id: 6,
            label: '06 / VISUAL IDENTITY',
            title: "KETHU'S<br>CHAOS",
            category: 'CHARACTER ART / BRAND IDENTITY',
            about: 'Stylized character illustration and brand identity with low-poly aesthetic, featuring tech-savvy gamer persona. Modern digital art meets gaming culture.',
            services: 'Character Art<br>Brand Identity<br>Digital Illustration',
            image: 'images/web developer.png',
            nextId: 1,
            nextTitle: 'NKS GAMING GOs'
        }
    ];

    // Check if we're on the project detail page
    const projectTitle = document.getElementById('projectTitle');
    if (projectTitle) {
        const params = new URLSearchParams(window.location.search);
        const projectId = parseInt(params.get('id')) || 1;
        const project = projects.find(p => p.id === projectId) || projects[0];

        // Update page content
        document.getElementById('projectLabel').textContent = project.label;
        document.getElementById('projectTitle').innerHTML = project.title;
        document.getElementById('projectCategory').textContent = project.category;
        document.getElementById('projectAbout').textContent = project.about;
        document.getElementById('projectServices').innerHTML = project.services;
        document.getElementById('projectImage').src = project.image;
        document.getElementById('projectImage').alt = project.title.replace('<br>', ' ');

        // Update next project link
        const nextLink = document.getElementById('nextProjectLink');
        nextLink.href = `project-detail.html?id=${project.nextId}`;
        nextLink.innerHTML = `NEXT PROJECT <span>/</span>`;
    }


    // =====================================================
    // SERVICE DETAIL — DYNAMIC DATA LOADING
    // =====================================================

    const services = [
        {
            id: 1,
            label: '01 / BRANDING',
            title: 'BRANDING',
            tagline: 'Identities that stand out and stick.',
            about: 'We craft bold, memorable brand identities that resonate with your audience and set you apart from the competition. From logo design to complete brand guidelines.',
            deliverables: 'Logo Design<br>Brand Guidelines<br>Visual Identity System<br>Business Cards',
            image: 'images/content writer.png',
            nextId: 2,
            nextTitle: 'WEB DESIGN'
        },
        {
            id: 2,
            label: '02 / WEB DESIGN',
            title: 'WEB DESIGN',
            tagline: 'Websites that look great and work smart.',
            about: 'We design and build fast, responsive, visually stunning websites that convert visitors into customers. Clean code, modern aesthetics.',
            deliverables: 'UI/UX Design<br>Responsive Development<br>CMS Integration<br>E-Commerce Solutions',
            image: 'images/web developer.png',
            nextId: 3,
            nextTitle: 'VIDEO / CONTENT'
        },
        {
            id: 3,
            label: '03 / VIDEO & CONTENT',
            title: 'VIDEO / CONTENT',
            tagline: 'Stories that move, engage and inspire.',
            about: 'From concept to final cut, we produce video content and visual stories that capture attention and drive engagement across all platforms.',
            deliverables: 'Video Production<br>Motion Graphics<br>Social Media Content<br>Thumbnail Design',
            image: 'images/photographer.png',
            nextId: 4,
            nextTitle: 'DEVELOPMENT'
        },
        {
            id: 4,
            label: '04 / DEVELOPMENT',
            title: 'DEVELOPMENT',
            tagline: 'Clean, fast and future ready.',
            about: 'We build robust, scalable web applications using modern technologies. Performance-first approach with clean, maintainable code.',
            deliverables: 'Frontend Development<br>Backend Systems<br>API Integration<br>Performance Optimization',
            image: 'images/social media marketing.png',
            nextId: 5,
            nextTitle: 'STRATEGY'
        },
        {
            id: 5,
            label: '05 / STRATEGY',
            title: 'STRATEGY',
            tagline: 'Ideas backed by thinking and research.',
            about: 'We help brands find their voice, define their audience, and build meaningful connections through data-driven creative strategy.',
            deliverables: 'Brand Strategy<br>Market Research<br>Content Planning<br>Growth Consulting',
            image: 'images/pose 6.png',
            nextId: 1,
            nextTitle: 'BRANDING'
        }
    ];

    // Check if we're on the service detail page
    const serviceTitle = document.getElementById('serviceTitle');
    if (serviceTitle) {
        const params = new URLSearchParams(window.location.search);
        const serviceId = parseInt(params.get('id')) || 1;
        const service = services.find(s => s.id === serviceId) || services[0];

        // Update page content
        document.getElementById('serviceLabel').textContent = service.label;
        document.getElementById('serviceTitle').innerHTML = service.title;
        document.getElementById('serviceTagline').textContent = service.tagline;
        document.getElementById('serviceAbout').textContent = service.about;
        document.getElementById('serviceDeliverables').innerHTML = service.deliverables;
        document.getElementById('serviceImage').src = service.image;
        document.getElementById('serviceImage').alt = service.title;

        // Update next service link
        const nextLink = document.getElementById('nextServiceLink');
        nextLink.href = `service-detail.html?id=${service.nextId}`;
        nextLink.innerHTML = `NEXT SERVICE <span>/</span>`;
    }

});
