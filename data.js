// ============================================================
//  ZAMALEK FC — DATA STORE  (js/data.js)
//  كل البيانات مخزّنة في localStorage
// ============================================================

const DB = {

  // ── KEYS ──
  K: {
    matches:  'zm_matches',
    articles: 'zm_articles',
    ads:      'zm_ads',
    settings: 'zm_settings',
    adminPw:  'zm_admin_pw',
  },

  // ── DEFAULTS ──
  defaultMatches() {
    return [
      { id:'m1', competition:'دوري نايل', home:'الزمالك', homeEmoji:'🔵⬜', away:'الأهلي', awayEmoji:'🔴', date:'2025-05-10', time:'19:00', score:'', status:'upcoming' },
      { id:'m2', competition:'كأس مصر', home:'الزمالك', homeEmoji:'🔵⬜', away:'بيراميدز', awayEmoji:'🟠', date:'2025-04-20', time:'17:00', score:'2 - 0', status:'done' },
      { id:'m3', competition:'دوري نايل', home:'سموحة', homeEmoji:'🟢', away:'الزمالك', awayEmoji:'🔵⬜', date:'2025-04-15', time:'20:00', score:'1 - 1', status:'done' },
      { id:'m4', competition:'بطولة أفريقيا', home:'الزمالك', homeEmoji:'🔵⬜', away:'الترجي', awayEmoji:'🔴🟡', date:'2025-05-22', time:'21:00', score:'', status:'upcoming' },
      { id:'m5', competition:'دوري نايل', home:'الزمالك', homeEmoji:'🔵⬜', away:'الإسماعيلي', awayEmoji:'🟡', date:'2025-04-28', time:'19:30', score:'', status:'upcoming' },
    ];
  },

  defaultArticles() {
    return [
      {
        id:'a1',
        slug:'zamalek-wins-egypt-cup',
        title:'الزمالك يتوج بلقب كأس مصر بعد فوز ساحق على بيراميدز',
        excerpt:'حقق الزمالك إنجازاً كبيراً بتتويجه بلقب كأس مصر للمرة الثامنة والعشرين في تاريخه.',
        content:'<p>حقق نادي الزمالك إنجازاً رياضياً كبيراً، إذ تمكن من التتويج بلقب كأس مصر للمرة الثامنة والعشرين في تاريخه العريق، وذلك بعد فوزه الساحق على نادي بيراميدز بهدفين دون رد في المباراة النهائية التي أقيمت على ملعب القاهرة الدولي.</p><h2>أبطال المباراة</h2><p>تألق الفريق الأبيض طوال المباراة وأظهر مستوى فنياً راقياً، حيث فتح الزمالك التسجيل في الدقيقة الثامنة والعشرين عبر ضربة رأس رائعة، ثم أضاف الهدف الثاني في الدقيقة الثالثة والستين ليحسم اللقب لصالح القلعة البيضاء.</p><blockquote>الزمالك دائماً يعود أقوى — شعار حملته الجماهير البيضاء طوال الموسم</blockquote><p>وبهذا الفوز يؤكد الزمالك حضوره القوي في كرة القدم المصرية ويضيف لقباً جديداً إلى رصيده التاريخي الحافل.</p>',
        cat:'كأس مصر',
        emoji:'🏆',
        imageData:null,
        date:'15 أبريل 2025',
        dateISO:'2025-04-15',
        tags:['كأس مصر','الزمالك','بيراميدز'],
        author:'إدارة الموقع',
      },
      {
        id:'a2',
        slug:'zamalek-africa-journey',
        title:'الزمالك يستعد لمعركة القارة الأفريقية أمام الترجي التونسي',
        excerpt:'يدخل الزمالك مرحلة مجموعات دوري أبطال أفريقيا بأقوى استعداداته للمنافسة على اللقب.',
        content:'<p>يواصل نادي الزمالك استعداداته المكثفة لخوض غمار دوري أبطال أفريقيا، حيث يواجه الفريق الأبيض منافسة شرسة من أقوى الأندية القارية.</p><p>ويُعد الزمالك من أكثر الأندية المصرية والأفريقية تتويجاً بلقب دوري الأبطال، إذ يسعى هذا الموسم لاستعادة مجده القاري بعد غياب عن المنافسة على اللقب.</p><h2>التحضيرات</h2><p>يُجري الجهاز الفني معسكرات تدريبية مكثفة، ويعمل على تطوير الأداء التكتيكي للفريق استعداداً لهذه البطولة القارية المرموقة.</p>',
        cat:'أفريقيا',
        emoji:'🌍',
        imageData:null,
        date:'12 أبريل 2025',
        dateISO:'2025-04-12',
        tags:['أفريقيا','الزمالك','الترجي'],
        author:'إدارة الموقع',
      },
      {
        id:'a3',
        slug:'zamalek-squad-news',
        title:'آخر أخبار قائمة الزمالك وصفقات الانتقالات الصيفية',
        excerpt:'تقارير تكشف عن خطط إدارة الزمالك لتعزيز القائمة في الميركاتو الصيفي القادم.',
        content:'<p>كشفت مصادر مطلعة عن خطط إدارة نادي الزمالك لتعزيز صفوف الفريق الأول بعدد من الصفقات المميزة خلال الميركاتو الصيفي القادم.</p><p>وتسعى إدارة النادي إلى التعاقد مع عدد من اللاعبين المحليين والأجانب لتقوية الخط الهجومي وسد الفراغ في بعض المناصب.</p>',
        cat:'الفريق',
        emoji:'⚪',
        imageData:null,
        date:'10 أبريل 2025',
        dateISO:'2025-04-10',
        tags:['الزمالك','انتقالات','ميركاتو'],
        author:'إدارة الموقع',
      },
    ];
  },

  defaultSettings() {
    return {
      siteName:    'الزمالك',
      siteDesc:    'الموقع الرسمي لجماهير القلعة البيضاء',
      accentColor: '#1565c0',
      ticker:      true,
      showMatches: true,
      showNews:    true,
      showAds:     false,
      tickerText:  '🔵⬜ مرحباً بكم في موقع الزمالك | تابعونا لآخر الأخبار والمباريات',
      adCode:      '',
      googleApi:   '',
    };
  },

  // ── GET / SET ──
  getMatches()   { try{ return JSON.parse(localStorage.getItem(DB.K.matches))  || DB.defaultMatches();  }catch(e){ return DB.defaultMatches(); } },
  getArticles()  { try{ return JSON.parse(localStorage.getItem(DB.K.articles)) || DB.defaultArticles(); }catch(e){ return DB.defaultArticles(); } },
  getAds()       { try{ return JSON.parse(localStorage.getItem(DB.K.ads))      || []; }catch(e){ return []; } },
  getSettings()  { try{ return Object.assign({}, DB.defaultSettings(), JSON.parse(localStorage.getItem(DB.K.settings)) || {}); }catch(e){ return DB.defaultSettings(); } },
  getAdminPw()   { return localStorage.getItem(DB.K.adminPw) || 'admin123'; },

  saveMatches(d)  { localStorage.setItem(DB.K.matches,  JSON.stringify(d)); },
  saveArticles(d) { localStorage.setItem(DB.K.articles, JSON.stringify(d)); },
  saveAds(d)      { localStorage.setItem(DB.K.ads,      JSON.stringify(d)); },
  saveSettings(d) { localStorage.setItem(DB.K.settings, JSON.stringify(d)); },
  saveAdminPw(p)  { localStorage.setItem(DB.K.adminPw,  p); },

  // ── HELPERS ──
  makeId(prefix) { return prefix + Date.now(); },

  slugify(text) {
    return text.trim()
      .replace(/\s+/g, '-')
      .replace(/[^\u0600-\u06FFa-zA-Z0-9-]/g, '')
      .toLowerCase()
      .substring(0, 80)
      + '-' + Date.now();
  },

  formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });
  },

  // ── ARTICLE PAGE GENERATOR ──
  // يولّد صفحة HTML كاملة للمقال ويحفظها في localStorage
  generateArticlePage(article) {
    // نحفظها كـ key للوصول من صفحة article.html
    localStorage.setItem('zm_article_' + article.slug, JSON.stringify(article));
  },

  getArticleBySlug(slug) {
    const stored = localStorage.getItem('zm_article_' + slug);
    if (stored) return JSON.parse(stored);
    // fallback: ابحث في القائمة
    return DB.getArticles().find(a => a.slug === slug) || null;
  },

  // ── SYNC: ensures all articles have their own page key ──
  syncArticlePages() {
    DB.getArticles().forEach(a => DB.generateArticlePage(a));
  },
};

// ── GLOBAL ALERT ──
function showAlert(msg, type='') {
  let el = document.getElementById('z-alert');
  if (!el) { el = document.createElement('div'); el.id='z-alert'; el.className='z-alert'; document.body.appendChild(el); }
  el.textContent = msg;
  el.className = 'z-alert ' + type;
  el.classList.add('show');
  clearTimeout(window._alertTimer);
  window._alertTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// ── NAVBAR ACTIVE LINK ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === 'index.html' && href === './') || href.includes(page)) {
      a.classList.add('active');
    }
  });
}

// ── TICKER ──
function initTicker() {
  const s = DB.getSettings();
  const wrap = document.getElementById('ticker-wrap');
  if (!wrap) return;
  if (!s.ticker) { wrap.style.display = 'none'; return; }
  wrap.style.display = '';
  const track = document.getElementById('ticker-track');
  if (track) {
    const matches = DB.getMatches();
    const upcoming = matches.filter(m => m.status === 'upcoming').slice(0,5);
    let txt = s.tickerText;
    if (upcoming.length) {
      txt += ' | ' + upcoming.map(m => `📅 ${m.home} vs ${m.away} — ${m.date} ${m.time}`).join(' | ');
    }
    track.innerHTML = txt + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + txt;
  }
}

// ── FOOTER ──
function renderFooter() {
  const s = DB.getSettings();
  const el = document.getElementById('footer-brand-name');
  if (el) el.innerHTML = `${s.siteName} <em>FC</em>`;
  const el2 = document.getElementById('footer-brand-desc');
  if (el2) el2.textContent = s.siteDesc;
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initTicker();
  renderFooter();
  DB.syncArticlePages();
});
