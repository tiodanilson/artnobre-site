/* =========================================================
   ART NOBRE — main.js
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURAÇÃO — troque aqui telefone, e-mail e mensagem
   --------------------------------------------------------- */
const CONFIG = {
  whatsapp: '5567999187156',
  mensagemWhatsApp: 'Olá! Vim pelo site da Art Nobre e gostaria de solicitar um orçamento.',
  email: 'artnobremoveisplanejados@hotmail.com',
};

/* ---------------------------------------------------------
   2. PROJETOS — edite este array
   ---------------------------------------------------------
   titulo     → nome do projeto
   categoria  → residencial | corporativo | comercial | gourmet | marmoraria
   descricao  → texto curto que aparece no lightbox
   imagens    → arquivos em assets/img/projetos/ (a 1ª é a capa)
   video      → opcional, arquivo em assets/video/ (ou null)
   formato    → proporção da capa na galeria: 'alto' | 'retrato' | 'largo' | 'quadrado'
   extras     → opcional, categorias adicionais para o filtro (ex.: ['marmoraria'])
   destaque   → true para aparecer em "Projetos selecionados" (na ordem do array)
   ficha      → ficha técnica exibida nos projetos selecionados. Troque os [preencher].
   --------------------------------------------------------- */
const PROJETOS = [
  {
    titulo: 'Living com painel em laca',
    categoria: 'residencial',
    descricao: 'Pé-direito duplo, painel em laca com fitamento dourado, iluminação em LED e acabamento em meia esquadria. Um living pensado para receber.',
    imagens: ['living-1.jpg', 'living-2.jpg', 'living-3.jpg', 'living-4.jpg', 'living-5.jpg'],
    video: null,
    formato: 'quadrado',
    destaque: true,
    ficha: {
      'Ambientes': 'Living, home theater e sala íntima',
      'Materiais': 'Laca, fitamento dourado, ripado e LED',
      'Detalhe': 'Meia esquadria',
    },
  },
  {
    titulo: 'Clínica Arthena',
    categoria: 'corporativo',
    descricao: 'Ambientes que unem sofisticação, funcionalidade e acolhimento — da recepção e do espaço de café às salas de atendimento.',
    imagens: ['clinica-arthena-1.jpg', 'clinica-arthena-2.jpg', 'clinica-arthena-3.jpg'],
    video: null,
    formato: 'alto',
    destaque: true,
    ficha: {
      'Ambientes': 'Consultório e sala de atendimento',
      'Materiais': 'Marcenaria em laca, painéis e bancada em pedra',
      'Cidade': 'Dourados – MS',
    },
  },
  {
    titulo: 'Espaço Gourmet',
    categoria: 'gourmet',
    descricao: 'Ilha em granito com revestimento em pedra iluminado, marcenaria amadeirada e integração com a cozinha. Madeira e pedra no mesmo nível de precisão.',
    imagens: ['espaco-gourmet-1.jpg', 'espaco-gourmet-2.jpg'],
    video: null,
    formato: 'largo',
    extras: ['marmoraria'],
    destaque: true,
    ficha: {
      'Ambientes': 'Cozinha gourmet e área externa',
      'Materiais': 'Granito, madeira e iluminação em LED',
      'Detalhe': 'Meia esquadria a 45°',
    },
  },
  {
    titulo: 'Carvão Dourados',
    categoria: 'comercial',
    descricao: 'Recepção, escritório e expositores sob medida. Um ambiente pensado para transmitir identidade desde o primeiro contato e performance no dia a dia.',
    imagens: ['carvao-dourados-1.jpg', 'carvao-dourados-2.jpg', 'carvao-dourados-3.jpg'],
    video: null,
    formato: 'alto',
    destaque: true,
    ficha: {
      'Ambientes': 'Recepção, escritório e expositores',
      'Materiais': 'Amadeirado, grafite e LED',
      'Cidade': 'Dourados – MS',
    },
  },
  {
    titulo: 'Brava Imóveis',
    categoria: 'corporativo',
    descricao: 'Recepção, sala de reunião e escritórios com logos em ACM, caixa de tomadas integrada ao tampo, curvas que acolhem e meia esquadria em 45°.',
    imagens: ['brava-1.jpg', 'brava-2.jpg', 'brava-3.jpg', 'brava-4.jpg', 'brava-5.jpg'],
    video: null,
    formato: 'retrato',
    destaque: true,
    ficha: {
      'Ambientes': 'Recepção, sala de reunião e escritórios',
      'Materiais': 'Amadeirado, ACM e pedra',
      'Detalhe': 'Meia esquadria em 45°',
      'Cidade': 'Dourados – MS',
    },
  },
  {
    titulo: 'Cozinha com ilha em mármore',
    categoria: 'residencial',
    descricao: 'Ilha com bancada e lateral em cascata no padrão mármore, puxadores dourados, cristaleira com portas em vidro e iluminação em LED.',
    imagens: ['cozinha-1.jpg', 'cozinha-2.jpg', 'cozinha-3.jpg'],
    video: null,
    formato: 'alto',
    extras: ['marmoraria'],
  },
  {
    titulo: 'Suíte master',
    categoria: 'residencial',
    descricao: 'Cabeceira estofada com friso dourado, painel em laca, penteadeira e móveis com espelho. Leveza e brilho na medida.',
    imagens: ['suite-1.jpg', 'suite-2.jpg', 'suite-3.jpg'],
    video: null,
    formato: 'largo',
  },
  {
    titulo: 'Quarto infantil',
    categoria: 'residencial',
    descricao: 'Cabeceira em arco iluminada com borboletas, cama estofada sob medida e closet com portas em vidro.',
    imagens: ['quarto-infantil-1.jpg', 'quarto-infantil-2.jpg', 'quarto-infantil-3.jpg'],
    video: null,
    formato: 'alto',
  },
  {
    titulo: 'Cristaleira personalizada',
    categoria: 'residencial',
    descricao: 'Interior em tom escuro, portas em vidro e iluminação em LED valorizam os objetos e trazem profundidade ao ambiente.',
    imagens: ['cristaleira-1.jpg'],
    video: null,
    formato: 'retrato',
  },
  {
    titulo: 'Escritório executivo',
    categoria: 'corporativo',
    descricao: 'Estante iluminada, mesa sob medida e acabamentos que trazem equilíbrio e sofisticação ao ambiente de trabalho.',
    imagens: ['escritorio-executivo-1.jpg', 'escritorio-executivo-2.jpg'],
    video: null,
    formato: 'alto',
  },
];

const CATEGORIAS = {
  residencial: 'Residencial',
  corporativo: 'Corporativo',
  comercial: 'Comercial',
  gourmet: 'Gourmet',
  marmoraria: 'Marmoraria',
};

// Coordenadas que alternam nas telas de projeto em destaque
const COORDENADAS = [
  '22° 14′ 00″ S, 54° 49′ 22″ W',
  '20° 28′ 11″ S, 54° 37′ 12″ W',
  '22° 32′ 10″ S, 55° 43′ 32″ W',
  '22° 16′ 00″ S, 54° 10′ 00″ W',
];

const PASTA_PROJETOS = 'assets/img/projetos/';
const PASTA_VIDEO = 'assets/video/';

/* --------------------------------------------------------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mqDesktop = window.matchMedia('(min-width: 1000px)');
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, '0');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp01 = (n) => Math.min(1, Math.max(0, n));
const categoriasDe = (p) => [p.categoria, ...(p.extras || [])];

/* ---------- Loop único de rolagem (rAF) ---------- */
const onScrollFns = [];
function onScroll(fn) { onScrollFns.push(fn); }
(() => {
  let ticking = false;
  const run = () => { onScrollFns.forEach((fn) => fn()); ticking = false; };
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } };
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  window.addEventListener('load', req);
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(run));
})();

/* ---------- Placeholders: marca imagens que não existem ---------- */
function watchImage(img) {
  const fail = () => {
    img.classList.add('is-missing');
    img.closest('.media')?.classList.add('is-empty');
  };
  if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fail();
  else img.addEventListener('error', fail, { once: true });
}

/* ---------- Logo com fallback em texto ---------- */
function initLogos() {
  $$('img[data-logo]').forEach((img) => {
    const fail = () => img.closest('.logo').classList.add('is-fallback');
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail, { once: true });
  });
}

/* ---------- WhatsApp e e-mail ---------- */
function waLink(msg) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.mensagemWhatsApp)}`;
}
function initContacts() {
  $$('[data-whatsapp]').forEach((a) => { a.href = waLink(a.dataset.whatsapp); });
  $$('[data-email]').forEach((a) => {
    a.href = `mailto:${CONFIG.email}`;
    a.textContent = CONFIG.email;
  });
}

/* ---------- Menu flutuante: seção atual + progresso ---------- */
function initNav() {
  const nav = $('#nav');
  const burger = $('#burger');
  const where = $('#navWhere');
  const progress = $('#navProgress');
  const links = $$('#navLinks a');

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  burger.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  links.forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setOpen(false); });

  onScroll(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
  });

  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      where.textContent = en.target.dataset.nav;
      links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('[data-nav]').forEach((s) => io.observe(s));
}

/* ---------- Vídeo do hero ----------
   Não carrega em celular com conexão lenta / economia de dados,
   nem para quem prefere menos movimento: fica só o poster. */
function initHeroVideo() {
  const video = $('#heroVideo');
  if (!video) return;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const slow = conn && (conn.saveData || /(^|-)2g|3g/.test(conn.effectiveType || ''));
  if (reduceMotion || (isMobile && slow)) return;

  video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
  const source = document.createElement('source');
  source.src = video.dataset.src;
  source.type = 'video/mp4';
  source.addEventListener('error', () => video.remove());
  video.appendChild(source);
  video.load();
  video.play().catch(() => {});
}

/* ---------- Animações ao rolar ---------- */
function observeReveal(els) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

/* ---------- Projetos selecionados: trocam conforme a rolagem ---------- */
function initWork() {
  const section = $('#projetos');
  const stage = $('#workStage');
  const pager = $('#workPager');
  const lista = PROJETOS.map((p, i) => ({ p, i })).filter(({ p }) => p.destaque);
  if (!lista.length) { section.hidden = true; return; }
  const n = lista.length;

  lista.forEach(({ p, i }, k) => {
    const capa = PASTA_PROJETOS + p.imagens[0];
    const ficha = Object.entries(p.ficha || {}).filter(([key]) => key !== 'Cliente / Tipo');
    const spec = ficha.map(([a, b], m) => `<div><dt>${esc(a)}</dt><dd${m === 0 ? ' class="is-gold"' : ''}>${esc(b)}</dd></div>`).join('');
    const cidade = (p.ficha && p.ficha.Cidade && !p.ficha.Cidade.startsWith('[')) ? ` · ${p.ficha.Cidade}` : '';
    const el = document.createElement('article');
    el.className = 'proj';
    el.setAttribute('aria-label', `${k + 1} de ${n}: ${p.titulo}`);
    el.innerHTML = `
      <div class="proj__info">
        <p class="proj__meta">${pad(k + 1)} <i></i> ${esc(CATEGORIAS[p.categoria])}${esc(cidade)}</p>
        <h3 class="proj__name">${esc(p.titulo)}</h3>
        <dl class="proj__spec">${spec}</dl>
        <div class="proj__links">
          <button type="button" class="btn btn--white" data-open="${i}">Ver projeto <span class="arr">→</span></button>
          <a href="#arquivo" class="mono-link">Todos os projetos ↗</a>
        </div>
      </div>
      <div class="proj__visual">
        <figure class="proj__frame media" data-file="${esc(capa)}">
          <img src="${esc(capa)}" alt="${esc(p.titulo)} — projeto da Art Nobre" loading="lazy">
          <span class="tag"><span class="dot"></span>${esc(CATEGORIAS[p.categoria])}</span>
        </figure>
        <span class="proj__ghost" aria-hidden="true">${esc(p.titulo)}</span>
      </div>`;
    stage.appendChild(el);

    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = pad(k + 1);
    b.setAttribute('aria-label', `Ver ${p.titulo}`);
    pager.appendChild(b);
  });

  const items = $$('.proj', stage);
  const pages = $$('button', pager);
  let current = -1;
  const show = (k) => {
    if (k === current) return;
    current = k;
    items.forEach((it, m) => it.classList.toggle('is-active', m === k));
    pages.forEach((b, m) => b.setAttribute('aria-current', String(m === k)));
  };

  stage.addEventListener('click', (e) => {
    const b = e.target.closest('[data-open]');
    if (b) Lightbox.open(Number(b.dataset.open));
  });

  // No desktop a seção fica "presa" e cada trecho de rolagem mostra um projeto.
  // No celular os projetos aparecem empilhados.
  const layout = () => {
    if (mqDesktop.matches && !reduceMotion) {
      section.style.height = `${n * 90 + 10}vh`;
      section.classList.add('is-pinned');
    } else {
      section.style.height = '';
      section.classList.remove('is-pinned');
      items.forEach((it) => it.classList.add('is-active'));
      current = -1;
    }
  };
  layout();
  mqDesktop.addEventListener('change', layout);

  onScroll(() => {
    if (!section.classList.contains('is-pinned')) return;
    const r = section.getBoundingClientRect();
    const span = section.offsetHeight - window.innerHeight;
    const prog = clamp01(-r.top / span);
    show(Math.min(n - 1, Math.floor(prog * n)));
  });
  if (!section.classList.contains('is-pinned')) pages.forEach((b) => b.hidden = true);

  pages.forEach((b, k) => b.addEventListener('click', () => {
    if (!section.classList.contains('is-pinned')) { items[k].scrollIntoView({ behavior: 'smooth' }); return; }
    const top = section.getBoundingClientRect().top + window.scrollY;
    const span = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + span * (k + 0.5) / n, behavior: reduceMotion ? 'auto' : 'smooth' });
  }));
}

/* ---------- Todos os projetos (lista com filtros + prévia) ---------- */
function initArchive() {
  const list = $('#archive');
  const peek = $('#peek');
  const peekImg = $('img', peek);

  PROJETOS.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = 'row reveal';
    li.dataset.cats = categoriasDe(p).join(' ');
    li.innerHTML = `
      <button type="button" class="row__btn" data-index="${i}" aria-label="Abrir projeto ${esc(p.titulo)}">
        <span class="row__n">${pad(i + 1)}</span>
        <span><span class="row__name">${esc(p.titulo)}</span><span class="row__sub">Ver projeto ↗</span></span>
        <span class="row__end"><span class="tag"><span class="dot"></span>${esc(CATEGORIAS[p.categoria])}</span><span class="circle" aria-hidden="true">↗</span></span>
      </button>`;
    list.appendChild(li);
  });

  list.addEventListener('click', (e) => {
    const b = e.target.closest('[data-index]');
    if (b) Lightbox.open(Number(b.dataset.index));
  });

  // prévia que segue o cursor (só com mouse)
  let x = 0, y = 0, raf = null;
  const move = () => { peek.style.left = `${x}px`; peek.style.top = `${y}px`; raf = null; };
  list.addEventListener('mousemove', (e) => {
    x = e.clientX + 170; y = e.clientY;
    if (!raf) raf = requestAnimationFrame(move);
  });
  list.addEventListener('mouseover', (e) => {
    const b = e.target.closest('[data-index]');
    if (!b) return;
    const src = PASTA_PROJETOS + PROJETOS[Number(b.dataset.index)].imagens[0];
    if (peek.dataset.file !== src) {
      peek.dataset.file = src;
      peek.classList.remove('is-empty');
      peekImg.classList.remove('is-missing');
      peekImg.src = src;
      watchImage(peekImg);
    }
    peek.classList.add('is-on');
  });
  list.addEventListener('mouseleave', () => peek.classList.remove('is-on'));

  // rodapé: lista de projetos
  const foot = $('#footerProjects');
  if (foot) foot.innerHTML = PROJETOS.slice(0, 6).map((p, i) => `<li><a href="#arquivo" data-foot-open="${i}">${esc(p.titulo)}</a></li>`).join('');
  foot?.addEventListener('click', (e) => {
    const a = e.target.closest('[data-foot-open]');
    if (a) { e.preventDefault(); Lightbox.open(Number(a.dataset.footOpen)); }
  });
}

function setFilter(f) {
  $$('[data-filter]').forEach((b) => {
    const on = b.dataset.filter === f;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });
  $$('.row').forEach((row) => {
    const show = f === 'todos' || row.dataset.cats.split(' ').includes(f);
    row.classList.toggle('is-hidden', !show);
    if (show) row.classList.add('is-visible');
  });
}
function initFilters() {
  $$('[data-filter]').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  // cartões de serviço levam à lista já filtrada
  $$('[data-goto-filter]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    setFilter(a.dataset.gotoFilter);
    $('#arquivo').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }));
}

/* ---------- Lightbox ---------- */
const Lightbox = (() => {
  const box = $('#lightbox');
  const stage = $('#lbStage');
  let project = 0, index = 0, items = [], lastFocus = null;

  function buildItems(p) {
    const list = p.imagens.map((f) => ({ type: 'img', src: PASTA_PROJETOS + f }));
    if (p.video) list.push({ type: 'video', src: PASTA_VIDEO + p.video });
    return list;
  }

  function render() {
    const p = PROJETOS[project];
    const item = items[index];
    const fig = document.createElement('figure');
    fig.className = 'media';
    fig.dataset.file = item.src;
    if (item.type === 'video') {
      fig.innerHTML = `<video src="${esc(item.src)}" controls playsinline autoplay muted></video>`;
      $('video', fig).addEventListener('error', () => fig.classList.add('is-empty'));
    } else {
      fig.innerHTML = `<img src="${esc(item.src)}" alt="${esc(p.titulo)} — imagem ${index + 1} de ${items.length}">`;
      watchImage($('img', fig));
    }
    stage.replaceChildren(fig);
    $('#lbCat').textContent = CATEGORIAS[p.categoria];
    $('#lbTitle').textContent = p.titulo;
    $('#lbDesc').textContent = p.descricao;
    $('#lbCount').textContent = items.length > 1 ? `${pad(index + 1)} / ${pad(items.length)}` : '';
    $$('.lightbox__nav', box).forEach((b) => { b.style.visibility = items.length > 1 ? 'visible' : 'hidden'; });
  }

  const go = (dir) => { index = (index + dir + items.length) % items.length; render(); };

  function open(i) {
    project = i; index = 0;
    items = buildItems(PROJETOS[i]);
    lastFocus = document.activeElement;
    render();
    box.hidden = false;
    requestAnimationFrame(() => box.classList.add('is-open'));
    document.body.classList.add('is-locked');
    $('.lightbox__close', box).focus();
  }

  function close() {
    box.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    setTimeout(() => { box.hidden = true; stage.replaceChildren(); }, reduceMotion ? 0 : 400);
    lastFocus?.focus();
  }

  $('.lightbox__close', box).addEventListener('click', close);
  $('.lightbox__nav--prev', box).addEventListener('click', () => go(-1));
  $('.lightbox__nav--next', box).addEventListener('click', () => go(1));
  box.addEventListener('click', (e) => { if (e.target === box || e.target === stage) close(); });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'Tab') {
      const f = $$('button, video', box).filter((el) => el.offsetParent !== null && el.style.visibility !== 'hidden');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  let x0 = null, y0 = null;
  stage.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    x0 = y0 = null;
  });

  return { open };
})();

/* ---------- FAQ (um aberto por vez) ---------- */
function initFaq() {
  const qas = $$('.qa');
  qas.forEach((qa) => {
    const btn = $('.qa__q', qa);
    btn.addEventListener('click', () => {
      const willOpen = !qa.classList.contains('is-open');
      qas.forEach((o) => {
        o.classList.remove('is-open');
        $('.qa__q', o).setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        qa.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------- Status do ateliê: hora de Dourados e se está aberto ---------- */
function initStatus() {
  const clock = $('#clock');
  const text = $('#statusText');
  const dot = $('#statusDot');
  if (!clock) return;
  const fmt = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Campo_Grande', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'short', hour12: false,
  });
  const tick = () => {
    const parts = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
    clock.textContent = `${parts.hour}:${parts.minute}:${parts.second}`;
    const dia = parts.weekday.replace('.', '').toLowerCase();       // seg, ter, qua, qui, sex, sáb, dom
    const min = Number(parts.hour) * 60 + Number(parts.minute);
    const aberto = !['sáb', 'sab', 'dom'].includes(dia) && min >= 8 * 60 && min < 17 * 60 + 30;
    text.textContent = aberto ? 'Aberto agora' : 'Fechado · seg. a sex., 8h–17h30';
    dot.classList.toggle('is-off', !aberto);
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- Briefing em frase → WhatsApp ---------- */
function initForm() {
  const form = $('#briefing');
  if (!form) return;
  const erro = $('#formErro');
  const tel = form.elements.telefone;
  const chips = $('.brief__chips', form);

  // máscara (67) 99999-9999
  tel.addEventListener('input', () => {
    const d = tel.value.replace(/\D/g, '').slice(0, 11);
    let v = d;
    if (d.length > 2) v = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 7) v = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    tel.value = v;
  });

  const regras = [
    { campo: () => form.elements.nome, ok: () => form.elements.nome.value.trim().length >= 2, msg: 'seu nome' },
    { campo: () => tel, ok: () => /^\d{10,11}$/.test(tel.value.replace(/\D/g, '')), msg: 'um WhatsApp com DDD' },
    { campo: () => chips, ok: () => !!form.elements.servico.value, msg: 'o que você procura' },
    { campo: () => form.elements.cidade, ok: () => !!form.elements.cidade.value, msg: 'a cidade' },
  ];

  const clear = (el) => {
    el.removeAttribute('aria-invalid');
    if (!form.querySelector('[aria-invalid="true"]')) erro.textContent = '';
  };
  const onEdit = (e) => {
    if (e.target.name === 'servico') clear(chips);
    else if (e.target.getAttribute('aria-invalid')) clear(e.target);
  };
  form.addEventListener('input', onEdit);
  form.addEventListener('change', onEdit);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const faltando = [];
    let primeiro = null;
    regras.forEach((r) => {
      const el = r.campo();
      if (r.ok()) { el.removeAttribute('aria-invalid'); return; }
      el.setAttribute('aria-invalid', 'true');
      faltando.push(r.msg);
      primeiro ||= el === chips ? $('input', chips) : el;
    });
    if (faltando.length) {
      const lista = faltando.length > 1 ? `${faltando.slice(0, -1).join(', ')} e ${faltando.at(-1)}` : faltando[0];
      erro.textContent = `Quase lá — falta informar ${lista}.`;
      primeiro.focus();
      return;
    }
    erro.textContent = '';
    const f = form.elements;
    let msg = `Olá! Meu nome é ${f.nome.value.trim()}, meu WhatsApp é ${tel.value.trim()}. ` +
              `Estou procurando ${f.servico.value} em ${f.cidade.value}.`;
    const extra = f.mensagem.value.trim();
    if (extra) msg += ` Quero contar mais: ${extra}`;
    window.open(waLink(msg), '_blank', 'noopener');
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLogos();
  initContacts();
  initNav();
  initWork();
  initArchive();
  initFilters();
  initFaq();
  initStatus();
  initForm();
  $$('.media > img').forEach((img) => { if (!img.closest('#peek')) watchImage(img); });
  initHeroVideo();
  observeReveal($$('.reveal'));
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
});
