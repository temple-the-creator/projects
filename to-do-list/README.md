# Todo List App

A simple, lightweight todo list app built with vanilla HTML, CSS, and JavaScript. Add tasks with a due date, view them in a list, and delete them when done.

## Features

- Add a todo item with a name and due date
- View all todos in a clean grid layout
- Delete individual todos
- No frameworks or dependencies — plain HTML/CSS/JS

## Tech Stack

- HTML5
- CSS3 (CSS Grid for layout)
- Vanilla JavaScript (DOM manipulation, no libraries)

## Getting Started

No build steps or installs required.

1. Clone or download this repository
2. Open `index.html` in your browser

That's it — the app runs entirely client-side.


## How It Works

- Todos are stored in an in-memory array (`todoList`) — the list resets on page refresh since there's no persistent storage yet
- `addTodo()` reads the name and due date inputs and pushes a new todo object to the array
- `renderTodoList()` re-renders the todo list in the DOM whenever the list changes
- Each todo row includes a delete button that removes that item from the array and re-renders

## Possible Improvements

- Persist todos using `localStorage` so they survive page refresh
- Add a "mark as complete" option
- Add input validation (e.g. prevent adding empty todos)
- Sort todos by due date
- Add editing support for existing todos

## License

Feel free to use and modify this project for your own purposes.
