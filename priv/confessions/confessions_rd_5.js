confessions = [
"NAME DROP UR PAS'CRUSHES",
"drop the tier list",
"Garrett wearing a chain makes me think naughty",
"raelin is quite the grandiloquent troubadour ✨",
"carm we miss you whered you go : '(",
"remember when they said 'xavier is my favorite person on core' that was pretty good lets have more of that",
"Reese I liked your old hair but this look is growing on me",
"My name is skyler white yo' 🗿 'My husband is walter white yo' 🗿 'Uh huh' 🗿",
"Karly for pres 2024 ? o_O ",
"Raelin's so nice everyone instantly feels like she's your friend",
"reese we appreciate you so much 😭😭😭",
"Does anybody besides core know the username and password to see these ?",
"last weeks confessions were SPICYY",
"I LOVE PASAES CORE",
"raelin is super sweet",
"pa'mong us social when?",
"Some people here got me questioning my pa'sexuality fr fr",
"Who do you think has the best feet in pasae ? 🤔",
"My pas'crush is rose 🫣",
"It's weird how the people who are the funniest/wackest are also usually kinda depressed :/ ",
"Manifesto of the People's Pa'socialist Party A PA'SPECTRE IS HAUNTING PASAE — the pa'spectre of PA'SOCIALISM. All the Pil orgs of UC Berkeley have entered into a holy alliance to exorcise this pa'spectre: PAA and PAHC, PBA and Maganda, LFS and P4.Where is the party in opposition that has not been decried as pa'socialistic by its opponents in power? Where is the opposition that has not hurled back the branding reproach of pa'socialistic, against the more advanced opposition orgs, as well as against its reactionary adversaries ? Two things result from this fact: I.PA'SOCIALISM is already acknowledged by all Pil orgs to be itself a power.  II. It is high time that PA'SOCIALISTS should openly, in the face of the whole world, publish their views, their aims, their tendencies, and meet this nursery tale of the Pa'Spectre of PA'SOCIALISM with a manifesto of the party itself.To this end, PASOCIALISTS of various Pil orgs have assembled in Main Pa'Stacks and pa'sketched the following manifesto, to be published in English and a new language, the Pa'Second Tongue. ",
"when i'm walking around southside late at night it sometimes feels like i'm the only one person in the world... its scarily peaceful when it's like that",
"i love you guys",
"we all making it out the hood",
"denise is so mf hott like brooo",
"rose has such a pretty smile: DD",
"tall, curly hair, filo boys > 🤭",
"I shat while sleeping in my bed this weekend 😳",
"zhangjin xu is my goat fuck physics bro ",
"Can we have a pas' musical",
"i want a devils threeway with either pair of the co's or maybe one of each so i can mix and match 🤪",
"whoever that was asking abt pa'shlop last week... lemme kno... imma demon fr",
"whenever im w ipad kidz its like we're all collectively sharing the same brain cell",
"my component meetings feel like a date and i'm the third wheel 🗿"
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
