//Додати 0.1 та 0.2 так, що був правильний математичний результат
console.log("Sum:", Math.floor((0.1 + 0.2) * 100) / 100);


//Авторизація користувача

const userLogin = prompt("Enter your login");
const userPassword = prompt("Enter your password");

if(userLogin === 'admin' && userPassword === '2pass33210'){
    console.log("You have successfully logged in!");
}  else if(userLogin !== 'admin' && userPassword !== '2pass33210'){
    console.log("Such a user does not have access to the admin panel");
} else if(userLogin !== 'admin'){
    console.log("You entered your username or password incorrectly");
} else if(userPassword !== '2pass33210'){
    console.log("You entered your username or password incorrectly");
}


//Обрання продуктів користувачем

const userMoney = +prompt("Скільки в вас грошей?");

console.log("Кавун: 21 грн\n Морква: 8 грн\n Картопля: 12 грн\n Яблука: 15 грн");

const userWish = prompt("Що б ви хотіли придбати");

if(userMoney < 8){
    console.log("На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту");
} else if(userWish === 'Кавун' && userMoney < 21){
    console.log(`У вас недостатньо коштів, для купівлі хоча б 1 шт. кавуна`);
} else if(userWish === 'Кавун' && userMoney >= 21){
    let amount = Math.floor(userMoney / 21);
    let spent = 21 * amount;
    let balance = userMoney - spent;
    console.log(`За ${userMoney} грн. Ви можете придбати ${amount} шт даного продукту. У Вас залишиться ${balance} грн`);
} else if(userWish === 'Морква' && userMoney >= 8){
    let amount = Math.floor(userMoney / 8);
    let spent = 8 * amount;
    let balance = userMoney - spent;
    console.log(`За ${userMoney} грн. Ви можете придбати ${amount} шт даного продукту. У Вас залишиться ${balance} грн`);
} else if(userWish === 'Картопля' && userMoney < 12){
    console.log(`У вас недостатньо коштів, для купівлі хоча б 1 шт. картоплі`);
} else if(userWish === 'Картопля' && userMoney >= 12){
    let amount = Math.floor(userMoney / 12);
    let spent = 12 * amount;
    let balance = userMoney - spent;
    console.log(`За ${userMoney} грн. Ви можете придбати ${amount} шт даного продукту. У Вас залишиться ${balance} грн`);
} else if(userWish === 'Яблука' && userMoney < 15){
    console.log(`У вас недостатньо коштів, для купівлі хоча б 1 шт. яблук`);
} else if(userWish === 'Яблука' && userMoney >= 15){
    let amount = Math.floor(userMoney / 15);
    let spent = 15 * amount;
    let balance = userMoney - spent;
    console.log(`За ${userMoney} грн. Ви можете придбати ${amount} шт даного продукту. У Вас залишиться ${balance} грн`);
}


//Чи існує трикутник?

const a = +prompt("Введіть довжину першої сторони трикутника");
const b = +prompt("Введіть довжину другої сторони трикутника");
const c = +prompt("Введіть довжину третьої сторони трикутника");

a + b > c && a + c > b && b + c > a ? console.log("Такий трикутник існує") : console.log("Такий трикутник не існує");

//Обрахувати значення наступних виразів

2 && 0 && 3 || true && false // false

false || " " || 3 && true // true

1 && 1000 && '0' || 0 && 'Bob' // 'Bob'

-1 || 0 || 0 && "" || 1010 // 1010