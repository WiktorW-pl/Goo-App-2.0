"use strict";
const option = Array.from([...document.querySelectorAll(".option__img")]);
const btn = document.querySelector('.btn');
const gamesDisplay = document.querySelector('.stats__number-of-games');
const winsDisplay = document.querySelector('.stats__number-of-wins');
const lossesDisplay = document.querySelector('.stats__number-of-losses');
const drawsDisplay = document.querySelector('.stats__number-of-draws');
const playerPickDisplay = document.querySelector('.summary__player-selection');
const aiPickDisplay = document.querySelector('.summary__computer-selection');
const winnerDisplay = document.querySelector('.summary__game-winner');
const gameProps = {
    playerPick: '',
    aiPick: '',
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winner: ''
};
const ai = () => {
    const aiChoice = Math.floor(Math.random() * 3);
    gameProps.aiPick = option[aiChoice].getAttribute('alt');
    console.log(option[1].getAttribute('alt'));
};
option.forEach((item) => {
    item.addEventListener('click', () => {
        for (let picked of option) {
            picked.style.backgroundColor = '';
        }
        item.style.backgroundColor = 'green';
        gameProps.playerPick = item.getAttribute('alt');
    });
});
const compareSelection = () => {
    gameProps.games++;
    if (gameProps.playerPick === '') {
        gameProps.games--;
        alert('Choose your option');
        return;
    }
    if (gameProps.playerPick === gameProps.aiPick) {
        gameProps.draws++;
        gameProps.winner = "Nobody :(";
    }
    if (gameProps.playerPick === 'Rock' && gameProps.aiPick === 'Paper' || gameProps.playerPick === 'Paper' && gameProps.aiPick === 'Scissors' || gameProps.playerPick === 'Scissors' && gameProps.aiPick === 'Rock') {
        gameProps.losses++;
        gameProps.winner = "Computer";
    }
    if (gameProps.playerPick === 'Rock' && gameProps.aiPick === 'Scissors' || gameProps.playerPick === 'Paper' && gameProps.aiPick === 'Rock' || gameProps.playerPick === 'Scissors' && gameProps.aiPick === 'Paper') {
        gameProps.wins++;
        gameProps.winner = "You!";
    }
};
const displayStats = () => {
    gamesDisplay.textContent = `Number of games played: ${gameProps.games}`;
    winsDisplay.textContent = `Number of games wins: ${gameProps.wins}`;
    lossesDisplay.textContent = `Number of games losses: ${gameProps.losses}`;
    drawsDisplay.textContent = `Number of games draws: ${gameProps.draws}`;
    playerPickDisplay.textContent = `Player's choice: ${gameProps.playerPick}`;
    aiPickDisplay.textContent = `Computer's choice: ${gameProps.aiPick}`;
    winnerDisplay.textContent = `Game winner: ${gameProps.winner}`;
};
const startGame = () => {
    ai();
    compareSelection();
    displayStats();
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', startGame);
