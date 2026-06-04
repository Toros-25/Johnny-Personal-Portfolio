// ================================================================
// PORTFOLIO CONTENT — EDIT EVERYTHING HERE
// ================================================================
// HOW TO UPDATE:
//   - Edit any value below, save, and refresh the browser.
//   - To add a research entry: copy one object in the research array,
//     paste it at the top (newest first), fill in the fields.
//   - Same pattern for publications, work, projects, achievements.
// ================================================================

const CONTENT = {

  hero: {
    name: "Jiayi (Johnny) Li",
    tagline: "Engineering at the intersection of code and disease.",
    typewriterPhrases: [
      "Undergraduate Researcher",
      "Aspiring Software Engineer",
      "Hockey Player",
      "Published Author",
    ],
    profileImage: "assets/profile.jpg", // set to "" to hide
    resumePdf: "assets/resume.pdf",
    links: {
      github: "https://github.com/Toros-25",
      linkedin: "https://www.linkedin.com/in/johnny-li-ljy/",
      googleScholar: "",
      email: "johnnyljy.li@mail.utoronto.ca",
    },
  },

  about: {
    bio: "I'm an undergraduate at the University of Toronto studying Computer Science and Quantitative Biology. My research spans kidney genetics, radiation dosimetry, Parkinson's disease protein aggregation, and CMV epidemiology. I publish peer-reviewed work, build AI tools, and play competitive hockey — I'm drawn to problems that sit at the edge of what's understood, whether that's protein folding dynamics or the limits of machine learning.",
    hockeyCallout: "Drafted in the OHL Priority Selection | Played in the 14th National China Winter Games for Tianjin",
  },

  // EDUCATION — newest first. logo path is relative to portfolio/.
  // Drop a logo image at assets/<filename> and set the `logo` field;
  // if the file is missing, the card falls back to the school's initials.
  education: [
    {
      university: "Northwestern University",
      logo: "assets/northwestern_logo.png",
      location: "Evanston, IL",
      degree: "",
      start: "Sep 2026",
      end: "Jun 2029",
      gpa: "—",
      courses: [
        "COMP_SCI 211 — Fundamentals of Computer Programming II",
        "COMP_SCI 214 — Data Structures & Algorithms",
      ],
    },
    {
      university: "University of Toronto",
      logo: "assets/uoft_logo.png",
      location: "Toronto, ON",
      degree: "HBSc. Computer Science & Quantitative Biology",
      start: "Sep 2025",
      end: "Aug 2026",
      gpa: "3.9 / 4.0",
      courses: [
        "CSC110 — Foundations of Computer Science I",
        "CSC111 — Foundations of Computer Science II",
        "MAT137 — Calculus with Proofs",
        "MAT223 — Linear Algebra I",
        "STA130 — Intro to Statistical Reasoning",
        "CHM135 - Chemistry: Physical Principles",
        "PSY100 - Introductory Psychology",
        "BIO130 - Molecular and Cell Biology",
      ],
    },
  ],

  research: [
    {
      title: "Undergraduate Researcher",
      lab: "",
      pi: "Dr. Arman Sarfehnia",
      institution: "Sunnybrook Research Institute",
      location: "Toronto, ON",
      start: "Feb 2026",
      end: "Present",
      color: "#b91c1c",
      bullets: [
        "Conducted research on radiation dosimetry and quality assurance in radiotherapy, focusing on improving the accuracy and reproducibility of clinical dose measurements toward the ~1% precision required for absolute reference dosimetry",
        "Assisted in the design, testing, and evaluation of calorimetry-based detectors across multiple irradiation conditions, identifying sources of measurement error to reduce overall measurement uncertainty",
        "Developed a Python program using NumPy and pyvisa to automate calorimeter dose analysis across multiple irradiation runs, cutting per-dataset processing from ~30 minutes to under a minute",
        "Built a multithreaded acquisition script sampling up to 4 RTD probes over GPIB at sub-second intervals, converting resistance to temperature with milli-Kelvin resolution for real-time drift monitoring during QA sessions",
      ],
    },
    {
      title: "Undergraduate Researcher, IMS SURP Fellow",
      lab: "Barua Lab",
      pi: "Dr. Moumita Barua",
      institution: "University of Toronto / University Health Network (UHN)",
      location: "Toronto, ON",
      start: "Jan 2026",
      end: "Present",
      color: "#991b1b",
      bullets: [
        "Independently reanalyzed podocyte mass spectrometry data to validate P3H2-mediated type IV collagen modifications, cross-referencing findings against 2 prior analyses to assess proteomic reproducibility.",
        "Assisted in undifferentiated-to-differentiated podocyte cell culture and mass spectrometry workflows, performing Western blot to validate Col4a3 antibody specificity on podocyte protein extracts and supporting quality control for a key reagent in basement membrane integrity research.",
        "Independently designed and deployed the Barua Lab's first-ever lab website using HTML, CSS, JavaScript, and Vue.js, publicly showcasing the lab's research, open datasets, and open-source software",
        "Selected as a funded IMS Summer Undergraduate Research Program (SURP) fellow through the University of Toronto's Temerty Faculty of Medicine, one of Canada's leading medical research institutions.",
      ],
    },

    {
      title: "Student Researcher, Sole Author",
      lab: "Zhang Lab",
      pi: "Dr. Hui Zhang",
      institution: "Northwestern University / Feinberg School of Medicine",
      location: "Remote",
      start: "Mar 2025",
      end: "Apr 2026",
      color: "#b91c1c",
      bullets: [
        "Analyzed 4 heavy metal biomarkers across ≈554 U.S. adults from NHANES 2017–2018 to quantify associations between environmental metal exposure and persistent CMV infection, a virus affecting >50% of the U.S. population",
        "Applied and built 5+ statistical models in R including multivariable regression, GAMs, and sensitivity analyses across all metal-CMV exposure-outcome pairs to control for confounders and evaluate exposure-outcome relationships",
        "Performed 4 sensitivity analyses and Weighted Quantile Sum (WQS) mixture analysis using R packages including gWQS, survey, and ggplot2, identifying Se as the dominant metal mixture contributor at ~77% weight across all exposure-outcome pairs",
        "Sole-authored research paper peer-reviewed and published by Asia Pacific Science Press in the Advances in Management and Intelligent Technologies (AMIT) journal, indexed on Google Scholar, Scopus, and Web of Science",
      ],
    },
    {
      title: "CCIR Student Researcher, First Author",
      lab: "Dettmer Lab / CCIR",
      pi: "Dr. Ulf Dettmer",
      institution: "Harvard Medical School / Brigham & Women's Hospital",
      location: "Boston, MA",
      start: "Jul 2024",
      end: "Feb 2026",
      color: "#991b1b",
      bullets: [
        "Conducted in-person wet-lab experiments at Brigham & Women's Hospital: three IncuCyte live-cell assays quantifying alpha-synuclein aggregation across 5 compounds, 3 doses, and 35+ replicates per condition.",
        "Performed quantitative image analysis of inclusion burden, total YFP signal, and cell density; conducted dose-response and statistical significance testing.",
        "First-author peer-reviewed publication in the Journal of High School Science; selected as 1 of few undergraduate researchers for poster presentation at the 2026 AAAS Annual Meeting, the world's largest general scientific society",
        "Delivered an oral research talk on α-synuclein disaggregation at the CCIR Student Symposium to University of Cambridge faculty and Nobel Laureate Thomas R. Cech (Nobel Prize in Chemistry, 1989)",
      ],
    },
  ],

  publications: [
    {
      authors: "Li, J. & Dettmer, U.",
      year: 2025,
      title: "Parkinson's Disease-linked protein alpha-synuclein: do small-molecule inhibitors of protein aggregation also prevent its accumulation with lipids?",
      journal: "Journal of High School Science",
      volume: "9(1)",
      doi: "https://doi.org/10.64336/001c.131827",
      badge: "First Author · Paper",
    },
    {
      authors: "Li, J.",
      year: 2026,
      title: "Cytomegalovirus infection in population samples: Are whole-blood levels of cadmium, mercury, selenium, and manganese associated with CMV serostatus?",
      journal: "Advances in Management and Intelligent Technologies",
      volume: "2(1)",
      doi: "https://doi.org/10.62177/amit.v2i1.1094",
      badge: "Sole Author · Paper",
    },
    {
      authors: "Han, Z., Li, J., Yang, S., et al.",
      year: 2026,
      title: "Towards a nonlinear future: How to maximize personal value and achieve true growth in the age of AI",
      journal: "China Financial & Economic Publishing House",
      volume: "",
      doi: "",
      badge: "Co-Author · Book",
    },
  ],

  work: [
    {
      company: "My Learning Space AI (MYLS)",
      role: "AI Product Manager Intern",
      start: "Jun 2025",
      end: "Present",
      location: "Toronto, ON",
      type: "Internship",
      bullets: [
        "Conducted A/B tests and user interviews to identify friction points; redesigned booking flow, increasing conversions by 9%.",
        "Built AI-generated mock prototypes to test concepts quickly and support early-stage user research.",
        "Collaborated with engineering and design to ship data-backed product improvements.",
        "Co-authored a book on AI-driven nonlinear growth (China Financial & Economic Publishing House, 2026).",
      ],
      skills: ["A/B Testing", "Product Strategy", "User Research", "AI Tools"],
    },
    {
      company: "NorthStar Special Needs Society (NSNS)",
      role: "Lead Instructor & Coach",
      start: "Sep 2025",
      end: "Present",
      location: "Thornhill, ON",
      type: "Part-time Job",
      bullets: [
        "Coached children aged 5-14 in skating and hockey, adapting instruction for diverse learning needs.",
        "Led Learn to Skate and hockey camps for 20+ children; designed drills in private 1-on-1 sessions to directly tailor to childrens' needs",
        "Supporting children with autism in developing confidence, coordination, and social skills through skating and hockey.",
      ],
      skills: ["Coaching", "Adaptive Instruction", "Leadership"],
    },
    {
      company: "Pharmaron Beijing Co., Ltd.",
      role: "Chemical Analysis Researcher",
      start: "May 2025",
      end: "Aug 2025",
      location: "Beijing, China",
      type: "Internship",
      bullets: [
        "Operated LC-MS to analyze 50+ pharmaceutical samples; processed and interpreted spectra in Excel for compound identification and purity assessment.",
        "Collaborated with 8 professional chemists supporting synthesis/analysis for widely used medications including cold treatments and acetaminophen.",
        "Delivered 10+ presentations translating LC-MS findings for international clients.",
      ],
      skills: ["LC-MS", "Mass Spectrometry", "Excel", "Scientific Communication"],
    },
  ],

  projectFilters: ["All", "Python", "R"],

  projects: [
    {
      name: "GradeMaster",
      language: "Python",
      tech: ["Python", "Flask", "Jinja2", "Javascript", "HTML/CSS", "JSON"],
      description: "Full-stack web app for tracking university course grades, predicting final grades, and simulating required scores on pending assessments across weighted items and grouped components.",
      bullets: [
        "Engineered a what-if solver that isolates any pending item as a variable, holding all others at the current predicted grade to compute the exact score needed to hit a target final grade.",
        "Built atomic JSON persistence with temp-file-replace writes and a Flask REST layer supporting standalone items, sub-item groups, and auto-saving edits with 500ms debounce.",
        "Deployed via Gunicorn on Render — includes a Procfile and requires only pip install -r requirements.txt. No database needed; all data persists in a single gradebook.json file.",
      ],
      github: "https://github.com/Toros-25/GradeMaster",
      website: "https://grademaster-mqoa.onrender.com", // set to live URL to show a Website button, e.g. "https://grademaster.onrender.com"
      pdf: "", // set to "assets/filename.pdf" (or a full URL) to show a PDF button
    },
    {
      name: "S&P 500 Market Crash Simulator",
      language: "Python",
      tech: ["Python", "Dash", "Plotly", "NetworkX", "NumPy"],
      description: "Interactive financial contagion simulator modeling crash propagation across all 503 S&P 500 companies using a weighted graph with ~24,000 Pearson correlation edges derived from COVID-19 log-returns.",
      bullets: [
        "Engineered a recursive contagion algorithm that attenuates crash impact across correlated neighbors, with real-time market cap loss estimates.",
        "Built an interactive dashboard integrating yfinance, NetworkX, and NumPy. Led a 4-person team.",
      ],
      github: "https://github.com/Toros-25/Project-2",
      website: "",
      pdf: "",
    },
    {
      name: "Nucleus Independent Living: Chronic Condition Analysis",
      language: "R",
      tech: ["R", "ggplot2", "dplyr"],
      description: "22-page statistical analysis evaluating how clients with varying chronic conditions respond to Nucleus Independent Living services, analyzing over 5,000 client records.",
      bullets: [
        "Led a 3-person team analyzing ~4,000 Nucleus client records across 6 chronic condition burden groups, quantifying 12-month pre/post changes in hospital days, healthcare costs, and unscheduled readmission rates in R",
        "Performed data wrangling across 3 research questions, engineering new variables including chronic burden groupings, cost reduction metrics, and age categories across 4 groups, producing summary tables and visualizations using ggplot2",
        "Found that clients with 5+ chronic conditions had a median 7-day reduction in hospital stays and respiratory condition clients saw the largest average cost reduction at ~$22,500, suggesting Nucleus services most benefit high-need clients",
      ],
      github: "",
      website: "",
      pdf: "assets/r-project1.pdf",
    },
  ],

  // To link a file to an achievement card, add:  attachment: "assets/filename.pdf"
  // (also works with .jpg, .png, etc.). Drop the file in the assets/ folder first.
  // Omit the field entirely if there is no attachment.
  achievements: [
    { category: "Research", name: "2026 AAAS Annual Meeting E-Poster Presentation", desc: "Selected for poster presentation on Parkinson's disease protein aggregation research conducted at Brigham & Women's Hospital under Dr. Ulf Dettmer (Harvard Medical School)", year: 2026, attachment: "assets/Eposter.pdf" },
    { category: "Research", name: "CCIR Student Symposium Presentation", desc: "Delivered oral talk on α-synuclein disaggregation research to University of Cambridge faculty and Nobel Laureate Thomas R. Cech (Nobel Prize in Chemistry, 1989)", year: 2025, attachment: "assets/ccir_symposium_pres.pdf" },
    { category: "Science", name: "Canadian Chemistry Olympiad Special Merit Award", desc: "Ranked 58th nationally out of ~700 contestants across Canada in consecutive years (2024, 2025)", year: "2024, 2025" },
    { category: "Hockey", name: "OHL Priority Selection — Top 300", desc: "Drafted top 300 of 11,000 players to the Ontario Hockey League (OHL), selected by the Niagara IceDogs", year: 2023, attachment: "https://www.eliteprospects.com/player/905968/johnny-li" },
    { category: "Hockey", name: "14th China National Winter Games", desc: "Represented Tianjin at China's premier national multi-sport winter competition featuring athletes from all 34 provinces and regions; 4th place finish; Tianjin Team MVP, $2,500 prize", year: 2024 },
  ],

  skills: {
    // Edit these labels to rename the filter tabs.
    filters: ["Programming", "Lab Techniques", "Languages"],

    programming: {
      languages: ["Python", "R", "JavaScript", "HTML/CSS", "LaTeX"],
      frameworks: ["Dash", "Plotly", "Flask", "Vue", "React"],
      devTools: ["PyCharm", "VS Code", "Visual Studio", "Git", "Render"],
      libraries: ["NetworkX", "NumPy", "ggplot2", "dplyr"],
    },

    lab: ["Western Blot", "Mass Spectrometry", "Cell Culture", "LC-MS (Liquid chromatography-mass spectrometry)", "Protein Extraction", "Calorimetry Detectors", "Gel Electrophoresis", "Assays", "Staining"],

    spoken: [
      { lang: "English", level: "Native", pct: 100 },
      { lang: "Mandarin", level: "Fluent", pct: 90 },
      { lang: "Spanish", level: "Intermediate", pct: 55 },
      { lang: "French", level: "Intermediate", pct: 55 },
    ],
  },

};
// ================================================================
// END OF EDITABLE CONTENT
// ================================================================


// ================================================================
// SMALL HELPERS
// ================================================================
// $  — querySelector shortcut. Use for any single-element lookup.
const $ = (sel, root = document) => root.querySelector(sel);
// $$ — querySelectorAll wrapper that returns a real array (so we can map/filter).
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
// el — short hand to build a DOM node with attributes and children in one call.
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (k.startsWith('data-')) node.setAttribute(k, v);
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (c == null || c === false) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}
// escapeHtml — sanitize content data before injecting via innerHTML so user-edited
// strings cannot accidentally inject markup.
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}
// safeUrl — blocks javascript: scheme XSS in href attributes; everything else passes through.
function safeUrl(url) {
  const s = String(url || '').trim();
  return /^javascript:/i.test(s) ? '#' : s;
}

// ICON_PATHS — shared SVG path data used by renderHero and renderContact.
const ICON_PATHS = {
  github: { label: 'GitHub', path: 'M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.21 21.4 23.5 17.1 23.5 12.02 23.5 5.66 18.34.5 12 .5z' },
  linkedin: { label: 'LinkedIn', path: 'M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19z' },
  googleScholar: { label: 'Google Scholar', path: 'M12 2L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 2zm6.82 7L12 12.72 5.18 9 12 5.27 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' },
  email: { label: 'Email', path: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
};


// ================================================================
// HERO — render name, tagline, resume link, social icons
// ================================================================
function renderHero() {
  const h = CONTENT.hero;
  $('#hero-name').textContent = h.name;
  $('#hero-tagline').textContent = h.tagline;
  $('#hero-resume').href = safeUrl(h.resumePdf);

  // Social icon row — only renders links that have a non-empty value.
  const wrap = $('#hero-links');
  wrap.innerHTML = '';
  Object.entries(h.links).forEach(([key, val]) => {
    if (!val) return;
    if (key === 'email') return; // email shown as text in the contact section, not as a hero icon
    const cfg = ICON_PATHS[key];
    if (!cfg) return;
    const a = el('a', { href: safeUrl(val), 'aria-label': cfg.label, target: '_blank', rel: 'noopener noreferrer' });
    a.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="${cfg.path}"/></svg>`;
    wrap.appendChild(a);
  });
}


// ================================================================
// ABOUT — bio + hockey callout + avatar
// ================================================================
function renderAbout() {
  $('#about-bio').textContent = CONTENT.about.bio;
  $('#hockey-text').textContent = CONTENT.about.hockeyCallout;

  const h = CONTENT.hero;
  const avatar = $('#about-avatar');
  if (h.profileImage) {
    const img = new Image();
    img.alt = h.name;
    img.width = 160;
    img.height = 160;
    img.loading = 'eager';
    img.onload = () => { avatar.innerHTML = ''; avatar.appendChild(img); };
    img.onerror = () => { avatar.textContent = 'JL'; };
    img.src = h.profileImage;
  } else {
    avatar.textContent = 'JL';
  }
}


// ================================================================
// EDUCATION — collapsible cards. Click the header row to toggle the
// course list. First card opens by default.
// ================================================================
function renderEducation() {
  const wrap = $('#education-list');
  if (!wrap) return;
  wrap.innerHTML = '';
  CONTENT.education.forEach((e, i) => {
    const isOpen = i === 0;
    // Initials fallback (e.g. "NU", "UT") if logo image is missing or fails to load.
    const initials = e.university
      .split(/\s+/)
      .map(w => w[0])
      .filter(c => c && /[A-Z]/.test(c))
      .join('')
      .slice(0, 2);

    const bodyId = `edu-body-${i}`;
    const card = el('article', { class: 'edu-card', 'data-aos': 'fade-up' });
    const courses = e.courses.map(c => `<li>${escapeHtml(c)}</li>`).join('');
    const metaHtml = [e.degree, `${e.start} — ${e.end}`, e.location]
      .filter(Boolean).map(escapeHtml).join(' · ');
    card.innerHTML = `
      <button class="edu-toggle" type="button" aria-expanded="${isOpen}" aria-controls="${bodyId}">
        <span class="edu-logo"><span class="edu-logo-fallback">${escapeHtml(initials)}</span></span>
        <span class="edu-summary">
          <span class="edu-uni">${escapeHtml(e.university)}</span>
          <span class="edu-meta">${metaHtml}</span>
        </span>
        <span class="edu-gpa">
          <span class="edu-gpa-label">GPA</span>
          <span class="edu-gpa-value">${escapeHtml(e.gpa)}</span>
        </span>
        <span class="edu-chevron" aria-hidden="true">▾</span>
      </button>
      <div id="${bodyId}" class="edu-body${isOpen ? ' open' : ''}">
        <div class="edu-courses-title">// Relevant Courses</div>
        <ul class="edu-courses">${courses}</ul>
      </div>
    `;

    // Swap initials for the logo image once it loads (skip if missing).
    if (e.logo) {
      const img = new Image();
      img.alt = e.university + ' logo';
      img.width = 56;
      img.height = 56;
      img.onload = () => {
        const slot = card.querySelector('.edu-logo');
        slot.innerHTML = '';
        slot.appendChild(img);
      };
      img.src = e.logo;
    }

    // Toggle behavior — flip aria-expanded and animate the body.
    const btn = card.querySelector('.edu-toggle');
    const body = card.querySelector('.edu-body');
    btn.addEventListener('click', () => {
      const open = body.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });

    wrap.appendChild(card);
  });
}


// ================================================================
// RESEARCH — vertical timeline with show-more bullets
// ================================================================
function renderResearch() {
  const wrap = $('#research-timeline');
  wrap.innerHTML = '';
  CONTENT.research.forEach((r, i) => {
    const card = el('div', { class: 'timeline-item', 'data-aos': 'fade-up' });
    // The dot color matches the project's color field.
    card.style.setProperty('--accent', r.color || 'var(--accent)');
    const visibleBullets = r.bullets.slice(0, 2).map(b => `<li>${escapeHtml(b)}</li>`).join('');
    const hiddenBullets = r.bullets.slice(2).map(b => `<li>${escapeHtml(b)}</li>`).join('');
    card.innerHTML = `
      <article class="research-card">
        <div class="research-meta">${escapeHtml(r.start)} — ${escapeHtml(r.end)}${r.location ? ' · ' + escapeHtml(r.location) : ''}</div>
        <h3 class="research-title">${escapeHtml(r.title)}</h3>
        <div class="research-lab">${r.lab ? escapeHtml(r.lab) + ' · ' + escapeHtml(r.institution) : escapeHtml(r.institution)}</div>
        <div class="research-pi">PI: ${escapeHtml(r.pi)}</div>
        <ul class="research-bullets">${visibleBullets}${hiddenBullets}</ul>
        ${r.bullets.length > 2 ? `<button class="show-more" type="button">Show more ↓</button>` : ''}
      </article>`;
    // Wire show-more toggle. We expand by toggling a class so the CSS
    // max-height transition handles the animation.
    const btn = card.querySelector('.show-more');
    if (btn) {
      const list = card.querySelector('.research-bullets');
      btn.addEventListener('click', () => {
        const open = list.classList.toggle('expanded');
        btn.textContent = open ? 'Show less ↑' : 'Show more ↓';
      });
    }
    wrap.appendChild(card);
  });
}


// ================================================================
// PUBLICATIONS — numbered list with copy-citation buttons
// ================================================================
function renderPublications() {
  const list = $('#publications-list');
  list.innerHTML = '';
  CONTENT.publications.forEach((p, i) => {
    const item = el('li', { class: 'publication', 'data-aos': 'fade-up' });
    // Bold any "Li, J." occurrences in the author string so Johnny stands out.
    const authors = escapeHtml(p.authors).replace(/(Li, J\.)/g, '<span class="me">$1</span>');
    const titleHtml = p.doi
      ? `<a href="${escapeHtml(safeUrl(p.doi))}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>`
      : escapeHtml(p.title);
    item.innerHTML = `
      <div class="pub-authors">${authors} <span class="pub-year">(${escapeHtml(String(p.year))})</span></div>
      <div class="pub-title">${titleHtml}</div>
      <div class="pub-journal">${escapeHtml(p.journal)}${p.volume ? ', ' + escapeHtml(p.volume) : ''}</div>
      <div class="pub-row">
        ${p.badge ? `<span class="pub-badge">${escapeHtml(p.badge)}</span>` : ''}
        <button class="copy-cite" type="button" data-idx="${i}">Copy Citation</button>
        ${p.doi ? `<a class="copy-cite" href="${escapeHtml(safeUrl(p.doi))}" target="_blank" rel="noopener noreferrer">DOI ↗</a>` : ''}
      </div>`;
    list.appendChild(item);
  });
}


// ================================================================
// WORK — two-column card grid
// ================================================================
function renderWork() {
  const grid = $('#work-grid');
  grid.innerHTML = '';
  CONTENT.work.forEach(w => {
    const bullets = w.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('');
    const skills = w.skills.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('');
    const card = el('article', { class: 'card work-card', 'data-aos': 'fade-up' });
    card.innerHTML = `
      <header class="work-header">
        <div class="work-company">${escapeHtml(w.company)}</div>
        <div class="work-role">${escapeHtml(w.role)}</div>
      </header>
      <div class="work-meta">
        <span>${escapeHtml(w.start)} — ${escapeHtml(w.end)}</span>
        <span>·</span>
        <span>${escapeHtml(w.location)}</span>
        <span class="work-type">${escapeHtml(w.type)}</span>
      </div>
      <ul class="work-bullets">${bullets}</ul>
      <div class="work-skills">${skills}</div>`;
    grid.appendChild(card);
  });
}


// ================================================================
// PROJECTS — filterable grid with expandable bullets
// ================================================================
function renderProjects() {
  const grid = $('#projects-grid');
  const filters = $('#project-filters');
  grid.innerHTML = '';
  filters.innerHTML = '';

  // Build filter buttons from the editable CONTENT.projectFilters list.
  CONTENT.projectFilters.forEach((tag, i) => {
    const btn = el('button', {
      class: 'filter-btn' + (i === 0 ? ' active' : ''),
      type: 'button',
      'data-tag': tag,
      'aria-pressed': String(i === 0),
    }, tag);
    filters.appendChild(btn);
  });

  // Render project cards.
  CONTENT.projects.forEach(p => {
    const techChips = p.tech.map(t => `<span class="skill-chip">${escapeHtml(t)}</span>`).join('');
    const bulletsHtml = p.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('');
    const card = el('article', {
      class: 'card project-card',
      'data-language': p.language || '',
      'data-aos': 'fade-up',
    });
    card.innerHTML = `
      <h3 class="project-name">${escapeHtml(p.name)}</h3>
      <div class="project-tech">${techChips}</div>
      <p class="project-desc">${escapeHtml(p.description)}</p>
      <ul class="project-bullets">${bulletsHtml}</ul>
      <div class="project-actions">
        <button class="show-more" type="button">Show more ↓</button>
        ${p.website
        ? `<a class="btn btn-ghost btn-small" href="${escapeHtml(safeUrl(p.website))}" target="_blank" rel="noopener noreferrer">Website ↗</a>`
        : ''}
        ${p.pdf
        ? `<a class="btn btn-ghost btn-small" href="${escapeHtml(safeUrl(p.pdf))}" target="_blank" rel="noopener noreferrer">PDF ↗</a>`
        : ''}
        ${p.github
        ? `<a class="btn btn-ghost btn-small" href="${escapeHtml(safeUrl(p.github))}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
        : `<span class="project-private">Private repo</span>`}
      </div>`;
    grid.appendChild(card);
  });

  // Single delegated listener handles all show-more buttons — avoids per-card attach.
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.show-more');
    if (!btn) return;
    const list = btn.closest('.project-card').querySelector('.project-bullets');
    const open = list.classList.toggle('expanded');
    btn.textContent = open ? 'Show less ↑' : 'Show more ↓';
  });
}


// ================================================================
// SKILLS — filterable panels: programming sub-sections, lab chain, language bars
// ================================================================
function renderSkills() {
  const filterWrap = $('#skill-filters');
  const content = $('#skills-content');
  filterWrap.innerHTML = '';
  content.innerHTML = '';

  // Filter tab buttons — labels come from CONTENT.skills.filters.
  CONTENT.skills.filters.forEach((label, i) => {
    filterWrap.appendChild(el('button', {
      class: 'filter-btn' + (i === 0 ? ' active' : ''),
      type: 'button',
      'data-skill-filter': String(i),
      'aria-pressed': String(i === 0),
    }, label));
  });

  // Panel 0: Programming — sub-sections for languages, frameworks, devTools, libraries.
  const progPanel = el('div', { class: 'skills-panel', 'data-skill-panel': '0' });
  const prog = CONTENT.skills.programming;
  [
    { title: 'Languages', items: prog.languages },
    { title: 'Frameworks', items: prog.frameworks },
    { title: 'Developer Tools', items: prog.devTools },
    { title: 'Libraries', items: prog.libraries },
  ].forEach(({ title, items }) => {
    if (!items || !items.length) return;
    const sub = el('div', { class: 'skill-subsection' });
    sub.innerHTML = `<div class="skill-sub-title">// ${escapeHtml(title)}</div>`;
    const grid = el('div', { class: 'hex-grid' });
    items.forEach(s => grid.appendChild(el('div', { class: 'hex-cell', text: s })));
    sub.appendChild(grid);
    progPanel.appendChild(sub);
  });
  content.appendChild(progPanel);

  // Panel 1: Lab Techniques
  const labPanel = el('div', { class: 'skills-panel skill-panel-hidden', 'data-skill-panel': '1' });
  const sopCard = el('div', { class: 'lab-sop-card' });
  sopCard.appendChild(el('div', { class: 'lab-sop-header', text: 'Lab Techniques' }));
  sopCard.appendChild(el('hr', { class: 'lab-sop-hr' }));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  CONTENT.skills.lab.forEach((s, i) => {
    const row = el('div', { class: 'lab-sop-row' });
    if (!reduceMotion) row.style.animationDelay = `${i * 60}ms`; // 60ms stagger between rows
    row.innerHTML = `
      <span class="lab-sop-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="lab-sop-dash">──</span>
      <span class="lab-sop-name">${escapeHtml(s)}</span>`;
    sopCard.appendChild(row);
    if (i < CONTENT.skills.lab.length - 1) {
      sopCard.appendChild(el('div', { class: 'lab-sop-row-rule' }));
    }
  });
  labPanel.appendChild(sopCard);
  content.appendChild(labPanel);

  // Panel 2: Languages — animated progress bars (triggered by initSkillBars).
  const langPanel = el('div', { class: 'skills-panel skill-panel-hidden', 'data-skill-panel': '2' });
  const langList = el('div', { class: 'lang-list' });
  CONTENT.skills.spoken.forEach(l => {
    const row = el('div', { class: 'lang-row' });
    row.innerHTML = `
      <span class="lang-name">${escapeHtml(l.lang)}</span>
      <span class="lang-level">${escapeHtml(l.level)}</span>
      <div class="lang-bar"><div class="lang-bar-fill" data-pct="${l.pct}"></div></div>`;
    langList.appendChild(row);
  });
  langPanel.appendChild(langList);
  content.appendChild(langPanel);
}


// ================================================================
// ACHIEVEMENTS — group by category, render cards
// ================================================================
function renderAchievements() {
  const wrap = $('#achievements-groups');
  wrap.innerHTML = '';
  // Reduce the flat array into a { category: [items] } map so we can render
  // a heading per category followed by a card grid beneath.
  const groups = CONTENT.achievements.reduce((acc, a) => {
    (acc[a.category] = acc[a.category] || []).push(a);
    return acc;
  }, {});
  Object.entries(groups).forEach(([cat, items]) => {
    const group = el('section', { class: 'ach-group' });
    group.innerHTML = `<h3 class="ach-group-title">// ${escapeHtml(cat)}</h3>`;
    const grid = el('div', { class: 'ach-grid' });
    items.forEach((a, i) => {
      const card = el('article', {
        class: 'ach-card' + (a.attachment ? ' ach-card--linked' : ''),
        'data-aos': 'fade-up',
        'data-aos-delay': String(i * 60), // stagger reveal by 60ms per card
      });
      const viewBadge = a.attachment ? `
        <span class="ach-attach-badge" aria-label="View attachment">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          View
        </span>` : '';
      card.innerHTML = `
        <div class="ach-name">${escapeHtml(a.name)}</div>
        <div class="ach-desc">${escapeHtml(a.desc)}</div>
        <div class="ach-card-footer">
          <span class="ach-year">${escapeHtml(String(a.year))}</span>
          ${viewBadge}
        </div>`;
      if (a.attachment) {
        card.addEventListener('click', () => window.open(safeUrl(a.attachment), '_blank', 'noopener,noreferrer'));
      }
      grid.appendChild(card);
    });
    group.appendChild(grid);
    wrap.appendChild(group);
  });
}


// ================================================================
// CONTACT + FOOTER — email button, social icons, copyright
// ================================================================
function renderContact() {
  const email = CONTENT.hero.links.email;
  const btn = $('#contact-email');
  btn.href = `mailto:${email}`;
  $('#contact-email-text').textContent = email;

  // Social row mirrors the hero icon row, minus the email link (CTA already covers it).
  const wrap = $('#contact-links');
  wrap.innerHTML = '';
  ['github', 'linkedin', 'googleScholar'].forEach(key => {
    const val = CONTENT.hero.links[key];
    if (!val) return;
    const cfg = ICON_PATHS[key];
    const a = el('a', { href: safeUrl(val), 'aria-label': cfg.label, target: '_blank', rel: 'noopener noreferrer' });
    a.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="${cfg.path}"/></svg>`;
    wrap.appendChild(a);
  });

  $('#footer-copy').textContent = `© ${new Date().getFullYear()} ${CONTENT.hero.name}`;
}


// ================================================================
// initTyped — typewriter effect for the hero phrases
// ================================================================
function initTyped() {
  if (typeof Typed === 'undefined') return; // CDN failed; skip silently
  // typeSpeed/backSpeed in ms per character; backDelay is the pause before
  // backspacing once the phrase finishes typing.
  new Typed('#typed', {
    strings: CONTENT.hero.typewriterPhrases,
    typeSpeed: 65,
    backSpeed: 35,
    backDelay: 1600,
    loop: true,
  });
}


// ================================================================
// initNav — sticky bar, scroll-spy, hamburger toggle, smooth scroll
// ================================================================
function initNav() {
  const links = $$('.nav-link');
  const sections = links
    .map(l => $(l.getAttribute('href')))
    .filter(Boolean);

  // Scroll-spy: when a section enters the central viewport region, mark its
  // nav link active. rootMargin biases the trigger upward so the active
  // state changes when the section heading is roughly under the nav.
  // spy is intentionally page-lifetime — no disconnect needed for a static single-page site.
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));

  // Hamburger toggle (mobile only — CSS handles visibility breakpoint).
  const burger = $('#hamburger');
  const linksWrap = $('#nav-links');
  burger.addEventListener('click', () => {
    const open = linksWrap.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  // Close menu when a link is tapped on mobile so the user lands at the section.
  linksWrap.addEventListener('click', e => {
    if (e.target.matches('.nav-link')) {
      linksWrap.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key; return focus to the burger button.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && linksWrap.classList.contains('open')) {
      linksWrap.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    }
  });

  // Close on outside click.
  document.addEventListener('click', e => {
    if (!e.target.closest('#navbar') && linksWrap.classList.contains('open')) {
      linksWrap.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // "Back to top" button in footer.
  const top = $('#back-to-top');
  if (top) top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}





// ================================================================
// initProjectFilters — show only projects whose tech tags include the
// selected filter (or all when "All" is active).
// ================================================================
function initProjectFilters() {
  const filters = $('#project-filters');
  if (!filters) return;
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn', filters).forEach(b => {
      const isActive = b === btn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
    const tag = btn.dataset.tag;
    $$('.project-card').forEach(card => {
      const match = tag === 'All' || card.dataset.language === tag;
      card.classList.toggle('hidden', !match);
    });
  });
}


// ================================================================
// initCopyCitation — build APA-ish string from publication data and
// copy to clipboard. Briefly swap the button label to "Copied ✓".
// ================================================================
function initCopyCitation() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('button.copy-cite');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    const p = CONTENT.publications[idx];
    if (!p) return;
    const volumePart = p.volume ? `, ${p.volume}` : '';
    const doiPart = p.doi ? ` ${p.doi}` : '';
    const cite = `${p.authors} (${p.year}). ${p.title}. ${p.journal}${volumePart}.${doiPart}`.trim();
    if (!navigator.clipboard) {
      btn.textContent = 'Copy failed';
      setTimeout(() => { btn.textContent = 'Copy Citation'; }, 2000);
      return;
    }
    // try/catch guards against synchronous throws in insecure contexts (http, file://).
    try {
      navigator.clipboard.writeText(cite).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(() => {
        btn.textContent = 'Copy failed';
        setTimeout(() => { btn.textContent = 'Copy Citation'; }, 2000);
      });
    } catch (_) {
      btn.textContent = 'Copy failed';
      setTimeout(() => { btn.textContent = 'Copy Citation'; }, 2000);
    }
  });
}


// ================================================================
// initSkillFilters — show the active skills panel, hide the rest.
// Triggers language bar animation the first time panel 2 is shown.
// ================================================================
function initSkillFilters() {
  const wrap = $('#skill-filters');
  if (!wrap) return;
  let barsAnimated = false;
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn[data-skill-filter]');
    if (!btn) return;
    $$('.filter-btn[data-skill-filter]').forEach(b => {
      const isActive = b === btn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
    const idx = btn.dataset.skillFilter;
    $$('[data-skill-panel]').forEach(panel => {
      panel.classList.toggle('skill-panel-hidden', panel.dataset.skillPanel !== idx);
    });
    if (idx === '2' && !barsAnimated) {
      barsAnimated = true;
      $$('.lang-bar-fill').forEach(f => { f.style.width = (f.dataset.pct || 0) + '%'; });
    }
  });
}


// ================================================================
// init — DOMContentLoaded entry point. Order matters slightly:
// render the markup before any observers/animations latch onto it.
// ================================================================
function init() {
  renderHero();
  renderAbout();
  renderEducation();
  renderResearch();
  renderPublications();
  renderWork();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderContact();

  initNav();
  initTyped();
  initProjectFilters();
  initSkillFilters();
  initCopyCitation();

  // AOS — scroll reveal animations. duration ms; once = don't re-trigger;
  // offset px = how far into the viewport before the reveal fires.
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, once: true, offset: 80 });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
