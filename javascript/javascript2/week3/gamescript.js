//The fastest presser in this realm
const buttonElement = document.getElementById("buttonStartGame");
const paragraphOneElement = document.getElementById("pressKeyS");
const paragraphSecondElement = document.getElementById("presskeyL");
const messageTimeUpHeaderElement = document.getElementById("messageTimesUp");
const headerResultElement = document.getElementById("result");
const headerErrorElement = document.getElementById("errorMessage");
const restartButtonElement = document.getElementById("restartButton");
const countdowntimerHeaderElement = document.getElementById("countdownTimer");

buttonElement.addEventListener("click", fastestPresserGame);
restartButtonElement.addEventListener("click", restartTheGame);

function fastestPresserGame() {
    const inputFieldForSetSeconds = document.getElementById("inputFieldSetSeconds").value;
    const delay = inputFieldForSetSeconds * 1000;

    if (inputFieldForSetSeconds === "") {
        headerErrorElement.innerHTML =
            "Please set the seconds before you click the button";
    } else {
        headerErrorElement.innerHTML = "";
        document.addEventListener("keypress", pressKeyFunction);

        let countForLetterS = 0;
        let countForLetterL = 0;

        function pressKeyFunction(e) {
            if (e.key === "s") {
                countForLetterS++;
                paragraphOneElement.innerHTML = countForLetterS;
            }
            if (e.key === "l") {
                countForLetterL++;
                paragraphSecondElement.innerHTML = countForLetterL;
            }
        }

        function timesUp() {
            messageTimeUpHeaderElement.innerHTML = "Time's Up";
            document.removeEventListener("keypress", pressKeyFunction);

            if (countForLetterS > countForLetterL) {
                headerResultElement.innerHTML = "The result is " + "'S wins'";
                const confettiSettings = { target: "my-canvas" };
                const confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
            } else if (countForLetterS === 0 && countForLetterL === 0) {
                headerResultElement.innerHTML = " Game is over...User pressed no keys ";
            } else if (countForLetterS < countForLetterL) {
                const confettiSettings = { target: "my-canvas1" };
                const confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
                headerResultElement.innerHTML = "The result is " + "'L wins'";
            } else {
                headerResultElement.innerHTML = "The result is " + "'Draw'";
            }
        }
        let time = inputFieldForSetSeconds;
        const myInterval = setInterval(updateCountDown, 1000);

        function updateCountDown() {
            countdowntimerHeaderElement.innerHTML = "seconds: " + time;
            time--;
            if (time < 0) {
                clearInterval(myInterval);
                timesUp();
            }
        }
    }
}
function restartTheGame() {
    document.location.href = "";
}
