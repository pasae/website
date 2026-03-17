confessions = [
    "I mix Brendan and Matthew up sometimes. I don't know why. Maybe since they are both super chill?",
    "Hearing Francesca sing is a sign for me to up my game. She sets a high bar.",
    "im ALSO lowk glad sophia kicked garrett in the face and made him bleed. sometimes he's a little too dismissive lol",
    "I always fear people talk behind my back.",
    "i cried watching the recent pasae reels",
    "If you genuinely like the writing of Beast Yeast Episode 15 of Cookie Run Kingdom, IT IS ON SIGHT. COUNT YOUR DAYS- /hj",
    "Seriously though, I need a few weeks to recover from the latest CRK update. :'D",
    "Matthew should have won in the rage cage",
    "Shane drops his pants all the way down when he pees",
    "I'm gonna miss the seniors next year 😪"
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
