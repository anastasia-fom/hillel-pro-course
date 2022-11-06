function fieldNotEmpty(field){
    if(field === '' || field === ' '){
        alert('Field not be empty!');
    }
}

//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
const dateInput = document.querySelector('.first-block__input');
const centuryButton = document.querySelector('.first-block__button');
const resultCentury = document.querySelector('.first-block__result');

function showCentury(stringOfYear){
    if(stringOfYear === '' || stringOfYear === ' '){
        alert('Field not be empty!');
    } else
    if(stringOfYear !== 4){
        alert('Enter a year greater than 999')
    } else
    if(stringOfYear < 1100){
        resultCentury.innerHTML = `It's 11th`;
    } else if(stringOfYear < 1200){
        resultCentury.innerHTML = `It's 12th`;
    } else if(stringOfYear < 1300){
        resultCentury.innerHTML = `It's 13th`;
    } else if(stringOfYear < 1400){
        resultCentury.innerHTML = `It's 14th`;
    } else if(stringOfYear < 1500){
        resultCentury.innerHTML = `It's 15th`;
    } else if(stringOfYear < 1600){
        resultCentury.innerHTML = `It's 16th`;
    } else if(stringOfYear < 1700){
        resultCentury.innerHTML = `It's 17th`;
    } else if(stringOfYear < 1800){
        resultCentury.innerHTML = `It's 18th`;
    } else if(stringOfYear < 1900){
        resultCentury.innerHTML = `It's 19th`;
    } else if(stringOfYear < 2000){
        resultCentury.innerHTML = `It's 20th`;
    } else if(stringOfYear < 2100){
        resultCentury.innerHTML = `It's 21th`;
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
    let vowels = 'aeiouy';
    let consonants = 'bcdfgklmnpqstvxzhrw';
    let symbols = '.,- '
    let newString = '';
    fieldNotEmpty(inputString);

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (vowels.includes(char)) {
            newString += 1;
        } else if(consonants.includes(char)){
            newString += 0;
        } else if(symbols.includes(char)){
            newString += 0;
        }
    }
    resultNewString.innerHTML = `${newString}`;
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
    let reverseWord = '';
    let resultString = '';
    fieldNotEmpty(string)
    for(let i = 0; i < words.length; i++){
        if(words[i].length >= 5){
            reverseWord = words[i].split('').reverse();
            resultString += ` ${reverseWord.join('')} `;
        } else{
            resultString += ` ${words[i]} `
        }
    }

    resultChangeString.innerHTML = words.length <= 2 ? `${resultString.split(' ').join('')}` : `${resultString}`;
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
    fieldNotEmpty(string);
    let inputString = string.split(' ');
    let minNumber = Math.min(...inputString);
    let maxNumber = Math.max(...inputString);
    resultSearchNumber.innerHTML = `Min number: ${minNumber}. Max number: ${maxNumber}.`;
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
    }else
    if(numbers.length !== 10){
        alert('This field must have only 10 elements!')
    } else {
        showPhoneNumber.innerHTML = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 11)}`;
    }
}

createPhoneNumberButton.addEventListener('click', function (event){
    event.target;
    createPhoneNumber(inputPhoneNumber.value);
})