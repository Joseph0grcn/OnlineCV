  document.querySelectorAll('.menu-categories button').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      targetSection.classList.toggle('active');
      if (targetSection.classList.contains('active')) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });