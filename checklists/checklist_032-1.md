# HTML-Dokument-Markup Checkliste

## 🏗️ Grundstruktur (HTML-Skelett)

### Pflicht-Elemente

- [ ] `<!DOCTYPE html>` - HTML5-Deklaration (immer am Anfang)
- [ ] `<html>` - Wurzel-Container für das gesamte Dokument
- [ ] `<head>` - Container für Metainformationen
- [ ] `<body>` - Container für sichtbaren Seiteninhalt
- [ ] `<title>` - Titel des Dokuments (obligatorisch!)

### Basis-Template

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Seitentitel</title>
  </head>
  <body>
    <!-- Seiteninhalt -->
  </body>
</html>
```

## 📝 HTML-Syntax

### Tags und Elemente

- [ ] **Öffnende Tags**: `<tagname>`
- [ ] **Schließende Tags**: `</tagname>`
- [ ] **Selbstschließende Tags**: `<meta>` (ohne Schlusstag)
- [ ] **Verschachtelung**: Elemente korrekt ineinander verschachteln
- [ ] **Kleinschreibung**: Tag-Namen in Kleinbuchstaben (W3C-Empfehlung)

### Kommentare

- [ ] **Einzeilig**: `<!-- Das ist ein Kommentar -->`
- [ ] **Mehrzeilig**:

```html
<!--
  Das ist ein
  mehrzeiliger
  Kommentar
-->
```

- [ ] ⚠️ **Wichtig**: Kommentare können NICHT verschachtelt werden

## 🏷️ HTML-Attribute

### Kernattribute (für alle Elemente verfügbar)

- [ ] `title` - Tooltip-Text beim Hover
- [ ] `id` - Eindeutige ID (nur einmal pro Dokument!)
- [ ] `class` - CSS-Klassen (durch Leerzeichen getrennt)
- [ ] `style` - Inline-CSS-Eigenschaften
- [ ] `lang` - Sprache des Inhalts (ISO-639-Codes, z.B. "de", "en")

### Data-Attribute

- [ ] `data-*` - Eigene Datenattribute (z.B. `data-additionalinfo`)

### Attribut-Syntax

- [ ] Format: `attribut="wert"`
- [ ] Anführungszeichen: Konsistent einfache ODER doppelte verwenden
- [ ] Sonderzeichen: `&quot;` für " und `&apos;` für ' in Attributwerten

## 📋 Meta-Tags im `<head>`

### Basis-Metadaten

- [ ] `<meta charset="utf-8">` - Zeichenkodierung (UTF-8 empfohlen)
- [ ] `<meta name="author" content="Name">` - Autor der Seite
- [ ] `<meta name="description" content="Beschreibung">` - Seitenbeschreibung
- [ ] `<meta name="keywords" content="wort1, wort2, wort3">` - Schlüsselwörter

### HTTP-Äquivalente

- [ ] `<meta http-equiv="refresh" content="30">` - Seite nach 30 Sek. neu laden
- [ ] `<meta http-equiv="refresh" content="30; url=https://example.com">` - Weiterleitung

### Meta-Attribute

- [ ] `name` - Art der Metadaten (author, description, keywords)
- [ ] `content` - Inhalt der Metadaten
- [ ] `http-equiv` - HTTP-Header-Simulation
- [ ] `charset` - Zeichenkodierung

## ✅ Qualitätskontrolle

### Validierung prüfen

- [ ] Alle Tags korrekt geschlossen?
- [ ] Verschachtelung logisch und korrekt?
- [ ] DOCTYPE-Deklaration vorhanden?
- [ ] Title-Element vorhanden?
- [ ] Charset definiert?

### Best Practices

- [ ] UTF-8 als Zeichenkodierung verwenden
- [ ] Eindeutige IDs pro Dokument
- [ ] Aussagekräftige Titel und Beschreibungen
- [ ] Kommentare für komplexere Bereiche
- [ ] Konsistente Einrückung für Lesbarkeit

## 🔧 Häufige Fehlerquellen

### Vermeiden

- [ ] ❌ Fehlende schließende Tags
- [ ] ❌ Falsche Verschachtelung von Elementen
- [ ] ❌ Mehrfache Verwendung derselben ID
- [ ] ❌ Gemischte Anführungszeichen in Attributen
- [ ] ❌ Verschachtelte Kommentare
- [ ] ❌ Fehlende DOCTYPE-Deklaration

### Korrekte Reihenfolge

1. `<!DOCTYPE html>`
2. `<html>`
3. `<head>` mit Metadaten
4. `<body>` mit Inhalt
5. Schließende Tags in umgekehrter Reihenfolge

## 📱 Moderne Ergänzungen (Optional)

### Responsive Design

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### SEO-Optimierung

- [ ] Aussagekräftige Titel (50-60 Zeichen)
- [ ] Meta-Beschreibung (150-160 Zeichen)
- [ ] Relevante Keywords (nicht übertreiben)

## 🎯 Checkliste für jede HTML-Seite

1. [ ] DOCTYPE HTML5 deklariert
2. [ ] html-Element mit lang-Attribut
3. [ ] head-Bereich vollständig
4. [ ] Charset UTF-8 definiert
5. [ ] Aussagekräftiger Titel gesetzt
6. [ ] Meta-Beschreibung verfasst
7. [ ] Autor-Information hinzugefügt
8. [ ] body-Bereich mit Inhalt
9. [ ] Alle Tags korrekt geschlossen
10. [ ] Code validiert und getestet