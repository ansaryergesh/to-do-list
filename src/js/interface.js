import { project } from './project';
import { todolist } from './todo';
import { helpers } from './helpers';

const display = (() => {
  let lists = JSON.parse(localStorage.getItem('projects')) || [];
  let selectProject;
  const sidebar = document.createElement('aside');
  sidebar.classList.add('left', 'col', 'm3', 's12');
  const head = document.createElement('h2');
  const projectList = document.createElement('ul');
  const template = document.querySelector('.tasks');
  const tableTask = document.createElement('div');
  const tableContainer = document.createElement('div');
  tableContainer.classList.add('tskContainer');
  tableContainer.innerHTML = `
    <ul class="headerList"><li>Title</li>
    <li>Due date</li>
    <li>Priority</li>
    <li>Action1</li>
    <li>Action2 </li></ul>`;
  projectList.classList.add('mainList');
  const head2 = document.createElement('h2');
  head.classList.add('head');
  head2.classList.add('head2');
  const addBtn = document.createElement('button');
  addBtn.classList.add('addBtn');
  const tasks = document.createElement('section');
  tasks.classList.add('tasks', 'col', 'm8', 's12');
  const row = document.querySelector('.row');
  const projectForm = document.createElement('form');
  const deleteList = document.createElement('button');
  const todos = document.createElement('form');
  todos.classList.add('todos');
  todos.innerHTML = `<input type="text" class="titleName" placeholder="title" data-title>
    <input type="text" class="description" placeholder="description" data-desc>
    <input type="date" class="dueDate" placeholder="due-date" data-date>
    <select class="browser-default " id="priority" data-priority>
        <option value="" disabled selected>Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
    </select>
    <input type="submit" id="action" class=" addBtn actionEdit none" value="Edit">
    <input type="submit"  class="addBtn smallest" value="Add">`;
  deleteList.classList.add('deleteList');
  deleteList.innerHTML = 'Delete Project';
  projectForm.classList.add('form1');
  projectForm.style.display = 'none';
  row.appendChild(sidebar);
  sidebar.appendChild(head);
  sidebar.appendChild(projectList);
  sidebar.appendChild(addBtn);
  row.appendChild(tasks);
  tasks.appendChild(head2);
  tasks.appendChild(todos);
  tasks.appendChild(deleteList);
  tasks.appendChild(tableContainer);
  tableContainer.appendChild(tableTask);
  const cancelEdit = document.createElement('button');
  cancelEdit.classList.add('cancelEdit', 'none');
  cancelEdit.innerText = 'Cancel Edit';
  tableContainer.appendChild(cancelEdit);
  sidebar.appendChild(projectForm);
  const side = () => {
    head.innerText = ' List of projects: ';
    addBtn.innerText = 'Add new project';
    projectForm.innerHTML = `
    <input type="text" class="project" placeholder="Project name">
    <br><br>
    <input type="submit" class="addBtn small" value="Add project">
    `;
  };

  const addButton = () => {
    document.querySelector('.addBtn').addEventListener('click', () => {
      if (projectForm.style.display === 'none') {
        setTimeout(() => {
          addBtn.innerText = 'Cancel';
          projectForm.style.display = 'inherit';
        }, 200);
      } else {
        addBtn.innerText = 'Add new Project';
        projectForm.style.display = 'none';
      }
    });
  };

  const renderProject = () => {
    lists.forEach(list => {
      const listElement = document.createElement('li');
      listElement.dataset.projectList = list.id;
      listElement.classList.add('list-name');
      listElement.innerText = list.name;
      if (list.id === selectProject) {
        listElement.classList.add('active');
      }
      projectList.appendChild(listElement);
    });
  };

  const save = () => {
    localStorage.setItem('projects', JSON.stringify(lists));
  };

  const editTodo = (title, description, date, priority) => {
    document.querySelector('[data-title]').value = title;
    document.querySelector('[data-desc]').value = description;
    document.querySelector('[data-date]').value = date;
    document.querySelector('[data-priority]').value = priority;
  };

  const renderTasks = (list) => {
    list.tasks.forEach(task => {
      const taskElement = document.importNode(template.content, true);
      const checkBox = taskElement.querySelector('input');
      const taskBody = taskElement.querySelector('.task-body');
      taskBody.dataset.taskList = task.id;
      checkBox.checked = task.done;
      const span = taskElement.querySelector('.name-title');
      const due = taskElement.querySelector('.date');
      const prior = taskElement.querySelector('.priorityTd');
      span.htmlFor = task.id;
      due.htmlFor = task.id;
      prior.htmlFor = task.id;
      span.append(task.title);
      due.append(task.dueDate);
      prior.append(task.priority);
      tableTask.appendChild(taskElement);
    });

    tableTask.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'input') {
        const parent = e.target.parentNode.parentNode.parentNode;
        const selectedProject = lists.find(list => list.id === selectProject);
        const selectedTask = selectedProject.tasks.find(task => 
          task.id === parent.dataset.taskList);
        selectedTask.done = e.target.checked;
        save();
      }

      if (e.target.className === 'btn-delete') {
        helpers.deleteTodo(e.target);
        const parent = e.target.parentNode.parentNode;
        const selectedProject = lists.find(list => list.id === selectProject);
        selectedProject.tasks = selectedProject.tasks.filter(task => 
          task.id !== parent.dataset.taskList);
        save();
      }

      if (e.target.className === 'btn-edit') {
        const parent = e.target.parentNode.parentNode;
        const btn = document.getElementById('action');
        const selectedProject = lists.find(list => list.id === selectProject);
        const tasks = selectedProject.tasks.find(task => task.id === parent.dataset.taskList);
        editTodo(tasks.title, tasks.description, tasks.dueDate, tasks.priority);
        btn.dataset.taskAction = tasks.id;
        cancelEdit.classList.remove('none');
        btn.classList.remove('none');
        document.querySelector('.smallest').classList.add('none');
      }
    });
  };

    
  const clearTaskForm = () => {
    document.querySelector('[data-title]').value = '';
    document.querySelector('[data-desc]').value = '';
    document.querySelector('[data-date]').value = '';
    document.querySelector('[data-priority]').value = '';
  };

  const clearAction = () => {
    const btn = document.getElementById('action');
    btn.dataset.taskAction = null;
    btn.classList.add('none');
    document.querySelector('.smallest').classList.remove('none');
    cancelEdit.classList.add('none');
  };
  
  const clearEvents = () => {
    clearAction();
    clearTaskForm();
  };


  const show = () => {
    helpers.clearElement(projectList);
    renderProject();
    const selectedProject = lists.find(list => list.id === selectProject);
    if (selectProject == null) {
      tasks.style.display = 'none';
    } else {
        tasks.style.display = '';
        head2.innerText = selectedProject.name + " : " + selectedProject.tasks.length;
        helpers.clearElement(tableTask);
        renderTasks(selectedProject);
        clearEvents();
        if (selectedProject.tasks.length === 0) {
          tableContainer.style.display = 'none';
          cancelEdit.style.display = 'none';
        } else {
        tableContainer.style.display = '';
        cancelEdit.style.display = '';
        }
    }
  };

  const showSave = () => {
    show();
    save();
  };

  const addProject = () => {
    document.querySelector('.small').addEventListener('click', e => {
      e.preventDefault();
      const pr = document.querySelector('.project');
      const prName = pr.value;
      if (prName == null || prName === '') return;
      projectForm.style.display = 'none';
      addBtn.innerText = 'Add new Project';
      const list = project(prName);
      pr.value = null;
      lists.push(list);
      showSave();
    });
  };

  const addTasks = () => {
    document.querySelector('.smallest').addEventListener('click', e => {
      const titleTask = document.querySelector('[data-title]');
      const descTask = document.querySelector('[data-desc]')
      const dateTask = document.querySelector('[data-date]');
      const priorityTask = document.querySelector('[data-priority]');
      e.preventDefault();
      const taskTitle = titleTask.value;
      const taskDesc = descTask.value;
      const taskDate = dateTask.value;
      const taskPrior = priorityTask.value;
      if (taskTitle === '' || taskDesc === '' || taskDate === null || taskPrior === '') return
      const todoList = todolist(taskTitle,taskDesc,taskDate,taskPrior);
      const selectedProject = lists.find(list => list.id === selectProject);
      selectedProject.tasks.push(todoList);
      showSave();
      clearTaskForm();
    });
  };

  const editTasks = () => {
    document.getElementById('action').addEventListener('click', e => {
      const btn = document.getElementById('action');
      const taskId = btn.dataset.taskAction;
      const selectedProject = lists.find(list => list.id === selectProject);
      const tasks = selectedProject.tasks.find(task => task.id === taskId);
      const titleTask = document.querySelector('[data-title]');
      const descTask = document.querySelector('[data-desc]')
      const dateTask = document.querySelector('[data-date]');
      const priorityTask = document.querySelector('[data-priority]');
      e.preventDefault();
      if (titleTask.value === '' || descTask.value === '' || dateTask.value === '' || priorityTask.value === '') return
      tasks.title = titleTask.value;
      tasks.description = descTask.value;
      tasks.dueDate = dateTask.value;
      tasks.priority = priorityTask.value;
      showSave();
      clearEvents();
    });
  };

  const select = () => {
    projectList.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'li') {
        selectProject = e.target.dataset.projectList;
        showSave();
      }
    });
  };

  const deleteProject = () => {
    deleteList.addEventListener('click', () => {
      lists = lists.filter(list => list.id !== selectProject)
      selectProject = null;
      tasks.style.display = 'none';
      showSave();
    });
  };

  cancelEdit.addEventListener('click', () => {
    clearEvents();
  });

  const render = () => {
    side();
    addButton();
    show();
    addProject();
    select();
    deleteProject();
    addTasks();
    editTasks();
  };

  return { render };
})();

export { display };