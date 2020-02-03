const helpers = (() => {
  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const deleteTodo = (target) => {
    target.parentElement.parentElement.remove();
  };

  return { clearElement, deleteTodo };
})();

export { helpers };