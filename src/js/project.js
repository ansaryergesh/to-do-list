export const project = (name) => {
  return ({ id: Math.floor(Math.random() * 1000).toString(), name: name, tasks: [] });
};