// Lista itemów
let itemList = document.querySelectorAll('div[class^="item-"]');
// Zapis w tabelce
let itemChartDesc = document.querySelectorAll('span[class^="desc"]');

// Ilość itemów
let itemListLength = document.querySelectorAll('div[class^="item-"]').length;

// Zmienne na potrzeby funkcji writeDataSort
let itemValue, itemChart;

// funkcja pobierająca dane do sortowania
writeDataSort = () => {
    for (let i = 0; i < itemListLength; i++) {

        itemValue = itemList[i].children[1].value;
        itemChart = itemChartDesc[i];
        itemChart.innerHTML = itemValue;

        if (itemValue === '') {
            itemChart.innerHTML = "?";
            itemChart.parentElement.style.height = '30%';
        } else if (itemValue >= 1000) {
            itemChart.parentElement.style.height = '100%';
        } else if (itemValue < 1000 && itemValue >= 900) {
            itemChart.parentElement.style.height = '90%';
        } else if (itemValue < 900 && itemValue >= 800) {
            itemChart.parentElement.style.height = '80%';
        } else if (itemValue < 800 && itemValue >= 700) {
            itemChart.parentElement.style.height = '70%';
        } else if (itemValue < 700 && itemValue >= 600) {
            itemChart.parentElement.style.height = '60%';
        } else if (itemValue < 600 && itemValue >= 500) {
            itemChart.parentElement.style.height = '50%';
        } else if (itemValue < 500 && itemValue >= 400) {
            itemChart.parentElement.style.height = '40%';
        } else if (itemValue < 400 && itemValue >= 300) {
            itemChart.parentElement.style.height = '30%';
        } else if (itemValue < 300 && itemValue >= 200) {
            itemChart.parentElement.style.height = '20%';
        } else if (itemValue < 200 && itemValue >= 100) {
            itemChart.parentElement.style.height = '10%';
        } else if (itemValue < 100 && itemValue >= 50) {
            itemChart.parentElement.style.height = '5%';
        } else if (itemValue < 50 && itemValue >= 0) {
            itemChart.parentElement.style.height = '3%';
            itemChart.style.color = '#fff';
            itemChart.style.fontSize = '40px';
            itemChart.style.textShadow = '1px 2px 17px black';
        } else if (itemValue < 0) {
            itemChart.parentElement.style.height = '1%';
            itemChart.style.color = '#fff';
            itemChart.style.fontSize = '40px';
            itemChart.style.textShadow = '1px 2px 11px black';
        }
    }
}

//tablica do sortowania
let sortArray = [];
//tablica z nazwami itemów
let whichItem = [];

// funkcja sortująca 
sortuj = () => {
    for (let i = 0; i < itemListLength; i++) {
        sortArray.push(itemList[i].children[1].value * 1);
        whichItem.push(itemList[i]);
    }

    let sortNow = Array.from(sortArray);
    sortNow.sort((a, b) => {
        return b - a;
    });

    let one, two, three, four, five, six;
    one = sortArray.indexOf(sortNow[0]);
    two = sortArray.indexOf(sortNow[1]);
    three = sortArray.indexOf(sortNow[2]);
    four = sortArray.indexOf(sortNow[3]);
    five = sortArray.indexOf(sortNow[4]);
    six = sortArray.indexOf(sortNow[5]);

    let score = [
        whichItem[one].classList.toggle('order-1'),
        whichItem[two].classList.toggle('order-2'),
        whichItem[three].classList.toggle('order-3'),
        whichItem[four].classList.toggle('order-4'),
        whichItem[five].classList.toggle('order-5'),
        whichItem[six].classList.toggle('order-6')
    ];
    console.log(score);
    sortArray = [];
}



// Złapanie guzika i danie mu funkcji sortowania
let btn = document.getElementById('sort');
btn.addEventListener('click', sortuj);