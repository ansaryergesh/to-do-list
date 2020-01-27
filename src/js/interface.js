const display = (() => {
    
    const sidebar = document.createElement('aside');
    sidebar.classList.add('left', 'col', 'm3','s12');
    const head = document.createElement('h2');
    const head2 = document.createElement('h2');
    head.classList.add('head')
    head2.classList.add('head2')
    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    const tasks = document.createElement('section');
    tasks.classList.add('tasks', 'col','m8', 's12');
    const row = document.querySelector('.row');
    row.appendChild(sidebar);
    sidebar.appendChild(head);
    sidebar.appendChild(addBtn);
    row.appendChild(tasks);
    tasks.appendChild(head2);

    const side = () => {
        head.innerText =' List of projects: ';
        addBtn.innerText = 'Add new project';
        head2.innerText = 'Tasks:';

    };

    const render = () => {
      side();
    };

    return { render,side };
})();

export { display };