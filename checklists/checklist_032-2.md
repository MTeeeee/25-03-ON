# HTML-Semantik und Dokumenthierarchie - Befehle und Elemente Checkliste

## 📋 Überschriften-Elemente

- [ ] `<h1>` - Hauptüberschrift (höchste Hierarchie-Ebene)
- [ ] `<h2>` - Überschrift zweiter Ebene
- [ ] `<h3>` - Überschrift dritter Ebene
- [ ] `<h4>` - Überschrift vierter Ebene
- [ ] `<h5>` - Überschrift fünfter Ebene
- [ ] `<h6>` - Überschrift sechster Ebene

## 📄 Text-Strukturierung

- [ ] `<p>` - Absatz (paragraph)
- [ ] `<br>` - Zeilenumbruch (selbstschließend)
- [ ] `<hr>` - Horizontale Linie (selbstschließend)
- [ ] `<pre>` - Vorformatierter Text (erhält Leerzeichen und Zeilenumbrüche)

## 📝 Listen-Elemente

### Sortierte/Geordnete Listen

- [ ] `<ol>` - Ordered List (geordnete Liste)
- [ ] `<ol type="1">` - Dezimalzahlen (Standard)
- [ ] `<ol type="A">` - Großbuchstaben
- [ ] `<ol type="a">` - Kleinbuchstaben
- [ ] `<ol type="I">` - Römische Zahlen (Großbuchstaben)
- [ ] `<ol type="i">` - Römische Zahlen (Kleinbuchstaben)
- [ ] `<ol start="3">` - Startwert festlegen
- [ ] `<ol reversed>` - Reihenfolge umkehren

### Unsortierte/Ungeordnete Listen

- [ ] `<ul>` - Unordered List (ungeordnete Liste)

### Beschreibungslisten

- [ ] `<dl>` - Description List (Beschreibungsliste)
- [ ] `<dt>` - Description Term (Begriff/Schlüssel)
- [ ] `<dd>` - Description Description (Beschreibung/Wert)

### Allgemeine Listen-Elemente

- [ ] `<li>` - List Item (Listenelement für `<ol>` und `<ul>`)
- [ ] `<li value="5">` - Wert für einzelnes Listenelement in sortierten Listen

## 🎨 Inline-Textformatierung

### Darstellungselemente (Presentation Elements)

- [ ] `<b>` - Fettdruck (bold)
- [ ] `<i>` - Kursiv (italic)
- [ ] `<u>` - Unterstrichen (underlined)
- [ ] `<tt>` - Monospace-Schrift (teletype) - **veraltet in HTML5**

### Ausdruckselemente (Phrase Elements) - Semantisch

- [ ] `<strong>` - Wichtiger/starker Text (semantisch fett)
- [ ] `<em>` - Hervorgehobener Text (semantisch kursiv)
- [ ] `<code>` - Computercode
- [ ] `<mark>` - Markierter/hervorgehobener Text (gelber Hintergrund)

## 📦 Gruppierungs-Elemente

### Block-Container

- [ ] `<div>` - Block-Container für andere HTML-Elemente

### Inline-Container

- [ ] `<span>` - Inline-Container für Text und andere Inline-Elemente

## 🏗️ HTML-Seitenstruktur (Semantische Elemente)

### Grundstruktur

- [ ] `<header>` - Kopfbereich/Seitenkopf
- [ ] `<main>` - Hauptinhalt der Seite (nur einmal pro Dokument)
- [ ] `<nav>` - Navigationsbereich
- [ ] `<aside>` - Seitenleiste/Ergänzende Inhalte
- [ ] `<footer>` - Fußbereich/Seitenfuß

### Inhalts-Sektionen

- [ ] `<section>` - Inhaltsabschnitt (Teil des umgebenden Elements)
- [ ] `<article>` - Eigenständiger Inhalt (kann separat stehen)

## 🔤 Weitere Inline-Elemente (aus dem Dokument erwähnt)

- [ ] `<kbd>` - Tastatureingabe (erwähnt als Alternative zu `<tt>`)
- [ ] `<var>` - Variable (erwähnt als Alternative zu `<tt>`)
- [ ] `<samp>` - Beispielausgabe (erwähnt als Alternative zu `<tt>`)

## 📋 Zitate und Blöcke

- [ ] `<blockquote>` - Blockzitat (aus der Liste der verwendeten Elemente)

## ✅ Anwendungs-Checkliste

### Hierarchie und Struktur

- [ ] Überschriften hierarchisch verwenden (h1 → h2 → h3, keine Ebenen überspringen)
- [ ] Nur eine `<h1>` pro Seite für den Haupttitel
- [ ] `<main>` nur einmal pro Dokument verwenden

### Listen

- [ ] Sortierte Listen für Reihenfolge-relevante Inhalte
- [ ] Unsortierte Listen für Reihenfolge-irrelevante Inhalte
- [ ] Beschreibungslisten für Begriff-Erklärung-Paare
- [ ] Listen können verschachtelt werden

### Semantik vs. Darstellung

- [ ] `<strong>` statt `<b>` für wichtigen Text
- [ ] `<em>` statt `<i>` für hervorgehobenen Text
- [ ] `<code>` statt `<tt>` für Computercode
- [ ] Semantische Elemente für bessere Barrierefreiheit verwenden

### Block vs. Inline

- [ ] Block-Elemente: `<div>`, `<p>`, `<h1-h6>`, `<ol>`, `<ul>`, `<li>`, `<dl>`, `<nav>`, `<header>`, `<main>`, `<footer>`, `<aside>`, `<section>`, `<article>`, `<pre>`
- [ ] Inline-Elemente: `<span>`, `<strong>`, `<em>`, `<code>`, `<b>`, `<i>`, `<u>`, `<mark>`

### Verschachtelung

- [ ] `<header>` nicht in `<header>` verschachteln
- [ ] `<footer>` nicht in `<footer>` verschachteln
- [ ] `<header>` nicht in `<footer>` und umgekehrt
- [ ] Bei Listen: nur `<li>` als direkte Kinder von `<ol>` und `<ul>`

## 🎯 Praktische Tipps

- [ ] HTML-Skelett immer mit `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` verwenden
- [ ] Alle Texte in entsprechende HTML-Elemente einschließen (nicht außerhalb)
- [ ] CSS für Styling verwenden, nicht veraltete HTML-Attribute
- [ ] Semantische Struktur für Suchmaschinen und Screenreader optimieren
- [ ] Überschriften niemals nur für Styling verwenden