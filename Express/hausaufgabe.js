// Schritt 1:
// Als erstes erstelle bitte eine HTML-Datei mit einem Input-Feld, einem Button und einem UL-Element
// und versehe sie mit IDs. Beispiel:
// - <input id="userInput">
// - <button id="buttonAddTask">
// - <ul id="taskList">

// Hausaufgabe: Baue die To-Do-Liste aus dem Unterricht nach!
// Hinweise findest du als Kommentare. Versuche, den Code Stück für Stück selbst zu schreiben.

/*
  2. Hole dir die drei wichtigen HTML-Elemente per ID:
     - Die Liste, in die die Aufgaben eingetragen werden sollen
     - Das Eingabefeld für neue Aufgaben
     - Den Button zum Aufgaben-Hinzufügen
*/

// const taskList = ...
// const userInput = ...
// const buttonAddTask = ...

/*
  3. Füge einen Event Listener zum Button hinzu.
     Wenn der Button geklickt wird, soll eine Funktion ausgeführt werden, z. B. clickTaskAdd().
*/

// buttonAddTask.addEventListener(...)

/*
  4. Schreibe die Funktion clickTaskAdd():
     - Hole den Text aus dem Eingabefeld
     - Überprüfe, ob der Text nicht leer ist (evtl. auch: keine Dopplungen)
     - Wenn ok:
         - Erstelle ein neues <li>-Element
         - Setze als Text den Inhalt des Eingabefelds
         - Füge das Element in die Liste (ul) ein
         - Leere das Eingabefeld wieder
*/

// function clickTaskAdd() {
//   ...
// }

/*
  5. BONUS: Hole eine Liste mit Aufgaben von einer API.
     (Kann im Browser nicht ohne lokalen Server funktionieren.)
     Verwende fetch(), um eine JSON-Datei von https://jsonplaceholder.typicode.com/todos zu laden.
*/

// const todo = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => showTasksFromApi(json));

/*
  6. Schreibe die Funktion showTasksFromApi(tasksJson):
     - Gehe mit einer Schleife durch die übergebenen Aufgaben
     - Für jede Aufgabe:
         - Erstelle ein neues <li>-Element
         - Setze den Titel der Aufgabe als Text
         - Füge das <li> in die Liste ein
    Tipp: Du kannst auch zunächst eine einzelne Aufgabe testen, bevor du die Schleife schreibst.
*/

// function showTasksFromApi(tasksJson) {
//   ...
// }

/*
  Zusatz-Idee:
  - Optional: Wenn du willst, kannst du Aufgaben auch als erledigt markieren oder löschen.
  - Nutze dafür weitere Buttons, CSS-Klassen oder zusätzliche Funktionen.
  - Jedes li element könnte z. B. einen Button zum Löschen oder Markieren enthalten.
  - Die checkbox könnte den richtigen Status der Aufgabe zu beginn anzeigen. (aus der Json)
*/

// Viel Erfolg!
