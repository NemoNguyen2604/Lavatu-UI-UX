# Lavatu Design System

Lavatu is a B2B marketplace for Vietnam's circular economy — a platform to buy and sell surplus/secondary materials (e-waste, textiles, metal, plastic, paper, agricultural byproducts), connect verified companies, and publish ESG/circular-economy news. The brand pitch: "AI cho hệ sinh thái tuần hoàn — thông minh, cá nhân hóa và luôn trong tầm kiểm soát."

This design system was built by reading the live product codebase, not by guessing from screenshots.

**Source:** [github.com/NemoNguyen2604/lavatu-design](https://github.com/NemoNguyen2604/lavatu-design) (`web/` — Next.js 16 + Tailwind v4 + Ant Design; `api/` — NestJS). If you have access, explore it further for anything this system didn't capture (admin screens, checkout, chat, complaints flows, etc). See `github.md` for the exact files each screen here was built from.

## Index

- `styles.css` — the one stylesheet to link; imports everything under `tokens/`.
- `tokens/` — `colors.css` (33 primitives + semantic + 6 material), `typography.css` (13 text styles), `spacing.css` (spacing ×4 + radius), `shadows.css` (Card, Raised), `legacy.css` (deprecated v1 names → v2, for migration only).
- `assets/` — logo, favicon, footer/nav icons, material-category icons + cutout imagery, hero carousel stills, business-dashboard sidebar icons.
- `components/` — reusable primitives, grouped `core/` (Button, Badge, StatusBadge, CategoryBadge, Tag, FilterChip), `forms/` (Input, SearchInput, Select, Checkbox), `data/` (StatCard, Table), `navigation/` (SidebarNavItem, Pagination), `cards/` (MaterialCard, ProductCard).
- `ui_kits/` — full-screen recreations: `marketing-home` (public homepage), `business-dashboard` (product management + sidebar), `auth` (login).
- `guidelines/` — foundation specimen cards (colors, type, spacing, shadows, brand) shown in the Design System tab.

## Components (DS v2 — Figma "Design System v2", 09/10/2026)

Button = Primary/Secondary/Ghost × S/M/L × Default/Hover/Disabled. Badge = 6 tones incl. `soon` ("Sắp ra mắt"). SearchInput = Input/Search (M, L). MaterialCard = Card/Material. StatCard = Card/Stat.

Core: **Button**, **Badge**, **StatusBadge**, **CategoryBadge**, **Tag**, **FilterChip**.
Forms: **Input**, **SearchInput**, **Select**, **Checkbox**.
Data: **StatCard**, **Table**.
Navigation: **SidebarNavItem**, **Pagination**.
Cards: **MaterialCard**, **ProductCard**.

### Intentional additions
The codebase has no separate component-library folder — screens hand-roll markup with Tailwind + Ant Design directly. The set above is a standard primitive set sized to what the product actually needs, lifted verbatim (colors, radii, paddings) from the screens that use each pattern repeatedly (dashboard tables, the /products filter sidebar, the homepage category grid). Nothing here is invented style — every value traces to a real screen.

## Content fundamentals

- **Language & voice**: All product copy is Vietnamese, second-person implicit (imperative/infinitive verbs — "Tìm vật liệu", "Đăng bán vật liệu", "Khám phá nguồn vật liệu" — rather than "bạn"/"chúng tôi" framing). Sentence case for body copy, not Title Case.
- **Tone**: Confident, plain, B2B-operational — no hype adjectives, no exclamation points. Headlines lean aspirational/poetic once per page at most (the Playfair Display hero line "Khám phá những điều có thể khi mọi thứ được kết nối"; the products-page banner "Mỗi vật liệu đều có giá trị") — everywhere else is functional and direct.
- **CTAs**: Short, verb-first, 2-4 words: "Tìm vật liệu", "Đăng bán", "Xem chi tiết", "Xem tất cả", "Áp dụng lọc". Destructive/negative actions stay plain ("Xóa tất cả") not dramatized.
- **Numbers & units**: Vietnamese thousands-separator formatting (`18.000 VNĐ/kg`), unit always follows the number inline.
- **Emoji**: never used in UI copy.
- **Micro-copy honesty**: empty/error states are calm and factual ("Chưa có bài đăng nào phù hợp bộ lọc.", "Không thể tải danh sách sản phẩm.") — no jokey placeholder text.

## Visual foundations

- **Color**: Semantic tokens only (`--color-*`), never `--prim-*` directly. green/600 `#0f6554` for actions & links, green/950 `#003527` for headings, header, footer. Lime `#84cc16` is the single accent (underlines, active indicators, 'soon' dot) — never as text on white. Neutrals are **slate only**. Six material tones (`--color-material-*`) are reserved for category identity.
- **Type**: Two families. Newsreader (serif) for Display + H1–H3; Be Vietnam Pro for H4, body, labels, caption, overline. Use the `--type-*` shorthand tokens (`font: var(--type-h2)`).
- **Backgrounds**: Solid colors and one signature gradient (`linear-gradient(181deg,#003716 16%,#007254 63%)` on the hero) — no photographic full-bleed hero, no repeating patterns/textures. A soft white radial blur glow sits behind the hero carousel. Section backgrounds alternate white → `#f9faf7` (near-white) → brand-green (`Benefits` band) — never more than that per page.
- **Imagery**: Product photography is background-removed/cutout PNG-on-transparent (material category images, hero carousel stills) rather than full photographic scenes — this is a deliberate, consistent illustration style, not a placeholder gap.
- **Animation**: Minimal — a 700ms ease-out fade+translateY on hero text entrance (staggered 80ms per line), `prefers-reduced-motion` respected everywhere. No bounce, no spring physics, no page transitions.
- **Hover states**: Buttons/links darken opacity slightly or shift 1-2px up (`hover:-translate-y-0.5`); filter chips get a filled mint-green background; table row-action icons get a subtle background tint. No color inversion, no shadow pop.
- **Press/active states**: Not heavily differentiated from hover in the source; treat as the same tone with no scale/shrink.
- **Borders**: Hairline `1px solid`, always a warm neutral (`#e1e3e0`, `#eef2ef`) — never black, never a color border unless it's the currently-active filter chip.
- **Shadows**: Two only — `--shadow-card` (resting cards, tables, stat tiles) and `--shadow-raised` (hover, dropdowns, floating panels).
- **Corner radii**: sm 8 · md 12 · lg 16 · xl 24 · full. Buttons/inputs md, stat cards/tables lg, material cards & banners xl, badges/search/chips full.
- **Spacing**: multiples of 4 (`--space-N` = N×4px, 0–80).
- **Cards**: White fill, hairline border, `shadow-soft`/`shadow-card`, 16-18px radius, generous internal padding (20-32px). Dashboard status/category badges are the one place solid-color fills replace this pattern.
- **Layout**: A sticky dark-green header is the one fixed element on every route. Content max-widths cap around 1600-1920px on marketing pages; the business dashboard is a fixed 300px sidebar + fluid content area.
- **Transparency & blur**: Used sparingly and specifically — `backdrop-blur` on the products-page category pill overlay and the products CTA-banner benefit strip; a translucent white glass panel behind hero carousel scroll indicators. Not used as a general card style.
- **Color vibe of imagery**: Cool, clean, slightly desaturated greens — no warm filters, no grain, no black-and-white treatment.

## Iconography

- **System**: `lucide-react` for all in-app UI icons (arrows, search, package, menu, etc.) — consistent 1.5-2px stroke, no fill. When building HTML mocks without the npm package, use the Lucide CDN (`https://unpkg.com/lucide-static/icons/`) or copy the closest matching stroke icon.
- **Custom SVGs**: A small set of hand-drawn brand SVG icons for homepage-specific concepts (material category glyphs, "benefit" icons, CTA icons) — copied into `assets/landing/icons/` and `assets/landing/*.svg`. These are baked to a specific brand color per icon (not recolorable via `currentColor`), so they're used as plain `<img>`, never inline-recolored.
- **PNG**: A few small raster icons (`world_icon.png`, `google.png`, `facebook.png`) for third-party/social marks.
- **Emoji**: never used as icons.
- **Unicode glyphs**: none observed; all icons are SVG/PNG assets or the Lucide icon font-equivalent components.

## Fonts

Newsreader (headings) + Be Vietnam Pro (everything else), both via Google Fonts with the vietnamese subset. The self-hosted `assets/fonts/newsreader-latin.woff2` is latin-only, so its `@font-face` is limited by `unicode-range` and Vietnamese diacritics fall through to the Google subset. Inter, Plus Jakarta Sans and Playfair Display are removed.

## Caveats — please help me iterate

- **No standalone component library in the source.** The primitive set in `components/` is my best-effort standard kit styled from repeated real patterns (tables, filters, badges), not a 1:1 port of an existing kit. Tell me if there's a Figma file or Storybook I should pull from instead.
- **Admin, chat, checkout, complaints, and personal-account screens were not built into a UI kit** — I read the marketing homepage, business product-management dashboard, and login screen in depth, but the repo has many more surfaces (`admin/`, `personal/`, `checkout/`, `chat/`). Say the word and I'll build kits for any of these.
- **The provided cutout logo file (`snapedit_1780839266656.jpeg`) is a flattened JPEG with a baked-in checkerboard where transparency should be** — I used the real `logo.png` from the repo instead (genuinely transparent). If you have a clean transparent export of that mark, upload it and I'll swap it in.
- **Category/status badge tones are hard-coded per index**, not systematic — if the product adds a 7th material category, that palette needs a manual extension.
