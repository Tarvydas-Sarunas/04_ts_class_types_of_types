// nusitaikyti i elementus

const form = document.getElementById('form') as HTMLFormElement | null;
const inputEl1 = document.getElementById('num1') as HTMLInputElement | null;
const inputEl2 = document.getElementById('num2') as HTMLInputElement | null;
const selectEl = document.getElementById('action') as HTMLSelectElement | null;
const pEl = document.getElementById('result-p') as HTMLSelectElement | null;

// formai uzdeti event listineri
form?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();

  if (!inputEl1 || !inputEl2 || !selectEl) return;
  const nm1: number = Number(inputEl1.value);
  const nm2: number = Number(inputEl2.value);
  const action = selectEl.value as CalcActions;

  if (!pEl) return;
  pEl.textContent = calculate(nm1, nm2, action).toString();
});
// pateikiant formaiatlikti veiksma su calculate

// 2.
// sukurti enum CalcActions kuris gali buti plius, minus, divid, multy
const enum CalcActions {
  Plus = '+',
  Minus = '-',
  Divide = '/',
  Multy = '*',
}

// 2.1. sukurti skaiciuotuva kuris priima 2 skaicius ir veiksma ir grazina rezultata
function calculate(num1: number, num2: number, action: CalcActions): number {
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

  let rez: number;
  switch (action) {
    case CalcActions.Plus:
      rez = num1 + num2;
      break;
    case CalcActions.Minus:
      rez = num1 - num2;
      break;
    case CalcActions.Divide:
      rez = num1 / num2;
      break;
    case CalcActions.Multy:
      rez = num1 * num2;
      break;
    default:
      console.warn('No action found');
      rez = 0;
  }
  return rez;
}

const rez = calculate(15, 3, CalcActions.Multy);
console.log('rez ===', rez);
