// 1. функция которая приветствует пользователя в зависимости от полученного имени
// sayHello('Viktor') Привет Viktor
 
// const n = prompt('Введите свое имя');

// function sayHello() {
//   alert('Привет ' + n);
// }

// const x = sayHello()
// console.log(x);



// 2. функция которая вернет правду если полученная параметр строка не пустая
// isNotEmpty('') false
// isNotEmpty('abc') true
// isNotEmpty(' ') true

// function inform() {
//   const data = prompt('Введите данные более одного символа');
//   const Empty = '';
  
//   if (data === Empty) {
//     return false;
//   }

//   if (data !== Empty) {
//     return true;
//   }
  
// }
// const res = inform();
// console.log(res);



// 3. функция которая принимает параметры цену продукта и кол-во, возвращает общую сумму заказа
// calcFullPrice(24, 10) 240

// function parameters() {
//   const price = prompt('Введите цену продукта');
//   const products = prompt('Введите количество товаров');

//   return products * price;
// }

// const res = parameters();
// console.log(alert('Сумма заказа '+ res) );



// 4. функция которая принимает параметры сумму заказа и кол-во денег в кошельке, и возвращает хватает ли денег купить эти товары
// isEnoughMoney(240, 400) true
// isEnoughMoney(240, 140) false

// function parameters() {
//   const price = prompt('Введите сумму заказа');
//   const money = prompt('Введити сумму имеющихся средств в кошельке');

//   if (money >= price) {
//     alert('Заберите свой заказ')
//     return true;
//   }

//   if (price > money) {
//     alert('У вас недостаточно средств.')
//   return false;
// }

// }

// const res = parameters();
// console.log(res);



// 5. функция которая принимает параметр кол-во этажей подьезда (с 4мя квартирами на этаже) и вернет посчитаное общее колво квартир в подьезде

// const floor = prompt('Укажите количество этажей в вашем доме');
// const fllorConv = Number(floor);

// function apartmentsInTheHallway() {
// const apartments = 4;
// return fllorConv * apartments;
// }

// const res = apartmentsInTheHallway();
// console.log(alert('В вашем подьезде ' + res + ' квартир'));



// 6.* функция которая проверит что полученное как параметр число находится между 0 и 10, вернет ложь если снаружи диапазона

// let num = Number(prompt('Введите число от 0 до 10'));

// function diapason() {
  
//   if (num >= 0 && num <= 10) {
//     return true;
//   } else {
//     return false;
//   }
//   }

//   const res = diapason();
//   console.log(res);



// * функция которая вернет модуль (abs) числа (если пришло отрицательное то вернет положительное, если положительное то вернет положительное)

// let n = Number(prompt('Введите число и получите его модуль'));


// function mod() {
//   return Math.abs(n);
// }

// const res = mod();
// console.log(res);


// * функция которая вернет случайное (random) число от 0 до 10

// function ran () {
//   return Math.floor(Math.random() * 11);    
// }

// const x = ran();
// console.log(x);



// * функция которая вернет квадратный корень числа (sqrt)

// const a = Math.floor(Math.random() * 111);
// function sqrt() {
// return Math.sqrt(a)
// }
// const res = sqrt(a);
// console.log(res);



// * функция которая посчитает корни квадратного уравнения (формула есть в интернете)
// const a = Math.floor(Math.random() * 11);
// const b = Math.floor(Math.random() * 11);
// const c = Math.floor(Math.random() * 11);


// function solveSquareEquation(a, b, c) {

// const D = b * b - 4 * a * c; 
// if (D > 0) {    
// const x1 = (-b + Math.sqrt(D))/(2*a);
// const x2 = (-b - Math.sqrt(D))/(2*a);
// return 'x1=' + x1 + ';x2=' + x2;
// }
// if (D === 0) {
// return NaN;
// }
// }

// const res = solveSquareEquation(a, b, c);
// console.log(res);


// на switch или if
// 1. функция которая вернет сезон года в зависимости от полученного номера месяца
// getSeason(2) // 'зима'
// getSeason(9) // 'лето'

// const n = Math.floor(Math.random() * 13);

// function getSeason() {
// if (n >= 1 && n <= 2) {
// return 'зима';
// }

// if (n >= 3 && n <= 5) {
//   return 'весна';
// }

// if (n >= 6 && n <= 8) {
//   return 'лето';
// }

// if (n >= 9 && n <= 11) {
//   return 'осень';
// }

// }

// const res = getSeason(n);
// console.log(res);



// 2. функция которая проверит совершеннолетие пользователя в зависимости от указанной страны (достаточно 3х стран с разными возрастами)
// isAdult(18, 'ukraine') // true
// isAdult(18, 'japan') // false

// alert('Внимание ограничение по возрасту 18+')

// let uk = Number(prompt('Если вы из Украины введите свой возраст'))
// let jp = Number(prompt('Если вы из Японии ведите свой возраст'))

// function check(){
// if (uk >= 18 && jp >= 20) {
//   alert('Добро пожаловать')
//   return true;
// }
// else  {
//   alert(Сensure)
//   return false;
// }
// }

// const res = check()
// console.log(res);





















