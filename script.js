function rollSlot(slot) {
  const min = 0;
  const max = 9;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  slot.textContent = randomNumber;
}

function checkWinning(slots) {
  const values = Array.from(slots).map(slot => parseInt(slot.textContent, 10));
  const allEqual = values.every(value => value === values[0]);
  if (allEqual) {
    alert('Congratulations, you won!');
  }
}

function startSlotMachine() {
  const slots = document.querySelectorAll('.slot');
  slots.forEach((slot) => {
    rollSlot(slot);
  });
  checkWinning(slots);
}

// Add a start button to the game
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.classList.add('start-button');
document.body.appendChild(startButton);

startButton.addEventListener('click', startSlotMachine);
