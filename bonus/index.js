let billArray = [265, 80, 560];
let billResults = [];
function calcTip(billValue) {
  // sätter avståndet mellan siffrorna
  if (billValue > 50 && billValue < 300) {
    // säger till JS att mellan 50-300 att lägga till 10%
    tip = billValue * 1.1;
  } else {
    // om det inte är 50-300 så lägger JS till 15%
    tip = billValue * 1.15;
  }
  // säger till JS att jag vill veta vad tip blir med return
  return tip;
}
// säger till JS att loopa 3x
for (let i = 0; i < 3; i++) {
  billResults[i] = calcTip(billArray[i]);
  console.log(billResults[i]);
}
