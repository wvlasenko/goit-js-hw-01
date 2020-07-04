"use strict";
const credit = 23580;
const pricePerDroid = 3000;
let quantityOfDroids;
let totalPrice;
let messageToUser;
let creditBalance;
let userInput = prompt("Какое количество дроидов Вы желаете преобрести?");
quantityOfDroids = Number(userInput);
if (userInput === null) {
  messageToUser = "Отменено пользователем!";
} else if (quantityOfDroids > 0) {
  totalPrice = quantityOfDroids * pricePerDroid;
  if (totalPrice > credit) {
    messageToUser = "Недостаточно средств на счету!";
  } else {
    creditBalance = credit - totalPrice;
    messageToUser = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${creditBalance} кредитов  `;
  }
} else {
  messageToUser = "Вы не купили ни одного дроида";
}
alert(messageToUser);
