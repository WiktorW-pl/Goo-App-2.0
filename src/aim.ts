const game_board = document.querySelector('.app') as HTMLDivElement
const start_btn = document.querySelector('.game-panel__button') as HTMLButtonElement;

let difficulty_lvl : number = 10;
let is_game_started: boolean = false;
let game_time = 0;
let difficulty_name : string
let blink_time = 1000
let points = 0

const start_game = () => {
    console.log('dupa')
    generate_point()
} 

const generate_point = () => {
    const created_dot : HTMLElement = document.createElement('div');
    game_board.appendChild(created_dot);
    created_dot.classList.add('dot');
    game_difficulty_panel(created_dot)
    point_counter(created_dot)
}

const game_difficulty_panel = (created_dot : HTMLElement) => {
    const options =  Array.from(document.querySelectorAll('input[name="difficulty"]')) as HTMLInputElement[];
    for (const option of options) {
    if (option.checked) {
        difficulty_name = option.value;
    }
    }
    set_game_props(difficulty_name)
    move_point(created_dot)
}

const set_game_props = (difficulty_name : string) =>{
    if(difficulty_name === 'easy'){
        difficulty_lvl = 10
        blink_time = 1000
    } else if(difficulty_name === 'medium'){
        difficulty_lvl = 20
        blink_time = 750
    }
    else if(difficulty_name === 'hard'){
        difficulty_lvl = 25
        blink_time = 500
    }
}
const move_point = (created_dot : HTMLElement) => {
    
    is_game_started = true
    const game_interval = setInterval(()=>{
        created_dot.style.display = 'block';
        const x_min : number = game_board.offsetLeft;
        const x_max : number = game_board.offsetLeft + game_board.offsetWidth;
        const y_min : number = game_board.offsetTop;
        const y_max : number = game_board.offsetTop + game_board.offsetHeight;

        const x = Math.floor(Math.random() * (x_max - x_min + difficulty_lvl)) + x_min;
        const y = Math.floor(Math.random() * (y_max - y_min + difficulty_lvl)) + y_min;
        created_dot.style.left = (x - 61) + 'px';
        created_dot.style.top = (y - 61) + 'px';
    }, blink_time)
    dispaly_time(game_interval)
}
const point_counter = (created_dot : HTMLElement) =>{
    created_dot.addEventListener('click', ()=>{
        created_dot.style.display = 'none';
        points++
        display_points()
    })
}
const display_points = () =>{
    console.log(points)
    const points_dispaly : HTMLParagraphElement = document.querySelector('#score')!
    points_dispaly.textContent = points.toString()
}

const dispaly_time = (game_interval : any) => {
    const timer = document.querySelector('#timer')!;
    let miliSeconds : any = 0;
    let seconds : any = 0;
    const timerInterval = setInterval(()=>{
        miliSeconds++;
        if(miliSeconds < 10){
            miliSeconds = `0${miliSeconds}`;
        } 
        if(miliSeconds == 99){
            seconds++;
            miliSeconds = 0;
            if(seconds < 10) seconds =  `0${seconds}`;
        }
        if(seconds==30){
            clearInterval(timerInterval);
            clearInterval(game_interval);
        }
        timer.textContent = `${seconds} : ${miliSeconds}`;
    }, 10 )
}

start_btn.addEventListener('click', start_game)