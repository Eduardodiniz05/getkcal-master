const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const age = getInputValue('age');
    const weight = getInputValue('weight');
    const height = getInputValue('height');
}

function getInputValue(id) {
    return Number(document.getElementById(id).value);
}