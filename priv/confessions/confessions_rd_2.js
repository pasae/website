confessions = [
"can u guys make confessions spicier this week's was mid thank youuu",
"yall can't just be saying shit to say shit people's reputations are on the line😭",
"the exec confession during women's history month is wild you need jail my guy",
"I want, no, * need * Matthew Vincent Lopez Mojica III to absolutely crush my head between his legs and call me his sweet summer child 🥰🥰🥰",
"The smell 👃of your skin👗 lingers on me👩 now You're probably on your flight ✈️back to your hometown 🌇 I need some shelter 🏠of my own protection 🦾, baby 👶 Be with myself 👧and center ⭕ Clarity 🧘, peace ☮️, serenity 🕊️ I hope🤞 you know💭, I hope 🙏you know🤔 That this has nothing🙅‍♂️ to do with you 🫵 It's personal, myself and I 👩‍❤️‍💋‍👩 We got some straightening 📈 out to do And I'm gonna miss 😢 you like a child 👶 misses their blanket 🛏️ But I've got to get a move 🚶on with my life 🧬 It's time⏰ to be a big 💁‍♀️girl now And big girls 🙇‍♀️don't cry 😭",
"yall yap too much",
"no matter what happens, next exec will be cracked fr",
"pls just end me honestly 🙏",
"we need Karly or Mila as president next year pls pls pls pls pls pls pls",
"there was shrinkage, jerry!",
"karly thanks for doing so much for pasae we love you so much: ')",
"noah",
"where tf are you and your confessions people ",
"ngl i think iana would make an incredible internal pres",
"koraline is a good mom",
"let me out this bitch alreadyyyyy",
"my mind is blank",
"yall crazy except you carm, luv you bruh"
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
