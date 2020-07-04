"use strict";
let userMessage;
let coastOfDelivery = 0;
let countryOfDelivery = prompt(
  "Введите название страны для оформления доставки"
);
let countryName = countryOfDelivery.toLowerCase();
switch (countryName) {
  case "китай":
    coastOfDelivery = 100;
    userMessage = `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`;
    break;
  case "чили":
    coastOfDelivery = 250;
    userMessage = `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`;
    break;
  case "австралия":
    coastOfDelivery = 170;
    userMessage = `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`;
    break;
  case "индия":
    coastOfDelivery = 80;
    userMessage = `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`;
    break;
  case "ямайка":
    coastOfDelivery = 120;
    userMessage = `Доставка в ${countryName} будет стоить ${coastOfDelivery} кредитов.`;
    break;
  default:
    userMessage = "В вашей стране доставка не доступна";
}
alert(userMessage);
