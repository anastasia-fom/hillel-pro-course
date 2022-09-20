//Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них

function minNumber(number1, number2, number3, number4) {
        return Math.min(number1, number2, number3, number4);
 }

 minNumber(5, 8, 23, -5);

//Написати функцію,
// яка приймає 2 аргументи та шукає найбільший спільний дільник для них.
// Якщо такого числа немає, то повідомляти про відсутність

function commonDenominator(number1, number2){
    let denominator = 0;
    for(let i = 1; i <= number1 && i <= number2; i++ ){
        if(number1 % i === 0 && number2 % i === 0){
            denominator = i;
        }
    }
    if(denominator === 0){
        return `This numbers don't have common denominator`;
    } else{
        return `Common denominator for ${number1} and ${number2} is ${denominator}`;
    }
}

commonDenominator(15,10); // 5

//Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне

function perfectNumber(num){
    let sum = 0;
    let temp;
    for(let i = 1; i < num - 1; i++){
        temp = num % i;
        if(temp === 0){
            sum +=i;
        }
    }
    if(num === sum){
        return num + " is perfect number";
    } else{
        return num + " is not perfect number";
    }
}

perfectNumber(6); // This is perfect number
perfectNumber(100); //This is not perfect number

//Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку.

function sumNumbers(number1, number2){
    let sum = 0;
    for(let i = number1; i<=number2; i++){
        sum += i;
    }
    return sum;
}

sumNumbers(-2, 10); //52

//Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт

function convertsTemperature(temperature){
    const firstConst = 1.8;
    const secondConst = 32;
    let answer = temperature * firstConst + secondConst;
    return `The ${temperature} °C is ${answer} °F`;
}

convertsTemperature(10); //50 °F
convertsTemperature(81); //177.8 °F

//Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40

function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber(40,0);

