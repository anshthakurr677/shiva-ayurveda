/* ================================================
   SHIVA AYURVEDA — Shared Utilities
   Cart · Toast · Nav · Helpers
================================================ */

/* ── Cart (localStorage) ─────────────────────── */
function getCart() {
  return JSON.parse(localStorage.getItem('shiva_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('shiva_cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(product, qty = 1) {
  const cart = getCart();
  const existing = cart.find(c => c.id === product.id);
  if (existing) existing.qty += qty;
  else cart.push({ ...product, qty });
  saveCart(cart);
  showToast(`🛒 ${product.name} added to cart!`);
}
function removeFromCart(id) {
  const cart = getCart().filter(c => c.id !== id);
  saveCart(cart);
}
function clearCart() {
  localStorage.removeItem('shiva_cart');
  updateCartBadge();
}
function updateCartBadge() {
  const count = getCart().reduce((s, c) => s + c.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ── Toast Notification ──────────────────────── */
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast toast-${type} show`;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── Format Price ────────────────────────────── */
function fmt(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

/* ── Product Image ───────────────────────────── */
function productImg(p, cls = '') {
  if (p.image_url) {
    return `<img src="${p.image_url}" alt="${p.name}" class="${cls}" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <span class="emoji-fallback" style="display:none">${p.emoji || '🌿'}</span>`;
  }
  return `<span class="emoji-fallback">${p.emoji || '🌿'}</span>`;
}

/* ── Scroll Reveal ───────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Header Scroll Effect ────────────────────── */
function initHeader() {
  const h = document.getElementById('header');
  if (!h) return;
  window.addEventListener('scroll', () => {
    h.classList.toggle('scrolled', window.scrollY > 60);
  });
  // Back to top
  const bt = document.getElementById('backTop');
  if (bt) {
    window.addEventListener('scroll', () => bt.classList.toggle('visible', window.scrollY > 400));
    bt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ── Mobile Nav ──────────────────────────────── */
function initMobileNav() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  if (!ham || !nav) return;
  ham.onclick = () => {
    ham.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  };
}

/* ── Loading Spinner ─────────────────────────── */
function showLoader(el, msg = 'Loading...') {
  el.innerHTML = `<div class="loader-wrap"><div class="spinner"></div><p>${msg}</p></div>`;
}

/* ── Error State ─────────────────────────────── */
function showError(el, msg = 'Something went wrong. Please try again.') {
  el.innerHTML = `<div class="error-state"><span>⚠️</span><p>${msg}</p></div>`;
}

/* ── Get URL Param ───────────────────────────── */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* ── Init on Load ────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initHeader();
  initMobileNav();
  initReveal();
});
