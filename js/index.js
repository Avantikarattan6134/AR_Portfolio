(function () {
  const d = window.PORTFOLIO_DATA;
  const p = d.person;

  document.title = p.name + " · " + p.role;

  document.getElementById("bg-root").innerHTML = backgroundLayer();

  document.getElementById("nav").innerHTML = `
    <a href="#top" class="brand">${svgLogo(28)}<span>${escapeHtml(p.name)}</span></a>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#publications">Publications</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="${escapeHtml(p.resume)}" download class="btn-resume"><span class="label">Resume ↓</span></a>
  `;

  document.getElementById("top").innerHTML = `
    <span class="badge-pill"><span class="badge-dot"></span>${escapeHtml(p.seeking)}</span>
    <h1>${escapeHtml(p.name)}</h1>
    <div class="hero-tagline">Perception · State Estimation · Geometry-aware Learning</div>
    <p class="hero-blurb">${escapeHtml(p.blurb)}</p>
    <div class="hero-actions">
      <a href="#projects" class="btn-primary">View projects →</a>
      <a href="${escapeHtml(p.resume)}" download class="btn-outline">Download résumé</a>
    </div>
    <div class="stats-grid">
      ${d.stats.map(s => `
        <div class="stat-cell">
          <div class="stat-value">${escapeHtml(s.value)}</div>
          <div class="stat-label">${escapeHtml(s.label)}</div>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("about").innerHTML = `
    <div class="eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-label">About</span>
      <span class="eyebrow-tag">the person</span>
    </div>
    <div class="about-grid">
      <div class="about-photo">
        ${p.photo ? `<img src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.name)}">` : `<span class="project-media-label">[ portrait photo ]<br>drop a headshot here</span>`}
      </div>
      <div>
        <p class="about-lede">Robotics &amp; ML researcher who takes systems from model design and training through real-time deployment, calibration, and field validation, on real robots, on the water, and off-road.</p>
        <div class="edu-list">
          ${d.education.map(e => `
            <div class="glass-card edu-card">
              <div class="edu-row">
                <div class="edu-degree">${escapeHtml(e.degree)}</div>
                <div class="edu-when">${escapeHtml(e.when)}</div>
              </div>
              <div class="edu-school">${escapeHtml(e.school)}</div>
              <div class="edu-detail">${escapeHtml(e.detail)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  document.getElementById("experience").innerHTML = `
    <div class="eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-label">Experience</span>
    </div>
    <h2 class="section-title">Research &amp; industry.</h2>
    <div class="exp-list">
      ${d.experience.map(x => `
        <div class="glass-card exp-card">
          <div class="exp-row">
            <div class="exp-role">${escapeHtml(x.role)}</div>
            ${x.when ? `<div class="exp-when">${escapeHtml(x.when)}</div>` : ""}
          </div>
          <div class="exp-org">${escapeHtml(x.org)}</div>
          ${x.note ? `<div class="exp-note">${escapeHtml(x.note)}</div>` : ""}
          <ul class="exp-points">
            ${x.points.map(pt => `
              <li><span class="dot-sm"></span><span>${escapeHtml(pt)}</span></li>
            `).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("projects").innerHTML = `
    <div class="eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-label">Projects</span>
      <span class="eyebrow-tag">click any card</span>
    </div>
    <h2 class="section-title">Selected research &amp; systems work.</h2>
    <div class="projects-grid">
      ${d.projects.map(proj => `
        <a href="project.html?id=${encodeURIComponent(proj.id)}" class="project-card">
          <div class="project-media">
            ${proj.image
              ? `<img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)}">`
              : `<span class="project-media-label">[ ${escapeHtml(proj.media)} ]</span>`}
            ${proj.badge ? `<span class="project-badge">${escapeHtml(proj.badge)}</span>` : ""}
          </div>
          <div class="project-body">
            <div class="project-meta">
              <span class="cat">${escapeHtml(proj.category)}</span>
              <span>${escapeHtml(proj.year)}</span>
            </div>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
            <p class="project-summary">${escapeHtml(proj.summary)}</p>
            <div class="project-cta">View project →</div>
          </div>
        </a>
      `).join("")}
    </div>
  `;

  document.getElementById("skills").innerHTML = `
    <div class="eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-label">Skills</span>
    </div>
    <h2 class="section-title">The full autonomy stack.</h2>
    <div class="skills-grid">
      ${d.skills.map(g => `
        <div class="glass-card skill-card">
          <div class="skill-group">${escapeHtml(g.group)}</div>
          <div class="skill-items">
            ${g.items.map(it => `<span class="pill">${escapeHtml(it)}</span>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("publications").innerHTML = `
    <div class="eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-label">Publications</span>
    </div>
    <h2 class="section-title">Peer-reviewed work.</h2>
    <div class="pub-list">
      ${d.publications.map(pub => {
        const doiHref = pub.doi ? ("https://doi.org/" + pub.doi) : "";
        return `
        <div class="glass-card pub-card">
          <div style="min-width:260px;flex:1">
            <div class="pub-title">${escapeHtml(pub.title)}</div>
            <div class="pub-meta">${escapeHtml(pub.authors)} · ${escapeHtml(pub.venue)}</div>
            ${pub.status ? `<span class="pub-status">${escapeHtml(pub.status)}</span>` : ""}
          </div>
          ${doiHref ? `<a href="${escapeHtml(doiHref)}" target="_blank" rel="noopener" class="pub-doi">DOI ↗</a>` : ""}
        </div>
      `;
      }).join("")}
    </div>
  `;

  document.getElementById("contact").innerHTML = `
    <div class="contact-card">
      <div class="contact-glow"></div>
      <div class="contact-inner">
        <h2>Let's build something<br>that moves.</h2>
        <p class="contact-sub">Open to research collaborations and robotics / autonomy roles. Graduating December 2026.</p>
        <div class="contact-actions">
          <a href="mailto:${escapeHtml(p.email)}" class="btn-primary">${escapeHtml(p.email)}</a>
          <a href="${escapeHtml(p.linkedin)}" target="_blank" rel="noopener" class="btn-outline">LinkedIn ↗</a>
          <a href="${escapeHtml(p.github)}" target="_blank" rel="noopener" class="btn-outline">GitHub ↗</a>
        </div>
        <div class="contact-phone">${escapeHtml(p.phone)}</div>
      </div>
    </div>
    <div class="footer-row">
      <span>© 2026 ${escapeHtml(p.name)}</span>
      <span class="mono">M.S. Robotics · University of Michigan</span>
    </div>
  `;
})();
