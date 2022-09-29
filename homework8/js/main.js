//Завдання 1
// Створити масив, довжину та елементи якого задає користувач (через prompt). Елементами масиву повинні бути числа

const arrayLength = +prompt("Enter array length");
const userArray = [];
for(let i = 0; i < arrayLength; i++){
    userArray[i] = +prompt("Enter number");
}

console.log(userArray);

//Завдання 2
//Відсортувати масив за зростанням.

console.log(userArray.sort(function (start, finish){
    return start - finish;
}));

//Завдання 3
//Дано масив - список покупок. Кожен елемент масиву - це обʼєкт вигляду:
// {productName: 'bread', productPrice: 14.5, productQuantity: 2}.
// Мінімальний довжина такого масиву - 6

const products = [
    {
        productName: 'bread',
        productPrice: 14.5,
        productQuantity: 4
    },
    {
        productName: 'orange',
        productPrice: 8.7,
        productQuantity: 10
    },
    {
        productName: 'apple',
        productPrice: 4.3,
        productQuantity: 3
    },
    {
        productName: 'milk',
        productPrice: 32.10,
        productQuantity: 1
    },
    {
        productName: 'pasta',
        productPrice: 34.00,
        productQuantity: 3
    },
    {
        productName: 'cheese',
        productPrice: 25.70,
        productQuantity: 2
    }
]
console.log(products);

//Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі

const calculatePrice = (arr) => {
    if(arr === null){
        return 'Error! It`s null!';
    } else if(arr === undefined){
        return 'Error! It`s undefined!'
    } else if(arr.length === 0){
        return 'Error! Length of array is zero!'
    } else {
        let result = products.reduce(function (acc, obj) {
            return acc + obj.productPrice * obj.productQuantity}, 0);
        return `Sum is ${result}`
    }
}

calculatePrice(products);

//Порахувати найменшу кількість продукту, який потрібно купити

const searchMinNumber = (arr) => {
    if (arr === null) {
        return 'Error! It`s null!';
    } else if (arr === undefined) {
        return 'Error! It`s undefined!'
    } else if (arr.length === 0) {
        return 'Error! Length of array is zero!'
    } else {
        let min = Math.min(...arr.map(item => item.productQuantity));
        return `Min number of products is : ${min}`;
    }
}

searchMinNumber(products);

//Порахувати загальну кількість продуктів

const calculateNumber = (arr) => {
    if(arr === null){
        return 'Error! It`s null!';
    } else if(arr === undefined){
        return 'Error! It`s undefined!'
    } else if(arr.length === 0){
        return 'Error! Length of array is zero!'
    } else {
        let result = products.reduce(function (acc, obj) {
            return acc + obj.productQuantity}, 0);
        return `Number of all products: ${result}`;
    }
}

calculateNumber(products);

//Знайти найдорожчий продукт

const maxPrice = (arr) => {
    if(arr === null){
        return 'Error! It`s null!';
    } else if(arr === undefined){
        return 'Error! It`s undefined!'
    } else if(arr.length === 0){
        return 'Error! Length of array is zero!'
    } else {
        let max = Math.max(...arr.map(item => item.productPrice));
        let expensiveProduct = arr.find(item => item.productPrice === max).productName;

        return `The most expensive product costs : ${max}. This product is ${expensiveProduct}.`;
    }
}

maxPrice(products);

//Створити функцію, яка повинна додавати новий продукт в існуючий масив

const addObject = (nameProduct, priceProduct, quantityProduct) => {
    if (nameProduct === null || priceProduct === null || quantityProduct === null ||
        nameProduct === undefined || priceProduct === undefined || quantityProduct === undefined) {
        return 'Error! Value is null or undefined';
    } else if (typeof nameProduct !== 'string') {
        return 'Product name must be only String';
    } else if (typeof priceProduct !== 'number' || typeof quantityProduct !== 'number') {
        return 'Price and quantity of product must be only Number';
    } else if (priceProduct < 0 || quantityProduct < 0 ) {
        return 'Price and quantity of product must be positive';
    } else {
        return products.push({productName: nameProduct, productPrice: priceProduct, productQuantity: quantityProduct});
    }
}

addObject('apple', 12.00, 4);
console.log(products);

//Дані про новий продукт - користувач вводить із prompt

const addUserObject = () => {
    const userNameProduct = prompt("Enter name of product");
    const userPriceProduct = prompt("Enter price of this product");
    const userQuantityProduct = prompt("Enter quantity of this product");

    return addObject(userNameProduct, userPriceProduct, userQuantityProduct);
}

addUserObject();
console.log(products);

//Створити функцію, яка повинна видаляти конкретний продукт із існуючого масиву продуктів

const deleteProduct = (nameProduct) => {
    if(nameProduct === null || nameProduct === undefined){
        return 'Error! Value is null or undefined';
    } else if (typeof nameProduct !== 'string') {
        return 'Product name must be only String';
    } else{
        let indexProduct = products.findIndex(item => item.productName === nameProduct);
        if(indexProduct < 0){
            return 'Error! Index must be greater than 0.'
        } else {
            return products.splice(indexProduct, 1);
        }
    }
}

deleteProduct('pasta');

console.log(products);

//Дані про видалення такого продукту - користувач вводить із prompt лише назву

const deleteUserProduct = () => {
    const nameUserProduct = prompt("Enter the name of the product you want to remove");

    return deleteProduct(nameUserProduct);
}

deleteUserProduct();

//Завдання 4
//Дано масив [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]

const array = [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

//Знайти суму та кількість позитивних елементів

const calcSumPos = () => {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        if(array[i] > 0){
            count++;
        }
    }
    return `Sum: ${sum}.\nNumber of positive: ${count}`;
}

calcSumPos();

//Знайти мінімальний елемент масиву та його порядковий номер

const searchMin = () => {
    let min = Math.min(...array);
    let index = array.indexOf(min);
    return `Min number is ${min}. It's serial number is ${index}`;
}

searchMin();

//Знайти максимальний елемент масиву та його порядковий номер.

const searchMax = () => {
    let max = Math.max(...array);
    let index = array.indexOf(max);
    return `Max number is ${max}. It's serial number is ${index}`;
}

searchMax();

//Визначити кількість негативних елементів

const calcNegative = () =>{
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            count++;
        }
    }
    return `Number of negative: ${count}`;
}

calcNegative();

//Знайти кількість непарних позитивних елементів

const numberOddPositive = () => {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0 && array[i] % 2 !== 0 ){
            count++;
        }
    }
    return `Number of odd positive: ${count}`;
}

numberOddPositive();

//Знайти суму парних позитивних елементів

const sumEvenNumbers = () => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0 && array[i] % 2 === 0 ){
            sum += array[i];
        }
    }
    return `Sum of even positive elements is ${sum}`;
}

sumEvenNumbers();

//Знайти добуток позитивних елементів

const multiplicationPositive = () => {
    let multiplication = 1;
    for(let i = 0; i <array.length; i++){
        if(array[i] > 0){
            multiplication *= array[i];
        }
    }
    return `Result of multiplication of positive elements ${multiplication}`;
}

multiplicationPositive();