document.addEventListener('keydown', event => {
    console.debug("Button presed");
    if (event.ctrlKey & event.code == "Delete") {
        document.activeElement.remove();
        console.debug("Deleted");
    }
});
console.debug("EventListner added");
