document.getElementById("rollButton").addEventListener("click", function () {
    let diceValue = Math.floor(Math.random() * 6) + 1; // Random number from 1 to 6
    document.getElementById("dice").src = `./images/dice${diceValue}.png`; // Change image
});
