---
name: vgr-design
description: "Use when building or extending a web app or mobile app that must follow the Vastra Gotalandsregionen (VGR) design system. Triggers on requests like build a VGR app, new page in VGR style, add a component that follows VGR, or any work in a folder marked VGR or Vastra Gotalandsregionen. Loads tokens, component rules and accessibility requirements from the local design system files."
---

# VGR Designsystem — användning

När den här skillen aktiveras: läs in följande filer **innan** du skriver kod eller markup. Filerna ligger i samma mapp som denna `SKILL.md`:

1. `./DESIGN_SYSTEM.md` — full komponent- och regelreferens.
2. `./tokens.json` — kanoniska tokenvärden.
3. `./tokens.css` — CSS-variabler att kopiera/importera i projektet.
4. `./SAKNAS.md` — kända luckor; om en lucka påverkar arbetet, fråga användaren innan du gissar.

## Regler för all kod du skriver i VGR-projekt

**Färg**
- Använd endast tokens från `tokens.css` (eller motsvarande mappning till projektets ramverk). Hårdkoda aldrig hex-värden.
- Färg får inte vara enda informationsbäraren — komplettera alltid med ikon, text eller form.
- Länkar i brödtext: `Healthcare 40` + understruken.
- Använd endast färg från gråskalan eller komplementpaletten på text.

**Typografi**
- Webb: `Verdana, sans-serif`.
- iOS: `SF Pro` med iOS-typskalan i `tokens.json` (Large title 34 → Caption 2 11).
- Android: `Roboto` (Material 3 type-skala).
- Använd aldrig VGR Sans i digitala gränssnitt.

**Spacing & layout**
- Spacing: 4/8/12 (small), 24 (medium, mellan komponenter), 32 (large, mellan grupper). Safearea = 24.
- Breakpoints: mobil 320–768, tablet 768–1200, desktop 1200–1920.
- Min komponentbredd innan breakpoint-fall: 220px.
- Max 4 komponenter per rad (+ vänstermeny). Max 4 komponenter per innehållsarea.

**Radier**
- Sätts utifrån elementets bredd — större element, större radie.
- Komponenter som hör ihop ska ha samma radie.
- När flera former möts: placera radien på det hörn som skapar mellanrumsformer.

**Komponenter — välj alltid från manualen**
Knapp, Länk, Länkikon, Tagg, Inputfält, Checkbox, Toggle, Tabs, Dropdown, Datumväljare, Toggle filter, Flervalsfilter med nivåer, Expanderbart block, Help button/box, Paginering, Callout/varning, Sökresultat, Sökträff, Nollträff, Artikel, Huvudmeny. För iOS finns dessutom Card, Callout-iOS, Text Formulär-iOS, Knappar-iOS. För Android: separata App-ikon-regler.

Bygg inga "egna" varianter av etablerade komponenter — utöka istället en befintlig med en ny prop/state efter att ha kontrollerat med användaren.

**Tillgänglighet (icke förhandlingsbart)**
- WCAG 2.1 AA + DOS-lagen.
- Tangentbordsnavigerbart med synlig focus.
- Korrekta kontraster.
- Klickbarhet ska synas (understrykning eller ikon).
- Alltid `alt`-text på bilder.
- Använd inte text i bilder.
- Testa mot VoiceOver (iOS), TalkBack (Android), NVDA/JAWS.

**Klarspråk**
- Vårdat, enkelt, begripligt språk anpassat efter målgrupp.
- Texter ska gå att förstå även utan föregående kontext (användare kommer ofta direkt från sökmotor).

## När något saknas

Om token, färgvärde eller komponent inte finns i `tokens.json`/`DESIGN_SYSTEM.md`:
1. Slå upp i `SAKNAS.md`.
2. Fråga användaren om värdet (eller om TBD-default kan användas).
3. Föreslå aldrig hex-värden på egen hand utan att flagga att de är gissade.

## Output-format

Föreslå default React + Tailwind, men följ alltid projektets befintliga val. Mappa tokens till:
- Tailwind: konfigurera i `tailwind.config.js` så `bg-vgr-primary-base20` etc. fungerar.
- Plain CSS: importera `tokens.css` och använd `var(--vgr-*)`.
- iOS (SwiftUI): definiera `Color.vgrPrimaryBase20` osv. i `Tokens.swift`.
- Android (Compose): definiera i `Color.kt` / `Theme.kt`.
