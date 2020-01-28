const controller = (() => {
    const save = (key, elem) => {
        localStorage.setItem(key ,JSON.stringify(elem));
    }


    return {save,}
})();

export {controller};