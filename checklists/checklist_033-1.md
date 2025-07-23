# CSS Grundlagen - Checkliste für Befehle und Elemente

## HTML-Attribute für CSS

### Das `style`-Attribut

- [ ] `style="eigenschaft: wert"` - Inline-CSS direkt im HTML-Element
- [ ] `style="color: purple"` - Textfarbe ändern
- [ ] `style="font-size: larger"` - Schriftgröße vergrößern
- [ ] `style="background-color: silver"` - Hintergrundfarbe setzen
- [ ] Mehrere Eigenschaften mit Semikolon trennen: `style="color: purple; font-size: larger"`

### Das `type`-Attribut

- [ ] `type="text/css"` - MIME-Typ für CSS-Inhalte (optional bei modernen Browsern)

## HTML-Tags für CSS-Integration

### Das `<style>`-Tag

- [ ] `<style>` - Container für CSS-Regeln im HTML-Dokument
- [ ] `<style type="text/css">` - Mit explizitem MIME-Typ
- [ ] Platzierung im `<head>`-Bereich des HTML-Dokuments
- [ ] `</style>` - Schließender Tag

### Das `<link>`-Tag

- [ ] `<link>` - Verknüpfung zu externen CSS-Dateien
- [ ] `href="dateiname.css"` - Pfad zur CSS-Datei
- [ ] `rel="stylesheet"` - Beziehungstyp definieren
- [ ] `type="text/css"` - MIME-Typ (optional)
- [ ] `media="screen"` - Medientyp angeben (optional)
- [ ] Platzierung im `<head>`-Bereich

## CSS-Syntax und Struktur

### Grundlegende CSS-Regel

- [ ] `selektor { eigenschaft: wert }` - Grundsyntax einer CSS-Regel
- [ ] `p { color: purple }` - Beispiel für Element-Selektor
- [ ] `body { color: purple; font-size: larger }` - Mehrere Eigenschaften

### Selektoren

- [ ] `p` - Element-Selektor (alle `<p>`-Elemente)
- [ ] `body` - Body-Selektor (gesamter Seiteninhalt)
- [ ] `div` - Div-Selektor
- [ ] `em` - Em-Selektor für Hervorhebungen

### CSS-Eigenschaften (Properties)

- [ ] `color: wert` - Vordergrundfarbe (Textfarbe)
- [ ] `font-size: wert` - Schriftgröße
- [ ] `background-color: wert` - Hintergrundfarbe
- [ ] `text-decoration: underline` - Text unterstreichen
- [ ] `text-decoration-line: underline` - Alternative Unterstreichung

### CSS-Werte

- [ ] Farbnamen: `red`, `green`, `blue`, `yellow`, `purple`, `silver`
- [ ] Größenangaben: `larger`, `smaller`
- [ ] Dekorationen: `underline`

## CSS-Kommentare

- [ ] `/* Kommentar */` - Einzeiliger Kommentar
- [ ] `/* Mehrzeiliger Kommentar */` - Mehrzeiliger Kommentar
- [ ] `/* eigenschaft: wert; */` - Eigenschaft auskommentieren

## Satzzeichen und Syntax

- [ ] `:` (Doppelpunkt) - Trennt Eigenschaft vom Wert
- [ ] `;` (Semikolon) - Trennt CSS-Eigenschaften voneinander
- [ ] `{` `}` (Geschweifte Klammern) - Umschließen CSS-Deklarationen
- [ ] `/*` `*/` - Kommentar-Markierungen

## Medientypen

- [ ] `screen` - Bildschirmdarstellung
- [ ] `print` - Druckausgabe
- [ ] `speech` - Sprachsynthesizer
- [ ] `all` - Alle Medien (Standard)

## HTML-Element-Typen (für CSS relevant)

- [ ] `<p>` - Absatz-Element (Block-Element)
- [ ] `<div>` - Generisches Block-Element
- [ ] `<section>` - Abschnitts-Element (Block-Element)
- [ ] `<span>` - Generisches Inline-Element
- [ ] `<em>` - Hervorhebungs-Element (Inline-Element)
- [ ] `<a>` - Link-Element (Inline-Element)

## CSS-Dateien

- [ ] `.css` - Dateiendung für CSS-Dateien
- [ ] Externe CSS-Datei erstellen
- [ ] CSS-Regeln in separater Datei speichern
- [ ] Relative Pfade: `href="style.css"`
- [ ] Absolute Pfade für CSS-Dateien

## Layout-Konzepte

- [ ] **Block-Platzierung** - Element nimmt gesamte Breite ein
- [ ] **Inline-Platzierung** - Element folgt Textfluss von links nach rechts
- [ ] **Vererbung** - CSS-Regeln werden an Kindelemente vererbt

## Best Practices

- [ ] Trennung von Struktur (HTML) und Darstellung (CSS)
- [ ] Externe CSS-Dateien bevorzugen
- [ ] CSS-Kommentare für komplexe Stylesheets verwenden
- [ ] Semantisch korrekte HTML-Elemente wählen
- [ ] Barrierefreiheit beachten (Screenreader-Kompatibilität)

## Häufige Fehlerquellen

- [ ] Fehlende Semikola zwischen CSS-Eigenschaften
- [ ] Nicht geschlossene Kommentare (`/* ohne */`)
- [ ] Falsche Platzierung von `<link>` außerhalb des `<head>`
- [ ] Verwendung von `<div>` für Inline-Textelemente
- [ ] Wiederholung von CSS-Regeln in mehreren `style`-Attributen