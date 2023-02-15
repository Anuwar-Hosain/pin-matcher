function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});
//  calculator button evener
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const inputNumberField = document.getElementById("inputted-number");
    const previousInputNumberField = inputNumberField.value;
    if (isNaN(number)) {
      if (number === "C") {
        inputNumberField.value = "";
      } else if (number === "<") {
        const digits = previousInputNumberField.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        inputNumberField.value = remainingDigits;
      }
    } else {
      const newInputNumberField = previousInputNumberField + number;
      inputNumberField.value = newInputNumberField;
    }
  });
// verity button section
document.getElementById("verify-btn").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentDisplayPin = displayPinField.value;

  const inputNumberField = document.getElementById("inputted-number");
  const inputNumber = inputNumberField.value;

  const pinSuccessBtn = document.getElementById("pin-success");
  const pinFail = document.getElementById("pin-fail");
  if (inputNumber === currentDisplayPin) {
    pinSuccessBtn.style.display = "block";
    pinFail.style.display = "none";
  } else {
    pinFail.style.display = "block";
    pinSuccessBtn.style.display = "none";
  }
});
