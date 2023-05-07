/* 
function rollSlot(slot) {
  const min = 0;
  const max = 9;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  slot.textContent = randomNumber;
}
*/

function rollSlot(slot) {
  const min = 0;
  const max = 3;

  // Define the custom probability distribution
  const probabilities = [0.1, 0.1, 0.1, 0.1];
  probabilities[3] = 0.4; // Set a higher probability for the number 7

  // Generate a random number based on the custom probability distribution
  const randomNumber = getRandomNumberWithProbability(min, max, probabilities);

  slot.classList.add('rolling');
  setTimeout(() => {
    slot.textContent = randomNumber;
    slot.classList.remove('rolling');
  }, 1000);
}

function getRandomNumberWithProbability(min, max, probabilities) {
  const random = Math.random();
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += probabilities[i];
    if (random <= sum) {
      return i;
    }
  }

  return max; // Fallback in case the random number is not covered by the probabilities
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
