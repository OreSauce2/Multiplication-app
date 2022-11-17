const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')


let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = 0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

// scoreEl.innerText = 'Score: ${score}';
scoreEl.innerHTML = `Score: ${score}`;

const correctAnswer = num1 * num2;

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    if (userAns === correctAnswer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

