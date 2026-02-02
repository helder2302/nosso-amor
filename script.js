const musica = document.getElementById("musica");
const inicio = document.getElementById("inicio");
const conteudo = document.getElementById("conteudo");
const slide = document.getElementById("slide");

const inicioNamoro = new Date(2025, 1, 23); // 23 fevereiro 2025
document.getElementById("dataInicio").innerText =
  "Desde 23 de fevereiro de 2025 💕";

let fotos = [
  "fotos/1.jpg",
  "fotos/2.jpg",
  "fotos/3.jpg",
  "fotos/4.jpg",
  "fotos/5.jpg",
  "fotos/6.jpg",
  "fotos/7.jpg",
  "fotos/8.jpg",
  "fotos/9.jpg"
];

let index = 0;
let iniciado = false;

/* BOTÃO INICIAL */
function iniciarTudo() {
  inicio.style.display = "none";
  conteudo.classList.remove("escondido");
  musica.play();

  atualizarTempo();
  setInterval(atualizarTempo, 1000);

  if (!iniciado) {
    iniciado = true;
    setInterval(trocarImagem, 3000);
  }
}

/* CONTADOR */
function atualizarTempo() {
  const agora = new Date();

  let anos = agora.getFullYear() - inicioNamoro.getFullYear();
  let meses = agora.getMonth() - inicioNamoro.getMonth();
  let dias = agora.getDate() - inicioNamoro.getDate();
  let horas = agora.getHours() - inicioNamoro.getHours();
  let minutos = agora.getMinutes() - inicioNamoro.getMinutes();
  let segundos = agora.getSeconds() - inicioNamoro.getSeconds();

  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0) { minutos += 60; horas--; }
  if (horas < 0) { horas += 24; dias--; }
  if (dias < 0) {
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    meses--;
  }
  if (meses < 0) { meses += 12; anos--; }

  document.getElementById("tempo").innerText =
    `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s ❤️`;
}

/* SLIDESHOW COM FADE */
function trocarImagem() {
  slide.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % fotos.length;
    slide.src = fotos[index];
    slide.classList.remove("fade-out");
  }, 800);
}
