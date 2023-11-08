confessions = [
"whoever wrote the look up at the stars confession last week: waaah thats the most beautiful thing ive ever heard 😭",
"it’s cuddle szn and all i need is u cutie patootie",
"Why did no one tell me we were shipping core members what",
"Karly is the hero we don't deserve :')",
"remember it's better to cum in the sink than to sink in the cum",
"she said she was my chica but she spent five night at freddy's ;(",
"僕たちはカルレインを愛しています ❤️",
"우리는 칼렌아를 사랑해 🫰",
"adriel made me fail NNN 😫",
"During pahmoween shordy held the blunt to my mouth n said good boy as i hit it.....I was at a loss for words",
"i want to see xavier on meth",
"i ship garrohl",
"mila hold a fencing workshop",
"nohl guaranteed eats ass",
"god i wish i was in core you guys are so fine",
"who the fuck wrote the stars one i need the tea"
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
