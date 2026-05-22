# Luckor i extraherat material

**Senast uppdaterad:** 2026-05-22 efter att hela tokenpaletten extraherats från `designsystem-ios` (92 färger × light/dark).

## ✅ Löst sedan tidigare
- **Färgpalett:** komplett — Primary, Neutral, Status, Accent (10 färger × 5 roller), Elevation, Customized.
- **Dark mode:** alla 92 tokens har både light och dark värde.
- **Status-tokens:** error/warning/information/success med text+surface-par.
- **Text-tokens:** finns nu (text, textvariant, textfixed, textinverted, textdisabled) med exakta värden.
- **Elevation:** 5 nivåer + background med både light/dark.

## Kvarstår

### Typografi
- **Webbskala** (h1–h6, body, small): manualens officiella värden saknas. iOS-skalan finns komplett.
- **Android-skala:** Material 3-mappning saknas (ingen `designsystem-android`-repo finns).
- Specifik fontvikt-användning för Verdana på webb.

### Komponentdetaljer
- Exakta paddings/höjder per komponent (kan extraheras ur iOS-paketets SwiftUI-kod — gör vid behov).
- Webb-komponentexempel — manualen visar skärmdumpar, ej kod.
- Designprinciper 2–N (bara princip 1 fångad i screenshots).

### Övrigt
- **Tonalitet / röst** — bara titel synlig i manualen.
- **WCAG-riktlinjer** — bara översikt, ej konkreta kontrastkrav (men tokens är redan kontrastcheckade i sina semantiska par).
- **Motion tokens** — manualen anger inga. Defaults gissade i `tokens.json`.
- **Radievärden i pixlar per komponent** — bara principen "större bredd = större radie" finns.

## Vad som INTE är canonical
- `github.com/Vastra-Gotalandsregionen/komponentkartan` — ÄLDRE intern admin-style (Calibri, andra färger). Använd inte för publika appar.

## Hur du fyller i kvarvarande
1. **Webb-typskala:** exportera Typsnitt-sidan från manualen som PDF.
2. **Komponentdetaljer:** dra exakta värden ur iOS-paketet (`Sources/DesignSystem/Views/*.swift`) per behov.
3. **WCAG / motion:** fråga VGR designteam eller exportera relevanta sidor.
