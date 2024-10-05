
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
  

    const createTaskElement = (taskContent, completed = false) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = completed;
  
      const taskText = document.createElement('span');
      taskText.innerText = taskContent;
      if (completed) {
        taskText.classList.add('completed');
      }
  
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';

      checkbox.addEventListener('change', () => {
        taskText.classList.toggle('completed');
        updateLocalStorage();
      });
  
      // Delete task
      deleteBtn.addEventListener('click', () => {
        taskItem.remove();
        updateLocalStorage();
      });
  
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskText);
      taskItem.appendChild(deleteBtn);
  
      return taskItem;
    };
  
    // Add a new task
    addTaskBtn.addEventListener('click', () => {
      const taskContent = taskInput.value.trim();
      if (taskContent) {
        const taskElement = createTaskElement(taskContent);
        taskList.appendChild(taskElement);
        taskInput.value = '';
        updateLocalStorage();
      }
    });
  
 
    clearTasksBtn.addEventListener('click', () => {
      taskList.innerHTML = '';
      updateLocalStorage();
    });
  
    // Update localStorage
    const updateLocalStorage = () => {
      const tasks = [];
      document.querySelectorAll('.task').forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        const taskText = task.querySelector('span').innerText;
        tasks.push({
          text: taskText,
          completed: checkbox.checked,
        });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Load tasks from localStorage
    const loadTasks = () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      savedTasks.forEach(task => {
        const taskElement = createTaskElement(task.text, task.completed);
        taskList.appendChild(taskElement);
      });
    };
  
    loadTasks(); // Load tasks when the page is loaded
  });
  