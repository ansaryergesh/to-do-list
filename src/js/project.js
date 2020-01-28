const project = (name) => {
  return { id: Date.now().toString(), name: name, tasks: [] }
}

export {project};