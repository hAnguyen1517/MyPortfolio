document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (window.lucide) {
        lucide.replace();
    }

    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.toggle(
                            'active',
                            link.getAttribute('href') === `#${entry.target.id}`
                        );
                    });
                }
            });
        },
        { rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    const navCollapse = document.getElementById('mainNav');
    document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (!navCollapse || !navCollapse.classList.contains('show')) return;
            const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        });
    });
});