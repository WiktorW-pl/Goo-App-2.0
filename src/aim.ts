const game_board = document.querySelector('.app') as HTMLDivElement
const start_btn = document.querySelector('.game-panel__button') as HTMLButtonElement;
const dificulty_lvl = 10;

const start_game = () => {
    generate_point()
} 

const generate_point = () => {
    const created_dot : HTMLElement = document.createElement('div');
    game_board.appendChild(created_dot);
    created_dot.classList.add('dot');
    move_point(created_dot)
}

const move_point = (created_dot : HTMLElement) => {
    setInterval(()=>{

        const x_min : number = game_board.offsetLeft;
        const x_max : number = game_board.offsetLeft + game_board.offsetWidth;
        const y_min : number = game_board.offsetTop;
        const y_max : number = game_board.offsetTop + game_board.offsetHeight;

        const x = Math.floor(Math.random() * (x_max - x_min + dificulty_lvl)) + x_min;
        const y = Math.floor(Math.random() * (y_max - y_min + dificulty_lvl)) + y_min;
        created_dot.style.left = x + 'px';
        created_dot.style.top = y + 'px';
    }, 1000)
}

start_btn.addEventListener('click', start_game)










//
