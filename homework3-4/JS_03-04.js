console.log('Задание №1')
let key = +prompt('Введите число от 0 до 9:')
switch (key) {
    case 1: console.log('!'); break;
    case 2: console.log('@'); break;
    case 3: console.log('#'); break;
    case 4: console.log('$'); break;
    case 5: console.log('%'); break;
    case 6: console.log('^'); break;
    case 7: console.log('&'); break;
    case 8: console.log('*'); break;
    case 9: console.log('('); break;
    case 0: console.log(')'); break;
    default: console.log('Неверный ввод');
}

console.log('Задание 2')
let number_3digit = prompt('Введите трехзначное число:')
console.log(number_3digit[0] === number_3digit[1] || number_3digit[0] === number_3digit[2] || number_3digit[1] === number_3digit[2] ? 'Есть одинаковые цифры' : 'Нет одинаковых цифр')

console.log('Задание 3')
let year_to_check = +prompt('Введите год:')
console.log((year_to_check % 400 === 0) || (year_to_check % 4 === 0 && year_to_check % 100 !== 0) ? 'Високосный год' : 'Не високосный год')

console.log('Задание 4')
let number_5digit = prompt('Введите пятиразрядное число:')
console.log(number_5digit === number_5digit.split('').reverse().join('') ? 'Палиндром' : 'Не палиндром')

console.log('Задание 5')
let bill = +prompt('Введите сумму покупки:')
let sale
if (bill >= 500) {
    sale = 0.07
} else if (bill >= 300) {
    sale = 0.05
} else if (bill >= 200) {
    sale = 0.03
} else {
    sale = 0
}
console.log(`Сумма к оплате со скидкой: ${Math.round((bill * (1 - sale)), 2)}`)

console.log('Задание 6')
let circle_length = +prompt('Введите длину окружности:')
let square_perimeter = +prompt('Введите периметр квадрата:')
let circle_diameter = circle_length / Math.PI
let square_side = square_perimeter / 4
console.log(circle_diameter <= square_side ? 'Окружность поместится в квадрат' : 'Окружность не поместится в квадрат')

console.log('Задание 7')
let score = 0
score += prompt('Вопрос 1: (ответ а)? (a/b/c)') === 'a' ? 2 : 0
score += prompt('Вопрос 2: (ответ b)? (a/b/c)') === 'b' ? 2 : 0
score += prompt('Вопрос 3: (ответ c)? (a/b/c)') === 'c' ? 2 : 0
console.log(`Количество баллов: ${score}`)

console.log('Задание 8')
let day = parseInt(prompt('Введите день (без передних нулей):'))
let month = parseInt(prompt('Введите месяц (без передних нулей):'))
let year = parseInt(prompt('Введите год (без передних нулей):'))
let date = new Date(year, month - 1, day + 1)
console.log(`Следующая дата: ${date.getDate() < 10 ? '0'+String(date.getDate()) : date.getDate()}.${date.getMonth()+1 < 10 ? '0'+String(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`)