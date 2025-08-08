let number1 = +prompt('Введите первое число:')
let number2 = +prompt('Введите второе число:')
let a = number1
let b = number2
while (a != 0 && b != 0) {
    if (a > b) {
        a %= b
    } else {
        b %= a
    }
}
console.log(`Greatest Common Divisor of ${number1} and ${number2} - ${a+b}`)

let number = prompt('Введите число:')
let digits = new Set()
for (let i = 0; i <= number.length; i++) {
    digits.add(number[i])
}
console.log(digits)
console.log(`${number} has ${digits.size-1} unique digits`)

let positive_count = 0
let negative_count = 0
let zero_count = 0
let even_count = 0
let odd_count = 0
let numbers = []
for (let i = 1; i <= 10; i++) {
    num = +prompt(`Введите ${i} число:`)
    numbers.push(num)
    if (num == 0) {
        zero_count++
    } else if (num > 0) {
        positive_count++
    } else {
        negative_count++
    }
    if (num % 2 == 0) {
        even_count++
    } else {
        odd_count++
    }
}
numbers.sort((a,b) => a - b)
console.log(`
Числа - [${numbers.join(', ')}]
Положительных - ${positive_count}    
Отрицательных - ${negative_count}    
Нулей - ${zero_count}    
Четных - ${even_count}    
Нечетных - ${odd_count}    
`)

while (true) {
    let num1 = +prompt('Введите первое число:')
    let num2 = +prompt('Введите второе число:')
    let sign = prompt('Выберите действие ( + | - | * | / ):')
    switch (sign) {
        case '+': console.log(num1+num2); break;
        case '-': console.log(num1-num2); break;
        case '*': console.log(num1*num2); break;
        case '/': console.log(num1/num2); break;
        default: console.log('Неверный ввод')
    }
    if (prompt('Хотите решить еще один пример (да/нет)?:') === 'да') {
        continue
    } else {
        break
    }
}

number = prompt('Введите число:')
let shift = +prompt('Введите на сколько позиций сдвинуть цифры влево:')
console.log(`Получено - ${number.slice(shift) + number.slice(0, shift)}`)

weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let i = 0
while (true) {
    console.log(`${weekdays[i]}. Хотите увидеть следующий день?`)
    if (prompt('Хотите увидеть следующий день (ОК - если да, иначе нет):').toLowerCase() === 'ок') {
        i++
        if (i > 6) {
            i -= 7
        }
    } else {
        break
    }
}

let guess_number = +prompt('Загадайте число от 0 до 100:')
let left_point = 0
let right_point = 100
let prev_n

while (true) {
    let n = Math.floor((right_point + left_point) / 2)
    let choice = +prompt(`Выберите опцию. Ваше число 
        1: >${n},
        2: <${n},
        3: ==${n}?`)
    if (choice === 3) {
        if (choice == guess_number) {
            console.log(`Ваше загаданное число - ${n}`)
            break
        } else {
            console.log('Грязный читер')
            break
        }
    } else if (choice === 2) {
        right_point = n
    } else if (choice === 1) {
        left_point = n
    } else {
        console.log('Неправильный ввод')
    }
    if (n == prev_n) {
        console.log('Грязный читер')
        break
    }
    prev_n = n
}