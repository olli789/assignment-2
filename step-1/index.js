let billAmount = 100;

function calcTip() {
  // sätter avståndet mellan siffrorna
  if (billAmount > 50 && billAmount < 300) {
    // säger till JS att mellan 50-300 att lägga till 10%
    tip = billAmount * 1.1;
  } else {
    // om det inte är 50-300 så lägger JS till 15%
    tip = billAmount * 1.15;
  }
  // säger till JS att jag vill veta vad fee blir med return
  return tip;
}
// säger till att JS ska utgå från billAmount vilket i detta fall blir 100
totalBill = calcTip(billAmount);

console.log(totalBill);
