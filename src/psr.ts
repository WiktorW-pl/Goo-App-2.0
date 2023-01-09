const option = Array.from([...document.querySelectorAll(".option")]) as HTMLElement[];
// const [rock, paper, scissors] = option
const gameProps: {
    playerPick: string | null,
    aiPick: string | null,
    games: number,
    wins: number,
    losses: number,
    draws: number,
} = {
    playerPick: '',
    aiPick: '',
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const ai = () =>{
    const aiChoice : number = Math.floor(Math.random() * 3);
    gameProps.aiPick = option[aiChoice].getAttribute('alt')
}
    option.forEach((item) =>{
        item.addEventListener('click', ()=>{ 
            ai()
            for (let picked of option ){
                picked.style.backgroundColor = 'red'
            }
            item.style.backgroundColor = 'green'
            gameProps.playerPick = item.getAttribute('alt')
            console.log(gameProps.playerPick)
            console.log(gameProps.aiPick)
        })
    })

    


