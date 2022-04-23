confessions = ["these confessions got weak after last month",
"when im scared to send out emails I sign them as avery perez",
"yuh",
"I'm so excited for core 35 y'all are going to slayyyyyyy",
"therese you make my heart sing",
"Emmuelle can I be yours",
"Gelo teach me how to ride that skateboard like you ride the way into my heart",
"reva let's be besties",
"Henzel is juggling PASAE AND PCN?!?!!?!?! what else can this man DO",
"am to the pm pals.... I love u all",
"josh I hope we can be besties next sem",
"where's Manny? I rarely see him hmmm",
"Karlaine is straight up beautiful man",
"this sem went by so fast ngl",
"fruity fruity fruity",
"avery should teach us all a kpop dance",
"a lot of u are fruity -a fruit",
"new exec looking kinda cute",
"i was so proud of my paam in pcn and running up to them with a sign after was so fun",
"Josh F lookin real good as the prince at PCN ",
"kiana, emmuelle, therese, gelo and Josh looking like a dream team out there. y'all so cute",
"KIANA SLAYYYY",
"Good luck to all the seniors in your future endeavors! PASAE will miss all of you - Em <3",
"hi <3",
"i am lw excited for spring banquet :o",
"women in leadership!!! hooray for new exec!!",
"filipino men are very nice to look at..and i mean very nice to look at..but also, i feel like i have to walk on broken glass to talk to yall",
"why'd you leave it so unfinished",
"Ana is my PASAE default fr",
"i want a long hug from Michael so bad",
"Jared let's get f*cked up together 👀",
"I wanna spend time with Noah ): I hope comes to the social",
"ayo are wholesome socials a thing? i don't mind netflix and chismis tbh",
"Karlaine is so pretty wtf man someone cuff her before I do",
"Therese your laugh is so contagious it gives me butterflies",
"Emmuelle be keeping me well fr thank you queen",
"Gelo you're my default",
"Has anyone seen Avery's performance?!?! my bias fr",
"Angelo are you willing to bring pasalubong pls ",
"Josh and Audrey are my otp",
"Wilson is a king for carrying EAU Night Market my heart goes out to you",
"shout out to the interns fr!!! y'all have my entire pasaeussy",
"are we going to hold hands at BASF, which is on april 24, 2022? 👀👀👀👀",
"Henzel is a GOAT!!! ",
"Freya and Joely are hella pretty man 🥺",
"these confessions are so boring without audrey her back must hurt from the hard carry",
"wheres Gian 2022",
"tbh the discord announcement channel always makes me feel overwhelmed LOL",
"Brew black tea (hot), add milk, sugar to taste and then bite both ends off a twix and use it as a straw. Thank me later. Works better with Tim-Tams (bite opposite corners).",
"Everyone congratulate Noah for starting his Adult Job!!",
"I hope all of you have a very nice summer",
"I do be going through it",
"i can not live, laugh, love in these conditions - emmuelle",
"Manny ur literally so cute pls take me to spring banquet. Lol jk but we should hang out :))",
"please stop leaving me on read, i am sensitive",
"I have the memory of a goldfish, I don't remember confessions I've already sent askdfhak",
"Excited to see who's in core 35!",
"There should be a PASAE spotify blend",
"The end of the semester is becoming the end of me",
"at this point i am just vibing my way through life",
"For no reason whatsoever, someone should suggest retail therapy options",
"PASAE has been amazing this year. Excited for next year!",
"Ana's gonna leave and i am heartbroken"
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
