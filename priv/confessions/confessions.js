confessions = ["believeth in Josh (Bautista) and thou shalt receive",
"Darius best singer, hooper, and dancer!!!",
"“According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.” ",
"i think x and y would be a super cute couple, their personalities just mix so well together I just can't 🥰💕🥰💕",
"tell me im a dumbass straight to my face, u deserve to ",
"well that failed, cs majors </3",
"ate kia is so awesome and cool and swag cheeehooo<33",
"ate ana i miss u",
"can someone ask lfs to come by and do a collab workshop or something bc i like someone there lmfao",
"i’m still not over ygs skipping my song at the social so i want a taylor swift themed social now",
"i better hear all too well 10 min version taylor’s version FULLY at the next social",
"i <3 y'all in legacy",
"i wish you guys played a better playlist at socials ✋😪",
"let us queue songs at socials ",
"i can't talk to pasae men ever again",
"avatar themed social (come as ur element) !!!",
"pas'bowling pls",
"pas'topgolf xD",
"pas'tahoe",
"manny kinda cute ngl but like also v sus.",
"reva has made me a swiftie - help me",
"josh b is quite the astute fellow himself",
"Christian has good taste in music",
"last social was wild bro",
"can kalana be my ading?",
"if they're no longer my staffer can I ask them out lolol",
"im happy im somewhat getting closer to everyone now :D -gelo",
"Therese, tysm for all of your hard work this year! Also, you're cute!",
"Jared best PR ever! his designs are top-notch!",
"hej angelo hope germany was fun",
"henzel send me your anime list",
"Darius is best boi ",
"I want to get carried the way j carries m",
"alexis a is the cutest pasae member of all time period fight me 😤 ",
"joely i have a friend crush on you",
"i super admire Kiana 🥺🥺🥺 she's one of the most hardworking and kindest people i've ever met",
"Michael is the best driver",
"josh b gimme some of that harmony you got  pwetty pweeeease",
"conner is legendary",
"so anyone want to watch keshi with me 🥺",
"u know I was stupid just say it to my face ",
"Anybody want to co-op on Genshin? Lmao",
"I hope Reva applies for core next year",
"why did some people refer to PASAE as the most social pil org LMAO",
"the apples in that pasae punch were so good... whens the next pas'social",
"I think berets are really cute",
"why do people in pasae always leave people on read?? like its highkey frustrating! u know who u are 😡",
"joely and reva should apply for core they are perfect for it!!",
"I would commit international war crimes for Kiana if she asked"
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
