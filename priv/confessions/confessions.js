confessions = ["therese is so pretty pls on my knees rn",
"tell me why emmuelle always catching my heart man",
"gelo i swear i'm in love w/ u",
"i want ana's style",
"i thought someone was cute at the social for the first time",
"I know valentines day already passed, but if anybody is looking for a bae 👀",
"y’all are not as slick as y’all think you are",
"freya you deserve better :’(",
"michael ???",
"I actually like you back",
"i dont fw pretty boys ",
"Henzel fr the goat",
"I love the way your glasses sit on your face as you do your homework you’re such a cute nerd 🥺 ",
"I have a crush on a core member",
"You guys need to take the hint 🙄",
"My heart beats faster when you walk into the room",
"Kiss me",
"Michael what if we kissed at pas’karaoke ",
"ana pls choke me i love you",
"henzel is my dream kuya <3",
"freya is a baddiee",
"i love u joely!",
"kia is the best she runs this whole thing",
"everyone say thank u therese for running confessions + webdev WE APPRECIATE U",
"stop talking to me when im drunk i have no filter !!",
"angelo how u gonna shoot ur shot from sweden",
"michael’s been looking so manly lately",
"someone marry henzel asap",
"drunk joely is so funny <3",
"if you have to anonymously ask someone’s relationship status, then you’re not close enough to them to even have a chance ‼️",
"yes daddy",
"josh f",
"boys, leave the baddies alone please 🙏🙏 they are for the girls.",
"henzel can sing, dance, and is so so nice and welcoming????!?!?! cuff this man rn!!!",
"pls i want to get to know reva but i feel like she hates me pls",
"karlaine miss girl you have my whole heart ",
"seeing audrey + camille during gen member meeting was one of the best things this week i've missed them",
"i hope im a good staffer for my interns",
"i hope u go to pas' karaoke so i can sing to u hehe",
"stop hitting on girls through confessions (y'all know who u are)",
"i respectfully think that you need to take a hint about your crush ",
"therese i love you i genuinely think you're the funniest core member; like legit just pure, natural humor",
"the tea this sem is hot",
"the tension during IDD",
"someone get coffee with me plz 🥺",
"joely is the sweetest i love her",
"therese i bet i can beat you in wordle",
"I know it’s ass but I want to go to a frat party",
"our socials need more people ",
"pas' social is cool and all but i wish it was more fun and there was dancing bc me likey 2 dancey",
"reva is someones favorite ading",
"reva is everyones ading",
"i wish i was more like reva",
"michael, i hope you get 1st place in your half marathon; use those legs child",
"angelo hej",
"conner i miss you",
"camille is mythical",
"emmuelle is the best pasae wellness coordinator in the history of all pasae wellness coordinators ",
"i think j + m look really good together, what does everyone else think",
"michael i hope you run well",
"where's a i miss them come back cutie",
"angelo 🇸🇪",
"the first time i saw you walak into the pasae event, my heart just stopped. the way your single strand of hair fell onto your face was absolute perfection. your warm glow casts away all my doubts and fears. there's something about you that so angelic that intrigues me. but i know, i will never be enough for because alas i am...... a weeb. it breaks my heart to just think about it. i shall be alone for the rest of my life. but it is ok, because the very image of you will stay in my heart forever :')",
"wilson lemme see dem cats",
"wilson bring your cats to a pasae event",
"ana step on me pt 2",
"rigel lemme see wilsons cats",
"Wilson is so popular he'll never take me home to see his cats",
"i want wilson to be my pasaebud so i can see his cats",
"travis lemme see wilsons cats",
"wilson, i can meow",
"jared is father",
"jared is also my father ",
"rigel is my cool uncle",
"josh is like a nice uncle",
"i think someone got a haircut and now i think they’re cute",
"reva has good taste",
"Conner talk to me I just wanna b friends",
"we should have a euphoria themed social !!",
"I know I have friends and my paam and pasae even but this is really the loneliest ive felt in a long time",
"isa ur v cool",
"Every semester is worse than the last",
"matthew i didnt actually need data 8 hw help i just like u 😭",
"jk i take it back",
"pas'vegas anyone?",
"daddy henzel 🥵😩",
"i think therese is the most gorgeous woman ive ever seen"
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
