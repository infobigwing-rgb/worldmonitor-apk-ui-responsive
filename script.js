const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  document.body.classList.toggle('has-sidebar-visible');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    sidebar.classList.remove('open');
    document.body.classList.remove('has-sidebar-visible');
  }
});
