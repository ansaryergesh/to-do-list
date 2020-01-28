const controller = (() => {
    let lists = [{
        id: 1,
        name: 'name'
    }, {
        id: 2,
        name: 'name2'
    }];

    const show = (listContainer) => {
        clearElement(listContainer)
        lists.forEach(list => {
            const listElement = document.createElement('li');
            listElement.classList.add('project-name');
            listElement.innerText = lists.name;
            listContainer.appendChild(listElement);
        })
    }


    const clearElement = (element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    return {show};
})();

export {controller};