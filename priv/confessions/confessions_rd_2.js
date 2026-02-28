confessions = [
"Shane👀👀👀👀👀",
"Is Shane single 👀 (we know this is you shane)",
"they loaded webmasters in the back of the truck and called it goat transportation services 💯 SAVE ME PLEASE",
"I took a fat dump at the IDD after party and thought i clogged the toilet. ooops :3",
"Omg Shane is so kind!",
"i head canon that brendan is bi UwU",
"is brendan bi?",
"Christian X Brendan is pasaes Heated Rivalry",
"I ship brendan x aedan",
"i think matthew would be a really good boyfriend if he swung the other way... GRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR!",
"i think gareett is lit jk he stinks lol",
"i saw matthew janking it in the corner",
"Aedann😊",
"i think brendan is a rlly cool tuff ahh webmaster",
"Francesca got so much aura",
"Bring back side part Garrett",
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
