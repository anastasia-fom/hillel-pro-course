//Запитати у користувача 15 чисел і обрахувати, скільки серед них додатніх, від’ємних і нулів.
// Також визначатити кількість парних і непарних. Вивести статистику через console у зрозумілому форматі.

let countPaired = 0;
let countUnpaired = 0;
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;

for(let i = 1; i <= 15; i++){
    const userNumbers = +prompt(`Please, enter ${i} number`);

    if(userNumbers % 2 === 0){
        countPaired++;
    } else {
        countUnpaired++;
    }
    if(userNumbers > 0) {
        positiveNumbers++
    } else if(userNumbers < 0) {
        negativeNumbers++;
    } else if(userNumbers === 0){
        zeroNumbers++
    }
}

console.log(`The number of paired numbers is ${countPaired}`);
console.log(`The number of unpaired numbers is ${countUnpaired}`);
console.log(`The number of positive numbers is ${positiveNumbers}`);
console.log(`The number of negative numbers is ${negativeNumbers}`);
console.log(`The number of zero is ${zeroNumbers}`);


//Вивести в console числа, від 10 до 25 з кроком 0.5 (10 й 25 включно)

for(let i = 10; i<=25; i+=0.5){
    console.log("Number", i);
}


//Запитати та зберегти число введене із prompt. Визначати чи це число просте

const userNumber = +prompt("Enter your number");

max = Math.sqrt(userNumber);

let isPrimeNumber = true;

for(let i = 2; i <= max; i ++){
    if(userNumber % i === 0 ){
        isPrimeNumber = false;
    }
}

switch(isPrimeNumber){
    case true:
        console.log(`The number ${userNumber} is prime`);
        break;
    case false:
        console.log(`The number ${userNumber} is composite`);
        break;
}


//Запитати та зберегти суму покупки введене із prompt.
// Обрахувати знижку та повідомити користувачу значення знижки.
// Якщо сума покупки до 100 UAН - знижка 3%;
// якщо сума покупки до 200 UAH - знижка 5%;
// якщо сума покупки перевищує 200 UAH - знижка 7%

const userSum = +prompt("Enter your sum");
const firstDiscount = 0.03;
const secondDiscount = 0.05;
const thirdDiscount = 0.07;
let discount;
if(userSum <= 100){
    discount = userSum * firstDiscount;
    console.log(`Your sum - ${userSum} UAH. 
    Your 3% discount is ${discount.toFixed(2)} UAH. 
    You will pay ${userSum - discount.toFixed(2)} UAH.`)
} else if(userSum < 200){
    discount = userSum * secondDiscount;
    console.log(`Your sum - ${userSum} UAH. 
    Your 5% discount is ${discount.toFixed(2)} UAH. 
    You will pay ${userSum - discount.toFixed(2)} UAH.`)
} else if(userSum > 200){
    discount = userSum * thirdDiscount;
    console.log(`Your sum - ${userSum} UAH. 
    Your 7% discount is ${discount.toFixed(2)} UAH. 
    You will pay ${userSum - discount.toFixed(2)} UAH.`)
}


//Вивести таблицю множення чисел від 2 до 9 у зрозумілому форматі

for(let i = 2; i < 10; i++){
    console.log(`2 * ${i} = ${2 * i}`);
}


//Умова: один долар коштує 36,76 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const USD = 36.76;
for( let i = 10; i <=100; i+=10){
    console.log(`${i} USD = ${Intl.NumberFormat('ua').format(Math.floor(i * USD))} UAH`);
}



