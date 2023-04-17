confessions = [
"mwah",
"honestly, i want to be more involved in pasae, but i get so intimidated because everyone already knows each other. ",
"i love exec",
"Garrett is a absolute menace to society",
"sometimes i lay awake and wonder if garrett kisses his lola with that mouth",
"i nominate cody garcia for core 36 cs rep i luv him sm",
"so…what if my ate gave me a kith?",
"i would die to see kiana perform at pasae banquet’s talent show",
"i get life’s flashbacks whenever i feel therese’s presence around me",
"nathan can be my daddy",
"MILA YOU’RE ONE HELL OF A BADDIE PLEASE NOTICE ME",
"josh’s smile makes me want to pee so bad",
"DAP is overflowing with hotties my eyes just cannot 🥵🥵",
"cody the future of pasae. he cute too",
"freya is pasae’s coolest coolio ",
"if mila was interested in girls, i would’ve asked her out",
"can i confess here about someone i like who’s in PCN? they’re just so hot, so kind and so sweet i melt every time i get the chance to interact with them",
"i received a thirst trap in the middle of work and i couldn't keep calm",
"I hope core 36 shows up to more events, it's really sad going to events hoping to see some core members and they're never there :(",
"i want to talk to more of you guys but i never see some of you people",
"josh is the backbone of pasae frfr",
"the cooking event seemed really cool, i hope that continues for next year",
"i know who i want to see in core 👀",
"more socials!!!",
"im literally sitting next to matt rn hi matt :3",
"core 35 is so cute",
"im also sitting right next to karlaine rn hi karlaine :3333 <333",
"[REDACTED]",
"What do you think, buzzy-boy? Are you bee enough?     I might be. It all depends on what 0900 means.     Hey, Honex!     Dad, you surprised me.     You decide what you're interested in?     - Well, there's a lot of choices. - But you only get one.     Do you ever get bored doing the same job every day?     Son, let me tell you about stirring.     You grab that stick, and you just move it around, and you stir it around.     You get yourself into a rhythm. It's a beautiful thing.",
"I know it's the hottest thing, with the eight legs and all.     I can't get by that face.     So who is she?     She's... human.     No, no. That's a bee law. You wouldn't break a bee law.     - Her name's Vanessa. - Oh, boy.     She's so nice. And she's a florist!     Oh, no! You're dating a human florist!     We're not dating.     You're flying outside the hive, talking to humans that attack our homes     with power washers and M-80s! One-eighth a stick of dynamite!",
"I want to take shrooms with core ",
"I'm just an ordinary bee. Honey's pretty important to me.     It's important to all bees. We invented it!     We make it. And we protect it with our lives.     Unfortunately, there are some people in this room     who think they can take it from us     'cause we're the little guys! I'm hoping that, after this is all over,     you'll see how, by taking our honey, you not only take everything we have     but everything we are!     I wish he'd dress like that all the time. So nice!     Oall your first witness.",
"matt i am very proud of u ",
"A— please bear my babies",
"MY STAFFER IS SO HOT I’VE NEVER EXPERIENCED THE WINTER SEASON AFTER MEETING THEM 🥵 ",
"I miss the old confessions, where people were highly encouraged to touch grass.",
"me planning my hoe phase next year: ✍️ 💅✍️",
"#KAPAUP",
"i'm not ready to be exec",
"i love the new internal president",
"imma be hot as fuck in 2 months and you’ll be drooling over me like you’re getting a root canal. Mark my words 😤",
"I love core 36 already ",
"borg dayger was so much fun!",
"if ur reading this lets hang out :)",
"hello carmelita i have a crush on you 👉👈",
"i think the sunshine and warm weather genuinely boosted my mental and made my mood better",
"the ending of the school year is so bittersweet. i never really got to know seniors in core 35, but they're all super nice and they really made pasae such a wholesome and fun community, so sad to see them go but excited for them as well",
"pil community crushes suck cuz like why are u in thirty orgs how am i supposed to avoid u",
"Where are my shes/theys/gays at? I miss yall, plsssss come back 😭😭",
"sooo what if the seniors just stayed another year on pasae funds 🤔🤔 who says no",
"I hope people doing core interviews know how many in n out ketchup cups fit in an average Nepalese subway car",
":( i still never tried pasae punch, but its not my fault, i just can't help but go home",
"i want to rizz up a pas'baddie",
"i am pas'down bad 😰",
"i won't my pas'crush so bad UGHH",
"i want someone to tickle me like that person tickled boba after accidentally touching it 😭 ",
"finals and dead week boutta make me pas'out ⚰️ ",
"i get tempted to fight one of the adings in my paam cause they’re so mean",
"I'm so proud of Therese",
"i love seeing my adings in KAPA grow thru PASAE :,) <3",
"respectfully need someone to spit in my mouth on the double",
"josh and henzel's ig stories make me want to go to coachella",
"I miss A in pasae",
"PASAE was the reason I chose Berkeley and the community I found from it has been great",
"Excited to see what next year has in store for PASAE, the new exec looks great",
"This year has sucked the life out of me",
"Mila, I think you're amazing and I'm so excited to see how you take PASAE",
"Karly, I know you'll kill it in exec and I hope you take care of yourself while doing it. So excited to see what happens next year",
"Freya, you're gonna do great and I know you'll represent the professional pillar well!",
"josh was/is an amazing president",
"ty for the borg felix",
"im not ready to be exec",
"im going to miss ate kia",
"i miss joyce",
"core 35 went to my luau and i love them"
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
