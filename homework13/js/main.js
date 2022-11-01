//Завдання 1. У інпут-полі користувач може ввести кількість відповідних секунд появи повідомлення

const inputTime = document.querySelector('.write-number');
const buttonTimeoutMessage = document.querySelector('.btn-timeout-message');

const messageTimeout = () =>{
    alert(`russia and russian have left till they disappear.`);
}

buttonTimeoutMessage.addEventListener('click', (event)=>{
    event.preventDefault();
    if(inputTime.value === ''){
        alert('Поле не може бути пустим!');
    } else if(inputTime.value.split('-')){
        alert('Час не може бути від`ємним!');
    } else{
        setTimeout(messageTimeout, inputTime.value);
    }
})

//Завдання 2.  Відобразити таймер, до дати яку обрав користувач у вигляді
// "До старту кампанії залишилосьРОКИ:МІСЯЦІ:ГОДИНИ:ХВИЛИНИ"

const buttonTimeoutData = document.querySelector('.btn-timeout-date');
const inputDate = document.querySelector('.write-date');

function countTime(){
    const today = new Date();
    const timerDate = new Date(inputDate.value);
    let dif = timerDate - today;
    let years = Math.floor(dif / 31536000000)
    let month = Math.floor(dif / 2419200000);
    let hours = Math.floor( dif/ 1000 / 60 / 60) % 24;
    let minutes = Math.floor(dif/ 1000 / 60) % 60;

    document.querySelector('.time-out-date__years').innerHTML = `${years}`;
    document.querySelector('.time-out-date__month').innerHTML = `${month}`;
    document.querySelector('.time-out-date__hours').innerHTML = `${hours}`;
    document.querySelector('.time-out-date__minutes').innerHTML = `${minutes}`;
}

buttonTimeoutData.addEventListener('click', (event) =>{
    event.preventDefault();
    setInterval(countTime, 1000);
})


//Завдання 3. 3 select-поля та кнопка Calculate.
// Поле 1 - модель телефону.
// Поле 2 - кількість оперативно] пам'яті.
// Поле 3 - обʼєм вбудованої пам'яті.
// При натисканні на кнопку - вивести ціну обраного телефону.

const blockCalculate = document.querySelector('.calculate');
const selectPhone = document.querySelector('.calculate__phone');
const selectRAM = document.querySelector('.calculate__ram');
const selectBuiltin = document.querySelector('.calculate__builtin');
const buttonCalculate = document.querySelector('.calculate__button');

function calculateSum(){
    let sum = 0;
    if(selectPhone.value === 'Iphone'){
        sum = 200;
    } else if(selectPhone.value === 'Samsung'){
        sum = 100;
    } else if(selectPhone.value === 'Pixel'){
        sum = 150;
    } else if(selectPhone.value === 'OnePlus'){
        sum = 90;
    }

    if(selectRAM.value === '2'){
        sum += 50;
    } else if(selectRAM.value === '4'){
        sum += 100;
    } else if(selectRAM.value === '6'){
        sum += 200;
    } else if(selectRAM.value === '8'){
        sum += 300;
    }

    if(selectBuiltin.value === '64'){
        sum += 50;
    } else if(selectBuiltin.value === '128'){
        sum += 100;
    } else if(selectBuiltin.value === '256'){
        sum += 150;
    } else if(selectBuiltin.value === '512'){
        sum += 200;
    }

    const sumOnPhone = document.createElement('p');
    sumOnPhone.className = 'calculate__result';
    sumOnPhone.innerHTML = `Your phone is ${selectPhone.value} which has ${selectRAM.value} of RAM and ${selectBuiltin.value} of built in memory.<br> Price: ${sum}$\n`;
    blockCalculate.appendChild(sumOnPhone);
}

buttonCalculate.addEventListener('click', (event)=>{
    event.target;
    calculateSum();
})
