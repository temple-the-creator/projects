// active tab highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const tabs = document.querySelectorAll('.filetabs a[data-tab]');
const setActive = () => {
  let current = '';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 120) current = sec.id;
  });
  tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === current));
};
document.addEventListener('scroll', setActive, {passive:true});
setActive();

// dark mode toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// reveal project cards on scroll
const cards = document.querySelectorAll('.project-card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, {threshold:0.15});
cards.forEach(c => io.observe(c));