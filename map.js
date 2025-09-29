export function stateClickHandlers(callback) {
    document.querySelectorAll('svg path[data-name]').forEach(function(label) {
    label.addEventListener('click', function() {
        const statename= label.dataset.name;
        console.log(`clicked ${statename}`);
    });
});

}