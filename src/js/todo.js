export const todolist = ( title, description, dueDate, priority ) => {
  return ({ id: Math.floor(Math.random() * 1000).toString(), title: title, description: description,
    dueDate: dueDate, priority: priority, done: false });
};