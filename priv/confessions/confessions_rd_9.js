confessions = [
"Kali at Cal club when ?? Who tryna hit each other with sticks ???",
"I need a hookup but I’m shy",
"i just want someone to hold me in their arms and tell me its ok and that they're proud of me",
"last week's confessions sucked if y'all don't have any spicy shit this time around i'mma throw hands—",
"DAMN BRUH I WISH I WENT TO NIGHT W THE SENIORS YALL GAVE ME HELLA FOMO",
"funnyfunnyfunnyfunnyfunnyfunnyfunnyfunnyfunnyfunnyfunnyfunnyfunnyfunny",
"PASAE PUNCH WHO ???",
"I'm just finding tastier ways to be an alcoholic ig ",
"Congratulations 👏🎉😉",
"not me sobbing in the corner because I've only gotten to know you for a couple months and you're going to be leaving in May",
"thank you karly for everything you do for pasae ",
"pasae core members put a lot of work into these events, you're all so appreciated",
"big thank you to any members or interns that have taken shifts for events, it means the world ",
"congratulations on selling out at the night market y'all! job well done, especially considering the setbacks",
"I 🙋‍♂️ can show 🫱you the world🌍 Shining🌟, shimmering, ✨splendid 🥰 Tell me🗣️, princess 👸 Now, when ⌚did you last ⏮️ let your heart 💖decide?I 👳 can open 👐your eyes 👀 Take 🛫 you 🫵 wonder🗼 by wonder ⛩️ Over, ⏫sideways 🔀 and under⏬ On a magic 🪄carpet 🇧🇾 ride🎢 A whole new world🗺️ A new fantastic😍 point 👉 of view 🪟 No 🙅‍♂️one to tell 🗨️us, "No"🚫 Or where to go 🌌 Or say we're only dreaming 🛌💭 A whole 🔘new world 🌎 A dazzling 💫 place I never 🙅‍♀️ knew🤔 But when I'm way up ☝️🕊️here It's crystal 💎clear That now ⏩⏪I'm in a whole new world 🌐 with you(Now I'm in a whole new world 🌍 with you) 👭🤴👸",
"They say there's seven wonders of the world, but they should say there's eight because you're the wonder of mine",
"during pas'ice skating im gonna see how far i can jump (off a building) 🙃",
"my deepest darkest pa'secret is that i think [REDACTED] is [REDACTED]",
"Rip nohl aaron abdelhadi ill miss that beautiful 12 in elephant trunk of yours 😭",
"i bet adriel lowkey freaky like dude prolly likes sniffing ass or sum shit, not that i judge tho i want him to sniff my ass and whisper in my ear calling me his dirty little kitten 🥴",
"PASAE HOTSEAT AT PASSGIVING ",
"I don’t like [redacted] that much 😭I’m sorry",
"I’m so proud of creative I love you guys🫰",
"GARRETT WILL WIN CORESASSINS.",
"IM SO EXCITED FOR THE NEW C(ORE)OUPLE",
"i saw nohl and garrett touching butts before core meeting",
"matt has yummy looking feet..i just wanna tickle them so bad",
"im so excited for yall < 3",
"when's the wedding pas'eremony",
"[redacted] has a nice[redacted] I NEED IT IN MY LIFE",
"i know[redacted] is highkey packing i saw the print",
"garrett's next target is kaourlaigne... watch out girly",
"Cody im so sorry...the guilt...the remorse...the blood on my hands...it's too much to bear",
"ngl some people on core kinda unhinged",
"karly ty for successful eau but please self care < 3",
"im a whore, so if u want some, get it",
"ok everybody we can start playing christmas music now"
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
