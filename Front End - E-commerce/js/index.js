let currentNumber = 1;
const handleAddition = (e) => {
  e.preventDefault();
  currentNumber++;
  updateNumber();
};
const handleSubtraction = (e) => {
  e.preventDefault();
  currentNumber = currentNumber > 1 ? currentNumber - 1 : 1;
  updateNumber();
};

let buyQuantity = document.querySelector(".form-control.quantity");
const updateNumber = () => {
  const number = currentNumber < 10 ? "0" + currentNumber : currentNumber;
  buyQuantity.value = number;
  updateSummary();
};

const updateSummary = () => {
  let prodAmount = document.querySelector(".prodAmount");
  let prodTotalAmount = document.querySelector(".prodTotalAmount");
  let totalAmountCont = document.querySelector(".totalAmount");
  totalAmount = currentNumber * Number(prodAmount.textContent);
  prodTotalAmount.textContent = String(totalAmount);
  totalAmountCont.textContent = totalAmount + 5;
};

document
  .querySelector(".mainBtn.subtract")
  .addEventListener("click", handleSubtraction);
document
  .querySelector(".mainBtn.add")
  .addEventListener("click", handleAddition);

console.log("doi");
