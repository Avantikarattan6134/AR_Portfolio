// Small helpers shared by index.js and project.js.
function escapeHtml(str) {
  return String(str == null ? "" : str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function svgLogo(size) {
  return `<svg viewBox="0 0 256 256" width="${size}" height="${size}" fill="#fff" aria-hidden="true"><path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z"></path></svg>`;
}

function backgroundLayer() {
  return `
  <div class="bg-layer">
    <video class="bg-video" autoplay loop muted playsinline src="assets/bg.mp4"></video>
    <div class="bg-blob-1"></div>
    <div class="bg-blob-2"></div>
    <div class="bg-shade-1"></div>
    <div class="bg-shade-2"></div>
  </div>
  <div class="guide-line left"></div>
  <div class="guide-line right"></div>`;
}
