let bank = [];
const addNumbersButton = document.querySelector("#addNumberButton");
const bankOutput = document.querySelector("#numbersAddedToBank");
const inputBox = document.querySelector("#numberInput");
addNumbersButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputNumber = inputBox.value;
  if (inputNumber === "") {
    return;
  } else {
    bank.push(Number(inputNumber));
  }
  bankOutput.innerHTML = bank.join(" ");

  inputBox.value = "";
});

// sort 1
const even = [];
const odd = [];
const sort1Button = document.querySelector("#sort1");
const oddsOutput = document.querySelector("#oddNumbersFromBank");
const evensOutput = document.querySelector("#evenNumbersFromBank");
sort1Button.addEventListener("click", (event) => {
  event.preventDefault();
  if (bank.length === 0) {
    return;
    const firstNumber = Number(bank[0]);
  }
  if (firstNumber % 2 === 0) {
    even.push(firstNumber);
  } else {
    odd.push(firstNumber);
  }
  bank = bank.filter((number, index) => {
    return index != 0;
  });
  bankOutput.innerHTML = bank.join(" ");
  oddsOutput.innerHTML = odd.join(" ");
  evensOutput.innerHTML = even.join(" ");
});
// sort all
const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", (event) => {
  event.preventDefault();
  bank.forEach((number) => {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
    return accumulator;
  }, []);
  bank.length = 0;
  bankOutput.innerHTML = bank.join(" ");

  oddsOutput.innerHTML = odd.join(" ");
  evensOutput.innerHTML = even.join(" ");
});
