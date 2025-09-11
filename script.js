function toggleAidDetails() {
    const aidDetails = document.getElementById('aidDetails');
    aidDetails.style.display = aidDetails.style.display === 'none' ? 'block' : 'none';
    if (aidDetails.style.display === 'block') {
        aidDetails.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => aidDetails.classList.remove('animate__animated', 'animate__fadeIn'), 1000);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    fadeInElements.forEach(element => observer.observe(element));

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate__animated', 'animate__pulse');
        });
        card.addEventListener('animationend', () => {
            card.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        heroSection.style.backgroundPosition = `${50 + x * 10}% ${50 + y * 10}%`;
    });
});