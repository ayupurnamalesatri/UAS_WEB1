
    // 1. Navbar Effect saat Scroll
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scroll Adjustment
    // Agar saat klik menu, konten tidak tertutup navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offset = 80; // Sesuaikan dengan tinggi navbar

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });

            // Tutup menu mobile otomatis setelah klik
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // 3. Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button');
        const originalText = btn.innerHTML;
        
        // Animasi Loading
        btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Mengirim...';
        btn.disabled = true;

        // Simulasi pengiriman
        setTimeout(() => {
            alert('Terima kasih Ayu Purnama! Pesan Anda telah diterima.');
            btn.innerHTML = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });

    // 4. Reveal Animation (Efek Muncul saat Scroll)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });