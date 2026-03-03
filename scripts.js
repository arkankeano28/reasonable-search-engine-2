const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const brightnessSlider = document.getElementById("brightnessSlider");
const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");

let currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;

let isMusicOn = false;

musicBtn.addEventListener("click", () => {
  if (!isMusicOn) {
    music.play();
    musicBtn.textContent = "❚❚ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "▶ Play Music";
  }
  isMusicOn = !isMusicOn;
});

// brightnessSlider.addEventListener("input", (e) => {
//   document.body =
//     `brightness(${e.target.value}%) saturate(1.2)`;
// });

brightnessSlider.addEventListener("input", (e) => {
  document.documentElement.style.filter =
    `brightness(${e.target.value}%) saturate(1.2)`;
});

// brightnessSlider.addEventListener("input", (e) => {
//   document.body.style.filter =
//     `brightness(${e.target.value}%) saturate(1.2)`;
// });


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = document.getElementById("query").value;
  resultsDiv.innerHTML = `<h2>Hasil pencarian untuk: "${query}"</h2>`;
});

document.getElementById("googleBtn").addEventListener("click", () => {
  const q = document.getElementById("query").value.trim();
  if (q) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}`);
  }
});

document.getElementById("wikiBtn").addEventListener("click", () => {
  const q = document.getElementById("query").value.trim();
  if (q) {
    window.open(`https://id.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(q)}`);
  }
});
