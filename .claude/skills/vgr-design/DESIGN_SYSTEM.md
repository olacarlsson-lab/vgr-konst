# VGR Designsystem

Sammanställt från Västra Götalandsregionens digitala designmanual. Källa: skärmdumpar från designsystem-sajten (Notion). Manualen är märkt "under uppbyggnad" — vissa avsnitt saknas eller är "In progress"/"To do" (se `SAKNAS.md`).

Den här filen är referens för Claude när nya VGR-webbappar eller appar byggs. Allt nedan ska följas om inget annat överenskommits.

---

## Designprinciper

1. **För och med människor** — empati först, involvera användare från start, undvik att gissa behov, validera kvalitativt och kvantitativt.
2. (Återstående principer saknas i fångade screenshots — se `SAKNAS.md`.)

---

## Grundstenar

### Logotyp
- Två varianter: **lång** (Västra Götalandsregionen) och **kort** (VGR-symbolen).
- Enbart symbolen används på **minimala digitala ytor** (favicon, app-ikon) där varken lång eller kort version är läsbar.
- På tydligt VGR-gränssnitt kan primärfärger användas som bakgrund med vit ikon ovanpå; annars **svart ikon på vit bakgrund**.
- Får placeras på bakgrund med VGR:s **form** (grundform/komplementform).

### Färg
**Färgsystem:** 3 färgroller × nyanser.
- **Primärfärg** — 3 nyanser: ★ (varumärke) + 1 steg mörkare + 90 + 95.
- **Komplementfärg 1** ("Healthcare"-serien) — 2 nyanser: 80, 95.
- **Komplementfärg 2** — 2 nyanser: 80, 95.
- ★ = färger från varumärkesprofilen.
- Utöver dessa: fler komplementfärger för grafer eller objektfärgning.

**Bekräftade värden:**
- `Base 20` = `#273238` (mörkaste primärfärgens nyans).
- `Healthcare 40` = länkfärg i brödtext (hex TBD).

**Regler:**
- Använd **endast färg från gråskalan eller komplementpaletten på text**.
- Reservera **inte färger** för enskilt projekt.
- **Inte enda faktorn** i en design (tillsammans med ikon/typografi).
- Tillgodose **fler kan se** din design — välj färger med tillräcklig kontrast enligt DOS-lagen.
- Skapa sammanhållet intryck: max ~4 huvudfärger utöver funktionella (status, diagram, varningar).

### Färgteman (extern webb)
- Ett "grundtema" = 3 färger + flera nyanser.
- Markera funktionella färger (status, varning) separat från brand.

### Typsnitt
- **Webb:** `Verdana` (ersättning för varumärkestypsnittet VGR Sans).
- **iOS:** `SF Pro` (systemtypsnitt).
- **Android:** `Roboto` (systemtypsnitt).

**iOS-typografi-skala (exakta värden från manualen):**
| Stil          | Storlek | Vikt     | Line-height |
|---------------|---------|----------|-------------|
| Large title   | 34      | Bold     | 41          |
| Title 1       | 28      | Bold     | 34          |
| Title 2       | 22      | Bold     | 28          |
| Title 3       | 20      | Bold     | 25          |
| Headline      | 17      | Semibold | 22          |
| Body          | 17      | Regular  | 22          |
| Callout       | 16      | Regular  | 21          |
| Subhead       | 15      | Regular  | 20          |
| Footnote      | 13      | Regular  | 18          |
| Caption 1     | 12      | Semibold | 16          |
| Caption 2     | 11      | Regular  | 13          |

> **Webb-skalan saknas** i fångade screenshots — använd defaults i `tokens.json/tokens.css` tills officiell skala kan hämtas.

### Form (varumärkesform)
- **Grundform** används som bakgrund till större ytor/bilder där form inte bryter standarder (t.ex. inmatningsfält).
- **Radie** sätts utifrån elementets bredd — större bredd = större radie.
- När flera former möts: placera radien på det hörn som skapar **mellanrumsformer**.
- Komponenter som hör ihop ska ha **samma radie** (för enhetligt intryck).
- Undvik så liten radie att mellanrumsformerna blir otydliga.
- Komplementformer används som bakgrund för ikoner eller för att lyfta splash/illustrationer.

### Bilder
- **Undvik text i bild** (placera text i layouten istället).
- **Lägg inte in former i bilden** — låt gränssnittet hantera formen. Undantag: externa gränssnitt (App Store) där identitet inte syns annars.
- Tänk på bildens utskärning utifrån användning (helbild vs. klickbar mer-vy).
- Använd rätt format/filstorlek.
- Håll enhetligt bildförhållande.
- **Alltid `alt`-text.**
- För mer detalj: VGR:s varumärkesmanual → `/ov/varumarkesmanual/bild/`.

### Ikoner & illustrationer
- Designsystemets ikonbibliotek baseras på:
  - **SF Symbols** — använder iOS standard-systemikoner (chevron, profil etc.). Inte justerbara/valbara i designsystemet.
  - **Streamline Regular 3.0** — egna ikoner för **huvudmeny och inom UI**.
  - **Streamline Bold 3.0** — egna ikoner för att **tillverka app-ikoner**.
- Exempel-ikoner i manualen: Graph, Headphones, Heart, Heart with puls m.fl.

---

## Layout

### Marginaler / spacing
| Storlek   | Värde    | Användning |
|-----------|----------|------------|
| Small     | 4/8/12px | Inom samma komponent |
| Medium    | 24px     | Mellan komponenter i samma grupp (grid-gap) |
| Large     | 32px     | Mellan grupper / större delar (footer/content, två innehållsareor) |
| Safearea  | 24px     | Minsta padding i sidorna av en webbsida |

### Breakpoints
- **Mobil**: 320–768 px
- **iPad/tablet**: 768–1200 px
- **Desktop**: 1200–1920 px
- **Komponentens min-bredd före breakpoint-fall**: 220 px
- **Max komponenter per rad**: 4 + vänstermeny
- En innehållsarea innehåller max 4 komponenter.
- Om innehållsarean har bakgrundsfärg ska element ovanpå vara vita och inte ha annan bakgrundsfärg. Default bakgrund = utan färg = komplement 95.

---

## Komponenter (webb)

Varje komponent har minst tillstånden Default, Hover, Focus, Disabled där det är meningsfullt.

### Knapp
- **Primär:** mörkblå/mörk bakgrund, vit text, valbar ikon. States: Default, Hover (svart bakgrund), Disabled (grå).
- **Sekundär:** outline-variant av samma form.
- Properties: `type` (Primary/Secondary), `state`, `inverted` (true/false för mörk yta), `showIcon`, `text`.

### Länkar
- I brödtext: färg `Healthcare 40` + **understruken**.
- States: Default, Hover, Focus (mörk highlight-bakgrund), Visited, Disabled.
- Länkar utan understrykning markeras med **ikon** för att signalera tryckbarhet (affordance).
- Ikon för länk till **annan webbplats** placeras efter länktexten, läses upp av skärmläsare.

### Länkikoner
- Förtydligar typ av länk i en lista.
- Får inte användas på löpande text eller textstycken — bara på rena länkar.
- **Före** länktexten (utom "extern webbplats"-ikon som ligger **efter**).
- En länk = en ikon.

### Taggar
- **Informationstaggar:** Alarm (röd), Varning (gul), Success (grön), Neutral (grå).
- **Aktiva filtertaggar:** "Filter ✕" på olika bakgrunder (on color / on white). Hover/Focus visar tydlig avlägsna-affordance.

### Inputfält
- Desktop: söklåda + sökknapp ("Vad letar du efter?" placeholder).
- States: Default, Hover, Focus.
- Variant: Input + scope-knapp (`Show scope: yes`).

### Checkbox
- States: Unchecked, Checked, Hover, Focus, Disabled checked, Disabled unchecked, **Indeterminate** (streck), **Partial** (square).
- Mörk bakgrund + vit bock i checked.

### Toggle
- States: On default, Off default, On disabled, Off disabled, Focus (med focus-ring).
- Pill-form med cirkel som glider; mörkblå när on.

### Tabs
- **Default:** horisontell bar med flikar; "Fler…" dropdown vid överskott.
- **Vertikal:** flikar i lista.
- **Active:** mörk pill-bakgrund + vit text.
- Visa antal i parentes vid behov: `Tab title (31)`.

### Dropdown
- States: Default, Hover, Focus, **Warning** ("Obligatoriskt fält" i rött).
- Rubrik ovanför + dropdown-block under.
- Properties: `showLabel`, `showList`, `showIcon`.
- **Multiselect**-variant med chips inne i fältet + filtrerbar lista (Filterintervall).

### Datumväljare
- Desktop: rubrik + ikon + `åååå-mm-dd` placeholder.
- **One field** (enskilt datum) eller **Two fields** (datumintervall, två rutor med avgränsare).
- Properties: `showLabels`, `showDividers`.
- Egen mobil-design.

### Toggle filter
- Inkludera/exkludera källor (t.ex. i ett sök).
- Står som rad med toggle till höger + sekundär metainfo under.
- Variant: **Toggle filter block** med "Submenu title" + lista av toggles.

### Flervalsfilter med nivåer
- Checkboxar med expand/collapse (`Sublevel open - top/bottom`).
- States: default, checked, sublevel open (top/bottom), checked.
- Property `Property 1: Sublevel top/bottom`.

### Expanderbart block (mindre)
- Två utföranden: **Infobrun/Linje**.
- Två storlekar: **Small/XS**.
- Används när vanliga expanderbara block är för stora.
- Properties: `expanded` (true/false), `topBorder` (true/false).
- Expanderat block visar inomliggande brödtext.

### Help button / Help box
- **Help button**: enkel `?`-ikon. States: Default, Hover, Focus.
- **Help box**: expanderad informationsruta med rubrik + brödtext + ✕-knapp. States: Default, Hover.

### Paginering
- **Default:** "‹ Föregående  1 2 3 … 9  Nästa ›" i pill-knappar; aktuell sida mörkfylld.
- **Small:** bara siffror + pilar (ingen text).
- **Mini:** enbart pilar.
- Om ingen föregående/nästa-sida finns visas pilen som disabled.

### Callouts / varningar
- **Alarm:** röd vänsterram, ljusrosa bakgrund, varningsikon.
- **Info:** grå/blå vänsterram, ljusgrå bakgrund, info-ikon.
- **Varning – Centrerad:** gul vänsterram, ljusgul bakgrund.
- Brödtext + ev. länk i texten.

### Tabs / Sökresultat / Sökträffar / Nollträffar / Artikel
- **Sökresultat:** lista med antal träffar, scope, kategorier, sorteringsval (Relevans, Publiceringsdatum, A–Ö). Properties styr om filter/scope/sortering visas. Egen desktop/mobil-layout.
- **Sökträff (enskild):** Ikon + rubrik + informations-tagg + datum + bullets med metadata + brödtext + "Visa mer uppgifter ▾" toggle. Varianter för webbsidor, dokument, jobbannonser, personer.
- **Nollträffar (Large):** rubrik "Din sökning på 'X' gav inga träffar" + alternativ ("Vill du istället söka på …") + söktips för dokument + generella söktips + illustration + länk för förbättringsförslag.
- **Artikel:** rubrik, brödtext, inbäddade bilder, h2/h3-rubriker, fortsatt brödtext.

### Huvudmeny (webb)
- **Desktop:** logotyp till vänster + topplänkar (Om, Grundstenar, Webb, Appar) + sök till höger. Variant **Med underrubrik** under huvudtitel + bredare topmeny med ikoner (Logotyper, Tecknetolkning, Press, Webbplatskartan, Tillgänglighet, Sök).
- **Mobil:** hamburgermenystruktur.

---

## Komponenter (iOS)

### iOS-knappar
- **Primär:** fylld med primärfärg + ikon + "Knapptext". States: Default light/dark, Disabled light/dark.
- **Sekundär:** outline-variant.
- Varianter för light- och dark-mode parallellt.

### iOS-kort (Card)
- **Default Card:** bild + rubrik + meta + flagga (i hörn).
- Properties: `mediaType` (Image/Thumbnail/Icon), `showDetail`, `showFlag`, `showImage`, `darkMode`.
- Varianter: **Tumnagel**, **Slim med foto**, **Slim med ikon**, plus deras dark-mode versioner.

### iOS-callout
- Variant **Information med ikon**, **Information med illustration**, samt Light/Dark mode.
- Innehåller rubrik + brödtext + primärknapp.

### iOS Text Formulär
- **Text fält:** Default, Aktivt, Skriver, Skrivit.
- **Text area:** samma states.
- Rubrik + Placeholder + beskrivning under.

### iOS Huvudmeny / Trender / App Store
- Egna mönster i manualen (sidorna har detaljerade riktlinjer).

---

## Komponenter (Android)

- App-ikoner: rektangulära 1024×1024 utan runda hörn (Android-OS lägger på rundningen). Säkerställ att VGR-logotyper **inte skärs av** i runda Android-varianter.
- Onboarding: separat Android-template, samma flöde (flera steg vs. ett steg).

---

## Mönster

### Onboarding (iOS/Android)
- Två templates: **Flera steg** (med stegindikator) och **Bara ett steg** (utan indikator).
- Ge möjlighet att hoppa över.
- Visa tydligt steg X av Y.

### Rensa filter
- Egen sida i manualen — knapp som rensar aktiva filtertaggar.

### App Store / Google Play
- Egna riktlinjer för App Store-bilder och Google Play-bilder.

---

## Tillgänglighet

**Lagkrav:** DOS-lagen + WCAG.

**Användare som ska kunna använda gränssnittet:**
- Utan eller med nedsatt syn.
- Utan färgseende.
- Utan eller med nedsatt hörsel.
- Utan att kunna använda rösten.
- Med begränsad motorik.
- Med begränsad räckvidd.
- Utan att utsättas för ljusflimmer.
- Med nedsatt kognitiv förmåga.

**Riktlinjer (översikt):**
- **Tangentbord:** ska fungera med tangentbord (alla interaktiva element nåbara, synlig focus).
- **Kontraster:** kontraster ska vara bra; särskilt på stortext, interaktiva objekt, text på bakgrund.
- **Skärmläsare:** beakta uppläsningsordning, alt-text, ARIA, ikon-vs-text.

**Hjälpmedel att stödja:** skärmläsare, punktskriftsvisning, zoom, text-till-tal, taligenkänning, alternativa tangentbord.

**Skärmläsare att testa med:**
- VoiceOver för iOS
- TalkBack för Android
- NVDA (Windows)
- JAWS (Windows)
- iOS Voice Control
- Android Voice Access

**Testverktyg:**
- WAVE (uppskattningsverktyg för webbinnehåll)
- Kolla kontrast (Webaim)
- Tillgänglighetsinspektorn (iOS / macOS)

---

## Text (UX-copy)

### Klarspråk
- **Vårdat, enkelt, begripligt språk** — anpassat efter målgrupp.
- Stäm av med mottagarens förkunskaper, förväntningar, kunskapsnivå.
- Var tydlig med varför texten skrivs och vad den ska uppnå.
- Tänk på att användare ofta kommer direkt in via sökmotor — texter måste begripas både på egen hand och i sitt sammanhang.
- Referenser: Myndigheternas skrivregler, "Att skriva för webben", VGR:s varumärkesmanual.

### Röst
- VGR:s personlighet och röst — separat avsnitt i manualen (ej fångad i screenshots).

### Tonalitet
- Hur tonen anpassas till sammanhang — separat avsnitt (ej fångad).

---

## Affordance (klickbarhet)

- Det måste **synas** att något går att klicka på. Användare ska inte behöva gissa.
- Länkar/tryckbara texter ska alltid markeras med **understrykning eller ikon**.
- Länkar i brödtext: alltid `Healthcare 40` + understruken.
- Knappar/länkar som inte ser klickbara ut → risk att användaren missar viktiga delar.

---

## Design-tokens (struktur)

Tokens grupperas i kategorier (från manualens token-flikar — endast intro-fliken var fångad):
- **Accent** — accentfärger
- **Neutral** — gråskala
- **Inverted** — för mörka teman
- **Fixed** — fasta värden som inte byter med tema
- **Graphic** — graffärger
- **Status** — alarm/info/varning/success
- **Elevation** — skuggor/höjd

> Innehållet i varje flik är **inte fångat** i screenshots och måste hämtas från manualen direkt.
