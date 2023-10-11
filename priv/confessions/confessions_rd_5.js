confessions = [
"NAME DROP UR PAS'CRUSHES",
"drop the tier list",
"Garrett wearing a chain makes me think naughty",
"raelin is quite the grandiloquent troubadour ✨",
"carm we miss you whered you go : '(",
"remember when they said 'xavier is my favorite person on core' that was pretty good lets have more of that",
"Reese I liked your old hair but this look is growing on me",
"My name is skyler white yo' 🗿 'My husband is walter white yo' 🗿 'Uh huh' 🗿",
"Karly for pres 2024 ? o_O ",
"Raelin's so nice everyone instantly feels like she's your friend",
"reese we appreciate you so much 😭😭😭",
"Does anybody besides core know the username and password to see these ?",
"last weeks confessions were SPICYY",
"I LOVE PASAES CORE",
"raelin is super sweet",
"pa'mong us social when?"
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
