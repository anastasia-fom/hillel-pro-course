const testObject = (obj) => { //перевірка на порожній об'єкт
    if (typeof obj === 'object' && obj !== null && obj !== undefined) {
        return Object.assign({}, obj);
    } else {
        return 'Error to show object!';
    }
}

//Завдання 1
//Cтворити функцію, яка створює та реєструє нову команду у автопробізі.

function newAuto(teamName, driver, year, auto, sponsor, allowed){
    const team = {
        nameTeam: teamName,
        nameDriver: driver,
        yearOfBirth: year,
        carBrand: auto,
        sponsorOfTeam: sponsor,
        allowed: allowed
    }
    return testObject(team);
}

newAuto('Star', 'Tom', '2000',
    'Toyota', 'Harry Weal', true);

//Завдання 2
//Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт.

for(let i = 1; i <= 2; i++){
    const userLogin = prompt("Enter your login");
    const userPassword = prompt("Enter your password");
    const userCity = prompt("Enter your city");
    const userCountry = prompt("Enter your country");
    const userSex = prompt("Enter your sex");
    const userAge = +prompt("Enter your age");

    const user = {
        userLogin: userLogin,
        userPassword: userPassword,
        userCity: userCity,
        userCountry: userCountry,
        userSex: userSex,
        userAge: userAge
    }

    //Завдання 3
    //Створити функцію, яка буде міняти дані в конкретного користувача створеного пунктом вище.

    function changeUserCity(userLogin, city){
        if(userLogin === null || userLogin === undefined || city === null || city === undefined){//перевірка змінних
            return 'Your value is null/undefined'
        }

        if(userLogin === user.userLogin){
            user.userCity =  city;
        }
        return user;
    }

    changeUserCity('user_2','Kherson');
}


//Завдання 4
//Створити об'єкт cтудента.

const student = {
    name: "Olivia",
    surname: "Blosom",
    age: 20,
    course: 4,
    greeting: function (){
        console.log('Hi. everyone!');
    },
    addHomework: function (){
        console.log('Sending my howework... Please, wait');
    }
}

testObject(student);

//Завдання 5
//Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.
function isEmpty(obj){
    if(Object.values(obj) == null){
        return true;
    } else{
        return false;
    }
}

isEmpty(student);

//Завдання 6
// Створити об’єкт для зберігання виручки команди продавців.

const sellers = {
    Taras: 2000,
    Marta: 10,
    Ivan: 1200,
    Petro: 400,
    Roma: 366,
    Alina: 829
}

testObject(sellers);

//Завдання 7
// Створити фукнцію, яка працює з цим обʼєктом та обчислює суму всіх виручок та виводить результат через сonsole.log

const sumSellers = () => {
    let sum = 0;
    for(let property in sellers){
        sum += sellers[property];
    }
    console.log(`Sum of all sellers: ${sum}`);
}

sumSellers();


// Завдання 8
// Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця з найменшою виручкою та виводить результат через сonsole.log у зрозумілому форматі
const minSeller = () => {
    const values = Object.values(sellers);
    const min = Math.min(...values);
    const seller = Object.keys(sellers).filter(k => sellers[k] === min);

    if(values === null || seller === null || values === undefined || seller === undefined){ //перевірка
        return 'The value has null/undefined.';
    } else if(min < 0){
        return 'Error! Revenue cannot be negative!';
    }

    console.log(`The seller with the lowest revenue is ${seller}. Revenue is ${min}`);
}

minSeller();


// Завдання 9
// Створити фукнцію, яка знаходить продавця з найбільшою виручкою та виводить результат через сonsole.log у зрозумілому форматі

const maxSeller = () => {
    const values = Object.values(sellers);
    const max = Math.max(...values);
    const seller = Object.keys(sellers).filter(k => sellers[k] === max);

    if(values === null || seller === null || values === undefined || seller === undefined){ //перевірка
        return 'The value has null/undefined.';
    } else if(max < 0){
        return 'Error! Revenue cannot be negative!';
    }

    console.log(`The seller with the highest revenue is ${seller}. Revenue is ${max}`);
};

maxSeller();


//Завдання 10
// Створити фукнцію, яка випадковим чином вибирає продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі

const randomSeller = () => {
    let keys = Object.keys(sellers);
    let randomValue = sellers[keys[ keys.length * Math.random() << 0]];
    const seller = Object.keys(sellers).filter(k => sellers[k] === randomValue);

    if(randomValue === null || randomValue === undefined){ //перевірка
        return 'The value has null/undefined.';
    }

    console.log(`Hi, ${seller}! Congratulations, you are the seller of the month!`);
};

randomSeller();


