confessions = [
"core trip to santa cruz pls",
"Nohl is really cute 🙈",
"Reagan has the fattest ASS in the world... SO SEXY BAE",
"somebody put me on pas'social aux pls I swear i'll only put one radiohead song",
"during the summer after freshman year one of my ex friends invited me to have dinner with her friends and it ended up being a bible study with her cult church group lol",
"Lam is a hot sexy man",
"the first time I threw up from alcohol I clogged my friend's sink with undigested chicken chunks after coming back from a random mansion party in Hayward.",
"where the pasae punch at? ",
"mila is so sweet",
"i need a hug",
"i am not meeting my 4 hugs a day",
"im this close from finding someone cracked on linkedin to take my midterms",
"I want to ask them out but long distance is hard :(",
"pasae punch is dangerous",
"my intern isn't showing up to meetings im sad",
"what if we picked core 36 squid game style",
"Whenever I feel sad I think of Josh Bautista and I feel better",
"I am lacking thoughts",
"hi matt and hi matt's interns",
"I wore two different shoes to the core meeting and now I am conscious about what I wear LMAO",
"Shout out to Matt's interns for pushing the confessions!",
"I think Olivia has the SWEETEST heart I can't wait to see her grow through the intern program",
"Liezl bestie I hope you get better soon so we can hang out ",
"Mariel bestie I am gagging and crying thank you for being so funny",
"gelo pls share me ur dance moves",
"Emmuelle I swear I love u pls be mine",
"Therese no words can explain how much I love u",
"it's so cold...if only there was a big strong engineering rep to keep me warm...",
"shoutout my interns for being swag",
"Is there a chance we get to collaborate with maganda magazine for an event? There’s somebody I’d like to see more often but they’re not #PASAETILIDIE.",
"maybe have pas’confessions where everyone says the name of their pas’crush/pas’friendcrush 🤔",
"i miss joyce :c",
"pasae getting caked by steve aoki is the craziest timeline",
"nathan is kinda bad ngl",
"i have nothing to confess i am an open book",
"i have eaten dog meat before!",
"Hey 👋❗️you 💧 springtime ⏰☔️🌲 sluts 😉😈 It's time ⌚️to turn 🔁 ahead 🙎🏻 those COCKS 😂👀🍆🕑. Daylight 🌇👌saving 😉🙍🏻 💦time begins 🔔 on Sunday 😐☀️🌅. That ☝🏻 means 😋 LONGER 🍆😏 evenings and 😞 shorter 😐 mornings 😩😣😫. More time 🙀 to suck that ⚠️ night 🕕 time 🌃 dick 🍆🌚😻 you hoes 💁🏻👯😳😜. So send ➡️🚮 this ⬇️ to 2⃣0⃣ of your freshest 🌺 fuckbags 👉🏻👌🏻🍑😋😅🙋🏻 if you 😍 want 👄 your 🌺🌼🌻 flower 💐🌹🌸🌷 to get 😉😏watered 💦💦💦👅. Get 1⃣0⃣ back ⬅️ and 😁 you're the 👩🏻 mother 👵🏻 of all 🌼💐 March 🌻🌸 meat 🍖 wallets 🍗🍔🍑😂💯. Get 5⃣ back ⬅️ and you're 🙊☔️ a spring ☔️💐 skank 🙆🏻 in training 🚣🏻🚴🏻💧. Maybe ⏰ next ➡️ year📆, junior 😥💦 juice box💦😂. Get none 0️⃣⬅️❌ back 😭😂 and you're 💁🏻 just a 🍌🌇 summer 😨🌞 smush mitten 😈👐🏻🚿🚱😆😒😖",
"fuck daylight savings time all me and my homies hate daylight savings gimme my hour bruh",
"core 35 is so cyoooooooot ^o^",
"I swear to you Christian Nisperos is part of the simulation",
"Therese is so pretty",
"Nathan should come to raves",
"henzel is like the dad i never had",
"asian jesus",
"henzel is so goated for picking us up last night",
"philip looks like he could sleep a polar bear",
"where is the wet socials? I am trying to drink smh",
"I demand social chair to put more wet socials, we are halfway through the semester and I have not tasted PASAE punch",
"I just want to get drunk and sing country road with the boys",
"therese can be scary sometimes but she's actually sooo sweet",
"last night i got so high i got scared of my pockets",
"are you happy now?",
"whose going to keshi?",
"During this years 4th of July my family had planned to go to Vegas to celebrate, but I said that me and my friends had already purchased tickets to a fair at the same time so I couldn’t go (which was true), but while they were out of town after the fair event, I had invited my partner (at the time) over to my place and they stayed the night (nothing happened but yeah). To this day my family still doesn’t know 1. That I was in a relationship and 2. That I had them over..."
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
