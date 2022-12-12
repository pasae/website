confessions = [
"I think my Kuya's a cultured weeb.",
"i dont wanna be a kabet pero here i am",
"i miss u joely come back!<3",
"thanks for running confessions matt! you are such a GOAT, King! also the website looks very nice thanks to you!",
"The three most beautiful things in life are friends, chess, kaiser ahhh",
"josh and henzel are a pretty goated duo",
"pasae will always hold a special place in my <3",
"i wish i saw j at kips :(",
"therese is sooooo awesome, she’s my fave person hehe",
"i came here to say i wanna hang out with kiana. she’s my friend crush ever since day 1 but she looks busy",
"therese is such a slay-dyboss and i love it",
"it sucks when people literally gag and show outward disgust in regards to my music taste, like yes you dont have to think it's good but you dont hear me pooping on ur music taste :(  it's kind of unfair but lets just be respectful to each other :)",
"hi felix would u go to the gym with me ",
"Thank you PASAE for an amazing semester!",
"you guys are graduating too fast i can't handle it ",
"start thinking about joining core because so many of these wonderful people are leaving 😭😭",
"i love josh bautista",
"Fastest semester of my damn life",
"I love Core 35",
"There's no way your guys' favorite board game is monopoly wtf",
"THERESE WITH THE GREEN DRESS SLAY",
"i like someone in pasae 🙈",
"This semester stressed me tf out. I am exhausted.",
"Thanks for the winter banquet filled w/ good food & people! ❤️ ",
"Anyone in green is a sexy motherfucker 😉 HMU",
"HAPPY HOLIDAYS PASAE!! ☃️",
"I will literally kiss u rn",
"thank you pasae exec",
"my heart is full",
"pasae is losing a legend in henzel ✊😔 ",
"Henzel has to be in contention for GOAT PASAE member",
"kiana’s baby teeth is cute ",
"my ate is kinda hot and i can see myself dating her before joining a paam but now i got picked up by her sib and she now calls me ading",
"I WOULD LOVE FOR JOSH TO STEP ON ME WHILE SINGING RICH SPIRIT",
"I **** josh bautista",
"i appreciate you angelo",
"i shaved my legs for the pasae tech panel event but i guess that wasn’t good enough ",
"the person that was dj-ing at the banquet should dj for a pasae rave event next semester",
"i think aroan is pretty cool",
"i wish to see a lot more anna and mary in pasae next semester ",
"josh r is a drippy man",
"i would be ecstatic to know all of the spices pasae has to offer. am i hearing winter retreat hot seat? ",
"if you think you have a crush on someone, you’d better be off thinking of your next step: confessing ",
"i can see e and f being a cute couple",
"i would even eat chocolate ice cream just for them to look my way. i’m serious ",
"who came up with core superlatives? I just want to talk",
"wish people went to more events :'(",
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaáaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
" pasae exec please, I beg of you, im pleading, please step on me (respectfully)",
"i stan a francis joshua bautista",
"imagine your ading calling you onii-chan or oppa instead of kuya ",
"pas'ski trip when?",
"who's impulsive I need more impulsive friends",
"why y’all gotta do nohl like that i’m dead💀💀",
"PASAE is so lucky to have Josh as President. He thinks about PASAE waaaaay too much, it’s not even funny ",
"PASAE is so fortunate to have Kiana in the space. She’s literally the most caring person I’ve ever seen and she deserves to be taken care of. Literally a mommy queen and she could’ve easily chosen another org but decided to stay with PASAE. i love you Kiana <3333 ",
"nobody’s gonna talk about Matt making the PASAE website really nice, like really?!?! Yo matt, thanks for making the pasae website really nice and also thanks for running confessions!  ",
"a therese every year keeps PASAE secure :,) ily therese",
"a mila a day keeps invaders away",
"a gelo every month lets PASAE stay fun 🤩 ",
"i see the future of PASAE in Karly’s hands. she definitely deserves some awesome help though, i don’t wanna see her burn out",
"anyone else here failing their classes? don’t worry, you’re not alone. Failure is a part of learning and definitely will help shape you to the model you’re about to be :) just stay persistent and maintain a wonderful support circle around you ",
"if you are reading this, I’m glad that you’re a part of PASAE and i’m so fortunate to have shared the space with such an awesome person like you. And yes, this message is bound to be read by super amazing people. Let’s run it back next semester!",
"how was kpop jpop and international pop the same but not indie and indie rock? that was hard lmaoooo",
"isn’t halloween already over? why tf is he still ghosting me smh",
"i like someone so much that they get to appear in my dreams too often and i don’t even want to dream about them anymore. i’m okay",
"hey y’all, i made a short video abt my how lovely my pasae crush is. please keep it to yourselves after watching thank you!     https://m.youtube.com/watch?v=dQw4w9WgXcQ  ",
"s/o to the karoake vibes after banquet, elite",
"what if we held hands and ate turon in the back of a jeepney 👉👈"
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
