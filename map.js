//Make states clickable by using foreach to loop through every data-name in svg

export function stateClickHandlers(callback) {
    document.querySelectorAll('svg path[data-name]').forEach(function(label) {
    label.addEventListener('click', function() {
        const stateName= label.dataset.name;
        console.log(`${stateName}`);
    });
});

}