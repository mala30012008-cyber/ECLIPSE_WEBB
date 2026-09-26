# ECLIPSE Brand Guidelines v1.0

> Last updated: September 26, 2026
> Status: Active

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | #0d1117 |
| Secondary Color | #151d2a |
| Accent Color | #7ba3c4 |
| Primary Font | Inter |
| Secondary Font | IBM Plex Mono |
| Voice | Professional, Authoritative, Technical |

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| ECLIPSE Black | #0d1117 | rgb(13,17,23) | Primary background, navigation |
| ECLIPSE Dark | #111827 | rgb(17,24,39) | Secondary backgrounds, panels |
| ECLIPSE Steel | #7ba3c4 | rgb(123,163,196) | Accents, highlights, interactive elements |
| ECLIPSE Steel Deep | #4d6f8f | rgb(77,111,143) | Hover states, emphasis, dark mode |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| ECLIPSE Panel | #151d2a | rgb(21,29,42) | Panel backgrounds, cards |
| ECLIPSE Panel Alt | #1b2431 | rgb(27,36,49) | Alternate panel backgrounds |
| ECLIPSE Panel Soft | #1f2b3b | rgb(31,43,59) | Soft panel backgrounds |
| ECLIPSE Text | #e7edf5 | rgb(231,237,245) | Primary text, headings |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #0d1117 | rgb(13,17,23) | Main page background |
| Surface | #151d2a | rgb(21,29,42) | Elevated surfaces, cards |
| Overlay | rgba(9, 14, 20, 0.8) | rgb(9,14,20) | Navigation bar, modals |
| Text Primary | #e7edf5 | rgb(231,237,245) | Headings, body text |
| Text Secondary | #a5b0be | rgb(165,176,190) | Captions, muted text |
| Border | rgba(148, 163, 184, 0.18) | rgb(148,163,184) | Dividers, subtle borders |
| Border Strong | rgba(148, 163, 184, 0.32) | rgb(148,163,184) | Stronger dividers, active states |

### Semantic Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | #7aa37b | Positive actions, confirmations, system status |
| Warning | #c79d60 | Cautions, pending states, attention needed |
| Error | #b86d6b | Errors, destructive actions, alerts |
| Info | #7ba3c4 | Informational messages, neutral highlights |

### Accessibility

- Text on dark background (#0d1117): 7.2:1 contrast ratio (AAA)
- Steel (#7ba3c4) on dark: 4.6:1 contrast ratio (AA)
- All interactive elements meet WCAG 2.1 AA standards
- Dark mode compliant with inverted palette

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'IBM Plex Mono', 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 | 3.5rem (56px) | 2rem (32px) | 800 | 1.1 |
| H2 | 2.75rem (44px) | 1.75rem (28px) | 700 | 1.2 |
| H3 | 2.25rem (36px) | 1.5rem (24px) | 600 | 1.25 |
| H4 | 1.75rem (28px) | 1.25rem (20px) | 600 | 1.3 |
| Body | 1rem (16px) | 1rem (16px) | 400 | 1.6 |
| Body Large | 1.125rem (18px) | 1.125rem (18px) | 400 | 1.7 |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 400 | 1.4 |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## 3. Logo Usage

### Logo Composition

The ECLIPSE logo consists of two elements:
1. **Brand Mark**: A stylized letter "E" representing encryption and security
2. **Brand Name**: "ECLIPSE" in IBM Plex Mono font

### Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| Horizontal (Default) | Brand mark + brand name side-by-side | Headers, documents, primary usage |
| Stacked | Brand mark above brand name | Square spaces, app icons, social media |
| Mark Only | Brand mark only (letter "E") | Favicons, small spaces, watermarks |
| Wordmark Only | Brand name only ("ECLIPSE") | Limited space contexts when mark is recognizable |

### Clear Space

Minimum clear space = height of the brand mark ("E")
Maintain clear space on all sides of the logo

### Minimum Size

| Context | Minimum Width |
|---------|---------------|
| Digital - Full Logo | 160px |
| Digital - Mark Only | 32px |
| Digital - Wordmark Only | 120px |
| Print - Full Logo | 20mm |
| Print - Mark Only | 4mm |
| Print - Wordmark Only | 15mm |

### Color Usage

| Background | Logo Treatment |
|------------|----------------|
| Dark Background (#0d1117) | Brand mark: #7ba3c4 (Steel), Brand name: #e7edf5 (Text) |
| Light Background (#f4f7f8) | Brand mark: #0d1117 (Black), Brand name: #1b2940 (Dark text) |
| Accent Background (#7ba3c4) | Brand mark: #ffffff (White), Brand name: #ffffff (White) |
| Monochrome | Single color: #7ba3c4 (Steel) or #ffffff (White) |

### Don'ts

- Don't rotate or skew the logo
- Don't change colors outside approved palette
- Don't add shadows, gradients, or effects (unless specified)
- Don't crop or modify proportions of the brand mark
- Don't alter the spacing between brand mark and brand name
- Don't place on busy backgrounds without sufficient contrast (minimum 4.5:1 ratio)
- Don't outline or stroke the logo elements
- Don't apply gradients to the logo

---

## 4. Voice & Tone

### Brand Personality

| Trait | Description |
|-------|-------------|
| **Professional** | Expert knowledge in digital forensics and data security |
| **Authoritative** | Commanding trust through expertise and precision |
| **Technical** | Precise, detail-oriented, focused on security specifics |
| **Trustworthy** | Reliable, consistent, and transparent in all communications |
| **Resolute** | Unwavering commitment to data protection and security |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Professional | Expert, knowledgeable | Stuffy, corporate |
| Authoritative | Commanding, trustworthy | Arrogant, dismissive |
| Technical | Precise, detail-oriented | Overly complex, inaccessible |
| Trustworthy | Reliable, consistent | Deceptive, misleading |
| Resolute | Determined, unwavering | Flexible on security principles |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Marketing | Confident, benefit-focused | "Erase without doubt. Recover without compromise." |
| Documentation | Clear, instructional, precise | "Execute secure wipe using NIST SP 800-88 protocols." |
| Error messages | Calm, solution-focused, actionable | "Verification failed. Check device connection and retry." |
| Technical details | Precise, thorough, accurate | "AES-256 encryption with hardware security module integration." |
| Security alerts | Urgent, clear, directive | "Potential threat detected. Initiate quarantine protocol." |
| Success messages | Professional, understated | "Operation completed successfully. Audit log generated." |

### Prohibited Terms

| Avoid | Reason |
|-------|--------|
| Revolutionary | Overused in tech; undermines credibility |
| Unhackable | False claim; security is about risk management |
| Military-grade | Overused term without specific context |
| Unbreakable | Misleading; implies absolute security |
| Hack-proof | Impossible claim; security is continuous process |
| 100% secure | Statistically impossible; focus on risk reduction |
| Next-generation | Vague; specify actual improvements |
| Seamless integration | Overused; describe actual compatibility |
| Cutting-edge | Subjective; focus on proven capabilities |
| Game-changing | Hyperbolic; let results speak for themselves |

---

## 5. Imagery Guidelines

### Photography Style

- **Lighting:** Cool, professional lighting with subtle shadows; avoid warm/yellow tones
- **Subjects:** Forensic analysts, cybersecurity professionals, data center environments, technology interfaces
- **Settings:** Secure facilities, SOC environments, clean technology workspaces
- **Color treatment:** Maintain brand colors in post; emphasize steels, blues, and dark backgrounds
- **Composition:** Clean, focused subjects with technical accuracy; show authentic forensic/workflow scenarios
- **Authenticity:** Use real equipment, interfaces, and scenarios when possible; avoid stock-looking "hacker" imagery

### Illustrations

- Style: Technical, schematic, blueprint-inspired with precise line work
- Colors: Brand palette only (steel, black, dark backgrounds, text white)
- Line weight: 1.5px consistent stroke for main lines, 0.5px for detail lines
- Corners: 4px rounded for UI elements, sharp for technical diagrams
- Style: Isometric views, flowcharts, circuit-style diagrams when appropriate

### Icons

- Style: Technical, outline-based with geometric precision
- Stroke: 1.5px consistent
- Corner radius: 2px for UI elements, 0px for technical symbols
- Fill: None (outline only) for consistency
- Style: Inspired by interface symbols, security shields, data flow diagrams
- Consistency: All icons in a set should share the same visual language

### Image Treatment

- **Filters:** Cool tone adjustments; enhance blues and steels
- **Overlays:** Subtle grid patterns or circuit-like elements for tech backgrounds
- **Color Grading:** Push toward cool temperatures; avoid warm/saturated looks
- **Contrast:** Maintain detail in shadows; preserve highlight details on dark backgrounds

---

## 6. Design Components

### Buttons

| Type | Background | Text | Border | Border Radius |
|------|------------|------|--------|---------------|
| Primary | Transparent | #e7edf5 | 1px solid #7ba3c4 | 10px |
| Primary Hover | #0f172a (90% opacity) | #ffffff | 1px solid #7ba3c4 | 10px |
| Secondary | rgba(255,255,255,0.02) | #e7edf5 | 1px solid rgba(148,163,184,0.18) | 10px |
| Secondary Hover | rgba(255,255,255,0.06) | #ffffff | 1px solid rgba(123,163,196,0.45) | 10px |
| Destructive | Transparent | #b86d6b | 1px solid #b86d6b | 10px |
| Destructive Hover | rgba(184,109,107,0.1) | #ffffff | 1px solid #b86d6b | 10px |

### Cards & Panels

| Type | Background | Border | Border Radius | Shadow |
|------|------------|--------|---------------|--------|
| Default Panel | rgba(255,255,255,0.02) | 1px solid rgba(148,163,184,0.15) | 18px | 0 12px 24px rgba(15,23,42,0.04) |
| Elevated Panel | rgba(255,255,255,0.04) | 1px solid rgba(123,163,196,0.38) | 18px | 0 16px 32px rgba(2,6,23,0.28) |
| Dark Panel | rgba(17,24,39,0.03) | 1px solid rgba(148,163,184,0.12) | 18px | 0 12px 24px rgba(15,23,42,0.04) |
| Hero Overlay | rgba(9,14,20,0.8) | None | 0px | None |
| Glassmorphism | rgba(255,255,255,0.02) | 1px solid rgba(148,163,184,0.15) | 18px | 0 12px 24px rgba(15,23,42,0.04) |

### Inputs & Form Elements

| Type | Background | Border | Border Radius | Focus State |
|------|------------|--------|---------------|-------------|
| Input | rgba(255,255,255,0.02) | 1px solid rgba(148,163,184,0.18) | 10px | 2px solid #7ba3c4 |
| Input Focus | rgba(255,255,255,0.02) | 1px solid #7ba3c4 | 10px | 2px solid #7ba3c4 |
| Textarea | rgba(255,255,255,0.02) | 1px solid rgba(148,163,184,0.18) | 10px | 2px solid #7ba3c4 |
| Select | rgba(255,255,255,0.02) | 1px solid rgba(148,163,184,0.18) | 10px | 2px solid #7ba3c4 |
| Disabled | rgba(255,255,255,0.01) | 1px solid rgba(148,163,184,0.1) | 10px | None |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, compact elements |
| sm | 8px | Form fields, tight containers |
| md | 12px | Standard spacing, card padding |
| lg | 16px | Section spacing, element gaps |
| xl | 24px | Large sections, major dividers |
| 2xl | 32px | Page margins, major section gaps |
| 3xl | 48px | Major page sections, hero spacing |
| 4xl | 64px | Full section padding, major layouts |

### Border Radius

| Element | Radius | Usage |
|---------|--------|-------|
| Buttons | 10px | All button variants |
| Inputs | 10px | Form fields, text areas |
| Cards/Panels | 18px | Cards, modals, elevated surfaces |
| Modals | 18px | Dialog boxes, overlays |
| Badges/Tags | 8px | Small status indicators |
| Avatars | 50% | Circular images, profile pictures |
| Glassmorphism | 18px | Frosted glass effects, panels |

---

## AI Image Generation

### Base Prompt Template

Always prepend to image generation prompts:

```
ECLIPSE brand, forensic data security, professional technical imagery, cool color palette, {DESCRIBE YOUR VISUAL STYLE HERE - subject, setting, lighting, mood}
```

### Style Keywords

| Category | Keywords |
|----------|----------|
| **Lighting** | cool lighting, soft shadows, professional lighting, data center lighting, monitor glow, subtle rim light |
| **Mood** | professional, technical, secure, focused, analytical, confident, authoritative |
| **Composition** | rule of thirds, centered, leading lines, symmetrical, technical diagram, interface layout |
| **Treatment** | high detail, realistic, crisp, clean, professional, technical schematic |
| **Aesthetic** | modern, minimalist, technical, forensic, cybersecurity, enterprise |

### Visual Mood Descriptors

- Technical precision
- Forensic accuracy
- Professional environment
- Secure infrastructure
- Clean minimalism
- Authoritative presence

### Visual Don'ts

| Avoid | Reason |
|-------|--------|
| Hacker stereotypes (hoodies, dark rooms) | Undermines professional credibility |
| Neon colors and cyberpunk aesthetics | Not aligned with enterprise/professional brand |
| Abstract digital "matrix" effects | Too vague; lacks technical specificity |
| Warm/yellow lighting | Conflicts with cool, professional brand palette |
| Cartoonish or overly simplified illustrations | Undermines technical authority |
| Cluttered, busy compositions | Reduces clarity and professionalism |
| Unrealistic "hacking" visuals | Misrepresents actual security work |
| Overly dramatic lighting/scenes | Seems untrustworthy and sensationalist |

### Example Prompts

**Hero Banner:**
```
ECLIPSE brand, forensic data security professional at advanced workstation, multiple monitors showing forensic analysis tools, secure data center background, cool steel and blue color palette, professional lighting, shallow depth of field, technical accuracy, --ar 16:9 --v 6.0
```

**Product Dashboard:**
```
ECLIPSE brand, dark mode forensic analytics dashboard, real-time threat monitoring interface, glassmorphism panels, steel blue accents, clean technical design, professional environment, isometric view, --ar 3:2 --v 6.0
```

**Security Illustration:**
```
ECLIPSE brand, technical illustration of data protection lifecycle, encryption, secure storage, verified deletion, audit trail, line art style, steel blue on dark background, precise technical details, flowchart diagram, --ar 1:1 --v 6.0
```

**Team Photo:**
```
ECLIPSE brand, diverse team of forensic analysts in professional attire, secure facility background, cool lighting, professional yet approachable, authentic workplace setting, --ar 3:2 --v 6.0
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | {DATE} | Initial guidelines |
