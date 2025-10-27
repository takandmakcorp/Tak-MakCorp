document.addEventListener('DOMContentLoaded', () => {

    // --- Header ---
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-white/80', 'shadow-md', 'backdrop-blur-lg');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-white/80', 'shadow-md', 'backdrop-blur-lg');
            header.classList.add('bg-transparent');
        }
    });

    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });

    // Smooth scroll for all navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
            }
        });
    });

    // --- Generic Carousel Logic ---
    function initializeCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.carousel-next');
        const prevButton = carousel.querySelector('.carousel-prev');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        
        let currentIndex = 0;
        const slideCount = slides.length;

        if (slideCount === 0) return;

        // Create dots
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-colors', 'duration-300', 'bg-slate-300', 'hover:bg-slate-400');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => {
                moveToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
        
        const dots = Array.from(dotsContainer.children);

        const moveToSlide = (index) => {
            if (index < 0 || index >= slideCount) return;
            track.style.transform = `translateX(-${index * 100}%)`;
            updateDots(currentIndex, index);
            currentIndex = index;
        };
        
        const updateDots = (oldIndex, newIndex) => {
             if (dots[oldIndex]) {
                dots[oldIndex].classList.remove('bg-orange-500');
                dots[oldIndex].classList.add('bg-slate-300');
             }
             if (dots[newIndex]) {
                dots[newIndex].classList.add('bg-orange-500');
                dots[newIndex].classList.remove('bg-slate-300');
             }
        };

        nextButton.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % slideCount;
            moveToSlide(newIndex);
        });

        prevButton.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + slideCount) % slideCount;
            moveToSlide(newIndex);
        });
        
        // Initialize first dot
        moveToSlide(0);
    }
    
    // Initialize both carousels
    initializeCarousel('founders-carousel');
    initializeCarousel('clients-carousel');
});
