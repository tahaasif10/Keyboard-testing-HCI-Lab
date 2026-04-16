let startTime, endTime;
let currentType = "";
let totalTime = 0;
let trials = 0;
let running = false;

function startTest() {
    totalTime = 0;
    trials = 0;
    running = true;
    showStimulus();
}

document.addEventListener("keydown", function (event) {
    if (!running) return;

    if (currentType !== "") {
        if (
            (currentType === "letter" && event.key.toLowerCase() === "a") ||
            (currentType === "number" && event.key.toLowerCase() === "n")
        ) {
            endTime = new Date().getTime();
            let reactionTime = endTime - startTime;

            totalTime += reactionTime;
            trials++;

            let avg = (totalTime / trials).toFixed(2);

            document.getElementById("result").innerText =
                "Reaction: " + reactionTime + " ms | Average: " + avg + " ms";

            currentType = "";
            setTimeout(showStimulus, 800);
        }
    }
});

function showStimulus() {
    let display = document.getElementById("stimulus");

    let isLetter = Math.random() < 0.5;

    if (isLetter) {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        display.innerText = letters[Math.floor(Math.random() * letters.length)];
        currentType = "letter";
    } else {
        display.innerText = Math.floor(Math.random() * 10);
        currentType = "number";
    }

    startTime = new Date().getTime();
}