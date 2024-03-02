confessions = [
"I wish exec would take turns pegging me <3",
"can the new core couple just get together already",
"pimkled radish",
"if matt has a million fans, im one of them. if matt has one fan, i am him. if matt has no fans, i am no longer alive. if the world is against matt, i am against the world.",
"how is Garret and Xavier even co reps like xaviers so sweet and wholesome and then garret will straight up say the most heinous, diabolical shit known to mankind",
"shoot your shot",
"i love my interns",
"Adriel if you see this can you [redacted]? ",
"idd afterparty sem 2 did not live up to the first one",
"what were yall doin at artichokes for over an hour 😭",
"I love sinta 🫶🫶🫶",
"I watched Cody commit a random act of kindness, and honestly made me glad I know someone like him in my life ",
"YAP YAP YAP YAP"
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
