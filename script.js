let heartInterval;
let fallInterval;

function goTo(num) {
  document.querySelectorAll('.screen').forEach(s =>
    s.classList.remove('active')
  );

  const screen = document.getElementById(`screen${num}`);
  screen.classList.add('active');

  if (num === 2) {
    startHearts();
    const quotes = screen.querySelectorAll('.quote');

    quotes.forEach((q, i) => {
      q.classList.remove('show');
      setTimeout(() => q.classList.add('show'), i * 500);
    });

    setTimeout(stopHearts, quotes.length * 500 + 800);
  }
}

function yes() {
  const song = document.getElementById("song");
  song.volume = 0.8;

  song.play().catch(() => {
    console.log("Audio bloqueado en local, en GitHub Pages sí suena");
  });

  goTo(4);
  startFallingHearts();
}

/* Corazones flotando */
function startHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);
}

function stopHearts() {
  clearInterval(heartInterval);
}

/* Corazones cayendo */
function startFallingHearts() {
  fallInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 200);
}

/* Botón NO que huye */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });
}