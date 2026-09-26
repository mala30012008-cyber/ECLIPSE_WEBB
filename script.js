/**
 * ECLIPSE — Digital Forensics & Data Sanitization
 * Interactive Workstation Controller & Presentation Scripts
 * Smart India Hackathon 2026 | Team Lunar
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Photo Showcase / Evidence Lab Carousel
     ========================================================================== */
  const gallerySlides = Array.from(document.querySelectorAll('.gallery-slide'));
  const galleryDots = Array.from(document.querySelectorAll('.dot-btn'));
  const prevButton = document.querySelector('.gallery-arrow.prev');
  const nextButton = document.querySelector('.gallery-arrow.next');
  const galleryWindow = document.querySelector('.gallery-window');

  let currentSlide = 0;
  let autoplayInterval = null;

  function showSlide(index) {
    if (!gallerySlides.length) return;
    currentSlide = (index + gallerySlides.length) % gallerySlides.length;

    gallerySlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === currentSlide);
    });

    galleryDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === currentSlide);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5500);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      startAutoplay();
    });

    nextButton.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      startAutoplay();
    });
  }

  galleryDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoplay();
    });
  });

  if (galleryWindow) {
    galleryWindow.addEventListener('mouseenter', stopAutoplay);
    galleryWindow.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();

  /* ==========================================================================
     2. Problem Stages Explorer
     ========================================================================== */
  const stageData = {
    acquire: {
      heading: 'ACQUIRE',
      title: 'Image capture and evidence handling create blind spots in traditional forensics.',
      badge: 'RISK LEVEL: HIGH',
      items: [
        'Hardware write blocker attached and cryptographic SHA-256 baseline computed.',
        'Physical bad sectors frequently skipped or zero-padded without diagnostic tags.',
        'Host Protected Areas (HPA) and Device Configuration Overlays (DCO) remain invisible to conventional tools.',
        'Missing unified tamper-evident ledger across multi-source forensic acquisitions.'
      ],
      solution: 'ECLIPSE Solution: Native low-level ATA/NVMe access through memory-safe Rust with automatic HPA/DCO boundary detection and cryptographic acquisition anchoring.'
    },
    scan: {
      heading: 'SCAN',
      title: 'Scanning is fragmented across disparate modes and incomplete by design.',
      badge: 'RISK LEVEL: CRITICAL',
      items: [
        'Quick scans only inspect filesystem metadata while skipping orphaned clusters.',
        'AI scans lack evidentiary boundary isolation, risking court admissibility.',
        'Full sector-by-sector carving takes prohibitive hours without prioritized triage.',
        'Varying drive controllers handle wear-leveling slack space inconsistently.'
      ],
      solution: 'ECLIPSE Solution: Dual-engine architecture providing legally quarantined AI-targeted triage alongside deterministic full-search carving.'
    },
    analyze: {
      heading: 'ANALYZE',
      title: 'Recovery analysis is disjointed, producing false positives and missing fragments.',
      badge: 'RISK LEVEL: HIGH',
      items: [
        'Point carving tools miss non-contiguous, fragmented file streams (SHT/BGC).',
        'Thousands of header/footer false positives overwhelm forensic investigators.',
        'Recovered artifacts lack mathematically proven confidence scores.',
        'Evidence quality cannot be chained into a single reproducible audit report.'
      ],
      solution: 'ECLIPSE Solution: Aho-Corasick multi-pattern signature classification combined with Sequential Hypothesis Testing (SHT) and Bi-Gram Compatibility (BGC) reassembly.'
    },
    sanitize: {
      heading: 'SANITIZE',
      title: 'Sanitization depends on fragmented tools without verified compliance proof.',
      badge: 'RISK LEVEL: SEVERE',
      items: [
        'Software overwrite fails to clear modern SSD over-provisioning and wear-leveling blocks.',
        'Different operators use inconsistent wipe standards (DoD vs NIST vs HMG IS5).',
        'Post-wipe verification is rarely performed by an independent internal carving engine.',
        'Sanitization logs are isolated from earlier case investigation records.'
      ],
      solution: 'ECLIPSE Solution: Unified NIST SP 800-88 Rev. 1 compliance with ATA Secure Erase, NVMe Sanitize, and self-verifying post-wipe carving pass.'
    },
    report: {
      heading: 'REPORT',
      title: 'Findings are stitched together manually, risking legal defensibility in court.',
      badge: 'RISK LEVEL: CRITICAL',
      items: [
        'Reports manually synthesized from disparate CSVs, terminals, and hex dump logs.',
        'No cryptographic hash-link between raw disk evidence, recovered files, and final verdict.',
        'Every manual tool handoff creates a verifiable chain-of-custody vulnerability.',
        'Opposing counsel can challenge evidentiary provenance under Section 65B.'
      ],
      solution: 'ECLIPSE Solution: Automatically generated cryptographically signed forensic reports with SHA-256 blockchain-style audit logs and complete audit trails.'
    }
  };

  const stageButtons = document.querySelectorAll('.stage');
  const problemPanel = document.getElementById('problemPanel');

  function renderStage(stageKey) {
    if (!problemPanel || !stageData[stageKey]) return;
    const data = stageData[stageKey];
    const listItems = data.items.map((item) => `<li>${item}</li>`).join('');

    problemPanel.innerHTML = `
      <div class="panel-header">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="eyebrow mono">${data.heading} STAGE</span>
          <span class="flag" style="margin: 0;">${data.badge}</span>
        </div>
        <h3>${data.title}</h3>
      </div>
      <ul>${listItems}</ul>
      <div style="margin-top: 20px; padding: 14px 18px; border-radius: 10px; background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8;">
        <span style="display: block; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; color: #38bdf8; text-transform: uppercase; margin-bottom: 4px; font-weight: 700;">ECLIPSE Architectural Direct Fix</span>
        <p style="margin: 0; font-size: 13.5px; color: #e2e8f0; line-height: 1.5;">${data.solution}</p>
      </div>
    `;
  }

  stageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      stageButtons.forEach((item) => item.classList.toggle('active', item === button));
      renderStage(button.dataset.stage);
    });
  });

  if (stageButtons.length > 0) {
    renderStage('acquire');
  }

  /* ==========================================================================
     3. Scan Modes Selector
     ========================================================================== */
  const modeData = {
    quick: {
      heading: 'Quick Search (Triage Mode)',
      description: 'Rapid triage scan designed for immediate artifact indexing during emergency response.',
      specs: [
        { label: 'Scope', val: 'Master File Table & Metadata Only' },
        { label: 'Carving Engine', val: 'Bypassed (Zero sector I/O)' },
        { label: 'Typical Speed', val: '~500 GB / minute' },
        { label: 'Court Admissibility', val: 'Triage Discovery Only' }
      ],
      bullets: [
        'Extracts filesystem journal, MFT records, and standard directory indices.',
        'Identifies active file structure, recently deleted pointers, and volume metadata.',
        'Recommended for rapid on-site incident response triage under strict time constraints.'
      ]
    },
    targeted: {
      heading: 'Targeted AI Search (Quarantined)',
      description: 'Machine-learning guided artifact profiling using XGBoost feature importance + ONNX offline inference.',
      specs: [
        { label: 'Scope', val: 'AI Priority Heatmap Regions' },
        { label: 'Carving Engine', val: 'Aho-Corasick + SHT Reconstruction' },
        { label: 'Typical Speed', val: '~120 GB / minute' },
        { label: 'Court Admissibility', val: 'Disclosed & Quarantined' }
      ],
      bullets: [
        'Leverages drive SMART health telemetry and sector entropy patterns to map high-value artifact zones.',
        'Quarantined architecture: AI-inferred leads are strictly tagged and separated from the primary chain.',
        'Sub-second inference executed entirely offline inside the single memory-safe Rust binary.'
      ]
    },
    full: {
      heading: 'Full Search (Exhaustive & Deterministic)',
      description: 'Sector-by-sector comprehensive raw disk carving with zero machine learning influence.',
      specs: [
        { label: 'Scope', val: '100% Raw Storage LBA Sectors' },
        { label: 'Carving Engine', val: 'SHT + BGC Reassembly Engine' },
        { label: 'Typical Speed', val: '~25-40 GB / minute (Drive limited)' },
        { label: 'Court Admissibility', val: 'Gold Standard Defensible' }
      ],
      bullets: [
        'Complete sequential read pass examining 4096-byte blocks from LBA 0x0 to drive end.',
        'SHT and Bi-Gram Compatibility algorithms resolve fragmented file boundaries without false inclusions.',
        'Fully reproducible, deterministic forensic analysis satisfying Section 65B and Federal Rules of Evidence.'
      ]
    }
  };

  const modeButtons = document.querySelectorAll('.mode');
  const modeDetail = document.getElementById('scanModeDetail');

  function renderMode(modeKey) {
    if (!modeDetail || !modeData[modeKey]) return;
    const data = modeData[modeKey];
    const specRows = data.specs.map((s) => `
      <div style="background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(148,163,184,0.12);">
        <span style="display:block; font-family:var(--font-mono); font-size:11px; color:#7ba3c4; text-transform:uppercase;">${s.label}</span>
        <strong style="font-family:var(--font-mono); font-size:13px; color:#ffffff;">${s.val}</strong>
      </div>
    `).join('');

    const listItems = data.bullets.map((b) => `<li>${b}</li>`).join('');

    modeDetail.innerHTML = `
      <div class="mode-summary" style="margin-bottom: 16px;">
        <span class="mini-label" style="color: #38bdf8;">Forensic Scanning Profile</span>
        <h3 style="font-size: 1.3rem; color: #ffffff; margin-bottom: 6px;">${data.heading}</h3>
        <p style="margin: 0; color: #cbd5e1; font-size: 14px;">${data.description}</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-bottom: 16px;">
        ${specRows}
      </div>
      <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #cbd5e1; font-size: 14px;">
        ${listItems}
      </ul>
    `;
  }

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modeButtons.forEach((item) => item.classList.toggle('active', item === button));
      renderMode(button.dataset.mode);
    });
  });

  if (modeButtons.length > 0) {
    renderMode('quick');
  }

  /* ==========================================================================
     4. Interactive Architecture Explorer
     ========================================================================== */
  const archNodes = document.querySelectorAll('.explorer-node');
  const explorerDetails = document.querySelector('.explorer-details');

  const archData = {
    'Evidence Intake': {
      title: 'Module 01: Secure Evidence Intake & Case Ledger',
      desc: 'Cryptographic admission of raw disk images (.dd, .e01, raw physical drives). Calculates hardware serial hashes, initiates SHA-256 blockchain chain-of-custody, and locks storage write-blocker controls.'
    },
    'Drive Detection': {
      title: 'Module 02: Storage Controller & Bus Interrogation',
      desc: 'Native Rust low-level ATA/NVMe interrogation. Detects storage type (HDD, SATA SSD, NVMe, SED), interrogates SMART health registers, and detects hidden Host Protected Areas (HPA) and DCO overrides.'
    },
    'Metadata': {
      title: 'Module 03: Filesystem Metadata Parser',
      desc: 'Cross-platform extraction across NTFS, ext4, APFS, and FAT32. Audits MFT records, inode allocations, directory structures, and journal transactions for undelete analysis.'
    },
    'Hash Verification': {
      title: 'Module 04: SHA-256 Cryptographic Verification',
      desc: 'Continuous streaming hashing over 4096-byte blocks during disk read passes. Links previous case audit block hash with incoming data, guaranteeing mathematical immutability.'
    },
    'Carving Engine': {
      title: 'Module 05: Aho-Corasick + SHT/BGC Carving Pipeline',
      desc: 'Advanced sector carver capable of reassembling fragmented non-contiguous files. Multi-pattern signature recognition scans for headers/footers, while Sequential Hypothesis Testing (SHT) validates true byte bounds.'
    },
    'Secure Erasure': {
      title: 'Module 06: NIST SP 800-88 Media Sanitizer',
      desc: 'Standardized media sanitization module supporting Clear, Purge, and Destroy protocols. Direct invocation of ATA Secure Erase, NVMe Sanitize (Block Erase & Crypto Scramble), and DoD 5220.22-M 7-pass overrides.'
    },
    'Audit Log': {
      title: 'Module 07: Cryptographically Chained Forensic Ledger',
      desc: 'Every investigator action, disk I/O sector, AI anomaly flag, and wipe command is linked into an internal hash chain. Immutable proof preventing post-facto alteration.'
    },
    'Report': {
      title: 'Module 08: Legally Defensible Evidentiary Report',
      desc: 'Generates structured JSON/PDF courtroom dossiers with verifiable hash chains, LBA artifact ranges, confidence scores, and Section 65B compliance certificates.'
    }
  };

  if (archNodes.length > 0 && explorerDetails) {
    archNodes.forEach((node) => {
      node.addEventListener('click', () => {
        archNodes.forEach((n) => n.classList.remove('active'));
        node.classList.add('active');
        const nodeText = node.textContent.trim();
        const data = archData[nodeText];
        if (data) {
          explorerDetails.innerHTML = `
            <div class="mini-label" style="color: #38bdf8;">Forensic Architecture Component</div>
            <h3 style="font-size: 1.25rem; color: #ffffff; margin-bottom: 10px;">${data.title}</h3>
            <p style="color: #cbd5e1; font-size: 14.5px; line-height: 1.7; margin-bottom: 12px;">${data.desc}</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span class="flag" style="margin: 0; background: rgba(56,189,248,0.1); border-color: rgba(56,189,248,0.3); color: #38bdf8;">Memory-Safe Rust</span>
              <span class="flag" style="margin: 0; background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: #34d399;">NIST Compliant</span>
              <span class="flag" style="margin: 0; background: rgba(255,255,255,0.04); border-color: rgba(148,163,184,0.2); color: #cbd5e1;">Air-Gap Ready</span>
            </div>
          `;
        }
      });
    });
  }

  /* ==========================================================================
     5. Interactive Workstation Dashboard Sidebar
     ========================================================================== */
  const sidebarItems = document.querySelectorAll('.sidebar li');
  const mainPanel = document.querySelector('.main-panel');

  const panelData = {
    'CASE-26149': {
      title: 'Active Case: CASE-26149 / LUNAR-07',
      status: 'Investigation Active',
      metrics: [
        { label: 'Drive Status', val: 'Verified (WD 8TB)' },
        { label: 'Scan Mode', val: 'Full Search (SHT+BGC)' },
        { label: 'Progress', val: '94.2% Analyzed' },
        { label: 'Recovered Files', val: '1,284 Artifacts' },
        { label: 'Sanitization Status', val: 'Awaiting Authorization' },
        { label: 'Verification Status', val: 'PASS (SHA-256 Linked)' }
      ]
    },
    'Evidence': {
      title: 'Evidence Locker: Attached Physical Disks',
      status: 'Write-Blocker Locked',
      metrics: [
        { label: 'Device 01', val: '/dev/nvme0n1 (Samsung 1TB)' },
        { label: 'Device 02', val: '/dev/sda (WD Red 8TB)' },
        { label: 'HPA/DCO Status', val: 'Scanned & Clean' },
        { label: 'Acquisition Hash', val: 'SHA-256 842f...e9a1' },
        { label: 'Hardware Bus', val: 'PCIe 4.0 x4 / SATA III' },
        { label: 'Controller Locks', val: 'Hardware Write-Block Active' }
      ]
    },
    'Recovery': {
      title: 'File Recovery Engine: Real-time Carving Telemetry',
      status: 'Carving in Progress',
      metrics: [
        { label: 'Active LBA', val: '0x00AA6000' },
        { label: 'Classification', val: 'Aho-Corasick Match' },
        { label: 'SHT Boundary Confidence', val: '98.7% Accuracy' },
        { label: 'JPEG Images', val: '642 Recovered' },
        { label: 'DOCX / PDF Docs', val: '418 Recovered' },
        { label: 'Database Blobs', val: '224 Recovered' }
      ]
    },
    'File Erasure': {
      title: 'Targeted File & Slack-Space Erasure',
      status: 'Ready for Execution',
      metrics: [
        { label: 'Selected Files', val: '46 Classified Objects' },
        { label: 'Media Type', val: 'NVMe Solid-State' },
        { label: 'Algorithm', val: 'Deallocate + Crypto Scramble' },
        { label: 'Slack Space Scrub', val: 'RAM & Cluster Slack' },
        { label: 'Self-Carving Verification', val: 'Armed & Ready' },
        { label: 'Audit Signature', val: 'ED25519 Signed' }
      ]
    },
    'Drive Sanitization': {
      title: 'Drive Sanitization: NIST SP 800-88 Standards',
      status: 'Armed for Purge',
      metrics: [
        { label: 'Compliance Level', val: 'NIST Purge / DoD 7-Pass' },
        { label: 'Target Controller', val: 'NVMe Sanitize Subsystem' },
        { label: 'Over-Provisioning Clear', val: 'Supported via Controller' },
        { label: 'Est. Wipe Duration', val: '4.2 Seconds (Crypto)' },
        { label: 'Post-Wipe Carving', val: 'Mandatory 100% Pass' },
        { label: 'Certificate Authority', val: 'ECLIPSE Native Root' }
      ]
    },
    'Verification': {
      title: 'Forensic Verification Matrix',
      status: 'Integrity 100%',
      metrics: [
        { label: 'Recovery Verification', val: 'PASS (1,284/1,284)' },
        { label: 'Erasure Verification', val: 'PASS (Zero Remnants)' },
        { label: 'Chain Continuity', val: 'Unbroken SHA-256' },
        { label: 'AI Boundary Quarantine', val: 'Verified Isolated' },
        { label: 'False Positive Ratio', val: '< 0.002% (SHT Verified)' },
        { label: 'Court Admissibility', val: 'Section 65B Compliant' }
      ]
    },
    'Audit Logs': {
      title: 'Cryptographic Audit Stream',
      status: 'Stream Active',
      metrics: [
        { label: 'Total Entries', val: '4,892 Chained Blocks' },
        { label: 'Current Block Hash', val: '3f9d...7a12' },
        { label: 'Merkle Root', val: 'b5a2...88f4' },
        { label: 'Lead Analyst', val: 'LUNAR-INVESTIGATOR-01' },
        { label: 'Clock Source', val: 'Air-Gapped Hardware RTC' },
        { label: 'Tamper Alarm', val: 'Zero Discrepancies' }
      ]
    },
    'Reports': {
      title: 'Forensic Reporting & Courtroom Export',
      status: 'Ready for Export',
      metrics: [
        { label: 'Report Format', val: 'Defensible PDF / JSON-LD' },
        { label: 'Cryptographic Seal', val: 'SHA-256 + ECDSA' },
        { label: 'Section 65B Cert', val: 'Auto-Attached' },
        { label: 'Audit Chain Proof', val: 'Full Merkle Path Included' },
        { label: 'Artifact Hashes', val: 'SHA-256 per item' },
        { label: 'Agency License', val: 'SIH-2026-ECLIPSE-PRO' }
      ]
    },
    'Settings': {
      title: 'Forensic Engine Preferences',
      status: 'Air-Gapped Local Mode',
      metrics: [
        { label: 'Runtime Engine', val: 'Rust Native x86_64' },
        { label: 'Inference Engine', val: 'ONNX Runtime (Offline)' },
        { label: 'Memory Buffer', val: '16 GB Ring Buffer' },
        { label: 'I/O Direct Subsystem', val: 'O_DIRECT / libaio' },
        { label: 'Network Adapter', val: 'Disabled (Air-Gap)' },
        { label: 'Firmware Guard', val: 'Active Write-Block' }
      ]
    }
  };

  sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
      sidebarItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
      const key = item.textContent.trim();
      const data = panelData[key];
      if (data && mainPanel) {
        const metricBoxes = data.metrics.map((m) => `
          <div class="mini-box">
            <span>${m.label}</span>
            <strong>${m.val}</strong>
          </div>
        `).join('');

        mainPanel.innerHTML = `
          <div class="panel-topbar">
            <div>
              <span class="mini-label" style="color: #38bdf8;">Forensic Module View</span>
              <h3 style="font-size: 1.15rem; color: #ffffff; margin: 0;">${data.title}</h3>
            </div>
            <span class="status-chip success">${data.status}</span>
          </div>
          <div class="panel-metrics">
            ${metricBoxes}
          </div>
        `;
      }
    });
  });

  /* ==========================================================================
     6. End-to-End Forensic Simulator
     ========================================================================== */
  const caseSelect = document.getElementById('caseSelect');
  const driveSelect = document.getElementById('driveSelect');
  const modeSelect = document.getElementById('modeSelect');
  const simResult = document.getElementById('simResult');

  function updateSimulation() {
    if (!caseSelect || !driveSelect || !modeSelect || !simResult) return;
    const caseLabel = caseSelect.value;
    const driveLabel = driveSelect.value;
    const modeVal = modeSelect.value;
    const modeLabel = modeSelect.options[modeSelect.selectedIndex].text;

    let actionText = 'Metadata extraction and SHA-256 baseline anchoring';
    let verificationText = 'PASS — Directory tree validated';
    let timeEstimate = '14.2 seconds';
    let statusClass = 'color: #34d399;';

    if (modeVal === 'targeted') {
      actionText = 'XGBoost artifact profiling + ONNX inference on prioritized clusters';
      verificationText = 'PASS — AI suggestions quarantined; zero primary chain pollution';
      timeEstimate = '1 minute 48 seconds';
    } else if (modeVal === 'full') {
      actionText = 'Deterministic sector-by-sector carving with SHT + BGC fragment reassembly';
      verificationText = 'PASS — 100% sector verification logged to chained ledger';
      timeEstimate = '6 minutes 12 seconds';
    }

    simResult.innerHTML = `
      <div class="result-row">
        <span class="mono">Investigative Case</span>
        <strong>${caseLabel}</strong>
      </div>
      <div class="result-row">
        <span class="mono">Forensic Target</span>
        <strong>${driveLabel}</strong>
      </div>
      <div class="result-row">
        <span class="mono">Scanning Profile</span>
        <strong>${modeLabel}</strong>
      </div>
      <div class="result-row">
        <span class="mono">Engine Execution</span>
        <strong style="color: #38bdf8;">${actionText}</strong>
      </div>
      <div class="result-row">
        <span class="mono">Audit Chain Verdict</span>
        <strong style="${statusClass}">● ${verificationText}</strong>
      </div>
      <div class="result-row">
        <span class="mono">Immutable Ledger</span>
        <strong style="color: #cbd5e1; font-family: var(--font-mono);">Block #8928 chained (SHA-256: 9b2d...a71e)</strong>
      </div>
    `;
  }

  if (caseSelect && driveSelect && modeSelect) {
    caseSelect.addEventListener('change', updateSimulation);
    driveSelect.addEventListener('change', updateSimulation);
    modeSelect.addEventListener('change', updateSimulation);
    updateSimulation();
  }

  /* ==========================================================================
     7. Sticky Nav Scroll Spy
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
});
