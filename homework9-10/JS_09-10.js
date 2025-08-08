let user = {}
user.name = "Alex"
user.surname = "San"
user.name = "Max"
delete user.name

function isEmpty(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            return false
        }
    }
    return true
}

function sum_salaries(obj) {
    let sum = 0
    for (let salary in obj) {
        sum += obj[salary]
    }
    return sum
}

let product = {
    name: "iPhone",
    price: 999,
    colors: ["Black", "White", "Green"],
    memory: ["64GB", "128GB", "256GB"],
    model: "iPhone 15"
}



let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    average_speed: 60
}

function display_car_info(car) {
    console.log(`Manufacturer: ${car.manufacturer}`)
    console.log(`Model: ${car.model}`)
    console.log(`Year: ${car.year}`)
    console.log(`Average speed: ${car.average_speed} km/h`)
}

function calc_travel_time(distance, car) {
    let time = distance / car.average_speed
    return time + Math.floor(time / 4)
}



let time = {
    hours: 14,
    minutes: 30,
    seconds: 45
}

function display_time(time) {
    console.log(`${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`)
}



function topSalary(salaries) {
    let max_salary = 0
    let top_employee = null
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > max_salary) {
            max_salary = salary
            top_employee = name
        }
    }
    return top_employee
}



// Test cases for isEmpty function
console.log(isEmpty({})); // Expected output: true
console.log(isEmpty({ name: "Alex" })); // Expected output: false

// Test cases for sum_salaries function
console.log(sum_salaries({})); // Expected output: 0
console.log(sum_salaries({ John: 1000, Jane: 2000, Alex: 1500 })); // Expected output: 4500

// Test cases for display_car_info function
display_car_info(car); // Expected output: Manufacturer: Toyota, Model: Camry, Year: 2020, Average speed: 90 km/h

// Test cases for calc_travel_time function
console.log(calc_travel_time(600, car).toFixed(2)); // Expected output: 12.00

// Test cases for display_time function
display_time(time); // Expected output: 14:30:45

// Test cases for topSalary function
console.log(topSalary({})); // Expected output: null
console.log(topSalary({ John: 1000, Jane: 2000, Alex: 1500 })); // Expected output: Jane