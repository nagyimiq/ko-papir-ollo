let playerScore = 0;
let computerScore = 0;
let lastPlayerChoice = "";
let lastComputerChoice = "";

const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const playerImg = document.getElementById('playerImg');
const opponentImg = document.getElementById('opponentImg');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    lastPlayerChoice = playerChoice;
    lastComputerChoice = computerChoice;

    updateChoices(playerChoice, computerChoice);

    resultDiv.textContent = `${result}`;

    if (result === 'Játékos nyert!') {
      playerScore++;
    } else if (result === 'Számítógép nyert!') {
      computerScore++;
    }

    scoreDiv.textContent = `Játékos ${playerScore} - ${computerScore} Számítógép`;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Döntetlen!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Játékos nyert!';
  } else {
    return 'Számítógép nyert!';
  }
}

function updateChoices(playerChoice, computerChoice) {
  playerImg.src = `${playerChoice}.png`;
  opponentImg.src = `${computerChoice}.png`;
  opponentImg.style.transform = 'scaleX(-1)';
}
