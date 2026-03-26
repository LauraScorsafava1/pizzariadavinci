/* ═══════════════════════════════════════════════
   LA BELLA PIZZA — script.js
   Renderização dinâmica: promoção, cardápio e UX
═══════════════════════════════════════════════ */

// ─── DADOS: PROMOÇÃO ───────────────────────────
const promocoes = [
  {
    emoji: "../img/Promocao1.png",
    badge: "Promoção 01 - Todos os Dias!",
    titulo: "Pizza Grande",
    subtitulo: "Mussarela, calabresa, catupiry scala, escarola 1, baiana, romanesca 1",
    detalhes: "Pizza brotinho a R$ 30,00",
    preco: "R$ 50,00",
    whatsapp: "https://wa.me/5511985503361?text=Gostaria de pedir uma pizza da promoção 01"
  },
  {
    emoji: "../img/Promocao2.png",
    badge: "Promoção 02 - Terças a quintas e domingos!",
    titulo: "Pizza Grande",
    subtitulo: "Qualquer pizza de sabor único ou meio a meio (exceto camarão, camarão c/ catupiry, búfala, davinci, do cliente, aliche, escarola 3, rúcula & romana)",
    detalhes: "Pizza brotinho a R$ 35,00",
    preco: "R$ 55,00",
    whatsapp: "https://wa.me/5511985503361?text=Gostaria de pedir uma pizza da promoção 02"
  }
];

// ─── DADOS: CARDÁPIO ───────────────────────────
const cardapio = [
  {
  categoria: "Tradicionais",
  itens: [
    { 
      numero: 38,  
      nome: "Margherita 1",         
      preco: "R$ 60,00", 
      detalhes: "Mussarela, parmesão, manjericão fresco e rodelas de tomate" 
    },
    { 
      numero: 39,  
      nome: "Margherita 2",             
      preco: "R$ 70,00", 
      detalhes: "Mussarela, parmesão, tomate seco e manjericão fresco" 
    },
    { 
      numero: 45,  
      nome: "Mussarela",            
      preco: "R$ 50,00", 
      detalhes: "Mussarela em fatias bem douradas" 
    },
    { 
      numero: 46,  
      nome: "Napolitana",            
      preco: "R$ 57,00", 
      detalhes: "Mussarela fatiada, rodelas de tomate e parmesão ralado" 
    }
  ]
},
  {
  categoria: "Queijos",
  itens: [
    { 
      numero: 2,  
      nome: "Alho e Óleo",               
      preco: "R$ 58,00", 
      detalhes: "Mussarela coberta com alho" 
    },
    { 
      numero: 12,  
      nome: "Búfala",          
      preco: "R$ 70,00", 
      detalhes: "Mussarela de búfala e tomate seco" 
    },
    { 
      numero: 19,  
      nome: "Catupiry",         
      preco: "R$ 50,00", 
      detalhes: "Queijo tipo catupiry e azeitonas" 
    },
    { 
      numero: 33,  
      nome: "Gorgonzola",               
      preco: "R$ 65,00", 
      detalhes: "Queijo espinafrado bem derretido" 
    },
    { 
      numero: 34,  
      nome: "Gratinada",          
      preco: "R$ 70,00", 
      detalhes: "Provolone, catupiry e parmesão" 
    },
    { 
      numero: 53,  
      nome: "Provolone",         
      preco: "R$ 60,00", 
      detalhes: "Fatias de provolone com fatias de tomate" 
    },
    { 
      numero: 59,  
      nome: "Dois queijos",         
      preco: "R$ 60,00", 
      detalhes: "Mussarela e catupiry" 
    },
    { 
      numero: 60,  
      nome: "Três queijos",         
      preco: "R$ 70,00", 
      detalhes: "Provolone, parmesão e gorgonzola" 
    },
    { 
      numero: 61,  
      nome: "Quatro queijos",         
      preco: "R$ 75,00", 
      detalhes: "Mussarela, provolone, parmesão e catupiry" 
    },
    { 
      numero: 62,  
      nome: "Cinco queijos",         
      preco: "R$ 78,00", 
      detalhes: "Mussarela, provolone, parmesão, catupiry e gorgonzola" 
    }
  ]
},
  {
  categoria: "Carnes/Frios",
  itens: [
    { 
      numero: 6,  
      nome: "À Moda",               
      preco: "R$ 65,00", 
      detalhes: "Lombo, mussarela, rodelas de tomate, catupiry, manjericão e parmesão" 
    },
    { 
      numero: 9,  
      nome: "Bauru",          
      preco: "R$ 62,00", 
      detalhes: "Presunto, mussarela e tomate fatiado" 
    },
    { 
      numero: 25,  
      nome: "Do cliente",         
      preco: "R$ 80,00", 
      detalhes: "Peito de peru, champignon, milho, cheddar, bacon e alho frito" 
    },
    { 
      numero: 26,  
      nome: "Do papa",         
      preco: "R$ 80,00", 
      detalhes: "Mussarela, presunto picado e catupiry" 
    },
    { 
      numero: 36,  
      nome: "La Família",               
      preco: "R$ 70,00", 
      detalhes: "Lombinho defumado com catupiry, bacon e parmesão" 
    },
    { 
      numero: 40,  
      nome: "Marichela",          
      preco: "R$ 70,00", 
      detalhes: "Presunto, mussarela, champignon, bacon e parmesão" 
    },
    { 
      numero: 41,  
      nome: "Milano",         
      preco: "R$ 70,00", 
      detalhes: "Presunto, ovos, cebola, palmito e parmesão" 
    },
    { 
      numero: 48,  
      nome: "Peito de peru 1",         
      preco: "R$ 70,00", 
      detalhes: "Peito de peru e catupiry" 
    },
    { 
      numero: 49,  
      nome: "Peito de peru 2",         
      preco: "R$ 75,00", 
      detalhes: "Peito de peru e cheddar" 
    },
    { 
      numero: 51,  
      nome: "Portuguesa",         
      preco: "R$ 70,00", 
      detalhes: "Presunto, cebola, ovos coberta com mussarela" 
    },
    { 
      numero: 52,  
      nome: "Premiada",         
      preco: "R$ 70,00", 
      detalhes: "Mussarela, bacon, champignon, alcaparras e parmesão" 
    },
    { 
      numero: 57,  
      nome: "Siciliana",         
      preco: "R$ 70,00", 
      detalhes: "Mussarela, bacon, champignon, cebola ou manjericão" 
    }
  ]
},

  {
  "categoria": "Vegetais / Hortiças",
  "itens": [
    { "numero": 1, "nome": "Abobrinha", "preco": "R$ 65,00", "detalhes": "Mussarela, abobrinha, parmesão e bacon" },
    { "numero": 13, "nome": "Brasileirinha", "preco": "R$ 70,00", "detalhes": "Palmito, ervilha e cebolas com mussarela" },
    { "numero": 14, "nome": "Brócolis 1", "preco": "R$ 70,00", "detalhes": "Brócolis cozido, bacon, salpicado com alho frito e gorgonzola" },
    { "numero": 15, "nome": "Brócolis 2", "preco": "R$ 65,00", "detalhes": "Brócolis cozido, bacon, salpicado com alho frito coberta com mussarela" },
    { "numero": 16, "nome": "Brócolis 3", "preco": "R$ 65,00", "detalhes": "Brócolis cozido, bacon, salpicado com alho frito coberta com catupiry" },
    { "numero": 18, "nome": "Champignon", "preco": "R$ 60,00", "detalhes": "Cogumelos frescos cobertos com mussarela" },
    { "numero": 27, "nome": "Escarola 1", "preco": "R$ 50,00", "detalhes": "Escarola, alho e bacon" },
    { "numero": 28, "nome": "Escarola 2", "preco": "R$ 65,00", "detalhes": "Escarola temperada com alho coberta com mussarela e bacon" },
    { "numero": 29, "nome": "Escarola 3", "preco": "R$ 75,00", "detalhes": "Escarola temperada com alho e filé de anchovas com mussarela" },
    { "numero": 30, "nome": "Especial 1", "preco": "R$ 70,00", "detalhes": "Escarola, atum, alho frito e bacon" },
    { "numero": 31, "nome": "Especial 2", "preco": "R$ 70,00", "detalhes": "Escarola, atum, mussarela, alho e bacon" },
    { "numero": 42, "nome": "Milho verde 1", "preco": "R$ 57,00", "detalhes": "Milho verde coberto com mussarela" },
    { "numero": 43, "nome": "Milho verde 2", "preco": "R$ 57,00", "detalhes": "Milho verde coberto com catupiry" },
    { "numero": 47, "nome": "Palmito", "preco": "R$ 65,00", "detalhes": "Palmito coberto com mussarela" },
    { "numero": 55, "nome": "Rúcula 1", "preco": "R$ 75,00", "detalhes": "Mussarela de búfala com rúcula e tomate seco" },
    { "numero": 55, "nome": "Rúcula 2", "preco": "R$ 75,00", "detalhes": "Mussarela, rúcula e tomate seco" }
  ]
},

  {
  "categoria": "Frangos",
  "itens": [
    {
      "numero": 32,
      "nome": "Frango com catupiry",
      "preco": "R$ 70,00",
      "detalhes": "Frango desfiado e refogado com catupiry"
    },
    {
      "numero": 35,
      "nome": "Jardineira",
      "preco": "R$ 70,00",
      "detalhes": "Frango desfiado e refogado com mussarela"
    }
  ]
},

  {
  "categoria": "Embutidos / Defumados",
  "itens": [
    { "numero": 7, "nome": "Bacon", "preco": "R$ 60,00", "detalhes": "Fatias de bacon com mussarela" },
    { "numero": 8, "nome": "Baiana", "preco": "R$ 50,00", "detalhes": "Calabresa moída, cebola e pimenta" },
    { "numero": 10, "nome": "Bela itália 1", "preco": "R$ 56,00", "detalhes": "Calabresa moída, ovo e cebola" },
    { "numero": 11, "nome": "Bela itália 2", "preco": "R$ 60,00", "detalhes": "Calabresa moída, ovo, catupiry e cebola" },
    { "numero": 17, "nome": "Calabresa", "preco": "R$ 50,00", "detalhes": "Linguiça calabresa coberta com cebola" },
    { "numero": 20, "nome": "Catupiry com bacon", "preco": "R$ 60,00", "detalhes": "Queijo tipo catupiry e bacon" },
    { "numero": 37, "nome": "Lombo", "preco": "R$ 60,00", "detalhes": "Lombo canadense defumado com rodas de cebola" },
    { "numero": 44, "nome": "Modinha", "preco": "R$ 60,00", "detalhes": "Lombo defumado, cebola coberta com catupiry" },
    { "numero": 50, "nome": "Pepperoni", "preco": "R$ 70,00", "detalhes": "Mussarela e pepperoni" },
    { "numero": 58, "nome": "Toscana", "preco": "R$ 65,00", "detalhes": "Calabresa moída coberta com mussarela" },
    { "numero": 64, "nome": "Romanesca 1", "preco": "R$ 50,00", "detalhes": "Calabresa fatiada e vinagrete" },
    { "numero": 65, "nome": "Romanesca 2", "preco": "R$ 55,00", "detalhes": "Calabresa moída, vinagrete e parmesão" },
    { "numero": 66, "nome": "Da Mia", "preco": "R$ 70,00", "detalhes": "Mussarela, catupiry, calabresa fatiada e parmesão" }
  ]
},

{
  "categoria": "Frutos do Mar",
  "itens": [
    {
      "numero": 3,
      "nome": "Aliche",
      "preco": "R$ 75,00",
      "detalhes": "Filé de anchovas importadas, rodelas de tomate e parmesão"
    },
    {
      "numero": 4,
      "nome": "Atum",
      "preco": "R$ 60,00",
      "detalhes": "Atum temperado e rodelas de cebola"
    },
    {
      "numero": 5,
      "nome": "Americana",
      "preco": "R$ 70,00",
      "detalhes": "Atum, palmito, ervilhas coberta com mussarela e cebola"
    },
    {
      "numero": 21,
      "nome": "Camarão",
      "preco": "R$ 75,00",
      "detalhes": "Camarão refogado com rodelas de cebola"
    },
    {
      "numero": 22,
      "nome": "Camarão com catupiry",
      "preco": "R$ 80,00",
      "detalhes": "Camarão refogado e coberto com catupiry"
    },
    {
      "numero": 54,
      "nome": "Romana",
      "preco": "R$ 75,00",
      "detalhes": "Mussarela, rodelas de tomate e filé de anchovas"
    }
  ]
},

{
  "categoria": "Calzones",
  "itens": [
    {
      "numero": 23,
      "nome": "Calzone de catupiry",
      "preco": "R$ 70,00",
      "detalhes": "Mussarela, catupiry e presunto"
    },
    {
      "numero": 24,
      "nome": "Calzone de frango",
      "preco": "R$ 70,00",
      "detalhes": "Presunto, frango e catupiry"
    }
  ]
},

  {
  "categoria": "Especiais da Casa",
  "itens": [
    {
      "numero": 63,
      "nome": "Davinci",
      "preco": "A CONSULTAR",
      "detalhes": "Monte sua pizza com cinco ingredientes"
    }
  ]
},

  {
  "categoria": "Pizzas Doces",
  "itens": [
    {
      "numero": 67,
      "nome": "Brigadeiro",
      "preco": "R$ 60,00",
      "detalhes": "Creme de leite, pasta de brigadeiro, granulado e cereja"
    },
    {
      "numero": 68,
      "nome": "Da época",
      "preco": "R$ 60,00",
      "detalhes": "Chocolate com morangos ou cereja"
    },
    {
      "numero": 69,
      "nome": "M&M'S",
      "preco": "R$ 60,00",
      "detalhes": "Chocolate com confeitos coloridos"
    },
    {
      "numero": 70,
      "nome": "Sonho de valsa",
      "preco": "R$ 65,00",
      "detalhes": "Creme de leite, bombom sonho de valsa e cerejas"
    }
  ]
},

];
const bordasData = {
  tradicionais: [
    {
      icon: "1",
      nome: "Catupiry Escala",
      detalhes: "Borda recheada com catupiry cremoso.",
      preco: "R$ 12,00"
    },
        {
      icon: "2",
      nome: "Catupiry Original",
      detalhes: "Borda recheada com catupiry cremoso.",
      preco: "R$ 15,00"
    },
    {
      icon: "3",
      nome: "Cheddar",
      detalhes: "Borda cremosa com cheddar especial.",
      preco: "R$ 15,00"
    },
        {
      icon: "4",
      nome: "Chocolate",
      detalhes: "Borda doce recheada com chocolate cremoso.",
      preco: "R$ 12,00"
    }
  ]
};

// ─── RENDER: PROMOÇÃO ──────────────────────────
function renderizarPromocoes() {
  const container = document.getElementById("promocao-container");
  if (!container) return;

  container.innerHTML = "";

  promocoes.forEach(promocao => {
    container.innerHTML += `
      <div class="promo-card">
        <div class="promo-img">
          <div class="promo-img-inner">
            <img src="${promocao.emoji}">
          </div>
          <span class="promo-badge-img">${promocao.badge}</span>
        </div>

        <div class="promo-content">
          <h3 class="promo-title">${promocao.titulo}</h3>
          <p class="promo-subtitle">${promocao.subtitulo}</p>
          <p class="promo-details">${promocao.detalhes}</p>

          <div class="promo-price-block">
            <span class="promo-preco">${promocao.preco}</span>
          </div>

          <a href="${promocao.whatsapp}" target="_blank" class="btn btn-whatsapp btn-large">
            <i class="ph-fill ph-whatsapp-logo"></i> Pedir Esta Promoção
          </a>
        </div>
      </div>
    `;
  });
}

// ─── RENDER: ABAS ──────────────────────────────
function renderizarAbas(categoriaAtiva = cardapio[0].categoria) {
  const tabsEl = document.getElementById("tabs");
  if (!tabsEl) return;

  tabsEl.innerHTML = cardapio.map(cat => `
    <button
      class="tab-btn ${cat.categoria === categoriaAtiva ? "active" : ""}"
      data-categoria="${cat.categoria}"
      onclick="selecionarAba('${cat.categoria}')"
    >${cat.categoria}</button>
  `).join("");
}

// ─── RENDER: ITENS DO CARDÁPIO ─────────────────
function renderizarItens(categoria) {
  const grid = document.getElementById("cardapio-items");
  if (!grid) return;

  const cat = cardapio.find(c => c.categoria === categoria);
  if (!cat) return;

  grid.innerHTML = cat.itens.map((item, i) => `
    <div class="pizza-card" style="animation-delay: ${i * 0.05}s">
      <div class="pizza-num">${item.numero}</div>
      <div class="pizza-info">
        <h4 class="pizza-nome">${item.nome}</h4>
        <p class="pizza-detalhes">${item.detalhes}</p>
        <div class="pizza-footer">
          <span class="pizza-preco">${item.preco}</span>
          <button
            class="pizza-btn"
            onclick="pedirPizza('${item.nome}', '${item.preco}')"
          >
            <i class="ph ph-shopping-cart-simple"></i> Pedir
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ─── FUNÇÃO: TROCA DE ABA ──────────────────────
function selecionarAba(categoria) {
  // Atualiza botões
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.categoria === categoria);
  });
  // Atualiza itens
  renderizarItens(categoria);
  // Scroll suave para o cardápio (mobile friendly)
  document.getElementById("cardapio-items").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ─── FUNÇÃO: PEDIR PIZZA VIA WHATSAPP ──────────
function pedirPizza(nome, preco) {
  const msg = encodeURIComponent(
    `Olá! Gostaria de pedir a pizza *${nome}* (${preco}). Podem me ajudar?`
  );
  window.open(`https://wa.me/5511985503361?text=${msg}`, "_blank");
}

// ─── HEADER: SCROLL BEHAVIOR ──────────────────
function initScrollHeader() {
  const header = document.getElementById("header");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 80) {
      header.style.boxShadow = "0 4px 30px rgba(0,0,0,.4)";
    } else {
      header.style.boxShadow = "none";
    }
    lastY = y;
  }, { passive: true });
}

// ─── HEADER: MOBILE HAMBURGER ─────────────────
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const spans = btn.querySelectorAll("span");
    if (nav.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity   = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans.forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    }
  });

  // Fechar ao clicar em link
  nav.querySelectorAll(".nav-link, .btn").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.querySelectorAll("span").forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    });
  });
}

// ─── NAV: LINK ATIVO NO SCROLL ────────────────
function initActiveNav() {
  const sections = ["inicio", "promocao", "cardapio", "onde-estamos"];
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => {
          l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

const slider = document.querySelector('.tabs-scroll');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});



function renderizarTabsBordas() {
  const tabsContainer = document.getElementById("tabs-bordas");
  if (!tabsContainer) return;

  const categorias = Object.keys(bordasData);

  tabsContainer.innerHTML = categorias.map((categoria, index) => `
    <button class="tab-btn ${index === 0 ? 'active' : ''}" data-borda="${categoria}">
      ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}
    </button>
  `).join("");

  tabsContainer.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderizarBordas(btn.dataset.borda);
    });
  });
}
function renderizarBordas(categoria = "tradicionais") {
  const container = document.getElementById("bordas-items");
  if (!container) return;

  const bordas = bordasData[categoria] || [];

  container.innerHTML = bordas.map(borda => `
    <div class="borda-card">
      <div class="borda-icon">${borda.icon}</div>

      <div class="borda-info">
        <h3 class="borda-nome">${borda.nome}</h3>
        <p class="borda-detalhes">${borda.detalhes}</p>

        <div class="borda-footer">
          <span class="borda-preco">${borda.preco}</span>

        </div>
      </div>
    </div>
  `).join("");
}
// ─── INIT ─────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderizarBordas();
  renderizarPromocoes();
  renderizarAbas(cardapio[0].categoria);
  renderizarItens(cardapio[0].categoria);
  initScrollHeader();
  initHamburger();
  initActiveNav();
});
