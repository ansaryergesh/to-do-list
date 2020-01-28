import { controller } from './controller';
import { project } from './project';
import { todo } from './todo';

const display = (() => {
    const storage_project = 'task.lists';
    const project_select = 'task.selected';
    let lists = JSON.parse(localStorage.getItem(storage_project)) || [];
    let selectProject = localStorage.getItem(project_select);
    const sidebar = document.createElement('aside');
    sidebar.classList.add('left', 'col', 'm3','s12');
    const head = document.createElement('h2');
    const projectList = document.createElement('ul');
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
    deleteList.classList.add('deleteList');
    deleteList.innerHTML = "Delete List";
    projectForm.classList.add('form1');
    projectForm.style.display = 'none';
    row.appendChild(sidebar);
    sidebar.appendChild(head);
    sidebar.appendChild(projectList);
    sidebar.appendChild(addBtn);
    row.appendChild(tasks);
    tasks.appendChild(head2);
    sidebar.appendChild(projectForm);
    const side = () => {
        head.innerText =' List of projects: ';
        addBtn.innerText = 'Add new project';
        head2.innerText = 'Tasks:';

        projectForm.innerHTML = `
        <input type="text" class="project" placeholder="Project name">
        <br><br>
        <input type="submit" class="addBtn small" value="Add project">
        `
        
    };
    const addButton = () => {
        document.querySelector('.addBtn').addEventListener('click', (e) => {
            if (projectForm.style.display === 'none') {
                setTimeout(function () {
                    addBtn.innerText = "Cancel";
                    projectForm.style.display = 'inherit';
                }, 200);
            } else  { 
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

    const select = () => {
        projectList.addEventListener('click', e => {
            tasks.appendChild(deleteList);
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
            showSave();

        })
    }



    // controller 
    const show = () => {
        clearElement(projectList);
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

    const showSave = () => {
        show();
        save()
    }
    const save = () => {
        localStorage.setItem(storage_project,JSON.stringify(lists));
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
    };

    return { render };
})();

export { display };