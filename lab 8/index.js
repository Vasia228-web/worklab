// var varString = "Hello World"
// var varNumber = 42;                  
// var varArray = [1, 2, 3, 4, 5];        
// var varObject = { name: "Alice", age: 25 };
// var varFunction = function() {          
//     return "I am a function!";
// }

// console.log(varString)
// console.log(varArray)
// console.log(varObject)
// console.log(varNumber)
// console.log(varFunction)

// var riadok ="hello";
// var chislo =228;
// r = String(chislo);
// a = Number(riadok);

// console.log(r);
// console.log(a);

// //2.1
// var a ="228";
// var b = 228;
// console.log(a == b)//True
// console.log(a === b)//False

// //2.2
// var kod = 55;
// var key =5;

// var a = kod + key;
// console.log("Число за шифроване" + a);

// var b = a - key;
// console.log("Число роз шифроване" + b)
// //2.3
// var a = 1; 
// function b() { 
//     a = 10; 
//     return; 
//     //function a() {} не потрібно
// } 
// b(); 
// console.log(a)


// //3.1
// let a = "5";
// console.log(+a); // Виведе: 5 (унарний плюс перетворює на число)

// let b = 3;
// console.log(-b); // Виведе: -3

// let c = 1;
// console.log(++c); // Виведе: 2 (інкремент)
// console.log(--c); // Виведе: 1 (декремент)

// let d = true;
// console.log(!d); // Виведе: false (логічне заперечення)

// //3.2
// let x = 10;
// let y = 5;

// console.log(x + y); // Виведе: 15
// console.log(x % y); // Виведе: 0 (остача від ділення)

// console.log(x == y); // Виведе: false (порівняння)
// console.log(x !== y); // Виведе: true

// console.log(x > 5 && y < 10); // Виведе: true (логічне І)
// console.log(x < 5 || y < 10); // Виведе: true (логічне АБО)

// console.log(x & y); // Побітове І
// console.log(x | y); // Побітове АБО
// console.log(x << 1); // Зсув вліво на 1 позицію
// //3.3
// let age = 20;
// let access = age >= 18 ? "Доступ дозволено" : "Доступ заборонено";
// console.log(access); // Виведе: "Доступ дозволено"

// //3.4
// let line1 = "Нехай завжди буде сонце,";
// let line2 = "Нехай завжди буде небо,";
// let line3 = "Нехай завжди буде мама,";
// let line4 = "Нехай завжди буду я.";

// let poem = line1.concat("\n", line2, "\n", line3, "\n", line4);
// console.log(poem);


//4.1
// function maxSubarraySum(arr) {
//     let maxSum = arr[0];
//     let currentSum = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }

// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarraySum(array)); // Виведе: 6 (підмасив [4, -1, 2, 1])

// //4.2
// function addLargeNumbers(num1, num2) {
//     let result = "";
//     let carry = 0;
//     let i = num1.length - 1;
//     let j = num2.length - 1;

//     while (i >= 0 || j >= 0 || carry > 0) {
//         const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
//         const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
//         const sum = digit1 + digit2 + carry;

//         result = (sum % 10) + result;
//         carry = Math.floor(sum / 10);

//         i--;
//         j--;
//     }

//     return result;
// }

// let number1 = "123456789012345678901234567890";
// let number2 = "987654321098765432109876543210";
// console.log(addLargeNumbers(number1, number2)); 
// // Виведе: "1111111110111111111011111111100"

// //4.3
// function arrayDifference(arr1, arr2) {
//     let result = [...arr1];
//     for (let item of arr2) {
//         const index = result.indexOf(item);
//         if (index !== -1) {
//             result.splice(index, 1); // Видаляє перше входження item з result
//         }
//     }
//     return result;
// }

// let array1 = [1, 2, 2, 3, 4];
// let array2 = [2, 3];
// console.log(arrayDifference(array1, array2)); // Виведе: [1, 2, 4]
//1
// let lines = [9, 17, 23, 27, 29, 29, 27, 23, 17, 9];

// for (let i = 0; i < lines.length; i++) {
//     let stars = '*'.repeat(lines[i]);
//     console.log(stars);
// }
// //1.2
// let startTime = new Date();

// while (true) {
//     let currentTime = new Date();
//     let elapsedTime = (currentTime - startTime) / 1000; // обчислюємо пройдені секунди

//     if (elapsedTime >= 10) {
//         console.log("10 секунд минуло!");
//         break;
//     }
// }

//2

// 1. Створення об'єкта car з властивістю speedometer = 0
// const car = {
//     speedometer: 0
// };

// // 2. Додавання методів для підтримки ланцюжкових викликів
// Object.defineProperties(car, {
//     // Метод для встановлення значення спідометра (сеттер)
//     setSpeed: {
//         value: function (speed) {
//             this.speedometer = speed;
//             return this; // Повертаємо об'єкт для ланцюжкового виклику
//         }
//     },
//     // Метод для отримання значення спідометра (геттер)
//     getSpeed: {
//         value: function () {
//             console.log(this.speedometer); // Виводимо значення для наочності
//             return this; // Повертаємо об'єкт для ланцюжкового виклику
//         }
//     },
//     // Метод для очищення значення спідометра
//     clearSpeed: {
//         value: function () {
//             this.speedometer = 0;
//             return this; // Повертаємо об'єкт для ланцюжкового виклику
//         }
//     }
// });

// // Приклад використання методів з ланцюжковим викликом
// car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed().getSpeed();



// Базовий клас Vehicle
// 





//[1, 2, 3].toString(); // Виведе: "1,2,3"



// const arr = [1, 2, 3];
// console.log(Object.prototype.toString.call(arr)); // Виведе: "[object Array]"





