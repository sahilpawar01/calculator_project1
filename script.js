const display = document.querySelector('#result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === '=') {
      display.value = eval(display.value);
    } else if (value === 'AC') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});
