confessions = [
    "a + j need to film a special video,,,,",
    "therese can I be u when i grow up 🥺 ",
    "anyone tryna shoot webs on me at no way home",
    "y'all are down bad fr chill",
    "i have a growing collection of rocks and i love it",
    "n and m are rlly cute together they should date",
    "bdsp how about bdsm",
    "I think we all need some elaboration on the cop-sex-campus story plz and ty",
    "noah is so sweet",
    "reva plz choke me out I beg u",
    "lets smash (u know what I mean 😏)",
    "can ana peg me pls i am deprived 🧎🏻‍♀️",
    "Michael drunk playing the piano is a vibe",
    "averys dancing got me acting up",
    "anyone wanna give me their social security # 👉🥺👈",
    "is freya taken? asking for a friend",
    "someone once told me I had blowjob eyes and I’ve never known peace since",
    "I have never been sober at a pas' social and I want to keep it that way",
    "michael is a swiftie",
    "sweater weather by the neighbourhood. that's it. that's the confession.",
    "freya r u single?",
    "👍",
    "when conner joined the gc and just 👍 then dipped...",
    "Michael did it hurt when you fell 13000 feet from the sky?",
    "reva talks ... a lot ... like a lot a lot ",
    "I like you. I don't know how to shoot my shot, or even if I should. you are the sweetest, coolest person I've met this semester, and I don't want to ruin anything between us.",
    "josh b where's da merch",
    "is avery single ??????????????????????",
    "writing confessions while procrastinating for finals is a vibe",
    "josh b come home",
    "imma miss y'all ",
    "reva is so innocent and precious protect her at all costs",
    "its so cold rn I want to d*e",
    "why the fuck is everyone named josh",
    "jr has a fat ass pls sit on my face",
    "hey Reva, you talk a lot to other people, I wish you'd talk to me tho 🥺",
    "manny peg me",
    "avery you look pretty decent 😩😩😩😩 you should peg me some time 😏😏",
    "freya peg me",
    "i really like being pegged. if u feel like pegging someone, u should message the person whose name starts with j aka me 🥰 (plz do it, desperately in need of a good pegging)",
    "let’s leave j names in 2021",
    "ate ana peg me",
    "i want josh to spank my ass (gently)",
    "i told everyone im japanese filipino, but im secretly just filipino and im too deep into the lie",
    "im down bad for manny",
    "ive hooked up with like half the guys in the pil orgs and i feel like m is the best in bed",
    "@Josh you should hit me up after finals ;) you know who you are",
    "ate ana can stomp on me with her big stompy shoes",
    "Michael kinda hot ngl",
    "Avery, I would love for you to come to Kip’s with me. I will gladly wiggle in front of you. 😏",
    "im a whore, so if u want some, get it",
    "haha we matched but you dont remember 😭 p.s. i still think you’re hot",
    "Patiently waiting for Michael to hit me up at 2am",
    "you’ve shot ur shot like 20 times with me already, please get a hint 😩",
    "hi nyah ily thanks for going to sweetgreen with me <3333",
    "someone play val (or league) with me (i only play spike rushes or aram tho)",
    "where are the volleyball open gyms pls let me know -gelo",
    "<3333",
    "wilson i love u",
    "Thanks so much to Core 34. I love yall and I think you’re doing a great job. I really appreciate all the work you’ve done for PASAE and us interns :)",
    "the ball is in your court",
    "not the cops pulling up to the Tilden parking lot at midnight 💀",
    "hey core 34, see ya in a bit :') - ya know who",
    "how wrong is it to want a harem and be part of one's harem at the same time?",
    "movie night was sooo fun!",
    "Therese is so sweet ",
    "ana's ig gives me life",
    "a is so sweet and kind",
    "reva what's ur type asking for myself",
    "rigel u will be missed :'("
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