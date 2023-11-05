const groups = document.querySelectorAll('.group');
const categories = document.querySelectorAll('.category');

let correctPlacements = 0;

groups.forEach(group => {
    group.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', group.id);
    });
});

categories.forEach(category => {
    category.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    category.addEventListener('drop', (e) => {
        const groupId = e.dataTransfer.getData('text/plain');
        const group = document.getElementById(groupId);

        if (category.id === 'boy-group' && (groupId === 'bts' || groupId === 'exo')) {
            category.appendChild(group);
            correctPlacements++;
        } else if (category.id === 'girl-group' && (groupId === 'blackpink' || groupId === 'red-velvet')) {
            category.appendChild(group);
            correctPlacements++;
        }

        if (correctPlacements === groups.length) {
            displayCompletionMessage();
        }
    });
});

function displayCompletionMessage() {
    const message = document.createElement('div');
    message.textContent = 'Congratulations! You won 5% discount.';
    message.classList.add('completion-message');
    document.body.appendChild(message);
}