# Project Notes: Slidev Deck (wcsc36-presentation)

Docs indexes:
- Mermaid: `docs/mermaid.md`
- Slidev: `docs/slidev.md`

Upstream Mermaid/Slidev docs live under `docs/mermaid/` and `docs/slidev/` (gitignored).

## Editing Conventions

- `slides.md` is UTF-8. Read/write with UTF-8 to avoid mojibake.
- Mermaid blocks must use fenced code blocks: ` ```mermaid ` … ` ``` ` (not inline backticks).

## Slide Editing Safety

- When changing a single slide, keep edits inside its `---` frontmatter block and do not merge/move neighboring slides.
- After automated edits, ensure Mermaid fences are intact: `rg "```mermaid" slides.md` (avoid accidental `` `mermaid ``).
- After automated edits, ensure no literal `\\n` remains in text: `rg "\\\\n" slides.md styles/index.css`.

## Slidev Layouts

- For “image on the right with a framed box”, use `layout: image-right-framed` (custom layout in `layouts/image-right-framed.vue`).
- Use `::right::` only for content that should appear under the framed image (the layout exposes a named slot).

## Mermaid + Images

- This deck enables Mermaid HTML labels via `setup/mermaid.ts`, so Mermaid text must be treated as trusted input.
- For node-embedded images, prefer a background-image `<div>` over `<img>` (Mermaid may inject restrictive styles into `<img>`).

## Line Breaking (Japanese)

- Avoid `overflow-wrap: anywhere` globally; it causes unnatural mid-word breaks.
- If a specific term must not break, use `<NW>...</NW>` (component in `components/NW.vue`) instead of repeated `<span class="nowrap">...</span>`.
