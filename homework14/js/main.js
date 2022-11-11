//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
const dateInput = document.querySelector('.first-block__input');
const centuryButton = document.querySelector('.first-block__button');
const resultCentury = document.querySelector('.first-block__result');

function showCentury(stringOfYear){
    if(stringOfYear === '' || stringOfYear === ' '){
        alert('Field not be empty!');
    } else if(stringOfYear.length > 4){
        alert('Enter the year with no more than 4 digits')
    } else{
        const century = +stringOfYear.split('').slice(0,2).join('') + 1;
        resultCentury.innerHTML = `It's ${century}th`;
    }
}

centuryButton.addEventListener('click', function (event){
    event.target;
    showCentury(dateInput.value);
})

//Write a function that takes a string and outputs a strings of 1's and
// 0's where vowels become 1's and non-vowels become 0's.
// All non-vowels including non alpha characters (spaces,commas etc.)
// should be included.

const textInput = document.querySelector('.second-block__input');
const textButton = document.querySelector('.second-block__button');
const resultNewString = document.querySelector('.second-block__result');

function vowelOne(inputString){
    const vowels = ['a','e','i','o','u','y'];
    const consonants = ['b','c','d','f','g','j','k','l','m','n','p','q','s','t','v','x','z','h','r','w'];
    const symbols = ['.', ',', '-', ' ', '!', '`', '₴', '~', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=',
        '+', ';', ':', '?', '<', '>', '|', '/', '{', '}', '[', ']', '№', '"']
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let newString = '';
    if(inputString === '' || inputString === ' '){
        alert('Field not be empty!');
    } else {
        for (let i = 0; i < inputString.length; i++) {
            let char = inputString[i];
            if (vowels.join('').includes(char) || vowels.join('').toUpperCase().includes(char)){
                newString += 1;
            } else if(consonants.join('').includes(char) || consonants.join('').toUpperCase().includes(char)
                || symbols.join('').includes(char) || numbers.join('').includes(char)){
                newString += 0;
            }
        }
        resultNewString.innerHTML = `${newString}`;
    }
}

textButton.addEventListener('click', function (event){
    event.target;
    vowelOne(textInput.value);
})

//Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter
// words reversed. Strings passed in will consist of only letters
// and spaces. Spaces will be included only when more than one
// word is present.

const inputString = document.querySelector('.third-block__input');
const changeStringButton = document.querySelector('.third-block__button');
const resultChangeString = document.querySelector('.third-block__result');

function spinWords(string){
    let words = string.split(' ');
    let resultString = '';
    if(string === '' || string === ' '){
        alert('Field not be empty!');
    } else{
        for(let i = 0; i < words.length; i++){
            if(words[i].length >= 5){
                resultString += ` ${words[i].split('').reverse().join('')} `;
            } else{
                resultString += ` ${words[i]} `
            }
        }
        resultChangeString.innerHTML = `${resultString}`;
    }
}

changeStringButton.addEventListener('click', function (event){
    event.target;
    spinWords(inputString.value);
})

// You are given a string of space separated numbers, and have to return the highest and lowest number.

const inputNumbers = document.querySelector('.four-block__input');
const searchNumberButton = document.querySelector('.four-block__button');
const resultSearchNumber = document.querySelector('.four-block__result');

function highAndLow(string){
    const inputString = string.split(' ');
    const minNumber = Math.min(...inputString);
    const maxNumber = Math.max(...inputString);
    if(string === '' || string === ' '){
        alert('Field not be empty!');
    } else{
        resultSearchNumber.innerHTML = `Min number: ${minNumber}. Max number: ${maxNumber}.`;
    }
}

searchNumberButton.addEventListener('click', function (event){
    event.target;
    highAndLow(inputNumbers.value);
})

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const inputPhoneNumber = document.querySelector('.five-block__input');
const createPhoneNumberButton = document.querySelector('.five-block__button');
const showPhoneNumber = document.querySelector('.five-block__result');

function createPhoneNumber(numbers){
    if(numbers === '' || numbers === ' '){
        alert('Field not be empty!');
    }else if(numbers.length !== 10){
        alert('This field must have only 10 elements!')
    } else {
        showPhoneNumber.innerHTML = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 11)}`;
    }
}

createPhoneNumberButton.addEventListener('click', function (event){
    event.target;
    createPhoneNumber(inputPhoneNumber.value);
})