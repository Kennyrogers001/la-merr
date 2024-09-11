const brakeElement = document.getElementById('exit-1');
const offElement = document.getElementById('exit-2');
const holdElement = document.getElementById('hold');
const amountInput = document.getElementById('holdings');

function calculate() {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    console.error("Invalid input: Amount must be a number.");
    return;
  }

  const brake = (amount * 0.2).toFixed(5);
  const off = (amount * 0.4).toFixed(5);
  const hold = (amount * 0.4).toFixed(5);

  // Update the HTML elements
  brakeElement.textContent = brake;
  offElement.textContent = off;
  holdElement.textContent = hold;
}

// Assuming the amount input is updated dynamically, you might want to
// attach an event listener to trigger the calculation:
amountInput.addEventListener('input', calculate);