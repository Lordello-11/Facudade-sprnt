// Dados mock
const empresas = [
  { nome: "Empresa Alpha", setor: "Tecnologia", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { nome: "Loja Beta", setor: "Comércio", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" },
  { nome: "Consultoria Gamma", setor: "Serviços", img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" },
];

const noticias = [
  { titulo: "Startups em alta", resumo: "Guarulhos ganha novas iniciativas de tecnologia.", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
  { titulo: "Expansão logística", resumo: "Setor de transportes cresce na região.", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
];

const eventos = [
  { titulo: "Workshop de Marketing", data: "25/09", detalhe: "Inscrições abertas", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" },
  { titulo: "Feira de Negócios", data: "10/10", detalhe: "Oportunidades para empreendedores", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
];

// Navegação por abas
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Busca de empresas
function renderEmpresas() {
  const list = document.getElementById("empresasList");
  const search = document.getElementById("searchInput").value.toLowerCase();
  list.innerHTML = "";
  empresas
    .filter(e => e.nome.toLowerCase().includes(search))
    .forEach(e => {
      const div = document.createElement("div");
      div.className = "card empresa-item";
      div.textContent = `${e.nome} - ${e.setor}`;
      list.appendChild(div);
    });
}
document.getElementById("searchInput").addEventListener("input", renderEmpresas);

// Render notícias
function renderNoticias() {
  const sec = document.getElementById("news");
  sec.innerHTML = "";
  noticias.forEach(n => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${n.titulo}</h3><p>${n.resumo}</p>`;
    sec.appendChild(div);
  });
}

// Render eventos
function renderEventos() {
  const sec = document.getElementById("events");
  sec.innerHTML = "";
  eventos.forEach(ev => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${ev.titulo}</h3><p>${ev.data} - ${ev.detalhe}</p>`;
    sec.appendChild(div);
  });
}

// Formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").textContent = "✅ Mensagem enviada com sucesso!";
  document.getElementById("successMsg").style.display = "block";
  setTimeout(() => {
    document.getElementById("successMsg").style.display = "none";
  }, 3000);
  this.reset();
});

// Inicialização
renderEmpresas();

// Capa de entrada com clique
const cover = document.getElementById('site-cover');
const arrow = document.getElementById('drag-arrow');

arrow.addEventListener('click', function() {
  arrow.classList.add('clicked', 'slide');
  cover.style.opacity = '0';
  setTimeout(() => {
    cover.style.display = 'none';
    arrow.classList.remove('clicked', 'slide');
  }, 500);
});

// Abrir/fechar menu lateral
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  if (sideMenu.classList.contains('open')) {
    sideMenu.style.display = "flex";
  } else {
    sideMenu.style.display = "none";
  }
});
sideMenu.classList.remove('open');
sideMenu.style.display = "none";

document.querySelectorAll('.menu-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
    sideMenu.classList.remove('open');
  });
});

const layoutBtn = document.getElementById('layout-btn');
const topNav = document.getElementById('top-nav');

layoutBtn.addEventListener('click', () => {
  if (topNav.style.display === "none") {
    topNav.style.display = "flex";
    sideMenu.style.display = "none";
  } else {
    topNav.style.display = "none";
    sideMenu.style.display = "flex";
  }
});

// Troca de abas para o menu do topo também
document.querySelectorAll('.top-nav .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

sideMenu.classList.remove('open');
sideMenu.style.display = "flex";