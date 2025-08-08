// Задание 1
function checkAnswers() {
    const form = document.getElementById('testForm');
    const answers = [1, 1];
    let score = 0;

    answers.forEach((answer, index) => {
        const question = form[`q${index + 1}`];
        if (question.value == answer) {
            score++;
        }
    });

    document.getElementById('result').innerText = `Количество правильных ответов: ${score}`;
}

// Задание 2
function increase() {
    const input = document.getElementById('numberInput');
    input.value = parseInt(input.value) + 1;
}

function decrease() {
    const input = document.getElementById('numberInput');
    input.value = parseInt(input.value) - 1;
}

// Задание 3
function changeColor(color) {
    document.getElementById('text').style.color = color;
}

// Задание 4
document.addEventListener('DOMContentLoaded', () => {
    loadComments();
});

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'list-group-item';
        commentElement.innerHTML = `<strong>${comment.username}</strong> (${comment.date}):<br>${comment.text}`;
        commentsList.appendChild(commentElement);
    });
}

function addComment() {
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('commentText').value;
    const date = new Date().toLocaleString();

    const comment = { username, text: commentText, date };
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('commentForm').reset();
    loadComments();
}