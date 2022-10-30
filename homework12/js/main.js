//Завдання 1. Калькулятор
const inputResult = document.querySelector('.calculator__result');
const btnReset = document.querySelector('.btn-reset');
const btnNumber = document.querySelectorAll('.calculator-number');
const btnResult = document.querySelector('.calculator-result');
const btnDivide = document.querySelector('.calculator-divide');
const btnMultiply = document.querySelector('.calculator-multiply')
const btnPlus = document.querySelector('.calculator-plus');
const btnMinus = document.querySelector('.calculator-minus');

const message = document.createElement('span');
message.innerHTML = 'Not a number';

btnReset.addEventListener('click', function (event){
    event.target;
    inputResult.value = '';
});

for(let i = 0; i < btnNumber.length; i++){
    btnNumber[i].addEventListener('click', function (event){
        event.target;
        inputResult.value += this.innerHTML;
    })
}

btnDivide.addEventListener('click', function (event){
    event.target;
    inputResult.value += this.innerHTML;
})

btnMultiply.addEventListener('click', function (event){
    event.target;
    inputResult.value += this.innerHTML;
})

btnMinus.addEventListener('click', function (event){
    event.target;
    inputResult.value += this.innerHTML;
})

btnPlus.addEventListener('click', function (event){
    event.target;
    inputResult.value += this.innerHTML;
})

btnResult.addEventListener('click', function(event){
    event.target;
    if(inputResult.value.split('').includes('.')){
        const countDot = inputResult.value.split('.').length - 1;
        if(countDot > 2){
            inputResult.value = message.innerHTML;
        }
    } else if(inputResult.value.includes('/0')){
        inputResult.value = message.innerHTML;
    }
    else{
        inputResult.value = Math.floor(eval(inputResult.value) * 100) / 100;
    }
})

//Завдання 2. To do list

const ulList = document.querySelector('.todo-list');

const buttonAdd = document.querySelector('.btn-add');
const todoText = document.querySelector('.todo-input');
const buttonDelete = document.querySelector('.btn-todo-delete');

buttonAdd.addEventListener('click', (event)=>{
    event.preventDefault();
    const liElement = document.createElement('li');
    liElement.className = 'todo-element';
    const pText = document.createElement('p');
    const deleteTodo = document.createElement('button');
    deleteTodo.innerHTML = 'X';
    pText.innerHTML = todoText.value;
    liElement.appendChild(pText);
    liElement.appendChild(deleteTodo);
    ulList.appendChild(liElement);
})

buttonDelete.addEventListener('click', (event) =>{
    event.preventDefault();
    const liElementDel = document.querySelector('.todo-element');
    ulList.removeChild(liElementDel);
})









