confessions = [
"my pas'crush is so wifey material",
"i want to know anna better too",
"I wanna be friends with everyone on core",
"anna your hair color is sooooo pretty",
"I dont wipe my ass cuz i dont let shit get to me💯",
"My professor kinda remind me of my crush.His water bottle resembles that of a 6 year old boy tho",
"__ a little too friendly…",
"I shit my pants just so I can feel something💯",
"Xavier and Garrett are like Mario and Luigi but Cody and Nohl are like Wario and Waluigi",
"Karly is so stressed go get some sleep girlie",
"Reese can we go to dennys again please",
"what inspired you to make my heart race and just leaving me hanging like that ?",
"we should pasae hotseat some day ik we have some freaks on core lmaooooooooooooooooo",
"seeing everyone at revs with their adings and paams was so wholesome 😭",
"garrets new ig profile pic has me washing my hands at 2am 😳😳",
"kuarlen is a great mom",
"BIG SHOUTOUT TO CARM! ty for doing everything that you do --you're amazing and we luv u <3",
"i love pasae.",
"bro just cuff each other already",
"prepare for the reclamation of PASAE by Legacy ⚔️",
"i got second hand embarrassment at revs",
"i love flirting",
"revs really tested my patience this sem as an ate ",
"who tf ate all the garlic parmesan",
"raelin is so genuine.i love her energy",
"LETS GIVE IT UP FOR THE PR TEEAAAMMMMMMMMM",
"Don't leave me stuck here in the streets, uh huh If I get another chance to I will never, no never neglect you I mean who am I to hold your past against you? I just hope that it gets to you I hope that you see this through I hope that you see this true",
"Long distance, I need you When I see potential I just gotta see it through If you had a twin, I would still choose you I don't wanna rush into it, if it's too soon",
"IF YOU LIE JUST TO LIE(NOT IN THE FUN WAY), GTFOOOO",
"i hate when ppl guilttrip",
"I love you core",
"I swear to fucking hell you guys are so cute together"
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
