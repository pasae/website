confessions = [
    "only pussies suppress their feelings SHOOT YO SHOT BB ", 
    "omg I literally had a dream about u while I was falling asleep listening to a playlist dedicated to u HHAHAHA I think I’m gonna get my feelings hurt if ur not my soulmate ", 
    "jr just tell themalready!!!!!", 
    "Hey Wilson I miss seeing you in 4k ultra HD where are you king", 
    "beef jerky the best munchie snack hear me out ", 
    "apply pressure. ", 
    "have i really fallen for a person that I've only met online 6 months ago? idk why i'm like this, lol. help", 
    "hard to get more like hard to forget ugh", 
    "I admit it. Hes cute. His eyes twinkle like the stars. His lips are red and moist. His dark black hair is long and lush. He talks  as sweet as an angel. Hes smart. Even more smarter than me. He makes my heart race. Hes the only that always make me laugh and smile even if everything is going wrong. Just like an angel...", 
    "It’s April 1 but the only fool is me ", 
    "why she hug her kuya like that😔😔😫", 
    "i feel like we don’t acknowledge nor appreciate Camille’s humor enough ", 
    "i swear if that core member doesn’t make a move on the other"
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
            size = "h6" }
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