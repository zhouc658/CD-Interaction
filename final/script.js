document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav');
    const sections = document.querySelectorAll('.section');
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
  
        // Update nav buttons
        navItems.forEach(nav => nav.classList.remove('on'));
        item.classList.add('on');
  
        // Update content sections
        sections.forEach(section => section.classList.remove('on'));
        const targetSection = Array.from(sections)
          .find(section => section.dataset.target === item.dataset.target);
        targetSection.classList.add('on');
  
      });
    });
  });
  