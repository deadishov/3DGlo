const date = new Date()

let dayTime
let newYear = '1 January 2023'
let deadline = new Date(newYear).getTime()
let thisTime = new Date().getTime()
let daysLeft = (deadline - thisTime) / 1000 / 60 / 60 / 24;
console.log(daysLeft);

if (4 < date.getHours() && date.getHours() < 11) {
    dayTime = 'Доброе утро!';
} else if (10 < date.getHours() && date.getHours() < 16) {
    dayTime = 'Добрый день!';
} else if (15 < date.getHours() && date.getHours() < 21) {
    dayTime = 'Добрый вечер!';
} else if (20 < date.getHours() && date.getHours() === 23 && date.getHours() < 5) {
    dayTime = 'Доброй ночи!';
}

week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

const hello = document.createElement('p');
document.body.append(hello)
hello.innerHTML = `${dayTime} </br>
Сегодня: ${week[date.getDay()]} </br>
Текущее время: ${date.toLocaleTimeString('en')} </br>
До нового года осталось ${Math.floor(daysLeft)} дня`;

console.log();