document.querySelectorAll('.menu-categories button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    // Tüm bölümleri kapat
    document.querySelectorAll('.menu-section').forEach(section => {
      section.classList.remove('active');
    });

    // Hedef bölümü aç
    targetSection.classList.add('active');

    // Görünür alana kaydır
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});