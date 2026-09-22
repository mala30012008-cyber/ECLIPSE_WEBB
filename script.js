const gallerySlides = Array.from(document.querySelectorAll('.gallery-slide'));
const galleryDots = Array.from(document.querySelectorAll('.dot-btn'));
const prevButton = document.querySelector('.gallery-arrow.prev');
const nextButton = document.querySelector('.gallery-arrow.next');

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + gallerySlides.length) % gallerySlides.length;

  gallerySlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === currentSlide);
  });

  galleryDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentSlide);
  });
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

setInterval(() => showSlide(currentSlide + 1), 5000);

const stageData = {
  acquire: {
    heading: 'ACQUIRE',
    title: 'Image capture and evidence handling create blind spots.',
    items: [
      'Drive imaged and hash checked',
      'Write blocker attached',
      'Bad sectors may be skipped',
      'HPA/DCO regions may remain invisible',
      'No tamper-proof unified log'
    ]
  },
  scan: {
    heading: 'SCAN',
    title: 'Scanning is fragmented across modes and incomplete by design.',
    items: [
      'Quick Scan',
      'Targeted AI Scan',
      'Full Scan',
      'Different modes lack a unified evidence baseline',
      'Risk of incomplete capture across sectors and slack space'
    ]
  },
  analyze: {
    heading: 'ANALYZE',
    title: 'Recovery analysis is disjointed and hard to validate.',
    items: [
      'Separate carving tools',
      'Fragmented files can be missed',
      'Thousands of false positives',
      'No confidence score',
      'Evidence quality cannot be chained in one report'
    ]
  },
  sanitize: {
    heading: 'SANITIZE',
    title: 'Sanitization depends on multiple actors and multiple methods.',
    items: [
      'Separate tool',
      'Separate operator',
      'Separate log',
      'Wrong method may be selected for media',
      'No verification',
      'No connection to forensic chain'
    ]
  },
  report: {
    heading: 'REPORT',
    title: 'Findings are stitched together manually and may not be legally defensible.',
    items: [
      'Findings manually stitched together',
      'No cryptographic link from evidence to conclusion',
      'Every tool gap creates a potential legal vulnerability',
      'Chain-of-custody continuity is fragmented',
      'Evidence statements may be harder to defend in court'
    ]
  }
};

const modeData = {
  quick: {
    heading: 'Quick Search',
    bullets: ['Metadata only', 'No carving']
  },
  targeted: {
    heading: 'Targeted AI Search',
    bullets: ['AI priority map', 'JSON → Rust engine', 'Non-exhaustive']
  },
  full: {
    heading: 'Full Search',
    bullets: ['Sector-by-sector', 'SHT + BGC', 'Exhaustive']
  }
};

const stageButtons = document.querySelectorAll('.stage');
const problemPanel = document.getElementById('problemPanel');
const modeButtons = document.querySelectorAll('.mode');
const modeDetail = document.getElementById('scanModeDetail');
const caseSelect = document.getElementById('caseSelect');
const driveSelect = document.getElementById('driveSelect');
const modeSelect = document.getElementById('modeSelect');
const simResult = document.getElementById('simResult');

function renderStage(stageKey) {
  const data = stageData[stageKey];
  const listItems = data.items.map((item) => `<li>${item}</li>`).join('');

  problemPanel.innerHTML = `
    <div class="panel-header">
      <span class="eyebrow mono">${data.heading}</span>
      <h3>${data.title}</h3>
    </div>
    <ul>${listItems}</ul>
  `;
}

stageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    stageButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderStage(button.dataset.stage);
  });
});

function renderMode(modeKey) {
  const data = modeData[modeKey];
  const listItems = data.bullets.map((item) => `<li>${item}</li>`).join('');
  modeDetail.innerHTML = `
    <div class="mode-summary">
      <span class="mini-label">Mode</span>
      <h3>${data.heading}</h3>
    </div>
    <ul>${listItems}</ul>
  `;
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modeButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderMode(button.dataset.mode);
  });
});

function updateSimulation() {
  const caseLabel = caseSelect.value;
  const driveLabel = driveSelect.value;
  const modeLabel = modeSelect.options[modeSelect.selectedIndex].text;

  let actionText = 'Metadata scan and hash verification';
  let verificationText = 'Pass — SHA-256 chain retained';

  if (modeSelect.value === 'targeted') {
    actionText = 'AI-prioritized region scan with confidence scoring';
    verificationText = 'Pass — AI tags quarantined from primary chain';
  } else if (modeSelect.value === 'full') {
    actionText = 'Exhaustive sector-by-sector scan with SHT + BGC reconstruction';
    verificationText = 'Pass — deterministic evidence verified';
  }

  simResult.innerHTML = `
    <div class="result-row">
      <span class="mono">Case</span>
      <strong>${caseLabel}</strong>
    </div>
    <div class="result-row">
      <span class="mono">Drive</span>
      <strong>${driveLabel}</strong>
    </div>
    <div class="result-row">
      <span class="mono">Mode</span>
      <strong>${modeLabel}</strong>
    </div>
    <div class="result-row">
      <span class="mono">Action</span>
      <strong>${actionText}</strong>
    </div>
    <div class="result-row">
      <span class="mono">Verification</span>
      <strong>${verificationText}</strong>
    </div>
    <div class="result-row">
      <span class="mono">Audit</span>
      <strong>Entry 08 recorded to chain</strong>
    </div>
  `;
}

caseSelect.addEventListener('change', updateSimulation);
driveSelect.addEventListener('change', updateSimulation);
modeSelect.addEventListener('change', updateSimulation);

renderStage('acquire');
renderMode('quick');
updateSimulation();
