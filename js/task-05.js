"use strict";
let coastOfDelivery = 0;
let countryOfDelivery;
let countryName;
while (true) {
  countryOfDelivery = prompt("Введите название страны для оформления доставки");
  if (countryOfDelivery === null) {
    alert("Отменено пользователем!");
    break;
  } else if (countryOfDelivery.length === 0) {
    alert("Вы не ввели название страны");
    continue;
  } else {
    countryName = countryOfDelivery.toLowerCase();
  }
  switch (countryName) {
    case "китай":
      coastOfDelivery = 100;
      alert(
        `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
      );
      break;
    case "чили":
      coastOfDelivery = 250;
      alert(
        `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
      );
      break;
    case "австралия":
      coastOfDelivery = 170;
      alert(
        `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
      );
      break;
    case "индия":
      coastOfDelivery = 80;
      alert(
        `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
      );
      break;
    case "ямайка":
      coastOfDelivery = 120;
      alert(
        `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`
      );
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
