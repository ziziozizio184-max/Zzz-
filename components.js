// ============================================================
//  ZAMALEK FC — SHARED COMPONENTS  (js/components.js)
// ============================================================

function renderNavbar(activePage) {
  const s = DB.getSettings();
  return `
  <nav class="navbar">
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-icon">🔵⬜</span>
      <span class="nav-logo-text">${s.siteName || 'الزمالك'} <em>FC</em></span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>🏠 الرئيسية</a></li>
      <li><a href="mawaid-almabaryat.html" ${activePage==='matches'?'class="active"':''}>📅 مواعيد المباريات</a></li>
      <li><a href="akhbar-wamaqalat.html" ${activePage==='news'?'class="active"':''}>📰 الأخبار والمقالات</a></li>
    </ul>
    <button class="nav-admin-btn" onclick="openAdminLogin()">⚙️ لوحة التحكم</button>
  </nav>`;
}

function renderFooterHTML() {
  const s = DB.getSettings();
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-name" id="footer-brand-name">${s.siteName || 'الزمالك'} <em>FC</em></div>
        <p id="footer-brand-desc">${s.siteDesc || 'الموقع الرسمي لجماهير القلعة البيضاء'}</p>
      </div>
      <div class="footer-col">
        <h4>الأقسام</h4>
        <ul>
          <li><a href="index.html">🏠 الرئيسية</a></li>
          <li><a href="mawaid-almabaryat.html">📅 مواعيد المباريات</a></li>
          <li><a href="akhbar-wamaqalat.html">📰 الأخبار</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>البطولات</h4>
        <ul>
          <li><a href="mawaid-almabaryat.html">🏆 الدوري المصري</a></li>
          <li><a href="mawaid-almabaryat.html">🥇 كأس مصر</a></li>
          <li><a href="mawaid-almabaryat.html">🌍 أبطال أفريقيا</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>تواصل معنا</h4>
        <ul>
          <li><a href="#">📧 راسلنا</a></li>
          <li><a href="#">📱 تابعنا</a></li>
          <li><a href="lowhat-altahakum.html">⚙️ لوحة التحكم</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 ${s.siteName || 'الزمالك'} FC — جميع الحقوق محفوظة</span>
      <span>🔵⬜ القلعة البيضاء</span>
    </div>
  </footer>`;
}

function renderAdZone(position) {
  const s = DB.getSettings();
  const ads = DB.getAds().filter(a => a.position === position && a.active);
  if (!s.showAds || ads.length === 0) {
    return `<div class="ad-wrap"><div class="ad-zone">📢 مساحة إعلانية — ${position} — أضف كودك من لوحة التحكم</div></div>`;
  }
  return `<div class="ad-wrap">${ads.map(a => `<div>${a.code}</div>`).join('')}</div>`;
}

// ── LOGIN MODAL ──
function injectLoginModal() {
  const modal = document.createElement('div');
  modal.id = 'login-modal';
  modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9998;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:40px;width:100%;max-width:380px;font-family:Cairo,sans-serif;direction:rtl;animation:fadeUp .3s ease;">
      <style>@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}</style>
      <div style="text-align:center;font-size:3rem;margin-bottom:14px;">🔐</div>
      <h2 style="text-align:center;font-size:1.5rem;font-weight:900;margin-bottom:6px;color:#0f1e35;">لوحة الإدارة</h2>
      <p style="text-align:center;color:#6278a0;font-size:.88rem;margin-bottom:28px;">أدخل بيانات الدخول للوصول</p>
      <input id="login-user" type="text" placeholder="اسم المستخدم" autocomplete="off"
        style="width:100%;background:#e8eef8;border:1.5px solid #d0daea;border-radius:10px;padding:13px 16px;font-family:Cairo,sans-serif;font-size:1rem;margin-bottom:12px;outline:none;direction:rtl;color:#0f1e35;">
      <input id="login-pw" type="password" placeholder="كلمة المرور"
        style="width:100%;background:#e8eef8;border:1.5px solid #d0daea;border-radius:10px;padding:13px 16px;font-family:Cairo,sans-serif;font-size:1rem;margin-bottom:18px;outline:none;direction:rtl;color:#0f1e35;">
      <button onclick="doLogin()" style="width:100%;padding:14px;background:linear-gradient(135deg,#1565c0,#1976d2);border:none;border-radius:10px;color:white;font-family:Cairo,sans-serif;font-size:1.05rem;font-weight:700;cursor:pointer;">
        دخول ←
      </button>
      <div id="login-err" style="color:#e53935;font-size:.84rem;text-align:center;margin-top:10px;display:none;">❌ بيانات الدخول غلط</div>
      <button onclick="closeLoginModal()" style="display:block;width:100%;margin-top:12px;padding:10px;background:transparent;border:1.5px solid #d0daea;border-radius:10px;color:#6278a0;font-family:Cairo,sans-serif;cursor:pointer;font-size:.9rem;">إلغاء</button>
      <p style="text-align:center;color:#6278a0;font-size:.78rem;margin-top:14px;">افتراضي: <strong style="color:#1565c0">admin / admin123</strong></p>
    </div>`;
  document.body.appendChild(modal);
}

function openAdminLogin() {
  const m = document.getElementById('login-modal');
  if (m) { m.style.display = 'flex'; }
}

function closeLoginModal() {
  const m = document.getElementById('login-modal');
  if (m) { m.style.display = 'none'; }
}

function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pw').value.trim();
  if (u === 'admin' && p === DB.getAdminPw()) {
    closeLoginModal();
    window.location.href = 'lowhat-altahakum.html';
  } else {
    document.getElementById('login-err').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectLoginModal();
  const pwInput = document.getElementById('login-pw');
  if (pwInput) pwInput.addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
});
