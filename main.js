function getCurrentDateAndTime() {
  return new Date().toLocaleString();
}

let todos = [
  [
    `Be able to mark todos "done".`,
    false,
    getCurrentDateAndTime(),
  ],
  [
    `Allow user interaction through the DOM`,
    false,
    getCurrentDateAndTime(),
  ],
  [
    `Add dates to todos.`,
    false,
    getCurrentDateAndTime(),
  ],
]

// Or the ALTERNATE, multi-array method:
// let todos = [
//   `Be able to mark todos "done".`,
//   `Allow user interaction through the DOM`,
//   `Add dates to todos.`,
// ]

// let completed = [
//   false,
//   false,
//   false,
// ]

// let dates = [
//   getCurrentDateAndTime(),
//   getCurrentDateAndTime(),
//   getCurrentDateAndTime(),
// ]

function printTodo(name, date) {

  const li = document.createElement('li');
  
  const ol = document.querySelector('.todo-list');
  
  const pTag = document.createElement('p');

  const pTagTwo = document.createElement('p');

  li.innerText = todos;

  pTag.innerText = todos;

  pTagTwo.innerText = todos;

  ol.appendChild(li);

}

function printAllTodo() {
  for(let i = 0; i < todos.length; i++){
  
  printTodo(todos[i][0]);
  }

}

printAllTodo();

