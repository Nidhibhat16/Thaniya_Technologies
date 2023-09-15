const todos = document.getElementById('todos');
const newTodo = document.getElementById('new-todo');
const addTodo = document.getElementById('add-todo');

addTodo.addEventListener('click', () => {
  const todoText = newTodo.value;

  if (todoText) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const button = document.createElement('button');

    input.type = 'checkbox';
    button.textContent = 'Delete';

    li.appendChild(input);
    li.appendChild(todoText);
    li.appendChild(button);

    todos.appendChild(li);

    newTodo.value = '';
  }
});