"use strict";
// nusitaikyti i elementus
const form = document.getElementById('form');
const inputEl1 = document.getElementById('num1');
const inputEl2 = document.getElementById('num2');
const selectEl = document.getElementById('action');
const pEl = document.getElementById('result-p');
// formai uzdeti event listineri
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!inputEl1 || !inputEl2 || !selectEl)
        return;
    const nm1 = Number(inputEl1.value);
    const nm2 = Number(inputEl2.value);
    const action = selectEl.value;
    if (!pEl)
        return;
    pEl.textContent = calculate(nm1, nm2, action).toString();
});
// 2.1. sukurti skaiciuotuva kuris priima 2 skaicius ir veiksma ir grazina rezultata
function calculate(num1, num2, action) {
    // apskaiciavimas
    // if (action === 'plus') {
    //   return num1 + num2;
    // } else if (action === 'minus') {
    //   return num1 - num2;
    // } else if (action === 'divide') {
    //   return num1 / num2;
    // } else if (action === 'multiply') {
    //   return num1 * num2;
    // }
    let rez;
    switch (action) {
        case "+" /* CalcActions.Plus */:
            rez = num1 + num2;
            break;
        case "-" /* CalcActions.Minus */:
            rez = num1 - num2;
            break;
        case "/" /* CalcActions.Divide */:
            rez = num1 / num2;
            break;
        case "*" /* CalcActions.Multy */:
            rez = num1 * num2;
            break;
        default:
            console.warn('No action found');
            rez = 0;
    }
    return rez;
}
const rez = calculate(15, 3, "*" /* CalcActions.Multy */);
console.log('rez ===', rez);
