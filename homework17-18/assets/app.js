const addBtn = document.querySelector('.addBtn')
const inputText = document.querySelector('#inputText')
const tasks = document.querySelector('.tasks')

addBtn.addEventListener('click', function() {
    if (inputText.value === '') {
        alert('Please enter a task!')
        return
    }
    console.log(inputText.value)
    const newTask = document.createElement('div')
    newTask.classList.add('task')
    newTask.innerHTML = `
        <div class="info">
            <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
            <div class="text">${inputText.value}</div>
        </div>
        <div class="buttons">
            <a class="rewrite"><img src="assets/img/rewrite.svg"></a>
            <a class="delete"><img src="assets/img/delete.svg"></a>
        </div>
    `
    tasks.appendChild(newTask)
    inputText.value = ''
})

tasks.addEventListener('click', function(event) {
    if (event.target.closest('.delete')) {
        const task = event.target.closest('.task')
        if (task) {
            task.remove()
        }
    }
    if (event.target.closest('.rewrite')) {
        const task = event.target.closest('.task')
        if (task) {
            const text = task.querySelector('.text')
            const newText = prompt('Enter new text:', text.textContent)
            if (newText) {
                text.textContent = newText
            }
        }
    }
    if (event.target.closest('input[type="checkbox"]')) {
        const task = event.target.closest('.task')
        if (task) {
            task.querySelector('.text').classList.toggle('done')
        }
    }
})