export const project = (name) => {
  const pr = { id: Math.floor(Math.random() * 1000).toString(), name: name, tasks: [] };
  return pr;
};