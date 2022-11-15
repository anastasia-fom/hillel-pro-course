const API_KEY = 'uFHaNP9dBxuTVU0PU0Ek2aZ4alfaJFPi';
const locationCode = [324561, 324505, 323903, 322162, 325343, 323037, 325523, 326609, 321985, 328328, 274663, 349727];
let locationKey;

const optionLocation = document.querySelector('.weather__location');
const buttonGetWeather = document.querySelector('.weather__btn');

function getLocationKey(){
    switch (optionLocation.value) {
        case "Lviv":
            locationKey = locationCode[0];
            break;
        case "Kyiv" :
            locationKey = locationCode[1];
            break;
        case "Kharkiv":
            locationKey = locationCode[2];
            break;
        case "Chernihiv":
            locationKey = locationCode[3];
            break;
        case "Odesa":
            locationKey = locationCode[4];
            break;
        case "Mariupol":
            locationKey = locationCode[5];
            break;
        case "Poltava":
            locationKey = locationCode[6];
            break;
        case "Zhytomyr":
            locationKey = locationCode[7];
            break;
        case "Cherkasy":
            locationKey = locationCode[8];
            break;
        case "London":
            locationKey = locationCode[9];
            break;
        case "Warsaw":
            locationKey = locationCode[10];
            break;
        case "New York":
            locationKey = locationCode[11];
            break;
    }
    return locationKey;
}

//Функція переведення температури зі шкали Фаренгейта до Цельсія
function temperatureConversion(temperature){
    return Math.floor((temperature -  32) / 1.8);
}

const xhr = new XMLHttpRequest();

function loadData() {
    xhr.open('GET', `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${getLocationKey()}?apikey=${API_KEY}`);
    xhr.send();
    xhr.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            const result = JSON.parse(this.response);

            for(const weather of result["DailyForecasts"]){

                //Додаємо дату
                const dateElement = document.createElement('p');
                dateElement.className = 'weather__date';

                //Обираємо день
                let day = new Date(weather.Date).getDay();
                switch (day){
                    case 0:
                        day = 'Sunday';
                        break;
                    case 1:
                        day = 'Monday';
                        break;
                    case 2:
                        day = 'Tuesday';
                        break;
                    case 3:
                        day = 'Wednesday';
                        break;
                    case 4:
                        day = 'Thursday';
                        break;
                    case 5:
                        day = 'Friday';
                        break;
                    case 6:
                        day = 'Saturday';
                        break
                }

                //Додаємо та витягуємо необхідну інформацію з дати
                dateElement.innerHTML = `<span class="name-city">${optionLocation.value}</span> <br> 
                                            ${weather.Date.slice(0, 10).split('-').reverse().join('/')}<br>
                                            ${day}`;

                //Обираємо та додаємо зображення
                const img = document.createElement('img');
                img.className = 'weather__img';
                img.alt = 'Picture of weather';
                if(weather.Day.IconPhrase === 'Dreary' || weather.Day.IconPhrase === 'Mostly cloudy' || weather.Day.IconPhrase === 'Cloudy'){
                    img.src = '../assets/img/cloudy.png';
                } else if(weather.Day.IconPhrase === 'Rain' || weather.Night.IconPhrase === 'Rain'){
                    img.src = '../assets/img/rain.png';
                } else if(weather.Day.IconPhrase === 'Showers' || weather.Night.IconPhrase === 'Showers'
                    || weather.Day.IconPhrase === 'Mostly Cloudy w/ Showers' || weather.Day.IconPhrase === 'Partly Sunny w/ Showers'){
                    img.src = '../assets/img/shower.png';
                } else if(weather.Day.IconPhrase === 'Intermittent clouds' || weather.Night.IconPhrase === 'Intermittent clouds'){
                    img.src = '../assets/img/part-cloudy.png';
                } else if(weather.Day.IconPhrase === 'Sunny' || weather.Day.IconPhrase === 'Mostly sunny'
                    || weather.Day.IconPhrase === 'Clear'){
                    img.src = '../assets/img/sun.png';
                } else if(weather.Day.IconPhrase === 'Snow' || weather.Day.IconPhrase === 'Flurries'){
                    img.src = '../assets/img/snowing.png';
                } else if(weather.Day.IconPhrase === 'T-Storms'){
                    img.src =  '../assets/img/storm.png';
                } else if(weather.Day.IconPhrase === 'Ice' || weather.Day.IconPhrase === 'Freezing Rain'
                    || weather.Day.IconPhrase === 'Cold'){
                    img.src = '../assets/img/freezy.png';
                } else if(weather.Day.IconPhrase === 'Hot' || weather.Night.IconPhrase === 'Hot'){
                    img.src = '../assets/img/hot.png';
                } else if(weather.Day.IconPhrase === 'Windy' || weather.Night.IconPhrase === 'Windy'){
                    img.src = '../assets/img/wind.png';
                }

                //Додаємо температуру
                const temperature = document.createElement('p');
                temperature.className = 'weather__temperature';
                temperature.innerHTML = `<span class="weather__title">Minimum:</span> ${temperatureConversion(weather.Temperature.Minimum.Value)} °C <br> 
                                         <span class="weather__title">Maximum:</span> ${temperatureConversion(weather.Temperature.Maximum.Value)} °C`;

                //Додаємо тип погоди
                const phase = document.createElement('p');
                phase.className = 'weather__phase';
                phase.innerHTML = `<span class="weather__title">Phase in night:</span> ${weather.Day.IconPhrase}<br> 
                                    <span class="weather__title">Phase in day:</span> ${weather.Night.IconPhrase}`;

                //Обираємо потрібний нам блок
                const divInformation = document.querySelector('.weather__information');
                //Додаємо всі елементи в блок, а потім до одного спільного блоку
                const divBlockOneDay = document.createElement('div');
                divBlockOneDay.className = 'weather__information-block';
                divBlockOneDay.append(dateElement, img, temperature, phase);
                divInformation.append(divBlockOneDay);
            }
        } else {
            alert( `No data for this day is presented`);
        }
    };
}

buttonGetWeather.addEventListener('click', loadData);