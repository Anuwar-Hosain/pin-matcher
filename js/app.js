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
    if (isNaN(number)) {
      console.log(number);
    } else {
      const inputNumberField = document.getElementById("inputted-number");
      inputNumberField.value = number;
    }
  });
