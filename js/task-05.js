"use strict";
let coastOfDelivery = 0;
let countryOfDelivery;
let countryName;
let countryNameToSpell;
let rezultMessage;

countryOfDelivery = prompt("Введите название страны для оформления доставки");
if (countryOfDelivery === null) {
  rezultMessage = "Отменено пользователем!";
} else if (countryOfDelivery.length === 0) {
  rezultMessage = "Вы не ввели название страны";
} else {
  countryName = countryOfDelivery.toLowerCase();
  countryNameToSpell = countryName[0].toUpperCase() + countryName.substr(1);
}
if (countryName) {
  switch (countryName) {
    case "китай":
      coastOfDelivery = 100;
      break;
    case "чили":
      coastOfDelivery = 250;
      break;
    case "австралия":
      coastOfDelivery = 170;
      break;
    case "индия":
      coastOfDelivery = 80;
      break;
    case "ямайка":
      coastOfDelivery = 120;
      break;
    default:
      rezultMessage = "В вашей стране доставка не доступна";
      break;
  }
  if (coastOfDelivery !== 0) {
    rezultMessage = `Доставка в ${countryNameToSpell} будет стоить ${coastOfDelivery} кредитов.`;
  }
}
alert(rezultMessage);

// Alternativ realize
// let coastOfDelivery = 0;
// let countryOfDelivery;
// let countryName;
// while (true) {
//   countryOfDelivery = prompt("Введите название страны для оформления доставки");
//   if (countryOfDelivery === null) {
//     alert("Отменено пользователем!");
//     break;
//   } else if (countryOfDelivery.length === 0) {
//     alert("Вы не ввели название страны");
//     continue;
//   } else {
//     countryName = countryOfDelivery.toLowerCase();
//   }
//   switch (countryName) {
//     case "китай":
//       coastOfDelivery = 100;
//       alert(
//         `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
//       );
//       break;
//     case "чили":
//       coastOfDelivery = 250;
//       alert(
//         `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
//       );
//       break;
//     case "австралия":
//       coastOfDelivery = 170;
//       alert(
//         `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
//       );
//       break;
//     case "индия":
//       coastOfDelivery = 80;
//       alert(
//         `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
//       );
//       break;
//     case "ямайка":
//       coastOfDelivery = 120;
//       alert(
//         `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
//       );
//       break;
//     default:
//       alert("В вашей стране доставка не доступна");
//   }
// }
