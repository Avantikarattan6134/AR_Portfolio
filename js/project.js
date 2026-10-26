(function () {
  const d = window.PORTFOLIO_DATA;
  const person = d.person;
  const projects = d.projects;

  let id = null;
  try { id = new URLSearchParams(window.location.search).get("id"); } catch (e) {}

  // Accepts youtu.be/ID, youtube.com/watch?v=ID or a bare ID; returns a privacy-friendly embed URL.
  function youtubeEmbed(v) {
    let vid = v;
    const m = String(v).match(/(?:youtu\.be\/|v=|\/embed\/)([A-Za-z0-9_-]{6,})/);
    if (m) vid = m[1];
    return "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(vid) + "?rel=0";
  }

  document.getElementById("bg-root").innerHTML = backgroundLayer();
  document.getElementById("nav").innerHTML = `
    <a href="index.html" class="back-link">← All projects</a>
    <a href="index.html" class="brand-sm">${svgLogo(24)}<span>${escapeHtml(person.name)}</span></a>
  `;

  const idx = projects.findIndex(x => x.id === id);
  const main = document.getElementById("main");

  if (idx === -1) {
    document.title = "Project not found · " + person.name;
    main.innerHTML = `
      <div class="not-found">
        <h1>Project not found</h1>
        <p>That project doesn't exist. Head back to see them all.</p>
        <a href="index.html" class="btn-primary" style="margin-top:24px">← All projects</a>
      </div>
    `;
    return;
  }

  const proj = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const hasLinks = (proj.links || []).length > 0;
  // When a video takes the hero slot, the card image moves into the gallery so it is still shown.
  const gallery = (proj.video && proj.image ? [{ src: proj.image, caption: "" }] : []).concat(proj.gallery || []);

  document.title = proj.title + " · " + person.name;

  main.innerHTML = `
    <article>
      <div class="breadcrumb">
        <span class="cat">${escapeHtml(proj.category)}</span>
        <span class="sep">/</span>
        <span class="year">${escapeHtml(proj.year)}</span>
        ${proj.badge ? `<span class="badge">${escapeHtml(proj.badge)}</span>` : ""}
      </div>
      <h1 class="project-h1">${escapeHtml(proj.title)}</h1>
      <p class="project-lede">${escapeHtml(proj.summary)}</p>

      <div class="project-hero-media${proj.video ? " has-video" : ""}">
        ${proj.video
          ? `<iframe src="${escapeHtml(youtubeEmbed(proj.video))}" title="${escapeHtml(proj.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          : proj.image
            ? `<img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)}">`
            : `<span class="project-hero-media-label">[ ${escapeHtml(proj.media)} ]<br>drop image, video or GIF here</span>`}
      </div>
      ${gallery.length ? `
      <div class="project-gallery">
        ${gallery.map(g => `
          <figure>
            <img src="${escapeHtml(g.src)}" alt="${escapeHtml(g.caption || proj.title)}" loading="lazy">
            ${g.caption ? `<figcaption>${escapeHtml(g.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>` : ""}

      <div class="body-grid">
        <div>
          <h2 class="eyebrow-h2">Overview</h2>
          <p class="overview-text">${escapeHtml(proj.overview)}</p>

          <h2 class="eyebrow-h2" style="margin-top:40px">Approach &amp; methods</h2>
          <ul class="approach-list">
            ${proj.approach.map(a => `<li><span class="dot-md"></span><span>${escapeHtml(a)}</span></li>`).join("")}
          </ul>
        </div>

        <aside class="side">
          <div class="glass-card side-card">
            <div class="side-label">Key results</div>
            <div class="results-list">
              ${proj.results.map(r => `
                <div>
                  <div class="result-value">${escapeHtml(r.value)}</div>
                  <div class="result-label">${escapeHtml(r.label)}</div>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="glass-card side-card">
            <div class="side-label">Tech stack</div>
            <div class="stack-items">
              ${proj.stack.map(t => `<span class="pill-mono">${escapeHtml(t)}</span>`).join("")}
            </div>
          </div>
          ${hasLinks ? `
            <div class="side-links">
              ${proj.links.map(l => `<a href="${escapeHtml(l.href)}" target="_blank" rel="noopener" class="side-link">${escapeHtml(l.label)}<span>↗</span></a>`).join("")}
            </div>
          ` : ""}
        </aside>
      </div>

      <div class="prev-next">
        ${prev ? `
          <a href="project.html?id=${encodeURIComponent(prev.id)}">
            <div class="pn-label">← Previous</div>
            <div class="pn-title">${escapeHtml(prev.title)}</div>
          </a>
        ` : "<span></span>"}
        ${next ? `
          <a href="project.html?id=${encodeURIComponent(next.id)}" class="next">
            <div class="pn-label">Next →</div>
            <div class="pn-title">${escapeHtml(next.title)}</div>
          </a>
        ` : ""}
      </div>
    </article>
  `;

  window.scrollTo(0, 0);
})();
