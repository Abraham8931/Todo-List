//Get the taskInput, addTaskBtn, and taskList


const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    // Create a checkbox for task completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      listItem.classList.toggle('completed');
    });

    // Create the task text element
    const taskTextElement = document.createTextNode(taskText);

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
    deleteBtn.addEventListener('click', () => {
      listItem.remove();
    });

    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
});