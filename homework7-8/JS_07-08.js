function compare_numbers(a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

function combine_digits(a, b, c) {
    return parseInt(`${a}${b}${c}`, 10)
}

function calc_area(length, width) {
    if (width === undefined) {
        return length ** 2
    }
    return length * width
}

function is_perfect(n) {
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    return sum === n
}

function find_perfect_numbers(n) {
    let perfect_numbers = []
    for (let i = 1; i <= n; i++) {
        if (is_perfect(i)) {
            perfect_numbers.push(i)
        }
    }
    return perfect_numbers
}

function format_time(hour, minute, second) {
    let time = '';
    if (hour === undefined) {
        time += '00:';
    } else {
        time += `${hour < 10 ? '0' + hour : hour}:`;
    } 
    if (minute === undefined) {
        time += '00:';
    } else {
        time += `${minute < 10 ? '0' + minute : minute}:`;
    }
    if (second === undefined) {
        time += '00';
    } else {
        time += `${second < 10 ? '0' + second : second}`;
    }
    return time;
}

function convert_to_seconds(hour, minute, second) {
    return (hour * 3600) + (minute * 60) + second
}

function calc_time_diff(hour1, minute1, second1, hour2, minute2, second2) {
    const time_diff = Math.abs(convert_to_seconds(hour1, minute1, second1) - convert_to_seconds(hour2, minute2, second2))
    return format_time(Math.floor(time_diff / 3600), Math.floor((time_diff % 3600) / 60), time_diff % 60)
}

//Можно я так буду делать тесты пжшка?
// Test cases for compare_numbers
console.log(compare_numbers(5, 10)); // Expected output: -1
console.log(compare_numbers(10, 5)); // Expected output: 1
console.log(compare_numbers(5, 5)); // Expected output: 0

// Test cases for factorial
console.log(factorial(0)); // Expected output: 1
console.log(factorial(5)); // Expected output: 120
console.log(factorial(10)); // Expected output: 3628800

// Test cases for combine_digits
console.log(combine_digits(1, 2, 3)); // Expected output: 123
console.log(combine_digits(9, 8, 7)); // Expected output: 987
console.log(combine_digits(0, 0, 0)); // Expected output: 0

// Test cases for calc_area
console.log(calc_area(5)); // Expected output: 25
console.log(calc_area(5, 10)); // Expected output: 50

// Test cases for is_perfect
console.log(is_perfect(6)); // Expected output: true
console.log(is_perfect(28)); // Expected output: true
console.log(is_perfect(12)); // Expected output: false

// Test cases for find_perfect_numbers
console.log(find_perfect_numbers(100)); // Expected output: [6, 28]
console.log(find_perfect_numbers(500)); // Expected output: [6, 28, 496]

// Test cases for format_time
console.log(format_time(1, 2, 3)); // Expected output: "01:02:03"
console.log(format_time(0, 10)); // Expected output: "00:10:00"
console.log(format_time(12)); // Expected output: "12:00:00"

// Test cases for convert_to_seconds
console.log(convert_to_seconds(1, 30, 45)); // Expected output: 5445
console.log(convert_to_seconds(2, 0, 0)); // Expected output: 7200
console.log(convert_to_seconds(0, 0, 30)); // Expected output: 30

// Test cases for calc_time_diff
console.log(calc_time_diff(1, 30, 45, 2, 0, 0)); // Expected output: "00:29:15"
console.log(calc_time_diff(12, 0, 0, 12, 0, 0)); // Expected output: "00:00:00"
console.log(calc_time_diff(0, 0, 30, 0, 0, 0)); // Expected output: "00:00:30"