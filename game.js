const holes = [...document.querySelectorAll(".hole")];
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const startButton = document.querySelector(".start-button");

let score = 0;
let timeLeft = 30;
let previousHole = -1;
let gameRunning = false;
let moleTimer;
let countdownTimer;

function hideMole() {
    holes.forEach((hole) => {
        hole.classList.remove("hole--active");
        hole.setAttribute("aria-label", `${hole.dataset.hole} 구멍`);
    });
}

function showMole() {
    hideMole();

    let nextHole;
    do {
        nextHole = Math.floor(Math.random() * holes.length);
    } while (holes.length > 1 && nextHole === previousHole);

    previousHole = nextHole;
    holes[nextHole].classList.add("hole--active");
    holes[nextHole].setAttribute("aria-label", `${holes[nextHole].dataset.hole} 구멍, 두더지가 나타났습니다`);
}

function endGame() {
    gameRunning = false;
    clearInterval(moleTimer);
    clearInterval(countdownTimer);
    hideMole();
    startButton.disabled = false;
    startButton.textContent = "다시 시작";
}

function startGame() {
    clearInterval(moleTimer);
    clearInterval(countdownTimer);

    score = 0;
    timeLeft = 30;
    previousHole = -1;
    gameRunning = true;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    startButton.disabled = true;

    showMole();
    moleTimer = setInterval(showMole, 800);
    countdownTimer = setInterval(() => {
        timeLeft -= 1;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            endGame();
        }
    }, 1000);
}

holes.forEach((hole) => {
    hole.addEventListener("click", () => {
        if (!gameRunning || !hole.classList.contains("hole--active")) {
            return;
        }

        score += 1;
        scoreDisplay.textContent = score;
        hideMole();
    });
});

startButton.addEventListener("click", startGame);
