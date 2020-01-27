const project = (title, description) => {
    let task = 0;
    const projectTitle = () => title;
    const projectDesc  = () => description;
    const projectTask = () => task;
    const addTask = () => {
        task += 1;
    };

    return {projectTitle, projectDesc, projectTask, addTask,};
}

export {project};