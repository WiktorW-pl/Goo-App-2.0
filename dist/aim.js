"use strict";
const game_board = document.querySelector('.app');
const start_btn = document.querySelector('.game-panel__button');
const dificulty_lvl = 10;
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
    setInterval(() => {
        const game_board_width = game_board.offsetWidth;
        const x_min = game_board.offsetLeft;
        const x_max = game_board.offsetLeft + game_board_width;
        const game_board_height = game_board.offsetHeight;
        const y_min = game_board.offsetTop;
        const y_max = game_board.offsetTop + game_board.offsetHeight;
        const x = Math.floor(Math.random() * (x_max - x_min + dificulty_lvl)) + x_min;
        var y = Math.floor(Math.random() * (y_max - y_min + dificulty_lvl)) + y_min;
        created_dot.style.left = (x - 120) + 'px';
        created_dot.style.top = (y - 120) + 'px';
    }, 1000);
};
start_btn.addEventListener('click', start_game);
//
