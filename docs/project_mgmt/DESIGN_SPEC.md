# AutoCut AI — Design Agent Prompt for UI Mockup

## Product Overview

AutoCut AI is a standalone web app that takes raw talking-head video footage and automatically edits it using AI — removing filler words, dead air, false starts, and bad retakes, then returning a clean edited video with full transparency into every cut made. It also indexes the user's personal B-Roll library and suggests where to insert B-Roll clips based on what the speaker is discussing.

The target user is a solo content creator (YouTube educators, developer advocates, course creators) who records weekly talking-head videos and currently spends 3-6 hours editing each one manually.

---

## Design Direction

**Aesthetic:** Dark-mode, professional video editing tool — think the sophistication of Linear or Raycast meets the creative energy of a video editing suite. NOT generic SaaS. This should feel like a premium creative tool.

**Color palette:**
- Background: Near-black (#0d0d0f) with very subtle surface elevations using white at 2-4% opacity
- Primary accent: Indigo-to-purple gradient (#6366f1 → #a855f7) — used sparingly for CTAs, active states, and the progress ring
- Success/Kept: Green (#22c55e)
- Cut/Removed: Red (#f87171)
- Filler: Orange (#fb923c)
- Pause: Yellow (#facc15)
- Text: White at varying opacities (100%, 60%, 40%, 25%) for hierarchy

**Typography:**
- Headings and UI labels: A clean geometric sans-serif (like Instrument Sans, Satoshi, or General Sans) — tight letter-spacing on headings (-0.03em)
- Code/timestamps/data: A monospace font (like JetBrains Mono or IBM Plex Mono) for timestamps, confidence scores, percentages, and transcript text
- No serif fonts anywhere

**Visual principles:**
- Generous spacing, never cramped
- Subtle borders (white at 6% opacity) instead of heavy dividers
- Rounded corners (8-12px on cards, 6px on tags/badges)
- Staggered fade-in animations on lists
- Minimal use of icons — only where they add clarity
- No drop shadows except on primary CTA buttons (subtle glow in brand color)

---

## Screens to Design (5 total)

### Screen 1: Projects Dashboard

**Layout:** Fixed left sidebar (220px) + main content area

**Sidebar contains:**
- App logo top-left: small icon (indigo-to-purple gradient square with scissors icon) + "AutoCut AI" text wordmark
- Navigation: two items — "Projects" (film icon) and "B-Roll Library" (grid icon). Active state has subtle white background fill (8% opacity)
- Bottom of sidebar: usage card showing "THIS MONTH" label, large number "7 / 30 edits", and a thin progress bar (indigo gradient fill)

**Main content:**
- Page title "Projects" with subtitle "7 videos edited this month · 18.4 hours saved"
- Top-right: "New Edit" button (indigo gradient, with upload icon, subtle glow shadow)
- Below: list of 4 project rows, each containing:
  - Thumbnail placeholder (48px square, rounded, with emoji or video icon)
  - Title (bold white) + date and duration (muted text below)
  - Time saved badge (green text like "62% shorter" with lightning bolt icon)
  - Status pill: "Ready for Review" (yellow), "Exported" (green), or "Processing" (indigo/purple)
- Rows have very subtle hover state (background goes from 2% to 4% white)

---

### Screen 2: Upload / New Edit

**Layout:** Same sidebar, main content centered at max-width 720px

**Content:**
- Title "New Edit" with subtitle "Upload your raw talking head and let AI do the rest"
- Large drop zone: dashed border (white 10% opacity), rounded 16px, tall padding. Center-aligned content:
  - Upload icon inside a rounded square (indigo tinted background)
  - "Drop your video here" heading
  - "MP4, MOV, or WebM · Up to 5GB · Max 60 minutes" subtext
  - The entire drop zone is clickable
- Below the drop zone: a settings card with subtle surface background containing:
  - "Edit Preferences" label
  - **Aggressiveness slider:** horizontal slider from "Conservative" to "Aggressive" with a percentage readout (e.g., 70%). Track is dark, filled portion is indigo gradient, thumb is white circle with subtle glow
  - **Filler words toggles:** row of small pill-shaped buttons for each filler word: "um", "uh", "like", "so", "you know", "right", "basically", "literally". Active ones have indigo tint, inactive are dim/outline only. Use monospace font for the words.

---

### Screen 3: Processing / Progress

**Layout:** Same sidebar, main content centered vertically and horizontally

**Content:**
- Large circular progress ring (140px diameter):
  - Thin track (white 4% opacity)
  - Progress arc with indigo-to-purple gradient stroke
  - Large percentage number in the center (monospace, bold, white)
- Below the ring: current step name as heading (e.g., "Analyzing flow...") with a detail line below in muted text (e.g., "AI identifying cuts, retakes, and best takes")
- Below that: vertical step list with 5 steps:
  1. Extracting audio
  2. Transcribing
  3. Analyzing flow
  4. Rendering edit
  5. Matching B-Roll
  - Completed steps: green circle with checkmark, dimmed text
  - Active step: indigo ring with pulsing dot inside, white bold text
  - Upcoming steps: very dim, empty circle

---

### Screen 4: Review / Edit Decision List

This is the most complex and most important screen. The user lands here after processing completes.

**Layout:** Same sidebar, full-width main content area

**Top section:**
- Title "GitHub for Beginners Ep 12" (example project name)
- Stats row below title: Original: 38:12 | Edited: 14:23 | Saved: 62% | Cuts: 47 (use monospace for numbers, green highlight on "Saved")
- Top-right: "Export Final Video" button (green gradient, white text, subtle glow)

**Video comparison area:**
- A wide black container (16:9 aspect ratio, max-height ~340px)
- Inside: two video preview placeholders side by side with an arrow between them
  - Left: "ORIGINAL · 38:12" label
  - Right: "EDITED · 14:23" label with indigo border glow
- This represents before/after comparison

**Timeline bar:**
- Thin horizontal bar (32px tall) below the video area
- Made up of segments — kept segments are indigo-tinted, cut segments use a diagonal red striped pattern
- This gives a visual overview of what was kept vs removed across the whole video

**Tab bar:**
- Three tabs: "Edit Decision List (47)", "B-Roll Suggestions (3)", "Transcript"
- Active tab has indigo bottom border, white text. Inactive tabs are muted.
- Count badges use monospace in a subtle pill

**Tab content — Edit Decision List (default active):**
- Scrollable list of edit decisions, each row containing:
  - Timestamp in monospace (e.g., "0:12–0:15") with a small clock icon
  - Type badge — color-coded pill:
    - "Filler" = orange
    - "Retake" = red
    - "Pause" = yellow
    - "Best Take" = green
  - Text preview in monospace (e.g., `"um, so basically..."`)
  - Reason text in muted smaller font (e.g., "Filler words detected")
  - Confidence score in monospace (e.g., "97%"), very muted
  - Action button: "Restore" (outline button with undo icon) for cuts, or "Kept" (green badge with checkmark) for best takes

**Tab content — B-Roll Suggestions:**
- Cards for each suggestion containing:
  - Timestamp badge (e.g., "@ 1:15") in indigo monospace
  - Context text (e.g., "Talking about GitHub Actions")
  - Suggestion description (e.g., "Screen recording of GitHub Actions workflow tab")
  - Match status: either "✅ Found in library" (green) with a match score percentage, or "⚠️ No match — shoot this" (yellow)

**Tab content — Transcript:**
- Flowing text with inline annotations:
  - Timestamps in very muted text at the start of sections
  - Normal spoken text in monospace at 60% white opacity
  - Cut text shown with strikethrough + red highlight background
  - Removed pauses shown as yellow badges like "[2.3s pause removed]"
  - Best take selections shown with green "★ Best take" badges

---

### Screen 5: B-Roll Library

**Layout:** Same sidebar, main content area

**Top section:**
- Title "B-Roll Library" with subtitle "9 clips indexed · AI-tagged and searchable"
- Search bar (icon + text input in a subtle bordered container)
- "Upload Clips" button (indigo gradient)

**Filter row:**
- Horizontal row of filter pills: "All" (active, indigo), "Tech", "Lifestyle", "Urban", "Office", "Studio"

**Clip grid:**
- 3-column grid of clip cards, each containing:
  - 16:9 thumbnail area (dark gradient background with centered emoji placeholder — in real app this would be a video thumbnail)
  - Duration badge overlaid bottom-right of thumbnail (monospace, dark semi-transparent background)
  - Below thumbnail: row of small tag pills in monospace (e.g., "coding", "laptop", "screen")
  - Scene type label in very muted text (e.g., "Tech")
- Cards have subtle border, rounded 12px, hover state brightens slightly

---

## Interaction Notes for the Flow

1. Dashboard → clicking "New Edit" goes to Upload screen
2. Upload → clicking the drop zone (or dropping a file) goes to Processing screen
3. Processing → auto-advances to Review screen when complete
4. Review → this is where the user spends most time. They can switch between EDL, B-Roll Suggestions, and Transcript tabs
5. B-Roll Library → accessible from sidebar at any time, independent of the edit flow

---

## Key Design Priorities

1. **The Review screen is the hero.** This is where trust is built. The user needs to see exactly what the AI did and why. Every cut should feel transparent and reversible.
2. **The timeline bar is critical.** It gives an instant visual sense of how much was cut without reading anything.
3. **Dark mode is non-negotiable.** This is a video editing tool — bright backgrounds feel wrong in this context.
4. **Information density should be high but organized.** The EDL has a lot of data per row — use alignment, consistent widths, and color coding to make it scannable, not overwhelming.
5. **The processing screen should feel satisfying.** The circular progress + step checklist creates anticipation. This is the "wow, AI is doing all this for me" moment.

---

## What NOT to Do

- No light mode variant needed
- No onboarding/signup screens — just the core 5 screens
- No mobile layouts — desktop-first, this is a productivity tool
- No stock photos or realistic video thumbnails — use emoji placeholders or abstract gradient thumbnails
- No settings pages or account management
- Don't overcomplicate the sidebar — it should only have Projects and B-Roll Library