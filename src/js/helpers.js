const helpers = (() => {
  const refresh = (elem) => {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  };

  const deleteTodo = (target) => {
    target.parentElement.parentElement.remove();
  };

  return { refresh, deleteTodo };
})();

export { helpers };