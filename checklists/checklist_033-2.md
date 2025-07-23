# CSS-Selektoren Checkliste - Kapitel 033.2

## Grundlegende Selektoren

### Universal-Selektor

- [ ] `*` - Wählt alle Elemente auf der Seite aus
    
    ```css
    * {  color: purple;  font-size: large;}
    ```
    

### Typ-Selektoren (Tag-Namen)

- [ ] `body` - Wählt das body-Element aus
- [ ] `p` - Wählt alle Paragraph-Elemente aus
- [ ] `table` - Wählt alle Tabellen-Elemente aus
- [ ] `em` - Wählt alle em-Elemente aus
- [ ] `li` - Wählt alle Listen-Elemente aus
- [ ] `ul` - Wählt alle ungeordnete Listen aus
- [ ] `div` - Wählt alle div-Elemente aus
- [ ] `a` - Wählt alle Link-Elemente aus

## ID-Selektoren

### Syntax

- [ ] `#id` - Wählt Element mit bestimmter ID aus
- [ ] `element#id` - Kombiniert Element-Typ mit ID
    
    ```css
    #topmenu { }ul#topmenu { }
    ```
    

### Beispiele aus dem Dokument

- [ ] `#topmenu`
- [ ] `#content`
- [ ] `#footer`
- [ ] `#main`
- [ ] `#sidebar`

## Klassen-Selektoren

### Syntax

- [ ] `.class` - Wählt alle Elemente mit bestimmter Klasse
- [ ] `element.class` - Kombiniert Element-Typ mit Klasse
- [ ] `.class1.class2` - Element mit mehreren Klassen (ohne Leerzeichen!)
    
    ```css
    .menu { }ul.menu { }.menu.top { }
    ```
    

### Beispiele aus dem Dokument

- [ ] `.menu`
- [ ] `.top`
- [ ] `.footer`
- [ ] `.highlight`
- [ ] `.links`
- [ ] `.article`
- [ ] `.reference`

## Nachfahren-Selektoren (Descendant Selectors)

### Syntax

- [ ] `parent child` - Kind-Element innerhalb von Eltern-Element (mit Leerzeichen!)
    
    ```css
    #content ul { }#content ul li { }div#main p { }
    ```
    

### Wichtige Beispiele

- [ ] `#content ul` - ul-Elemente innerhalb von #content
- [ ] `#footer ul` - ul-Elemente innerhalb von #footer
- [ ] `#main p` - p-Elemente innerhalb von #main
- [ ] `ul.links a` - a-Elemente innerhalb von ul mit Klasse "links"

## Gruppierte Selektoren

### Syntax

- [ ] `selector1, selector2` - Mehrere Selektoren mit gleichen Eigenschaften (mit Komma!)
    
    ```css
    #topmenu, #footer ul {  font-style: oblique;}
    ```
    

### Beispiele

- [ ] `#topmenu, #footer ul`
- [ ] `#sidebar a, ul.links a`

## Pseudoklassen

### Interaktive Zustände

- [ ] `:hover` - Element wird mit Maus überfahren
- [ ] `:focus` - Element hat den Fokus (z.B. Formularfelder)
- [ ] `:visited` - Link wurde bereits besucht
    
    ```css
    a:hover { }a:visited { }input:focus { }
    ```
    

### Kombinationen mit anderen Selektoren

- [ ] `.menu.top a:hover`
- [ ] `a:visited`

## CSS-Eigenschaften aus den Beispielen

### Text und Schrift

- [ ] `color` - Textfarbe (purple, green, red)
- [ ] `font-size` - Schriftgröße (large, small, x-small)
- [ ] `font-style` - Schriftstil (oblique)
- [ ] `text-decoration` - Textdekoration (none, underline)

### Listen

- [ ] `list-style-type` - Listenstil (none, circle)

## Spezielle Regeln und Konzepte

### !important Regel

- [ ] `!important` - Überschreibt normale Kaskadierung
    
    ```css
    li {  font-size: small !important;}
    ```
    

### Vererbung (Inheritance)

- [ ] CSS-Eigenschaften werden von Eltern- zu Kind-Elementen vererbt
- [ ] Spezifischere Selektoren überschreiben allgemeinere

### Kaskadierung

- [ ] Bei gleicher Spezifität wird die letzte Regel angewendet
- [ ] Spezifischere Selektoren haben Vorrang

## HTML-Attribute für CSS

### ID-Attribut

- [ ] `id="topmenu"` - Eindeutiger Bezeichner
- [ ] `id="content"`
- [ ] `id="footer"`

### Class-Attribut

- [ ] `class="menu"` - Einzelne Klasse
- [ ] `class="menu top"` - Mehrere Klassen (durch Leerzeichen getrennt)
- [ ] `class="menu footer"`
- [ ] `class="article reference"`

## Häufige Fehlerquellen

### Unterschiede beachten

- [ ] `.menu .top` (mit Leerzeichen) ≠ `.menu.top` (ohne Leerzeichen)
- [ ] Erstes: .top innerhalb von .menu
- [ ] Zweites: Element mit beiden Klassen

### Spezifität verstehen

- [ ] ID-Selektoren sind spezifischer als Klassen-Selektoren
- [ ] Typ-Selektoren sind am wenigsten spezifisch
- [ ] Längere Selektoren sind meist spezifischer

## Praktische Anwendungsbeispiele

### Navigation stylen

- [ ] Menü-Unterstreichungen entfernen: `text-decoration: none`
- [ ] Hover-Effekte für bessere UX: `:hover`

### Layout-Bereiche unterscheiden

- [ ] Verschiedene Stile für Header, Content, Footer
- [ ] Verwendung von IDs für große Layoutbereiche

### Wiederverwendbare Stile

- [ ] Klassen für ähnliche Elemente verwenden
- [ ] Gruppierte Selektoren für gemeinsame Eigenschaften

---

## Merksätze für den Kurs

✅ **"ID = Einzigartig, Klasse = Gruppe"** ✅ **"Leerzeichen = Nachfahre, kein Leerzeichen = UND-Verknüpfung"** ✅ **"Spezifischer gewinnt, später geschrieben überschreibt"** ✅ **"!important nur im Notfall verwenden"**