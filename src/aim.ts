const game_board = document.querySelector('.app') as HTMLDivElement
const start_btn = document.querySelector('.game-panel__button') as HTMLButtonElement;


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
    const game_board_width : number = game_board.offsetWidth;
    const game_board_left : number = game_board.offsetLeft;
    const game_board_right : number = game_board.offsetLeft + game_board_width;
    setInterval(()=>{
        
    }, 1000)
}

start_btn.addEventListener('click', start_game)










//
