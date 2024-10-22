const textInput = document.getElementById('textInput');
const countDisplay = document.getElementById('count');


textInput.addEventListener('input', () => {
    const textLength = textInput.value.length;
    countDisplay.textContent = textLength;
});
