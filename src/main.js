document.addEventListener('keydown', event => {
    if (event.ctrlKey + event.code == "Delete") {
        document.activeElement.remove();
    }
});
