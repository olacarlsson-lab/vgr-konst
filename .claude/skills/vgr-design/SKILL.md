---
name: vgr-design
description: "Use when building or extending a web app or mobile app that must follow the Vastra Gotalandsregionen (VGR) design system. Triggers on requests like build a VGR app, new page in VGR style, add a component that follows VGR, or any work in a folder marked VGR or Vastra Gotalandsregionen. Loads canonical tokens, component rules and accessibility requirements from the local design system files mirrored from the official iOS Swift Package."
---

# VGR Designsystem — användning

## Canonical sources (rangordnade)

1. **iOS-appar:** `https://github.com/Vastra-Gotalandsregionen/designsystem-ios` — Swift Package. Lägg alltid till som dependency och använd `VGRButton`, `VGRCallout` etc. **Bygg aldrig egna iOS-komponenter när en VGR-komponent finns.**
2. **Tokens (alla plattformar):** `./tokens-colors.json` (92 färger × light/dark) och `./tokens.json` (typografi, spacing, radier, breakpoints) — speglade direkt från iOS-paketets `Assets.xcassets`.
3. **Komponentbeskrivningar/regler:** `./DESIGN_SYSTEM.md` (extraherat från designmanualen).
4. **Webb:** Det finns **ingen** officiell webbkomponent-repo för det moderna designsystemet. (`Vastra-Gotalandsregionen/komponentkartan` är ett **äldre internt admin-system** med annan färgpalett/typografi — använd INTE för publika webbappar.) Bygg webbkomponenter från grunden med tokens i `tokens.css`.
5. **Android:** Ingen officiell repo. Mappa tokens till Material 3 via `Theme.kt`/`Color.kt`.

## Läs in dessa filer innan du skriver kod

1. `./DESIGN_SYSTEM.md` — komponentlista, regler, principer.
2. `./tokens.json` — navigationsguide över tokens.
3. `./tokens-colors.json` — fullständig färgpalett.
4. `./tokens.css` — färdiga CSS-variabler (light + dark via `prefers-color-scheme`).
5. `./SAKNAS.md` — kända luckor; fråga användaren innan du gissar.

## Färgmodell (viktigt)

Tokens grupperas i 6 kategorier:
- **Primary** — `base` (mörkgrå varumärke) + `blue` (Healthcare/vård) + `action` (semantisk länk/knapp).
- **Neutral** — text, border, divider, disabled, surface (varianter: variant/fixed/inverted/disabled).
- **Status** — error / warning / information / success, alltid par av `text` + `surface`.
- **Accent** — 10 accentfärger (brown, cyan, green, lime, orange, pink, purple, red, yellow) × 5 roller (base, graphic, surface, surfacebold, surfaceminimal) = 50 tokens.
- **Elevation** — `background` + `elevation1..5` (kritiskt för dark mode).
- **Customized** — projektsspecifika varianter.

Varje token har **light och dark värde** — använd CSS:s `prefers-color-scheme` (redan inbyggt i `tokens.css`).

## Regler för all kod

**Färg**
- Använd alltid token-variabler (`var(--vgr-primary-action)`, `Color("primary/action")` osv). Aldrig hex.
- Färg får inte vara enda informationsbäraren — komplettera med ikon, text eller form.
- Länkar i brödtext: `--vgr-primary-action` + understruken.
- Använd inte accent-färger på text — bara på dekoration, taggar, grafer.
- Statusbanner: använd `*-surface` som bakgrund + matchande `*-text` som textfärg.

**Typografi**
- Webb: `Verdana, sans-serif`.
- iOS: SF Pro via `Font.system(...)` enligt iOS-typskalan i `tokens.json` (Large title 34 → Caption 2 11).
- Android: Roboto (Material 3 type-skala).
- Använd aldrig VGR Sans i digitala gränssnitt.

**Spacing & layout**
- Spacing: 4/8/12 inom komponent, 24 mellan komponenter (också safearea), 32 mellan grupper.
- Breakpoints: mobil 320–768, tablet 768–1200, desktop 1200–1920.
- Min komponentbredd innan breakpoint-fall: 220px.
- Max 4 komponenter per rad (+ vänstermeny). Max 4 komponenter per innehållsarea.

**Radier**
- Större element = större radie. Komponenter som hör ihop ska ha samma radie.
- När flera former möts: placera radien på det hörn som skapar mellanrumsformer.

**Komponenter — välj alltid från manualen / iOS-paketet**

För iOS finns dessa som färdiga `VGR`-prefixade SwiftUI-komponenter:
Alerts, Buttons, Cards, Cells, Charts, Inputs, Labels, Layouts, Lists, Modals, Pickers, Popovers, Sliders, Tips. **Använd dem — bygg inte egna.**

För webb finns dessa i manualen:
Knapp, Länk, Länkikon, Tagg, Inputfält, Checkbox, Toggle, Tabs, Dropdown, Datumväljare, Toggle filter, Flervalsfilter med nivåer, Expanderbart block, Help button/box, Paginering, Callout/varning, Sökresultat, Sökträff, Nollträff, Artikel, Huvudmeny.

Bygg inga "egna" varianter — utöka en befintlig med ny prop/state efter att ha kontrollerat med användaren.

**Tillgänglighet (icke förhandlingsbart)**
- WCAG 2.1 AA + DOS-lagen.
- Tangentbordsnavigerbart med synlig focus.
- Korrekta kontraster (tokens är redan kontrastcheckade i sina semantiska par).
- Klickbarhet ska synas (understrykning eller ikon).
- Alltid `alt`-text på bilder. Använd inte text i bilder.
- Testa mot VoiceOver (iOS), TalkBack (Android), NVDA/JAWS.

**Klarspråk**
- Vårdat, enkelt, begripligt språk anpassat efter målgrupp.
- Texter ska gå att förstå även utan föregående kontext.

## När något saknas
1. Slå upp i `SAKNAS.md`.
2. Kolla om värdet finns i `tokens-colors.json`.
3. Som sista utväg: fråga användaren. Föreslå aldrig hex på egen hand.

## Output-format

Bygger app från scratch — fråga först:
- Plattform (iOS / Android / webb)
- Webb-ramverk (React, Vue, vanilla, Svelte)
- Tema-tonalitet (default = Primary blue/Healthcare)
- Dark mode? (light + dark följer automatiskt med tokens.css)

Mappning per stack:
- **iOS:** lägg till Swift Package, importera `DesignSystem`, använd `VGRButton` etc.
- **Tailwind:** generera `tailwind.config.js` från tokens (`bg-vgr-primary-action`, `text-vgr-neutral-text`).
- **Plain CSS:** importera `tokens.css`, använd `var(--vgr-*)`.
- **CSS-in-JS:** läs tokens-colors.json och bygg theme-objektet.
- **Android Compose:** generera `Color.kt` + `Theme.kt` från tokens-colors.json (light + dark scheme).
