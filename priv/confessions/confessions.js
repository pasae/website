confessions = [
"i hope adriel's music blows up one day",
"nohl more like null;",
"carlane is a great mom",
"been laughing a lot with core <3",
"i wanna see mila more",
"BRO DID YOU JUST SAY PHILLIPINES?!!1!!!11!!1!PHILLIPINES IS THE BEST FUCKING COUNTRY!!!11!!!1!!WE COULD BEAT CHINA!111!1!11!PROUD TO BE PINOY😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎OMG OMG OMG OMG DONT DIRESPECT FILPINES ITS THE BEST COUNTRY😡😡😡😡😡😡😡 WE HAVE THE BEST ISLAND THERE ARE OVER 70000 ISLANDS😎😎😎😎😎😎😊😊😊😊😊😊MAKE MORE VIDEOS ABOUT PHILIPINES!!!!!!!1😎😎😎😎😎😎 Welcome to our country!!!! 📷️📷️📷️ Philippines love🇵🇭🇵🇭🇵🇭🇵🇭🇵🇭🇵🇭🇵🇭🇵🇭",
"i'm so happy cody is on core",
"sometimes i just wanna scoop up nohlbear and put him in my pocket",
"Anna is so darn nice :)",
"rose is so cool i want to get to know her better",
"I like to creep around my home and act like a goblin  I don’t know why but I just enjoy doing this. Maybe it’s my way of dealing with stress or something but I just do it about once every week. Generally I’ll carry around a sack and creep around in a sort of crouch-walking position making goblin noises, then I’ll walk around my house and pick up various different “trinkets” and put them in my bag while saying stuff like “I’ll be having that” and laughing maniacally in my goblin voice (“trinkets” can include anything from shit I find on the ground to cutlery or other utensils). The other day I was talking with my neighbours and they mentioned hearing weird noises like what I wrote about and I was just internally screaming the entire conversation. I’m 99% sure they don’t know it’s me but god that 1% chance is seriously weighing on my mind.",
"If matt has a million fans, then I am one of them. If matt has ten fans, then I am one of them. If matt has only one fan then that is me. If matt has no fans, then that means I am no longer on earth. If the world is against matt, then I am against the world.",
"Steve Harvey: 'We asked 100 people, what is the male reproductive organ?' Contestant: 'The penis' SH: 'A WUH... HUH??' audience erupts into laughter Steve Harvey grabs onto podium to support himself laughter gets even louder SH: O lordy... one man goes into cardiac arrest and many others begin vomiting profusely from laughing too hard SH: YOU PEOPLE NEED HELP the Earth shatters and Satan rises from the underworld to claim unworthy souls the universe begins rapidly closing in on itself SH: (putting on a weary voice) Survey says... the board shows 100 for 'penis' Harvey is able to get off one more shocked look before existence as we know it comes to an end",
"i want to be jelo when i grow up",
"mila how the fuck did you get so fucking cool",
"freya please dont read my taro im scared",
"a good music rec is one of the best gifts you can give someone",
"you two need to stop flirting in study sesh its so distracting, get a room lmfao",
"Adriel looks like he'd have nice toes",
"bus drivers are underrated",
"i'm so happy",
"Why does Iana remind me of Therese Pamplona tho…",
"Reese is sooooo pretty",
"Can we please turn music down at socials ",
"raelin is the best",
"shoutout raelin love her",
"We're 👨👩no strangers🤝 to love💓💓💓 You know🤔 the rules📃 and so do I 🤓👁️(do I) A full 💯 commitment's 🧑‍🤝‍🧑💍what I'm thinking🤔 of You wouldn't🙅‍♂️ get this👉💜 from any other guy👱 I 👁️just wanna 🙋tell 🗣️you how I'm feeling🥵 Gotta make ⚒️you understand😯🫢 Never 🙅‍♂️gonna give you 👩up☝️⏫ Never❌ gonna let you 🫵down👇⏬ Never 🙅‍♀️gonna run 🏃around 🔁and desert🏜️ you Never ✖️gonna make you cry😭 Never ❎gonna say🗣️ goodbye👋 Never 🚫gonna tell 🗨️ a lie 🤥and hurt 🤕you🫵",
"that was a lot",
"24 hour pasae challenge completed",
"DOES HE WANT ME OR WHAT",
"my pas'crush is denisse ngl 🫣",
"i fw with thomas style heavy",
"thank you ading cody to hosting afterparty ",
"every1 on core is talking to someone WHY CANT THAT BE MEEEEEEEEEE",
"Mason if you are reading this sorry for stacking you on the bitch cup. ",
"i hope all the new interns and gms like us and enjoyed the idd afterparty ;p",
"cody and matt are the nicest boys in pasae",
"who was karlaine with at the party",
"talked to my crush hehe",
"IDD WAS SO FUN I CANT WAIT FOR FUTURE SOCIALS",
"why are the staffers kind of cute 🤭",
"I love Rose's energy",
"raelin is actually the best",
"thank you to cody for hosting 🙏",
"Rise and grind motherfuckers",
"camera at idd was me as a child fr",
"pasae is highkey nocturnal",
"why are crickets so fucking loud for",
"But would they catch a grenade for you?",
"teach us the dance to confidence by jb 😛😛",
"come back",
"i love my intern already",
"am i too hard on core im sorry",
"NO ONE TOLD ME I THREW UP ON A SHOE DURING AFTERPARTY",
"mila + freya ily both",
"pas'snow?? ❄️⛷",
"r u a casino? bc im tryna get lucky 🤪🤪",
"____ could do better",
"we need more spicy confessions",
"mason the goat for killing that bitch cup, i poisoned that shit fr 😭😭"
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
