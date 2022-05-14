confessions =
"we fell off fr, run it back?",
"tye should breakdance again",
"I am so down bad for you. I just hope you  notice ",
"y'all ready for beach day social, anime/philippine cultural themed socials and more game nights next sem? if so, ask them social chairs ",
"Joyce and Ryan is best couple",
"i just wanna be great friends with y'all ",
"okay so i heard audrey is graduating next sem and that she's carrying pasae confessions !! time to step up y'all !!",
"kiana is one of the sweetest and kindest people i've ever met. she's also so hardworking and i'm so glad to have crossed paths with her",
"Im about to ruin friendships once I am on core <3",
"pasae has a special place in my heart",
"i love freya",
"shout out cassie for being best pasaeBUD!!",
"thank you core for making pasae so fun ! :) <3",
"im glad we cleared it up :)",
"core35 has my heart",
"anyone in need of a best friend? text BESTIE to (858)280-1051 and get a quote! First 3 people gets 2x free dessert/month for the fall semester OF YOUR CHOICE (anywhere within a 1 mile radius of UC Berkeley). Promo lasts until December 10, 2022. Data rates may apply. FreeMsg",
"New core lookin sexy",
"I hope everyone's finals went well!",
"Some of you guys stand too close to each other to be just friends",
"summer confessions pls I can't go without the tea for 5 months 🥺",
"core 35 is hot",
"I think I might have developed a crush on my soon-to-be roommate.",
"ngl some of y'all got some real nice feet like i would pay for toe pics deadass",
"we should compile highlight confessions and construct a play about them to perform at banquet euphoria style",
"I was hoping to see more GILFS at BASF ngl",
"therese you're cute ples step on me ",
"i heard gian got a gf. i know the old pasae girlies are crying rn",
"three ate kiana hugs a day will complete my day any day bc she slay",
"cassie let's be friends! 👉 👈 ",
"nah the only confessions you all should be making are with your pas'tor",
"Jeremy is MVP caliber",
"Pa'shy is just yassified social anxiety.",
"pasae core: all-stars editions (selcom)",
"every pasae life science rep has been a heartbreaker its like a curse ",
"numero una tagumpay royal oo portnayt na tayo bababa",
"mataas ako",
"Henzel can do everything but when will he do me",
"i love finals week. when mental health is down the quality of confessions go up.",
"I worry for all you meat and rice only filipinos. Not a fruit or vegetable in sight. You're gonna get scurvy babes!!",
"Confessions come and go but Audrey and Camille's overheard posts are forever. ",
"did anyone else ever play fruit salad at a filipino birthday party? that's pasae",
"My separation anxiety is gonna be skyrocketing when I don't see my paam for more than a week this summer.",
"CONGRATS ON YOUR ADULT JOB NOAH I'M SO PROUD OF U",
"i have literally uncovered so many love polygons in this org we gotta start making a digital model of these",
"all the pics from last pas'social are so sexy like any would of you could hit me with those golf clubs i'm just a ⛳️",
"home of sexuals",
"I think statistically at least one of us has to be a furry.",
"ngl michael is kinda cute",
"josh is the epitome of poginess",
"We love you Jeremy - the Big Ballers",
"nathan had himself a goat moment during transfer weekend ",
"does that certain core member's back hurt from carrying pasae? ",
"Ryan is an all-around goat and so is Joyce",
"slayyyy core 35 exec",
"josh b slap my butt please ",
"SLAAAAAYYY MARK",
"jared let's go rave!",
"who has e?",
"I dont think the world is ready for Matt Mojica next year",
"anyone want beach socials? :D",
"Aye let's have a PAS'Zedd Event on October 8 at Bill Graham",
"anyone who likes raves hmu - not Jared",
"if nh=gt, then noah is goat",
"pasae35 execs are not just goated, they're all cute too slay",
"raph show me that smile once more this semester daddy",
"anyone thinks 3rd floor of 2616 apartment is a good place for socials?",
"Christian sheeee you killing salsa",
"That 3AM PASAE run to Denny's was pretty legendary",
"This semester was rough but PASAE made it better <3",
"josh b and henzel are the two uncles of pasae don't you agree?",
"I wish Conner was in PASAE",
"I feel like PASAE would benefit from therapy",
"yall wanna add a spotted channel to the pasae discord",
"The banquet was slay",
"Berkeley time and filipino time stresses me out ",
"Sup Avery",
"I wanna be friends with Mila",
"Ana please teach me how to dress and be cool, i aspire",
"I wish it was easier to talk to you, you seem so nice and cool",
"Jeremy rookie of the sem",
"If only we hung out more this year, I'll miss you over summer",
"Avery teach me how to dance, PAS'Dance social pls",
"Wilson, send more pics of your cats :)",
"Happy end of finals everyone!",
"How are you guys doing well in your classes because I refuse to believe I'm the only one struggling this hard",
"Darius when are you coming back to PASAE I miss you :(((((",
"we need to see more of Audrey and Camille in PASAE events! their presence just makes anyone's Tuesdays way better",
"Everything is so hard!!!!!!!!!!!!1",
"Thank you everyone for partcipating in confessions all semester! It's been an honor getting to serve as Webmaster, ty ily all mwah <3 -Therese, Core 34 Webmaster"
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
