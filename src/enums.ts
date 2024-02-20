// sukurti enum kuriame galimos reiksmes yra baltijos salys
const enum BaltijosSalys {
  Lt = 'Lietuva',
  Lv = 'Latvija',
  Est = 'Estija',
  Fr = 'Prancija',
}

// sukurti kintamaji kuriame bus stringas ir jo reiksme
const asGyvenu: string = `As gyvenu ${BaltijosSalys.Fr}`;
// as gyvenu [baltijos salis is enum]
console.log('asGyvenu ===', asGyvenu);
