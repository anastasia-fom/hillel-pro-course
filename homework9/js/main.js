//Створити функцію-конструктор Людини. Властивості, які будуть описувати екземпляр
// Людини - ім'я, вік, стать, національність, країна, список країн для подорожей.
// Створити універсальні функції - знайомство, прокидатися, засинати й список країн, які
// Людина хоче відвідати. Роботу цих функцій можна виводити через console.log.
// Але в кожній з функцій повинно використовуватись якомога більше характеристик конкретної
// Людини на якій ця функція викликається (підказка: тут треба використати call/apply)
function People(name, age, sex, nationality, country, listCountry){
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.country = country;
    this.listCountry = listCountry;
}

const hello = function () {
    console.log(`Hello, I'm ${this.name}. I'm ${this.age} years old. In addition, I'm ${this.nationality}.\nNice to meet you!`);
}

const wakeup = function (){
    console.log(`Good morning! ${this.name} wake up now!`);
}

const sleep = function (){
    console.log(`Dear ${this.nationality}, you must sleep at 11 p.m. o'clock.`);
}

const list = function (){

    console.log(`I'm from ${this.country} and I want visit ${this.listCountry}`);
}

let person = new People('Alise', 28, `female`, `ukrainian`, `Ukraine`, ['Korea', 'Germany', 'Italy']);

hello.bind(person)(person.name, person.age, person.nationality);
wakeup.apply(person, [person.name]);
sleep.apply(person, [person.nationality]);
list.call(person, [person.country, person.listCountry]);


//Створити власну реалізацію методу .bind (підказка: в кінці треба помістити цю власну функцію у прототип -
// Function.prototype.myOwnBind = function () { [тут_код_кастомного_bind] }

const cat = {
    name: "Alice",
    breed: "maine coon",
}

function description(name, breed) {
    console.log(`Cat name is ${this.name}. It is ${this.breed}.`);
}

myOwnBind = function (func, context) {
    return func.apply(context);
}

myOwnBind(description, cat);


//Cтворити функцію, котра приймає 2 параметри - об'єкти.
// Функція повинна перевіряти чи ці 2 обʼєкти абсолютно ідентичні та
// повертає результат у зрозумілому форматі
const dog1 = {
    breed: "buldog",
    name: "Rex",
};

const dog2 = {
    breed: "buldog",
    name: "Rex",
};

const dog3 ={
    breed: "buldog",
    name: "Monica"
}

function checkObject(object1, object2){
    const property1 = Object.getOwnPropertyNames(object1);
    const property2 = Object.getOwnPropertyNames(object2);

    if (property1.length !== property2.length) {
        return false;
    } else if(object1[property1] !== object2[property2]){
        return false;
    } else if(JSON.stringify(object1) !== JSON.stringify(object2)){
        return false;
    } else{
        return true;
    }
}

checkObject(dog1, dog2); //true
checkObject(dog1, dog3); //false


//Створіть функцію-конструктор Calculator, який створює об’єкти з чотирма (або трьома) методами:
// enterData - запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// calculateSum() повертає суму цих властивостей.
// calculateNSD() повертає результат пошуку НСД
// calculateNSK() повертає результат пошуку НСК

function Calculator(){

    this.enterData = function() {
        this.a = +prompt("Enter a");
        this.b = +prompt("Enter b");
    }

    this.calculateSum = function (){
        return this.a + this.b;
    }

    this.calculateNSD = function (){
        let denominator = 0;
        for(let i = 0; i <= this.a && i <= this.b; i++){
            if(this.a % i === 0 && this.b % i === 0){
                denominator = i;
            }
        }
        if(denominator === 0){
            return false;
        } else{
            return denominator;
        }
    }

    this.calculateNSK = function (){
        return (this.a * this.b) / this.calculateNSD();
    }
}

let calculator = new Calculator();
calculator.enterData();
console.log(`Sum: ${calculator.calculateSum()}\nNSD: ${calculator.calculateNSD()}\nNSK: ${calculator.calculateNSK()}`);