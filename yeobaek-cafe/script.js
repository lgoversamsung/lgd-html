const filterButtons = document.querySelectorAll('[data-filter]');
const menuCards = document.querySelectorAll('[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    menuCards.forEach((card) => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
