const taskList = document.getElementById("taskList");
const userInput = document.getElementById("userInput");
const buttonAddTask = document.getElementById("buttonAddTask");

buttonAddTask.addEventListener("click", (e) => {
  clickTaskAdd();
});

function clickTaskAdd() {
  // Bedingung Textfeld darf nicht leer sein
  // (Bedingung keine Dopplungen)
  console.log(userInput.value);

  if (userInput.value !== "") {
    // erstelle frisches Element
    const newLiElement = document.createElement("li");

    // fülle Element mit user input
    newLiElement.innerText = userInput.value;

    // füge den das neue Element in den bestehenden html Baum ein
    taskList.appendChild(newLiElement);

    // leere das Eingabefeld
    userInput.value = "";
  }
}

// jetzt laden wir eine Liste mit Aufgaben von einem Backend bzw. von einer API
const todo = fetch("http://127.0.0.1:4000/todo")
  .then((response) => response.json())
  .then((json) => showTasksFromApi(json));

// wir schreiben eine Funktion um diese Daten jetzt in unsere Seite einzubinden
function showTasksFromApi(tasksJson) {
  console.log(tasksJson.userId);
  console.log(tasksJson.id);
  console.log(tasksJson.title);
  console.log(tasksJson.completed);

  for (let i = 0; i < tasksJson.length; i++) {
    // erstelle frisches Element
    const newLiElement = document.createElement("li");

    // fülle Element mit user input
    newLiElement.innerText = tasksJson[i].title;

    // füge den das neue Element in den bestehenden html Baum ein
    taskList.appendChild(newLiElement);
  }
}
