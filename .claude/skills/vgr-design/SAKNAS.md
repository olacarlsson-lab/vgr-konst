# Luckor i extraherat material

Det här är vad jag **inte** har kunnat extrahera från screenshots/PDF. Be om Figma-fil, en titt på originalet, eller bekräftade värden för att fylla i.

**Senast uppdaterad:** 2026-05-22 efter att Färgteman-PDF:en kompletterade hela färgpaletten.

## Färg — ✅ KOMPLETT FRÅN PDF
- Base 20/30/90/95 — klart
- Culture 30/40/90/95 — klart
- Education 30/40/90/95 — klart
- Healthcare 30/40/90/95 — klart
- Brown 80/95, Healthcare 80/95, Pink 80/95, Yellow 80/95 — klart
- Brown 99 (bakgrund), Neutral 100 — klart

## Färg — kvarstår
- **Textfärger** (primary, secondary, inverse, disabled) — manualen säger "Textfärgerna används i Figma i komponenter och är där kontrastcheckade i den kontext de presenteras" men hex-värden för enskilda text-tokens listas inte. Hämta från Figma.
- Status-tokens — kontrollera om manualen har separata alarm/warning/info/success utöver att återanvända Culture/Yellow/Base/Education. Just nu mappas semantiska alias i `tokens.css`.
- Tokens-flikar i designmanualen — endast "Introduktion" var fångad i screenshots. Flikarna **Accent, Neutral, Inverted, Fixed, Graphic, Status, Elevation** har inte fångats — där kan det finnas fler namngivna tokens med specifika roller (border, surface, overlay, focus-ring etc).

## Typografi
- **Webbskala** — h1/h2/h3/h4/body/small specifika storlekar, vikter och line-heights. Endast iOS-skalan är fångad. Defaults används tills officiell skala kommer.
- **Android-skala** — Material 3-mappning saknas.
- Specifik fontvikt-användning (när Verdana bold vs regular).

## Komponenter
- Knapp: exakta paddings, höjder, ramfärger per state (hex för Primär/Sekundär).
- Inputfält: storlekar, paddings, ramfärger per state.
- Tabs, Dropdown, Datumväljare: exakt storlek/padding/font-vikt.
- Webb-kort — manualen verkar inte ha eget kort-mönster för webb (bara iOS Card). Bekräfta.
- "Mönster"-sektionen utöver Nollträffar och Huvudmeny — fler sidor finns men ej fångade.

## Designprinciper
- Princip 2–N saknas (bara princip 1 "För och med människor" är fångad).

## Text / röst
- "Röst"-sidan (VGR:s personlighet) — bara titel synlig, inget innehåll.
- "Tonalitet"-sidan — bara titel.

## Tillgänglighet
- WCAG-sidan: bara "Under arbete" + bullet-lista över användartyper.
- Riktlinjer → Tangentbord / Kontraster / Skärmläsare: bara översikt med rubriker.
- "Testa tillgänglighet för appar" — sida finns men innehåll ej fångat.

## Motion
- Inga motion tokens i fångat material — defaults i `tokens.json` är gissade.

## Form (varumärket)
- Konkreta radie-värden i pixlar per komponentstorlek saknas. Endast principen "större bredd = större radie" är fångad.

---

## Hur du fyller i
1. Hämta exakt värde från Figma eller designsystem-sajten.
2. Lägg in i `tokens.json` (ta bort `"TBD"`).
3. Uppdatera `tokens.css` med motsvarande variabel.
4. Stryk raden här.

## Tips: skicka mer som PDF
Det enklaste sättet att fylla i luckor är att exportera relevanta sidor från manualen som PDF (precis som Färgteman-PDF:en) och dela. Jag kan läsa dem direkt och uppdatera systemet. Prioriterade sidor:
- **Design Tokens-flikar** (Accent/Neutral/Inverted/Fixed/Graphic/Status/Elevation)
- **Typsnitt** (för webbskalan — om den finns)
- **Tonalitet** och **Röst**
- **WCAG-riktlinjer** (Tangentbord/Kontraster/Skärmläsare)
