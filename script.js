document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (toggle && navList) {
    toggle.addEventListener('click', () => navList.classList.toggle('open'));
    navList.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navList.classList.remove('open'))
    );
  }

  const current = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('nav a[data-page]').forEach(a => {
    if (a.dataset.page === current) a.classList.add('active');
  });
});
