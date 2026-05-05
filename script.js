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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service worker registered successfully');
    } catch (error) {
      console.warn('Service worker registration failed', error);
    }
  });
}
