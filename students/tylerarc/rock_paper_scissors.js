let player,cpu;



document.getElementById("rock").addEventListener("click",  () => simulate("rock"));
document.getElementById("paper").addEventListener("click", () => simulate("paper"));
document.getElementById("scissors").addEventListener("click", () => simulate("scissors"));


function simulate(player){
    cpu_choices = ["rock","paper","scissors"];

    random_element = Math.floor(Math.random() * 3);
    cpu = cpu_choices[random_element];

    console.log(cpu);

    if (player == "rock"){
        if (cpu == "scissors"){
            document.getElementById("outcome").textContent = "OUTCOME: Player Wins";
            document.getElementById("choices").textContent = "ROCK BEATS SCISSORS";
        }
        if (cpu == "paper"){
            document.getElementById("outcome").textContent = "OUTCOME: Computer Wins";
            document.getElementById("choices").textContent = "PAPER BEATS ROCK";
        }
        if (cpu == "rock") {
            document.getElementById("outcome").textContent = "OUTCOME: Tie";
            document.getElementById("choices").textContent = "YOU BOTH PICKED ROCK";
        }
    }
    if (player == "scissors"){
        if (cpu == "rock"){
            document.getElementById("outcome").textContent = "OUTCOME: Computer Wins";
            document.getElementById("choices").textContent = "ROCK BEATS SCISSORS";
        }
        if (cpu == "paper"){
            document.getElementById("outcome").textContent = "OUTCOME: Player Wins";
            document.getElementById("choices").textContent = "SCISSORS BEATS PAPER";
        }
        if (cpu == "scissors"){
            document.getElementById("outcome").textContent = "OUTCOME: Tie";
            document.getElementById("choices").textContent = "YOU BOTH PICKED SCISSORS";
        }
    }
    if (player == "paper"){ // player is paper
        if (cpu == "rock"){
            document.getElementById("outcome").textContent = "OUTCOME: Player Wins";
            document.getElementById("choices").textContent = "PAPER BEATS ROCK";
        }
        if (cpu == "scissors"){
            document.getElementById("outcome").textContent = "OUTCOME: Computer Wins";
            document.getElementById("choices").textContent = "SCISSORS BEATS PAPER";
        }
        if (cpu == "paper"){
            document.getElementById("outcome").textContent = "OUTCOME: Tie";
            document.getElementById("choices").textContent = "YOU BOTH PICKED PAPER";
        }
    }

}