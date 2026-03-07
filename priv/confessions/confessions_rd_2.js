confessions = [
    "i confess dat som of yall dress wack but that’s ok",
    "If you go to Fun Park and see a doodle where the pens are, I drew the one on the left.",
    "shane is a little too husky for the vlsb seats! :)",
    "brendan supports bi people",
    "im glad sophia kicked garrett in the face and made him bleed. dat foo gettin on my nerves lowk sometimes. but thats ok.",
    "i dont rly like strawberry milk but this was a good deal thanks sophia",
    "i think brendan should be president. get down mr president. get down.",
    "oj'8 u[;g'ugaby",
    "sometimes there be a bitch yellin in my ear. and every time. its shane.",
    "shane is bisexual and brendan is his secret love.r. my inside source told me (shane)",
    "i rly cant finish this strawberry milk rn",
    "I really enjoyed Ethan's workshop :)",
    "i confess that shane looks rly tired. and i think he should take a little nap sometimes. might help with the stims i think",
    "why does shane give chatgpt pronouns :( i think that is so weird.",
    "my name is xavier and i am sponsored by gemini.",
    "justin👀👀👀👀👀👀👀👀",
    "I miss core 37",
    "i love shane",
    "shane is the best",
    "i love shane",
    "shane",
    "pasae has some hotties🫣",
    "I have a confession",
    "Garrett doesn't know how to fight I could easily take that bloke"
]

const autowrite = () => {
    let confessionsToPost = '';

    const cardColors = ['primary', 'danger', 'warning'];
    let cardNum = 0;

    confessions.sort((a, b) => b.length - a.length)

    for (let i in confessions) {
        const conf = confessions[i];
        const color = cardColors[cardNum];
        var size = 'h5'
        if (conf.length > 100) {
            size = "h6"
        }
        let card = `
        <div class="col-md-4">
            <div class="card text-white bg-${color} mb-3" >
                <div class="card-body">
                    <${size} class="card-text">
                        ${conf}
                    </v>
                </div>
            </div>
        </div>`
        confessionsToPost += card;

        if (cardNum == 2) {
            cardNum = 0;
        } else {
            cardNum += 1;
        }
    }

    // for (let i in confessions) {
    //     const conf = confessions[i];
    //     const color = cardColors[cardNum];
    //     let card = `
    //     <div class="col-md-4">
    //         <div class="card text-white bg-${color} mb-3" >
    //             <div class="card-body">
    //                 <h5 class="card-text">
    //                     ${conf}
    //                 </h5>
    //             </div>
    //         </div>
    //     </div>`
    //     confessionsToPost += card;

    //     if (cardNum == 2) {
    //         cardNum = 0;
    //     } else {
    //         cardNum += 1;
    //     }
    // }

    document.getElementById("confessions").innerHTML = confessionsToPost;
}

autowrite();
