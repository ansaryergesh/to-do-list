const todo = (title, description, dueDate, priority, done ) => {
    return { id: Date.now().toString(), title: title, description: description, dueDate: dueDate, priority: priority, done: false }
}

export { todo };