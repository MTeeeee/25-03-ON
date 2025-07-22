# HTML-Formulare: Befehle und Elemente Checkliste

## Grundstruktur

### `<form>`-Element

- [ ] `<form>` - Grundgerüst eines Formulars
- [ ] `action` - Ziel-URL für Formulardaten (z.B. "receive_form.php")
- [ ] `method` - Übertragungsmethode ("get" oder "post")
- [ ] `enctype` - MIME-Typ für Formulardaten
    - [ ] `application/x-www-form-urlencoded` (Standard)
    - [ ] `multipart/form-data` (für Datei-Uploads)

## Eingabeelemente

### `<input>`-Element mit verschiedenen Typen

- [ ] `type="text"` - Einzeiliges Textfeld
- [ ] `type="password"` - Passwort-Feld (verdeckte Eingabe)
- [ ] `type="email"` - E-Mail-Adresse
- [ ] `type="tel"` - Telefonnummer
- [ ] `type="url"` - URL-Eingabe
- [ ] `type="search"` - Suchfeld
- [ ] `type="number"` - Numerische Werte
- [ ] `type="range"` - Schieberegler für Zahlenwerte
- [ ] `type="date"` - Datumseingabe
- [ ] `type="month"` - Monat und Jahr
- [ ] `type="week"` - Woche und Jahr
- [ ] `type="time"` - Uhrzeiteingabe
- [ ] `type="datetime-local"` - Datum und Uhrzeit
- [ ] `type="color"` - Farbwähler
- [ ] `type="file"` - Datei-Upload
- [ ] `type="hidden"` - Verstecktes Feld
- [ ] `type="checkbox"` - Kontrollkästchen (Mehrfachauswahl)
- [ ] `type="radio"` - Optionsschaltfläche (Einzelauswahl)
- [ ] `type="submit"` - Absende-Schaltfläche
- [ ] `type="reset"` - Zurücksetzen-Schaltfläche
- [ ] `type="button"` - Generische Schaltfläche
- [ ] `type="image"` - Bild als Schaltfläche

### Gemeinsame Attribute für `<input>`

- [ ] `name` - Name des Feldes (für Server-Übertragung)
- [ ] `id` - Eindeutige ID (für Labels und CSS)
- [ ] `value` - Standardwert oder Wert des Feldes
- [ ] `placeholder` - Beispieltext im leeren Feld
- [ ] `required` - Pflichtfeld-Markierung
- [ ] `autocomplete` - Autovervollständigung ("on" oder "off")
- [ ] `checked` - Vorauswahl bei radio/checkbox
- [ ] `accept` - Erlaubte Dateitypen bei file-Input

## Weitere Formularelemente

### `<textarea>`

- [ ] `<textarea>` - Mehrzeiliges Textfeld
- [ ] `rows` - Anzahl sichtbarer Zeilen
- [ ] `cols` - Anzahl sichtbarer Spalten
- [ ] `name` und `id` - Wie bei input-Elementen

### `<select>` und `<option>`

- [ ] `<select>` - Dropdown-Auswahlliste
- [ ] `<option>` - Einzelner Eintrag in select
- [ ] `value` - Wert der Option
- [ ] `selected` - Vorausgewählte Option

### `<button>`

- [ ] `<button>` - Alternative zu input-Schaltflächen
- [ ] `type` - Art der Schaltfläche ("submit", "reset", "button")

## Strukturierung und Zugänglichkeit

### `<label>`

- [ ] `<label>` - Beschriftung für Formularelemente
- [ ] `for` - Verknüpfung mit input-Element über ID

### `<fieldset>` und `<legend>`

- [ ] `<fieldset>` - Gruppierung verwandter Felder
- [ ] `<legend>` - Überschrift für fieldset
- [ ] `disabled` - Deaktivierung aller Felder im fieldset

## HTTP-Methoden

### GET-Methode

- [ ] Daten in URL kodiert
- [ ] Für kleine Datenmengen geeignet
- [ ] Sichtbar in der Adressleiste

### POST-Methode

- [ ] Daten im HTTP-Body übertragen
- [ ] Für große Datenmengen und Datei-Uploads
- [ ] Nicht in URL sichtbar

## Validierung und Benutzerfreundlichkeit

### Client-seitige Hilfen

- [ ] `placeholder` für Eingabehilfen
- [ ] `required` für Pflichtfelder
- [ ] `accept` für Dateityp-Beschränkungen
- [ ] Visueller Hinweis auf Pflichtfelder (z.B. Sternchen *)

### Barrierefreiheit

- [ ] `<label>` korrekt mit Formularfeldern verknüpft
- [ ] Eindeutige `name` und `id` Attribute
- [ ] Logische Gruppierung mit `<fieldset>`

## Praxistipps

- [ ] Eindeutige `name`-Attribute innerhalb eines Formulars
- [ ] Aussagekräftige `id`-Attribute für CSS und JavaScript
- [ ] Server-seitige Validierung zusätzlich zur Client-seitigen
- [ ] Angemessene `enctype` bei Datei-Uploads
- [ ] Benutzerfreundliche Fehlermeldungen und Hilfen