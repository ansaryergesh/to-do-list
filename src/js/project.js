const project = (name, description,tasks) => {
  return { id: Date.now().toString(), name: name, description: description tasks: [] }
}

export {project};