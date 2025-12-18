document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
  
        // 1️⃣ Update nav buttons
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
  
        // 2️⃣ Update content sections
        sections.forEach(section => section.classList.remove('active'));
        const targetSection = Array.from(sections)
          .find(section => section.dataset.target === item.dataset.target);
        targetSection.classList.add('active');
  
      });
    });
  });
  