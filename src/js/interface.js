import { controller } from './controller';
import { project } from './project';
import { todolist } from './todo';

const display = (() => {
  let lists = JSON.parse(localStorage.getItem('projects')) || [];
  let selectProject;
  const sidebar = document.createElement('aside');
  sidebar.classList.add('left', 'col', 'm3','s12');
  const head = document.createElement('h2');
  const projectList = document.createElement('ul');
  const template = document.querySelector('.tasks');
  const tableTask = document.createElement('div');
  const tableContainer = document.createElement('div');
  tableContainer.classList.add('tskContainer')
  const taskContainer = document.querySelector('data-todo-body');
  tableContainer.innerHTML = `
    <ul class="headerList"><li>Title</li>
    <li>Due date</li>
    <li>Priority</li>
    <li>Action1</li>
    <li>Action2 </li></ul>`
  projectList.classList.add('mainList');
  const head2 = document.createElement('h2');
  head.classList.add('head')
  head2.classList.add('head2')
  const addBtn = document.createElement('button');
  addBtn.classList.add('addBtn');
  const tasks = document.createElement('section');
  tasks.classList.add('tasks', 'col','m8', 's12');
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
    <input type="submit" id="action" class="addBtn smallest" value="Add/Edit">`
  deleteList.classList.add('deleteList');
  deleteList.innerHTML = "Delete Project";
  projectForm.classList.add('form1');
  projectForm.style.display = 'none';
  todos.style.display === 'flex';
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
  sidebar.appendChild(projectForm);
  const side = () => {
    head.innerText =' List of projects: ';
    addBtn.innerText = 'Add new project';
    projectForm.innerHTML = `
    <input type="text" class="project" placeholder="Project name">
    <br><br>
    <input type="submit" class="addBtn small" value="Add project">
    `
  };

  const addButton = () => {
    document.querySelector('.addBtn').addEventListener('click', (e) => {
      if(projectForm.style.display === 'none') {
        setTimeout(function () {
          addBtn.innerText = "Cancel";
          projectForm.style.display = 'inherit';
        }, 200);
      } else { 
          addBtn.innerText = "Add new Project";
          projectForm.style.display = 'none';
      }
    })
  };

  const addProject = () => {
    document.querySelector('.small').addEventListener('click', e => {
      e.preventDefault();
      const pr = document.querySelector('.project');
      const prName = pr.value;
      if (prName == null || prName === '') return;
      projectForm.style.display = 'none';
      addBtn.innerText = "Add new Project";
      const list = project(prName);
      pr.value = null;
      lists.push(list);
      showSave();
    })
  }

  const addTasks = () => {
    document.querySelector('.smallest').addEventListener('click', e => {
      var titleTask = document.querySelector('[data-title]');
      var descTask = document.querySelector('[data-desc]')
      var dateTask = document.querySelector('[data-date]');
      var priorityTask = document.querySelector('[data-priority]');
      e.preventDefault();
      var taskTitle = titleTask.value;
      var taskDesc = descTask.value;
      var taskDate = dateTask.value;
      var taskPrior = priorityTask.value;
      if (taskTitle === '' || taskDesc === '' || taskDate === null || taskPrior === '') return
      const todoList = todolist(taskTitle,taskDesc,taskDate,taskPrior);
      const selectedProject = lists.find(list => list.id === selectProject);
      selectedProject.tasks.push(todoList);
      showSave();
      clearTaskForm();
    })
  }

  const clearTaskForm = () => {
    document.querySelector('[data-title]').value = '';
    document.querySelector('[data-desc]').value = ''
    document.querySelector('[data-date]').value = ''
    document.querySelector('[data-priority]').value = ''
  }

  const select = () => {
    projectList.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'li') {
        selectProject = e.target.dataset.projectList;
        showSave();
      }
    });
  }

  const deleteProject = () => {
    deleteList.addEventListener('click', e => {
      lists = lists.filter(list => list.id !== selectProject)
      selectProject = null;
      tasks.style.display = 'none';
      showSave();
    })
  }

  const show = () => {
    clearElement(projectList);
    renderProject();
    const selectedProject = lists.find(list => list.id === selectProject)
    if (selectProject == null){
      tasks.style.display = 'none';
    }
    else {
      tasks.style.display = '';
      head2.innerText = selectedProject.name + " : " + selectedProject.tasks.length;
      clearElement(tableTask);
      renderTasks(selectedProject);
      clearAction();
      clearTaskForm();
      if (selectedProject.tasks.length === 0) {
        tableContainer.style.display = 'none';
      } else {
          tableContainer.style.display = '';
      }
    }
  }

  const renderProject = () => {
    lists.forEach(list => {
      const listElement = document.createElement('li');
      listElement.dataset.projectList= list.id
      listElement.classList.add('list-name');
      listElement.innerText = list.name;
      if(list.id === selectProject) {
        listElement.classList.add('active');
      }
      projectList.appendChild(listElement);
    })
  }
  
  const renderTasks = (list) => {
    list.tasks.forEach(task => {
      const taskElement = document.importNode(template.content, true);
      const checkBox = taskElement.querySelector('input');
      const taskBody = taskElement.querySelector('.task-body');
      taskBody.dataset.taskList= task.id;
      checkBox.checked = task.done;
      const span = taskElement.querySelector('.name-title');
      const due = taskElement.querySelector('.date');
      const prior = taskElement.querySelector('.priorityTd');
      span.htmlFor = task.id
      due.htmlFor = task.id
      prior.htmlFor = task.id
      span.append(task.title);
      due.append(task.dueDate);
      prior.append(task.priority);
      tableTask.appendChild(taskElement);
    })

    tableTask.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase()  === 'input') {
        parent = e.target.parentNode.parentNode.parentNode;
        const selectedProject = lists.find(list => list.id === selectProject);
        const selectedTask = selectedProject.tasks.find(task => task.id === parent.dataset.taskList);
        selectedTask.done = e.target.checked;
        save();
      }

      if (e.target.className === 'btn-delete') { 
        deleteTodo(e.target); 
        parent = e.target.parentNode.parentNode;
        const selectedProject = lists.find(list => list.id === selectProject);
        selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== parent.dataset.taskList)
        save();
      }

      if (e.target.className === 'btn-edit') {
        parent = e.target.parentNode.parentNode;
        const selectedProject = lists.find(list => list.id === selectProject);
        const tasks = selectedProject.tasks.find(task => task.id === parent.dataset.taskList);
        editTodo(tasks.title,tasks.description,tasks.dueDate,tasks.priority);
        document.getElementById('action').classList.add('actionEdit');
        document.getElementById('action').dataset.taskAction = tasks.id;
        const cancelEdit = document.createElement('button');
        cancelEdit.classList.add('cancelEdit');
        cancelEdit.innerText = 'Cancel Edit';
        tableContainer.appendChild(cancelEdit);
        cancelEdit.display.style = '';
      }

      if (e.target.className = 'cancelEdit') {
        clearAction();
        cancelEdit.display.style = 'none';
      }
    })
  }

  const clearAction = () => {
    document.getElementById('action').classList.remove('actionEdit');
    document.getElementById('action').dataset.taskAction = null;
  }

  const deleteTodo = (target) => {
    target.parentElement.parentElement.remove();
  }

  const editTodo = (title, description, date, priority) => {
    document.querySelector('[data-title]').value = title;
    document.querySelector('[data-desc]').value = description;
    document.querySelector('[data-date]').value = date;
    document.querySelector('[data-priority]').value = priority;
  }

  const showSave = () => {
    show();
    save()
  }

  const save = () => {
    localStorage.setItem('projects',JSON.stringify(lists));
  }

  const clearElement = (element) => {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  const render = () => {
    side();
    addButton();
    show();
    addProject();
    select();
    deleteProject();
    addTasks();
  };

  return { render };
})();

export { display };