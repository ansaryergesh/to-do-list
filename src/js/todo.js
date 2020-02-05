export const todolist = (title, description, dueDate, priority) => {
  const todo = {
    id: Math.floor(Math.random() * 1000).toString(),
    title,
    description,
    dueDate,
    priority,
    done: false,
  };
  return todo;
};