import './styles.css';
import { Browser } from '@capacitor/browser';

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const openWorldMonitorButton = document.getElementById('openWorldMonitor');
let deferredPrompt = null;

const WORLD_MONITOR_URL = 'https://worldmonitor.app/';

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

if (openWorldMonitorButton) {
  openWorldMonitorButton.addEventListener('click', async () => {
    await Browser.open({ url: WORLD_MONITOR_URL });
  });
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  const installButton = document.createElement('button');
  installButton.className = 'install-button';
  installButton.textContent = 'Install app';
  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    deferredPrompt = null;
    installButton.remove();
    console.log('Install prompt choice:', choiceResult.outcome);
  });
  document.querySelector('.topbar').appendChild(installButton);
});

window.addEventListener('appinstalled', () => {
  console.log('App successfully installed');
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
