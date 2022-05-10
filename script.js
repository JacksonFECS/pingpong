const btn1 = document.querySelector('#p1Button');
const btn2 = document.querySelector('#p2Button');
const btn3 = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playToSelect = document.querySelector('#playTo');
console.dir('#p1Display');
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

playToSelect.addEventListener('change', () => {
    winningScore = parseInt(playToSelect.value);
    reset();
})

btn1.addEventListener('click', (e) => {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            btn1.disabled = true;
            btn2.disabled = true;

        }
    }
})

btn2.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
    }
})

btn3.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    btn1.disabled = false;
    btn2.disabled = false;

    isGameOver = false;
}
