purchases = [
    {
        productName: 'bread',
        productData: {
            weight: 200,
            certificate: true,
            dateOfExpiry: '21/10/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R.',
        productCountry: 'UA',
        productPrice: 11.75,
    },
    {
        productName: 'sausage',
        productData: {
            weight: 310,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 62.10,
    },
    {
        productName: 'cheese',
        productData: {
            weight: 150,
            certificate: true,
            dateOfExpiry: '14/09/2022',
            sugarFree: true,
        },
        productProvider: 'Le delizie di Gaya',
        productCountry: 'IT',
        productPrice: 42.50,
    },
    {
        productName: 'potatoes',
        productData: {
            weight: 500,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 54.10,
    },
    {
        productName: 'carrot',
        productData: {
            weight: 210,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 21.10,
    },
    {
        productName: 'onion',
        productData: {
            weight: 300,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 15.80,
    },
    {
        productName: 'pumpkin',
        productData: {
            weight: 420,
            certificate: false,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 49.30,
    },
    {
        productName: 'apple',
        productData: {
            weight: 320,
            certificate: true,
            dateOfExpiry: '22/10/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 21.20,
    },
    {
        productName: 'mango',
        productData: {
            weight: 250,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'TM "Turkish"',
        productCountry: 'TR',
        productPrice: 31.75,
    },
    {
        productName: 'banana',
        productData: {
            weight: 150,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'TM "Turkish"',
        productCountry: 'TR',
        productPrice: 29.10,
    },
    {
        productName: 'chocolate',
        productData: {
            weight: 80,
            certificate: true,
            dateOfExpiry: '20/10/2022',
            sugarFree: false,
        },
        productProvider: 'TM "EVEN BETTER',
        productCountry: 'UA',
        productPrice: 34,
    },
    {
        productName: 'milk',
        productData: {
            weight: 500,
            certificate: false,
            dateOfExpiry: '21/10/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 34,
    },
    {
        productName: 'yogurt',
        productData: {
            weight: 125,
            certificate: true,
            dateOfExpiry: '21/10/2022',
            sugarFree: false,
        },
        productProvider: 'FOP Zakharov К. A.',
        productCountry: 'UA',
        productPrice: 12.95,
    },
    {
        productName: 'spaghetti',
        productData: {
            weight: 500,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'Le delizie di Gaya',
        productCountry: 'IT',
        productPrice: 53,
    },
    {
        productName: 'tuna',
        productData: {
            weight: 250,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Varun B.',
        productCountry: 'IL',
        productPrice: 42.50,
    }
]

const div = document.createElement('div');
div.classList.add('buy-list');
const body = document.body;
body.appendChild(div);

const header = document.createElement('h1');
div.appendChild(header);
header.innerHTML = 'Shopping list';

//Крок 4
const ul = document.createElement('ul');
div.appendChild(ul);

//Крок 6. Відображення прапора країни виготовлення
const showFlag = (obj) => {
        if(obj.productCountry === 'UA') {
            let source = '../assets/ukraine.png';
            return source;
        } else if (obj.productCountry === 'IT'){
            let  source = '../assets/italy.png';
            return source;
        } else if(obj.productCountry === 'TR'){
            let  source = '../assets/turkey.png';
            return source;
        } else if(obj.productCountry === 'IL'){
            let  source = '../assets/israel.png';
            return source;
        }
}

//Крок 7. Знак оклику для звертання уваги на несертифікований продукт.
const showAttention = (obj) => {
    const span = document.createElement('span');
    if(obj.productData.certificate !== true){
        span.classList.add('attention');
        span.innerHTML = '!';
    } else {
        span.innerHTML = '';
    }
    return span;
}

//Крок 4. Додаємо кожен єлемент нашого масиву до списку
const addElementToList = () => {

    for (let i = 1; i <= purchases.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<div class="list-element"><p>${purchases[i].productName}.
                            Weight: ${purchases[i].productData.weight}. 
                            Price: ${purchases[i].productPrice}. <br>
                            Country: ${purchases[i].productCountry} <img src="${showFlag(purchases[i])}" alt="Flag">
                            Provider: ${purchases[i].productProvider}.
                            Sugar free: ${purchases[i].productData.sugarFree}.
                            Date of expirity: ${purchases[i].productData.dateOfExpiry}.
                            Certificate: ${purchases[i].productData.certificate}
                            </p></div>`;
            li.appendChild(showAttention(purchases[i]));

            //Крок 5. Кожний парний рядок повинен бути стилізований із backgroundColor.
            if(i % 2 === 0){
                li.style.backgroundColor = '#abcdef';
            }

            ul.appendChild(li);
    }
}

//Створюємо додатковий блок, для додавткової інформації
const divAdditionInfo = document.createElement('div');
divAdditionInfo.classList.add('addition-info');
div.appendChild(divAdditionInfo);

//Крок 10
const divBasket = document.createElement('div');
divBasket.classList.add('buy-list__basket');
divAdditionInfo.appendChild(divBasket);

const showSum = () => {
    let sum = 0;
    for(let i = 0; i < purchases.length; i++){
        sum += purchases[i].productPrice;
    }
    return sum;
}

const divHeader = document.createElement('h3');
divHeader.innerHTML = 'Basket sum: ' + showSum();
divBasket.appendChild(divHeader);

//Крок 11
const divMaxProduct = document.createElement('div');
divMaxProduct.classList.add('buy-list__max-product');
divAdditionInfo.appendChild(divMaxProduct);

const showMaxPrice = () => {
    let max = Math.max(...purchases.map(item => item.productPrice));
    let expensiveProduct = purchases.find(item => item.productPrice === max).productName;
    return `${max} for ${expensiveProduct}`;
}

const divHeader2 = document.createElement('h3');
divHeader2.innerHTML =`Max price: ${showMaxPrice()}`;
divMaxProduct.appendChild(divHeader2);

//Крок 12
const divAveragePrice = document.createElement('div');
divAdditionInfo.appendChild(divAveragePrice);

const showAveragePrice = () => {
    let average = Math.round((showSum() / purchases.length) * 100) / 100;
    return average;
}

const divHeader3 = document.createElement('h3');
divHeader3.innerHTML =`Average price: ${showAveragePrice()}`;
divAveragePrice.appendChild(divHeader3);

addElementToList();


