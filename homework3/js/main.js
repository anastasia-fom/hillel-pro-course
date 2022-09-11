const userName = prompt("Яке Ваше імʼя?");
const userSurname = prompt ("Яке Ваше прізвище?");
const userNumber = +prompt("Яке Ваше улюблене число?");

console.log(`Вітаю, ${userName} ${userSurname}!Ваше улюблене число - ${userNumber}`);

const firstNumber = +prompt("Введіть перше число");
const secondNumber = +prompt("Введіть друге число");

console.log(`Сума: ${firstNumber + secondNumber}`);
console.log(`Різниця: ${firstNumber - secondNumber}`);
console.log(`Добуток: ${firstNumber * secondNumber}`);
console.log(`Ділення: ${firstNumber / secondNumber}`);

const userYear = +prompt("В якому році Ви народились?");
let userAge = 2022 - userYear;
console.log(`Ваш вік: ${userAge}`);

let number1 = 240;
let number2 = 140;
console.log(`Остача від ділення числа ${number1} на число ${number2} рівна ${number1 % number2}`);


const userNumber2 = +prompt("Введіть будь-яке число");
console.log(`Ваше число: ${userNumber2}. Чи парне воно? ${userNumber2 % 2 == 0}`);