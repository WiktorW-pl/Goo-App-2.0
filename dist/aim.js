"use strict";
const game_board = document.querySelector('.app');
const start_btn = document.querySelector('.game-panel__button');
const start_game = () => {
    generate_point();
};
const generate_point = () => {
    const created_dot = document.createElement('div');
    game_board.appendChild(created_dot);
    created_dot.classList.add('dot');
    move_point(created_dot);
};
const move_point = (created_dot) => {
    const game_board_width = game_board.offsetWidth;
    const game_board_left = game_board.offsetLeft;
    const game_board_right = game_board.offsetLeft + game_board_width;
    setInterval(() => {
    }, 1000);
};
start_btn.addEventListener('click', start_game);
//
