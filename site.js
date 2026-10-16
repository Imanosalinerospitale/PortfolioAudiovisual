// ===== COMPARTIDO POR TODAS LAS PÁGINAS: header, footer, idioma =====
const translations = { es: {}, en: {} };
function addTranslations(es, en) { Object.assign(translations.es, es); Object.assign(translations.en, en); }

addTranslations(
  { nav_cine:'cine', nav_pub:'publicidad', nav_video:'videoclips', nav_diseno:'diseño', nav_foto:'fotografía', nav_sobre:'sobre mí', nav_reel:'reel', nav_cv:'cv', nav_contacto:'contacto', socials:'Redes Sociales' },
  { nav_cine:'film', nav_pub:'advertising', nav_video:'music videos', nav_diseno:'design', nav_foto:'photography', nav_sobre:'about me', nav_reel:'reel', nav_cv:'resume', nav_contacto:'contact', socials:'Social Media' }
);

// Menú: [clave, destino, página (para marcar activa)]
const NAV = [
  ['nav_cine', 'index.html#cine'], ['nav_pub', 'index.html#publicidad'], ['nav_video', 'index.html#videoclips'],
  ['nav_diseno', 'index.html#diseno'], ['nav_foto', 'fotografias.html', 'foto'], ['nav_sobre', 'sobre-mi.html', 'sobre'],
  ['nav_reel', 'reel.html', 'reel'], ['nav_cv', 'cv.html', 'cv'], ['nav_contacto', 'index.html#contacto']
];

(function renderHeader() {
  const page = document.body.dataset.page;
  const links = NAV.map(([k, href, p]) =>
    `<a href="${href}" data-key="${k}"${p && p === page ? ' class="active" aria-current="page"' : ''}>${k.replace('nav_', '')}</a>`).join('');
  document.getElementById('site-header').innerHTML = `
    <header class="site-header"><div class="wrap">
      <a class="brand" href="index.html" aria-label="Inicio"><img src="img/logo.png" alt="Imanol Salinero Spitale" /></a>
      <nav class="site-nav" aria-label="Principal">${links}</nav>
      <div class="lang" role="group" aria-label="Idioma">
        <button type="button" onclick="changeLanguage('es')" id="btn-es" class="lang-btn active">ES</button>
        <span aria-hidden="true">|</span>
        <button type="button" onclick="changeLanguage('en')" id="btn-en" class="lang-btn">EN</button>
      </div>
    </div></header>`;
})();

function renderFooter() {
  const f = document.getElementById('site-footer');
  if (!f) return;
  const ico = (u, n, t) => `<a href="${u}" target="_blank" rel="noopener" title="${t}"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${n}.svg" alt="${t}" class="w-8 h-8 hover:opacity-75"></a>`;
  f.innerHTML = `<footer class="site-footer"><h2 class="text-lg font-semibold mb-4" data-key="socials">Redes Sociales</h2>
    <div class="flex justify-center space-x-6">${ico('https://www.imdb.com/name/nm16288616/', 'imdb', 'IMDb')}${ico('https://www.linkedin.com/in/imanol-salinero-spitale/', 'linkedin', 'LinkedIn')}${ico('https://wa.me/543516074183', 'whatsapp', 'WhatsApp')}</div></footer>`;
}

function changeLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  document.querySelectorAll('[data-key]').forEach(el => {
    const v = translations[lang][el.getAttribute('data-key')];
    if (v) el.innerText = v;
  });
  const pdf = document.getElementById('cv-pdf-link');
  if (pdf) pdf.href = pdf.getAttribute(`data-pdf-${lang}`);
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
}

// Cada página llama a initSite() cuando terminó de dibujar su contenido
function initSite() { renderFooter(); changeLanguage(localStorage.getItem('preferredLang') || 'es'); }
