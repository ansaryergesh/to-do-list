const display = (() => {
    
    const sidebar = document.createElement('aside');
    sidebar.classList.add('left');
    const head = document.createElement('h2');
    head.classList.add('head')
    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    const row = document.querySelector('.row');
    row.appendChild(sidebar);
    sidebar.appendChild(head);
    sidebar.appendChild(addBtn);

    const side = () => {
        head.innerText =' List of projects: ';
        addBtn.innerText = 'Add new project';

    };

    const render = () => {
      side();
    };

    return { render,side };
})();

export { display };