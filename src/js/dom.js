const dom = (() => {
  const renderHTML = () => {
    const sidebar = document.createElement('aside');
    sidebar.classList.add('left', 'col', 'm3', 's12');
    const head = document.createElement('h2');
    const projectList = document.createElement('ul');
    const tableTask = document.createElement('div');
    tableTask.classList.add('tableTask');
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
    head.innerText = ' List of projects: ';
    addBtn.innerText = 'Add new project';
    projectForm.innerHTML = `
    <input type="text" class="project" placeholder="Project name">
    <br><br>
    <input type="submit" class="addBtn small" value="Add project">
    `;
    const testing = [{
      id: '1',
      name: 'default',
      tasks: [{
        id: '1',
        title: 'default',
        description: 'description',
        dueDate: '2025-05-05',
        priority: 'Low',
        done: false,
      },
      {
        id: '2',
        title: 'default2',
        description: 'description2',
        dueDate: '2025-05-05',
        priority: 'High',
        done: false,
      }],
    }];
    if (localStorage.getItem('projects') === null) {
      localStorage.setItem('projects', JSON.stringify(testing));
    }
  };

  return { renderHTML };
})();


export { dom };