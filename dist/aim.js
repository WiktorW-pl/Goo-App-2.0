"use strict";
const game_board = document.querySelector('.app');
const start_btn = document.querySelector('.game-panel__button');
const start_game = () => {
    generate_point();
    move_point();
};
const generate_point = () => {
    const generated_point = document.createElement('div');
    game_board.appendChild(generated_point);
    generated_point.classList.add('dot');
};
const move_point = () => {
};
start_btn.addEventListener('click', start_game);
//
