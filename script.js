function rollSlot(slot) {
  const min = 1;
  const max = 5;

  // Define the custom probability distribution
  const probabilities = [0, 0.15, 0.15, 0.4, 0.15, 0.15];

  // Generate a random number based on the custom probability distribution
  const randomNumber = getRandomNumberWithProbability(min, max, probabilities);

  slot.textContent = randomNumber;
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

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startSlotMachine);
