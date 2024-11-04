
let lines = [9, 17, 23, 27, 29, 29, 27, 23, 17, 9];

for (let i = 0; i < lines.length; i++) {
    let stars = '*'.repeat(lines[i]);
    console.log(stars);
}
//1.2
let startTime = new Date();

while (true) {
    let currentTime = new Date();
    let elapsedTime = (currentTime - startTime) / 1000; // обчислюємо пройдені секунди

    if (elapsedTime >= 10) {
        console.log("10 секунд минуло!");
        break;
    }
}




const car = {
    speedometer: 0
};

// 2. Додавання методів для підтримки ланцюжкових викликів
Object.defineProperties(car, {
    // Метод для встановлення значення спідометра (сеттер)
    setSpeed: {
        value: function (speed) {
            this.speedometer = speed;
            return this; // Повертаємо об'єкт для ланцюжкового виклику
        }
    },
    // Метод для отримання значення спідометра (геттер)
    getSpeed: {
        value: function () {
            console.log(this.speedometer); // Виводимо значення для наочності
            return this; // Повертаємо об'єкт для ланцюжкового виклику
        }
    },
    // Метод для очищення значення спідометра
    clearSpeed: {
        value: function () {
            this.speedometer = 0;
            return this; // Повертаємо об'єкт для ланцюжкового виклику
        }
    }
});

// Приклад використання методів з ланцюжковим викликом
car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed().getSpeed();










[1, 2, 3].toString(); // Виведе: "1,2,3"



const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr)); // Виведе: "[object Array]"