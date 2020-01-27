const todo = (title, description, dueDate, priority, done = false) => {
    return {title, description, dueDate, priority, done, }
}

export { todo };