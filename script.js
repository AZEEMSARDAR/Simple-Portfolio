document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navlist a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Toggle active class
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Tooltip hover effect for icons
    const icons = document.querySelectorAll('.icons i');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.classList[1].split('-')[2];
            document.body.appendChild(tooltip);

            const rect = icon.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;

            icon.addEventListener('mouseleave', () => {
                tooltip.remove();
            });
        });
    });
});
