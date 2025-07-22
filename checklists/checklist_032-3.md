# HTML-Referenzen und eingebettete Ressourcen - Checkliste

## 🖼️ Bilder einbetten

### `<img>`-Tag

- [ ] **Grundsyntax:** `<img src="dateiname.jpg">`
- [ ] **src-Attribut:** Gibt den Quellort der Bilddatei an
- [ ] **alt-Attribut:** `<img src="logo.png" alt="Firmenlogo">`
    - Wichtig für Barrierefreiheit
    - Wird bei Nur-Text-Browsern angezeigt
    - Wird von Bildschirmlesegeräten verwendet
- [ ] **width/height-Attribute:** `<img src="bild.jpg" width="300" height="200">`

### Pfadangaben

- [ ] **Relative Pfade:** `../logo.png` (übergeordnetes Verzeichnis)
- [ ] **Absolute Pfade:** Beginnen mit `/`
- [ ] **Vollständige URLs:** Mit Domainname für externe Bilder

### Bildformate

- [ ] **JPEG:** Ideal für Fotos mit vielen Farben und Schattierungen
- [ ] **PNG:** Besser für Bilder mit Volltonfarben, unterstützt Transparenz
- [ ] **GIF:** Niedrigste Qualität, aber unterstützt Animationen
- [ ] **SVG:** Scalable Vector Graphics, verlustfrei skalierbar

## 🎵 Audio und Video

### `<audio>`-Tag

- [ ] **Grundsyntax:** `<audio controls src="audio.mp3">`
- [ ] **controls-Attribut:** Zeigt Wiedergabesteuerung an
- [ ] **Fallback-Content:** Text zwischen öffnendem und schließendem Tag

```html
<audio controls src="musik.mp3">
  <p>Audio wird nicht unterstützt</p>
</audio>
```

### `<video>`-Tag

- [ ] **Grundsyntax:** `<video controls src="video.mp4">`
- [ ] **controls-Attribut:** Zeigt Wiedergabesteuerung an
- [ ] **Fallback-Content:** Wie bei Audio

## 🖼️ iFrames (Verschachtelte Dokumente)

### `<iframe>`-Tag

- [ ] **Grundsyntax:** `<iframe src="dokument.html"></iframe>`
- [ ] **name-Attribut:** `<iframe name="viewer" src="galerie.html">`
- [ ] **width/height-Attribute:** Größe des iFrames festlegen
- [ ] **Fallback-Content:** Text für nicht unterstützte Browser

## 🔗 Links und Anker

### `<a>`-Tag (Anker/Links)

- [ ] **href-Attribut:** `<a href="seite.html">Linktext</a>`
- [ ] **Externe Links:** `<a href="https://example.com">Externe Seite</a>`
- [ ] **E-Mail-Links:** `<a href="mailto:info@firma.de">E-Mail senden</a>`
- [ ] **Telefon-Links:** `<a href="tel:+123456789">Anrufen</a>`

### Target-Attribute

- [ ] **_blank:** Öffnet in neuem Fenster/Tab
- [ ] **_self:** Standard, ersetzt aktuelles Dokument
- [ ] **_parent:** Ersetzt übergeordnetes Dokument (bei iFrames)
- [ ] **_top:** Ersetzt Hauptdokument im Browserfenster
- [ ] **Benanntes Ziel:** `target="viewer"` (verweist auf iframe name)

## 🎯 URL-Anker (Sprungmarken)

### id-Attribute

- [ ] **Element markieren:** `<h2 id="kapitel1">Kapitel 1</h2>`
- [ ] **Link zu Anker:** `<a href="#kapitel1">Zu Kapitel 1</a>`
- [ ] **Externe URL mit Anker:** `<a href="seite.html#kapitel1">Link</a>`

### Wichtige Regeln für id-Attribute

- [ ] Keine Leerzeichen verwenden
- [ ] Muss im Dokument eindeutig sein
- [ ] Fragment wird nicht an Server gesendet

## ✅ Wichtige Konzepte

### Pfadarten

- [ ] **Relative Pfade:** Bezogen auf aktuelles Dokument
- [ ] **Absolute Pfade:** Vollständiger Pfad vom Root
- [ ] **URLs:** Mit Protokoll und Domain

### Multimedia-Eigenschaften

- [ ] **Separate Dateispeicherung:** Multimedia in eigenen Dateien
- [ ] **Browser-Caching:** Wiederverwendung bereits geladener Dateien
- [ ] **Content Delivery Networks (CDN):** Externe Hosting-Services

### Barrierefreiheit

- [ ] **alt-Attribute:** Immer bei Bildern verwenden
- [ ] **Fallback-Content:** Bei Audio/Video und iFrames
- [ ] **Beschreibende Linktexte:** Aussagekräftige Bezeichnungen

## 🔧 Praktische Anwendung

### Typische Anwendungsfälle

- [ ] **Bildergalerie:** Kombination aus Bildern und Links
- [ ] **Navigation:** Links zu verschiedenen Seitenbereichen
- [ ] **Multimedia-Inhalte:** Audio/Video einbetten
- [ ] **Externe Inhalte:** iFrames für andere Websites
- [ ] **Kontaktmöglichkeiten:** E-Mail und Telefon-Links