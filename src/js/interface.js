const display = (() => {
    
    const sidebar = document.createElement('aside');
    sidebar.classList.add('left', 'col','s12');
    const head = document.createElement('h2');
    head.classList.add('head')
    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    const body = document.querySelector('body');
    body.appendChild(sidebar);
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