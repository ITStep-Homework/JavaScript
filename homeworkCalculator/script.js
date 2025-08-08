
// Show display
const display = document.querySelector('.display')

// Number buttons
const number_btns = document.querySelectorAll('.number')
const zero_btn = document.querySelector('.number-zero')

// Functional buttons
const decimal_btn = document.querySelector('.decimal')
const clear_btn = document.querySelector('.clear')
const delete_btn = document.querySelector('.deletion')

// Operator buttons
const operator_btns = document.querySelectorAll('.operator')
const equal_btn = document.querySelector('.equal')

// Variables
let input = ''
let flow_marker = false

// Functions
function isFitToDisplay() {
    let display_text = display.innerText
    display_text = display_text.replace(/\D/g, '')
    return display_text.length < 10
}

function calculate() {
    input += display.innerText
    input = input.replace(/×/g, '*')
    input = input.replace(/÷/g, '/')
    input = input.replace(/–/g, '-')
    console.log(input)
    let result = eval(input)
    result = result.toString().length <= 10 ? result : parseFloat(result.toPrecision(9));
    display.innerText = result
    input = ''
}



//Events for number and functional buttons
clear_btn.addEventListener('click', () => {
    display.innerText = ''
    operator_btns.forEach(btn => {
        btn.classList.remove('clicked')
    })
    input = ''
    flow_marker = false
})

delete_btn.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1)
})

decimal_btn.addEventListener('click', () => {
    if (!display.innerText.includes('.')) {
        display.innerText += '.'
    }
})

number_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (flow_marker === true) {
            display.innerText = ''
            flow_marker = false
        }
        if (isFitToDisplay()) {
            display.innerText += btn.innerText
        }
    })
})

zero_btn.addEventListener('click', () => {
    if (display.innerText.length !== 0 && isFitToDisplay()) {
        display.innerText += '0'
    }
})





//Operations section
equal_btn.addEventListener('click', () => {
    operator_btns.forEach(btn => {
        btn.classList.remove('clicked')
    })
    if (display.innerText.length !== 0) {
        calculate()
        flow_marker = false
    }
})

operator_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.innerText.length !== 0 && flow_marker === true) {
            calculate()
            operator_btns.forEach(btn => {
                btn.classList.remove('clicked')
            })
            btn.classList.add('clicked')
        }
        else if (display.innerText.length !== 0 && flow_marker === false) {
            operator_btns.forEach(btn => {
                btn.classList.remove('clicked')
            })
            btn.classList.add('clicked')
            input += display.innerText + btn.innerText
            display.innerText = ''
            flow_marker = true
        }
    })
})



// Percent button
const percent_btn = document.querySelector('.percent')

percent_btn.addEventListener('click', () => {
    if (display.innerText.length !== 0) {
        let currentValue = parseFloat(display.innerText)
        let percentValue = currentValue / 100
        display.innerText = percentValue.toString()
    }
})