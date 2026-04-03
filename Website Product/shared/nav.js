// ── NAV.JS — PFH Studios mobile hamburger menu ──

(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');

  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close drawer on link click
  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Close drawer on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#site-nav') && !e.target.closest('#nav-drawer')) {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
})();
