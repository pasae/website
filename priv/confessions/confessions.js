confessions = [
    "kiana is such a good person and she works so hard i just wanna show her how much i appreciate her",
    "emmuelle is literally so cool and so nice i love her so much she really does so much and i hope ppl realize how much she works for pasae",
    "hiiiii thereeeseee ily ur literally so funny and ily so much you're literally doing so much work and honestly ur just a blessing to be around pls dont change ",
    "JARED UR SO COOL I PROMISE ILL SHOW U MY LIGHTSABER ONE DAY THAT IS NOT AN INNUENDO I WILL SHOW U MY $300 LIGHTSABER THAT I BOUGHT IM SORRY THAT I HAVENT KEPT MY WORD YET",
    "elaine and kalana are such good interns and they literally are so nice and supportive i love them sm <3333",
    "hi ana can we get another tattoo together pls ik we share our diff tattoos with each other but i wanna get one with u <3",
    "hi wilson ur so cool im so grateful that ive been able to get to know u <3333 ",
    "are j and t a thing?",
    "nick lets kith",
    "I hate my life",
    "ugh my lab partner is so hot how do I tell him",
    "i look forward to pasae events bc everyone is so hot.",
    "alexis u r my role model for being too cute <3",
    "pasae is the least cult-ish pil org",
    "freya & ana teach me ur ways 😜",
    "xtra love to kiana for being an awesome staffer !",
    "josh f. thats it thats the confession",
    "DONT BE SHY PUT THE WHOLE NAME",
    "all the boys in core are bottoms change my mind",
    "DMS R WIDE OPEN LIKE MY LEGS 4 U",
    "A cop caught me having sex on campus but he said he did the same in college so he let us off with a verbal warning",
    "i take it back, michael is a bully",
    "i love ate ana",
    "wilson step on me with ur crocs. please",
    "joely is so adorable i wanna be friends",
    "I hope Rigel never leaves im not ready to be an orphan :(",
    "jared ur cute ;)",
    "bro night market was AMAZING",
    "if you average josh b and audrey's heights would they be average height",
    "u be texting me with ur problems cuz im the solution",
    "my adings are the cutest 🥺",
    "okay but hear me out, what if,, everyone,,,,, does in fact,,,,,,,,, hate me",
    "kiana i see and appreciate all  your hard work",
    "we be playing codenames but why do I have to use a codename for you?",
    "josh a u got more of them fakes?",
    "wilson's got two cats does he want a third?",
    "freya be giving me the feels ya feel",
    "Henzel always be bringing snacks when will he realize he is the snack",
    "plz cuff me",
    "avery is the kevin nguyen of pasae",
    "nyah is wifey material",
    "reva always be ignoring me :/",
    "my interns are so sweet!",
    "u always be studying chemistry why don't you study our chemistry 😭🥺",
    "J must be packing ya feel 👀",
    "camille I miss ur spicy memes ",
    "maybe you and i were a missed connection",
    "travis can u sprinkle some of that salt in my mouth ",
    "can Avery and Ethan perform at banquet pls and ty 🤧",
    "nyah pls choke me idc",
    "Raphael is such a cool buddy",
    "Ty has a really cute face :)",
    "i think reva is a pyromaniac",
    "michael taking late night jogs... to my apartment",
    "lets smash? (as in super smash obviously)",
    "if ur reading this shoot ur shot",
    "Michael went to illennium that makes him an abb now",
    "i love ate emmuelle 🥺🥰",
    "legacy>>>",
    "ayo ya'll baddies fr",
    "i love taylor swift, stream red <3 ",
    "michael are you happy",
    "michael i’m your real favorite ",
    "Anybody down for an anime binge date? Cuddles and popcorn included free of charge 😉",
    "Yo manny when you dropping your next fire track",
    "Raise ur hand if you also think this is the most difficult semester you’ve ever experienced bc 🙋‍♀️🙋‍♂️🙋",
    "I could drop some spicy confessions but as soon as I name drop, I think it would be too obvious 🥵",
    "pls be my friend im friendly :D",
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