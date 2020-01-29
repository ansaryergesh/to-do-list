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
    const template = document.querySelector('.template');
    const titleTask = document.querySelector('.title');
    const descTask = document.querySelector('.description')
    const dateTask = document.querySelector('.due-date');
    const priorityTask = document.querySelector('.priority');
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
    todos.innerHTML = `<input type="text" class="title" placeholder="title">
        <input type="text" class="description" placeholder="description">
        <input type="date" class="due-date" placeholder="due-date">
        <select class="browser-default priority">
            <option value="" disabled selected>Priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
      </select>
        <input type="submit" class="addBtn smallest" value="Add task">`
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

    const addTasks = () => {
        document.querySelector('.smallest').addEventListener('click', e => {
            e.preventDefault();
            const taskTitle = titleTask.value;
            const taskDesc = descTask.value;
            const taskDate = dateTask.value;
            const taskPrior = priorityTask.value;
            if ((taskTitle == null || taskTitle === '') &&
            (taskDesc == null || taskDesc === '') &&
            (taskDate == null || taskDate === '') &&
            (taskPrior !== 'Priority')) return
            const todoList = todo(taskTitle,taskDesc,taskDate,taskPrior);
            titleTask.value = null
            descTask.value = null
            dateTask.value = null
            priorityTask.value =null
            const selectedList = lists.find(list => list.id === selectProject);
            selectedList.tasks.push(todoList);
            showSave();
        })
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



    // controller project
    const show = () => {
        clearElement(projectList);
        renderProject();
        const selectedList = lists.find(list => list.id === selectProject)
        if (selectProject == null){
            tasks.style.display = 'none';
        }
        else {
            tasks.style.display = '';
            head2.innerText = selectedList.name + " : " + selectedList.tasks.length;
            renderTasks(selectedList);
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
            checkBox.id = taks.id;
            checkBox.checked = task.done;
            const span = taskElement.querySelector('.name-title');
            const due = taskElement.querySelector('.date');
            span.htmlFor = task.id
            due.htmlFor = task.id
            span.append(task.title);
            due.append(task.dueDate);
            tasks.appendChild(taskElement);

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
      addTasks();
    };

    return { render };
})();

export { display };