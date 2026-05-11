# Taft Hill Acres Technical Specification

Document version: 2026-05-10
Status: Active

## 1. Architecture Overview

The site is implemented as a static Astro app with local JSON content and local images.

Flow:

1. Author edits content in src/data/*.json.
2. Astro builds static HTML/CSS/assets into dist.
3. Netlify serves static output and handles form submissions.

No runtime CMS, database, authentication service, or custom backend API is required.

## 2. Stack

### Core

1. Astro 5.18.x
2. Vite 8.x
3. Tailwind CSS 3.4.x with @astrojs/tailwind 6.x

### Tooling

1. TypeScript (strict mode in src/tsconfig.json)
2. ESLint 9 flat config
3. Prettier plugin for Astro

### Hosting

1. Netlify (static publish from dist)
2. Netlify Forms for contact submissions

## 3. Directory Responsibilities

1. src/pages: route-level Astro pages.
2. src/components: reusable UI parts (header, footer, slider, form).
3. src/data: canonical content layer for page copy and image paths.
4. public/images/site: migrated local image assets.
5. docs/project_mgmt: planning/spec docs.

## 4. Content/Data Model

Content is file-based JSON and imported directly by page components.

Current datasets:

1. src/data/home.json
2. src/data/about.json
3. src/data/facility.json
4. src/data/training.json
5. src/data/testimonials.json
6. src/data/thanks.json

Schema notes:

1. Rich text blocks are currently stored as HTML strings in JSON (bodyHtml fields).
2. Image references are static paths under /images/site/...
3. Testimonials are normalized into cards for slider rendering.

## 5. Build and Run

1. Dev server: npm run dev
2. Build CSS then site: npm run build
3. Preview static output: npm run preview

Build output:

1. dist contains static routes and optimized assets.
2. Astro image optimization emits generated assets under dist/_astro.

## 6. Form Handling

Contact form is pure HTML POST with Netlify attributes in src/components/Form.astro:

1. data-netlify="true"
2. netlify-honeypot="bot-field"
3. hidden form-name input
4. action="/thanks"

No custom API endpoint is needed for contact handling.

## 7. Performance Considerations

1. Keep images compressed and appropriately sized before committing.
2. Prefer local static assets over remote runtime fetches.
3. Keep client-side JavaScript minimal; most pages are static markup.

## 8. Security/Operations Notes

1. Current netlify.toml lacks explicit security header declarations.
2. Node version mismatch exists: netlify.toml uses 18 while package.json expects >=20.
3. Catch-all redirect in netlify.toml should be reviewed for static routing behavior.

## 9. Known Technical Debt

1. Tailwind is still v3; migration to v4 remains a planned phase.
2. README content is outdated and still references legacy framework history.
3. Some docs were imported from another project and are now being normalized.

## 10. Change Control

When making feature/content changes:

1. Update src/data first.
2. Validate with npm run build.
3. Spot-check critical routes: /, /about, /facility, /training, /testimonials, /contact, /thanks.

        if results.detections:
            det = results.detections[0]
            box = det.location_data.relative_bounding_box
            face_frames.append({
                "timestamp": round(timestamp, 2),
                "face_x": round(box.xmin + box.width / 2, 4),   # center X (0-1)
                "face_y": round(box.ymin + box.height / 2, 4),  # center Y (0-1)
                "face_w": round(box.width, 4),
                "face_h": round(box.height, 4),
                "confidence": round(det.score[0], 3),
            })
        else:
            # No face detected — use center as fallback
            face_frames.append({
                "timestamp": round(timestamp, 2),
                "face_x": 0.5,
                "face_y": 0.4,
                "face_w": 0.0,
                "face_h": 0.0,
                "confidence": 0.0,
            })

        frame_idx += frame_interval

    cap.release()
    mp_face.close()

    return {"frames": face_frames}
```

### 4.4 Transcription (Step 1) — Unchanged

```python
async def transcribe(project_id: str, audio_url: str):
    response = await deepgram.transcription.prerecorded(
        {"url": audio_url},
        {
            "model": "nova-2",
            "smart_format": True,
            "utterances": True,
            "diarize": False,
            "filler_words": True,
            "punctuate": True,
            "paragraphs": True,
        }
    )

    for word in response.results.channels[0].alternatives[0].words:
        await db.transcript_segments.insert({
            "project_id": project_id,
            "word": word.word,
            "start_time": word.start,
            "end_time": word.end,
            "confidence": word.confidence,
        })

    await db.projects.update(project_id, status="analyzing")
```

### 4.5 AI Analysis (Step 2) — Now Format-Aware

```python
async def analyze_transcript(project_id: str):
    project = await db.projects.get(project_id)
    segments = await db.transcript_segments.select(project_id)
    transcript_text = format_transcript_with_timestamps(segments)

    # Load format-specific preferences
    user = await db.users.get(project.user_id)
    format_key = "vertical" if project.source_format == "vertical" else "landscape"
    prefs = user.preferences.get(format_key, {})
    aggressiveness = prefs.get("aggressiveness", 0.7)
    min_pause = prefs.get("min_pause", 1.5 if format_key == "landscape" else 1.0)

    format_context = ""
    if project.source_format == "vertical":
        format_context = """
## Format Context
This is VERTICAL (9:16) content intended for short-form platforms (Reels, TikTok, Shorts).
- Edit MORE aggressively — tighter pacing, shorter pauses
- Minimum pause threshold: {min_pause}s (shorter than landscape)
- Also identify the top 3-5 strongest standalone segments (30-90 seconds each)
  that could work as individual short-form clips
- For each suggested clip, provide: a hook/title, why it works standalone,
  and an energy score (0-1)
""".format(min_pause=min_pause)
    else:
        format_context = """
## Format Context
This is LANDSCAPE (16:9) content intended for long-form platforms (YouTube, courses).
- Edit at moderate pace — preserve natural rhythm
- Minimum pause threshold: {min_pause}s
- Prioritize narrative flow and completeness over speed
""".format(min_pause=min_pause)

    prompt = f"""You are an expert video editor analyzing a raw talking-head transcript.
Your job is to produce an Edit Decision List (EDL) that will create a clean,
professional video from this raw footage.

{format_context}

## Editing Aggressiveness: {aggressiveness} (0 = conservative, 1 = very aggressive)

## Raw Transcript (with timestamps)
{transcript_text}

## Your Tasks

1. **Identify segments to REMOVE:**
   - Filler words (um, uh, like, so, you know, right, basically, literally)
   - Dead air / long pauses (>{min_pause} seconds)
   - False starts (speaker begins a sentence then restarts)
   - Abandoned thoughts
   - Retakes (speaker says the same point multiple times)
   - Off-topic tangents
   - Coughs, throat clears, "sorry", "wait", "let me start over"

2. **Select best takes:**
   - When the speaker makes the same point multiple times, select the
     BEST version based on: clarity, energy, fluency, completeness
   - Explain WHY you chose each take

3. **Analyze narrative flow:**
   - Identify the logical structure / outline of the content
   - Flag any ordering issues
   - Note topic transitions

4. **Suggest b-roll moments:**
   - Identify points where visual variety would improve engagement
   - Describe what kind of b-roll would work at each point

## NOTE: The following "suggested_clips" section is a v2.0 feature.
## For MVP, omit this from the prompt. Included here for reference only.
#
# {"5. **Identify standalone clips (VERTICAL CONTENT ONLY):**" if project.source_format == "vertical" else ""}
# {"   - Find the 3-5 best segments (60-90s each) that work as standalone short-form clips" if project.source_format == "vertical" else ""}
# {"   - Each clip needs: a strong hook in the first 3s, a complete thought, high energy" if project.source_format == "vertical" else ""}
# {"   - Provide a suggested title/hook text and energy score for each" if project.source_format == "vertical" else ""}

## Output Format
Return a JSON object:
{{
    "summary": "Brief description of the content",
    "total_segments_analyzed": <int>,
    "source_format": "{project.source_format}",
    "narrative_outline": ["Topic 1", "Topic 2", ...],
    "edit_decisions": [
        {{
            "type": "cut_filler|cut_pause|cut_false_start|cut_retake|keep_best_take",
            "start_time": <float>,
            "end_time": <float>,
            "original_text": "what was said",
            "reason": "why this should be cut/kept",
            "confidence": <float 0-1>
        }}
    ],
    "broll_suggestions": [
        {{
            "insert_after_time": <float>,
            "duration": <float>,
            "context": "what speaker is discussing",
            "suggestion": "description of ideal b-roll"
        }}
    ],
    {"\"suggested_clips\": [" if project.source_format == "vertical" else ""}
    {"    {" if project.source_format == "vertical" else ""}
    {"        \"start_time\": <float>," if project.source_format == "vertical" else ""}
    {"        \"end_time\": <float>," if project.source_format == "vertical" else ""}
    {"        \"title_suggestion\": \"hook/title for this clip\"," if project.source_format == "vertical" else ""}
    {"        \"hook_text\": \"on-screen text for first 3 seconds\"," if project.source_format == "vertical" else ""}
    {"        \"energy_score\": <float 0-1>," if project.source_format == "vertical" else ""}
    {"        \"reason\": \"why this works as standalone\"" if project.source_format == "vertical" else ""}
    {"    }" if project.source_format == "vertical" else ""}
    {"]," if project.source_format == "vertical" else ""}
    "flow_notes": "any notes about pacing or structure"
}}"""

    response = await anthropic.messages.create(
        model="claude-sonnet-4-5-20250929",
        max_tokens=8000,
        messages=[{"role": "user", "content": prompt}]
    )

    edl = parse_json_response(response)

    # Store edit decisions
    for decision in edl["edit_decisions"]:
        await db.edit_decisions.insert({
            "project_id": project_id,
            "decision_type": decision["type"],
            "start_time": decision["start_time"],
            "end_time": decision["end_time"],
            "reason": decision["reason"],
            "confidence": decision["confidence"],
            "original_text": decision["original_text"],
        })

    # Store b-roll suggestions
    for suggestion in edl["broll_suggestions"]:
        await store_broll_suggestion(project_id, suggestion)

    # [v2.0] Store suggested clips (vertical content only)
    # Uncomment when suggested clips feature is implemented
    # if project.source_format == "vertical" and "suggested_clips" in edl:
    #     for clip in edl["suggested_clips"]:
    #         await db.suggested_clips.insert({...})

    await db.projects.update(project_id, status="editing")
```

### 4.6 Video Processing (Step 3) — Unchanged Core

The FFmpeg edit execution is format-agnostic — it works on timestamps regardless of aspect ratio. The same `execute_edits()` function from v1.0 applies. FFmpeg preserves the original resolution and aspect ratio by default.

### 4.7 Cross-Format Export

```python
async def generate_cross_format(project_id: str, target_format: str):
    """
    Generate a version of the edited video in a different aspect ratio.
    Uses face tracking data to keep speaker centered.
    """
    project = await db.projects.get(project_id)
    face_data = project.face_track_data

    if target_format == "vertical" and project.source_format == "landscape":
        # 16:9 → 9:16: crop landscape to vertical, centered on face
        await crop_landscape_to_vertical(project, face_data)

    elif target_format == "landscape" and project.source_format == "vertical":
        # 9:16 → 16:9: place vertical in landscape frame
        await frame_vertical_in_landscape(project)


async def crop_landscape_to_vertical(project, face_data):
    """
    Crop 16:9 to 9:16 using face tracking to keep speaker centered.
    Uses FFmpeg crop filter with dynamic X position based on face data.
    """
    # Calculate crop dimensions
    # For 1920x1080 → need 9:16 ratio from the height
    # Target: 607x1080 (9:16 from 1080 height)
    src_w = project.source_width
    src_h = project.source_height
    crop_w = int(src_h * 9 / 16)  # width of the vertical crop
    crop_h = src_h                  # full height

    # Generate crop filter with face tracking
    # Smooth the face positions to avoid jittery cropping
    smoothed = smooth_face_positions(face_data["frames"], window=5)

    # Build FFmpeg command with dynamic crop
    # For MVP: use average face position (static crop) — less complex
    avg_face_x = np.mean([f["face_x"] for f in smoothed if f["confidence"] > 0.3])
    crop_x = int((avg_face_x * src_w) - (crop_w / 2))
    crop_x = max(0, min(crop_x, src_w - crop_w))  # clamp to bounds

    output_path = f"/tmp/{project.id}_cross_format.mp4"
    cmd = [
        "ffmpeg", "-i", project.edited_video_url,
        "-vf", f"crop={crop_w}:{crop_h}:{crop_x}:0",
        "-c:v", "libx264", "-preset", "medium", "-crf", "23",
        "-c:a", "copy",
        "-movflags", "+faststart",
        output_path
    ]

    await run_ffmpeg(cmd)

    cross_url = await upload_to_r2(output_path, f"cross/{project.id}_vertical.mp4")
    await db.projects.update(project.id, {
        "cross_format_video_url": cross_url,
        "cross_format_type": "landscape_to_vertical",
    })


async def frame_vertical_in_landscape(project):
    """
    Place 9:16 video inside a 16:9 frame.
    Options: blurred background, solid color, or gradient sides.
    """
    src_w = project.source_width
    src_h = project.source_height
    # Target: 1920x1080
    target_w = 1920
    target_h = 1080

    output_path = f"/tmp/{project.id}_cross_format.mp4"

    # Option 1: Blurred background (most common for vertical-in-landscape)
    cmd = [
        "ffmpeg", "-i", project.edited_video_url,
        "-filter_complex",
        f"[0:v]scale={target_w}:{target_h},boxblur=20:20[bg];"
        f"[0:v]scale=-1:{target_h}[fg];"
        f"[bg][fg]overlay=(W-w)/2:(H-h)/2",
        "-c:v", "libx264", "-preset", "medium", "-crf", "23",
        "-c:a", "copy",
        "-movflags", "+faststart",
        output_path
    ]

    await run_ffmpeg(cmd)

    cross_url = await upload_to_r2(output_path, f"cross/{project.id}_landscape.mp4")
    await db.projects.update(project.id, {
        "cross_format_video_url": cross_url,
        "cross_format_type": "vertical_to_landscape",
    })
```

### 4.8 B-Roll Matching — Now Format-Aware

```python
async def match_broll(project_id: str, user_id: str):
    """Match b-roll suggestions to user's library, prioritizing format matches."""

    project = await db.projects.get(project_id)
    suggestions = await db.broll_suggestions.select(project_id=project_id)

    for suggestion in suggestions:
        text_embedding = clip_model.encode_text(suggestion.suggested_description)

        # Query with format-aware ranking:
        # Same-format clips get a boost, different-format clips are still returned
        # but flagged
        matches = await db.execute("""
            SELECT id, description, file_url, thumbnail_url, source_format,
                   aspect_ratio,
                   1 - (embedding <=> $1::vector) AS similarity,
                   CASE WHEN source_format = $3 THEN 0.1 ELSE 0 END AS format_bonus
            FROM broll_clips
            WHERE user_id = $2
            ORDER BY (1 - (embedding <=> $1::vector)) +
                     (CASE WHEN source_format = $3 THEN 0.1 ELSE 0 END) DESC
            LIMIT 5
        """, [text_embedding.tolist(), user_id, project.source_format])

        if matches and matches[0].similarity > 0.3:
            best = matches[0]
            format_matches = best.source_format == project.source_format

            await db.broll_suggestions.update(suggestion.id, {
                "matched_clip_id": best.id,
                "match_score": best.similarity,
                "format_match": format_matches,
                "format_mismatch_note": None if format_matches else
                    f"Clip is {best.aspect_ratio} but project is {project.source_aspect_ratio} — may need cropping",
            })
```

---

## 5. API Endpoints

### 5.1 Projects

```
POST   /api/projects                         Create new project
GET    /api/projects                         List user's projects (filterable by format)
GET    /api/projects/:id                     Get project details + status + format info
DELETE /api/projects/:id                     Delete project

POST   /api/projects/:id/upload              Get presigned upload URL
POST   /api/projects/:id/process             Start processing pipeline
GET    /api/projects/:id/transcript           Get full transcript
GET    /api/projects/:id/edl                 Get edit decision list
PATCH  /api/projects/:id/edl/:decision_id    Restore/accept a cut
POST   /api/projects/:id/reprocess           Re-edit with updated decisions
POST   /api/projects/:id/export              Export final video (original format)
POST   /api/projects/:id/cross-format        Generate cross-format version

# v2.0 endpoints (suggested clips)
# GET    /api/projects/:id/suggested-clips      Get suggested standalone clips (9:16 only)
# POST   /api/projects/:id/export-clip/:clip_id Export a single suggested clip
```

### 5.2 B-Roll Library

```
POST   /api/broll/upload                     Get presigned upload URL(s)
GET    /api/broll                            List user's b-roll clips (filterable by format)
GET    /api/broll/search?q=<query>&format=<format>  Semantic search with format filter
PATCH  /api/broll/:id                        Update tags/collection
DELETE /api/broll/:id                        Delete clip

GET    /api/projects/:id/broll-suggestions   Get b-roll suggestions (includes format match info)
PATCH  /api/projects/:id/broll-suggestions/:id  Accept/reject suggestion
```

### 5.3 User & Preferences

```
GET    /api/user/profile                     Get user profile
PATCH  /api/user/preferences                 Update editing preferences (per-format)
GET    /api/user/usage                       Get plan usage stats
```

---

## 6. File Storage Architecture

```
Cloudflare R2 Bucket: autocut-ai-storage
│
├── raw/
│   └── {user_id}/{project_id}/original.mp4
│
├── edited/
│   └── {user_id}/{project_id}/
│       ├── edited_v1.mp4              (original format)
│       └── edited_v2.mp4              (if re-processed)
│
├── cross-format/
│   └── {user_id}/{project_id}/
│       └── cross_format.mp4           (16:9→9:16 or 9:16→16:9)
│
├── clips/                              (extracted standalone clips from 9:16 projects)
│   └── {user_id}/{project_id}/
│       ├── clip_1.mp4
│       ├── clip_2.mp4
│       └── ...
│
├── broll/
│   └── {user_id}/
│       ├── clips/
│       │   ├── {clip_id}.mp4
│       │   └── ...
│       └── thumbnails/
│           ├── {clip_id}.jpg
│           └── ...
│
└── exports/
    └── {user_id}/{project_id}/
        ├── final_export.mp4           (primary format)
        └── final_cross_format.mp4     (cross-format, if generated)
```

---

## 7. Job Queue Architecture

```python
@inngest.create_function(
    fn_id="process-video",
    trigger=inngest.TriggerEvent(event="video/uploaded"),
    retries=2
)
async def process_video(ctx, step):
    project_id = ctx.event.data["project_id"]

    # Step 0: Detect format + extract face tracking
    format_info = await step.run("detect-format", lambda: detect_and_track(project_id))
    await notify_progress(project_id, "detecting", 10)

    # Step 1: Transcribe
    transcript = await step.run("transcribe", lambda: transcribe(project_id))
    await notify_progress(project_id, "transcribing", 30)

    # Step 2: AI Analysis (format-aware)
    edl = await step.run("analyze", lambda: analyze_transcript(project_id))
    await notify_progress(project_id, "analyzing", 55)

    # Step 3: Execute edits
    result = await step.run("edit", lambda: execute_edits(project_id))
    await notify_progress(project_id, "editing", 80)

    # Step 4: Match b-roll (format-aware, parallel)
    await step.run("match-broll", lambda: match_broll(project_id))
    await notify_progress(project_id, "review", 100)

    return {"status": "complete", "project_id": project_id}


@inngest.create_function(
    fn_id="generate-cross-format",
    trigger=inngest.TriggerEvent(event="cross-format/requested"),
    retries=2
)
async def cross_format_job(ctx, step):
    project_id = ctx.event.data["project_id"]
    target = ctx.event.data["target_format"]

    result = await step.run("cross-format", lambda: generate_cross_format(project_id, target))
    return {"status": "complete"}
```

---

## 8. Performance Targets

| Metric | Target | Approach |
|--------|--------|----------|
| Upload speed | Limited by user's connection | tus resumable, chunked |
| Format detection | <5 seconds | FFprobe + MediaPipe on first frame |
| Face tracking | <15 seconds per 10min video | Sample every 2s, GPU-accelerated |
| Transcription | ~0.2x real-time | Deepgram streaming |
| AI Analysis | 30–90 seconds | Depends on transcript length |
| Video processing | ~1x real-time | FFmpeg on GPU instance |
| Cross-format render | ~0.5x edited duration | Single FFmpeg pass, simpler filter |
| Total pipeline | <2x video duration | Parallel where possible |
| B-roll indexing | <30s per clip | Async background job |
| B-roll search | <500ms | pgvector with IVFFlat index |

---

## 9. Cost Estimates (Per Video Edit)

Based on a 30-minute raw video producing a 15-minute edit:

| Service | Cost | Notes |
|---------|------|-------|
| Deepgram transcription | ~$0.36 | $0.0043/min for Nova-2 × 30 min |
| Claude API (analysis) | ~$0.50 | ~8K input + 4K output tokens |
| GPU compute (FFmpeg) | ~$0.30 | Modal/Replicate GPU minutes |
| Face detection (MediaPipe) | ~$0.10 | GPU seconds for sampled frames |
| Cross-format render | ~$0.15 | Additional FFmpeg pass (if requested) |
| R2 storage | ~$0.02/GB/mo | Raw + edited + cross-format + b-roll |
| CLIP embeddings | ~$0.05 | Per b-roll clip indexing |
| **Total per edit** | **~$1.35** | (~$1.50 with cross-format) |

At $99/mo for 30 edits = $40.50-$45 COGS → ~55-59% gross margin.

---

## 10. Security & Privacy

- All video files encrypted at rest (R2 server-side encryption)
- Presigned URLs for upload/download (no direct bucket access)
- User data isolation enforced at database query level (Row Level Security)
- Videos are not used for AI model training
- Face tracking data stored per-project, deleted when project is deleted
- User can delete all data (GDPR-compliant deletion pipeline)
- API authentication via Supabase JWT tokens
- Rate limiting on all endpoints

---

## 11. Development Phases

### Phase 1: Foundation (Weeks 1–3)
- Project scaffolding (Next.js + FastAPI)
- Supabase setup (auth, database, RLS policies)
- R2 bucket configuration
- Resumable file upload pipeline
- **Format detection on upload (FFprobe + rotation handling)**
- Basic dashboard UI
- **Format-aware video preview component (renders 16:9 or 9:16)**

### Phase 2: Core Pipeline (Weeks 4–7)
- Deepgram transcription integration
- **Claude analysis prompt engineering — separate tuning for vertical vs. landscape**
- FFmpeg edit execution engine
- Edit Decision List UI
- **Video review interface with format-adaptive layout**
- **Face detection pipeline (MediaPipe integration)**

### Phase 3: B-Roll System (Weeks 8–10)
- B-roll upload and indexing pipeline **with format tagging**
- CLIP embedding generation
- pgvector search integration **with format-aware ranking**
- B-roll library UI (grid, search, collections, **format filter**)
- B-roll suggestion matching **with format mismatch warnings**

### Phase 4: Polish & Launch (Weeks 11–14)
- Onboarding flow **with per-format preference setting**
- User preferences and editing profiles
- Stripe billing integration
- Error handling and edge cases
- Performance optimization
- Beta testing with 10–20 creators
- Documentation and support

### Phase 5: Cross-Format & Enhancements (Weeks 15–18)
- **Cross-format export pipeline (16:9 ↔ 9:16)**
- **Framing preview UI for cross-format (adjustable crop position)**
- Captions (basic, **format-adapted placement**)

### Phase 6: Suggested Clips — v2.0 (Weeks 19–22)
- **Suggested clips feature for vertical content (60-90s standalone segments)**
- **Claude prompt extension for clip identification (energy scoring, hook detection)**
- **Suggested Clips tab in review UI**
- **Individual clip export with hook text overlay**
- Batch processing, team features

---

## 12. Monitoring & Observability

| System | Tool | Purpose |
|--------|------|---------|
| Error tracking | Sentry | Catch and triage bugs |
| Product analytics | PostHog | User behavior, feature usage, **format split tracking** |
| API monitoring | Uptime Robot | Availability |
| Job monitoring | Inngest dashboard | Pipeline health, failure rates |
| Cost tracking | R2/Deepgram/Anthropic dashboards | Per-user cost monitoring |
| Video quality | Custom metrics | Edit accuracy, user restore rate, **cross-format satisfaction** |

---

## 13. Frontend: Format-Adaptive UI Behavior

The review interface adapts based on `project.source_format`:

### Landscape (16:9) Project
- Video preview renders in standard widescreen (fills content width)
- Timeline bar is full-width below preview
- Transcript and EDL panels are below in tab layout
- Standard layout — similar to v1.0

### Vertical (9:16) Project
- Video preview renders tall and narrow (centered, with side panels for transcript/EDL)
- OR: video preview on the left, transcript/EDL stacked on the right
- Timeline bar runs vertically alongside the preview OR stays horizontal below
- **"Suggested Clips" tab appears** (not shown for landscape projects)
- Caption preview shows centered-middle positioning (not bottom)
- B-roll suggestions note format matching

### The key insight:
The vertical video preview takes up significant vertical space but little horizontal space. The UI should use the freed horizontal space for the transcript and EDL, creating a side-by-side layout:

```
┌─────────────────────────────────────────────────────────┐
│  [Sidebar]  │  ┌──────┐  │  Transcript / EDL / B-Roll  │
│             │  │      │  │  ┌─────────────────────────┐ │
│  Projects   │  │ 9:16 │  │  │ Edit Decision List      │ │
│  B-Roll     │  │Video │  │  │ ...                     │ │
│             │  │Preview│  │  │ ...                     │ │
│             │  │      │  │  │ ...                     │ │
│             │  │      │  │  └─────────────────────────┘ │
│             │  └──────┘  │  ┌─────────────────────────┐ │
│             │  [timeline] │  │ Suggested Clips         │ │
│             │             │  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

vs. landscape:

```
┌─────────────────────────────────────────────────────────┐
│  [Sidebar]  │  ┌──────────────────────────────────────┐ │
│             │  │         16:9 Video Preview            │ │
│  Projects   │  └──────────────────────────────────────┘ │
│  B-Roll     │  [================timeline==============] │
│             │  ┌──────────────────────────────────────┐ │
│             │  │  [EDL]  [B-Roll]  [Transcript]       │ │
│             │  │  ...content...                       │ │
│             │  └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 14. Future Technical Considerations

- **Multi-speaker support:** Deepgram diarization + per-speaker analysis
- **Real-time preview:** Stream edited video before full render
- **Local processing agent:** Desktop app that pre-processes video before upload
- **Custom fine-tuned models:** Train on user's editing preferences over time
- **Webhook integrations:** Auto-import from Google Drive, Dropbox, Frame.io
- **Auto b-roll insertion:** Composite b-roll directly into the timeline
- **Dynamic face-tracked cropping:** Frame-by-frame face following for cross-format (vs. MVP static crop)
- **Multi-clip batch export:** Export all suggested clips from a vertical project in one action
- **Caption style presets per format:** Different branding for YouTube vs. Reels
- **1:1 format support:** Instagram feed, LinkedIn video