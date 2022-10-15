function Car(){
    const info = {...arguments[0]};
    this.fuelConsumption = arguments[0][1];
    this.engineType = arguments[0][1];
    this.egineVolume = arguments[0][2];
    this.model = arguments[0][3];
    this.year = arguments[0][4];
    this.mass = arguments[0][5];
    this.status = arguments[0][6];
    this.maintenance = arguments[0][7];
}

function Hatchback(){
    Car.call(this, arguments);
}

function Sedan(){
    Car.call(this, arguments);
}

function Universal(){
    Car.call(this, arguments);
}

Sedan.prototype = Object.create(Car.prototype);
Universal.prototype = Object.create(Car.prototype);
Hatchback.prototype = Object.create(Car.prototype);

const car1 = new Sedan(5.4, 'diesel', 2.1, 'Mercedes-Benz E 220', 2015, 1770, false, 90);
const car2 = new Universal(1.2, 'diesel', 3, 'Mercedes-Benz E 350', 2014, 2000, true, 100);
const car3 = new Hatchback(5.7, 'diesel', 2.1, 'Mercedes-Benz GLA 220', 2016, 1670, false, 87);

Car.prototype.startRide = function() {
    if(!this.status){
        this.status = true;
        this.maintenance -= Math.floor(Math.random() * (2.5 - 0.1));
        return 'This car start ride.';
    } else {
        return 'Error. This cannot be done.\nThis car is already moving.';
    }
}


Car.prototype.endRide = function() {
    if(this.status){
        this.status = false;
        return 'This car stop ride.';
    } else{
        return 'Error. This cannot be done.\nThis car is`t moving';
    }
}

car1.startRide();
car1.endRide();
car1.startRide();
car1.startRide();
car1.startRide();
car1.startRide();
car1.endRide();
car1.endRide();

car2.endRide();
car2.startRide();
car2.startRide();
car2.endRide();

car3.startRide();
car3.startRide();
car3.startRide();
car3.endRide();


function dealer(obj){
    let sum = 0;
    let coefficient = 0;
    let price = 100 - obj.maintenance;
    if(obj instanceof Hatchback){
        if(obj.year >2019 && obj.year < 2022){
            coefficient += 1.2;
        } else if(obj.year >2010 && obj.year < 2018){
            coefficient += 1.4;
        } else if(obj.year >2000 && obj.year < 2009){
            coefficient += 1.7;
        } else if(obj.year >1990 && obj.year < 1999){
            coefficient += 2;
        }

        if(obj.engineType === 'diesel'){
            coefficient += 2.2;
        } else if(obj.engineType === 'petrol'){
            coefficient += 1.8;
        }

        if(obj.mass > 800 && obj.mass < 1100){
            coefficient += 1.5;
        }else if(obj.mass > 1101 && obj.mass < 1400){
            coefficient += 1.7;
        } else if(obj.mass > 1401){
            coefficient += 2;
        }
        sum = price * 110 * (obj.maintenance * coefficient);
        return `Repair price for ${obj.model}: ${sum}`;
    }


    else if(obj instanceof Sedan){
        if(obj.year >2019 && obj.year < 2022){
            coefficient += 1.5;
        } else if(obj.year >2010 && obj.year < 2018){
            coefficient += 1.8;
        } else if(obj.year >2000 && obj.year < 2009){
            coefficient += 2;
        } else if(obj.year >1990 && obj.year < 1999){
            coefficient += 2.6;
        }

        if(obj.engineType === 'diesel'){
            coefficient += 2.5;
        } else if(obj.engineType === 'petrol'){
            coefficient += 2;
        }

        if(obj.mass > 800 && obj.mass < 1100){
            coefficient += 1.6;
        }else if(obj.mass > 1101 && obj.mass < 1400){
            coefficient += 1.8;
        } else if(obj.mass > 1401){
            coefficient += 2.1;
        }

        sum = price * 110 * (obj.maintenance * coefficient);
        return `Repair price for ${obj.model}: ${sum}`;
    }

    else if(obj instanceof Universal){
        if(obj.year >2019 && obj.year < 2022){
            coefficient += 2;
        } else if(obj.year >2010 && obj.year < 2018){
            coefficient += 2.2;
        } else if(obj.year >2000 && obj.year < 2009){
            coefficient += 2.5;
        } else if(obj.year >1990 && obj.year < 1999){
            coefficient += 3;
        }

        if(obj.engineType === 'diesel'){
            coefficient += 2.9;
        } else if(obj.engineType === 'petrol'){
            coefficient += 2.4;
        }

        if(obj.mass > 800 && obj.mass < 1100){
            coefficient += 1.7;
        }else if(obj.mass > 1101 && obj.mass < 1400){
            coefficient += 1.9;
        } else if(obj.mass > 1401){
            coefficient += 2.2;
        }

        sum = price * 110 * (obj.maintenance * coefficient);
        return `Repair price for ${obj.model}: ${sum}`;
    }
}

dealer(car1);
dealer(car2);
dealer(car3);



