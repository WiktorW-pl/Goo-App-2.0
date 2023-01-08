const option = Array.from([...document.querySelectorAll(".option")]) as HTMLElement[];
// const [rock, paper, scissors] = option
let flag : boolean = true
    option.forEach((item, index) =>{
        item.addEventListener('click', ()=>{ 
            option[index].style.border = 'red 2px solid';
            console.log(flag)
            // console.log(item, index)
        })
    })



const ai = () =>{
    const aiChoice : number = Math.floor(Math.random() * 3);
    gameProps.aiPick = aiChoice
}
const gameProps = {
    playerPick: 0,
    aiPick: 0,
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
