confessions = [
" i bet nohl has such a tight lil man bussy",
"i want matt so bad.like i know he was webmaster last year but this year he can be * my * master😩",
"yall dont talk about me enough",
"thomas is so silly goose",
"rose is so silly goose",
"i have a tier list of people who i think are pa'sexyyyy",
"i'm a pa'simp for freya",
"who down to get pa'skull fucked then alabama hot-pocketed then waffle pa'stomp right after ???",
"caurlaigne is such a good mother figure ",
"im a fucking academic weapon i am bending over my classes and making them bark for me ",
"xavier and emmuelle have similar energy",
"ካርሊን is a great mom",
"my pas'crush is prettier than margot robbie",
"my pas'crush gives me sm butterflies omg",
"co's should 2v2 wrestle in an oil bath shirtless",
"If cartoon birds were real, Mila would have a bunch sitting on her shoulders rn",
"When Thomas isn't afraid to be himself is when he's most incredible.",
"pasae is better with anna in it :)",
"adriel could survive the zombie apocalypse",
"babies and small animals probably love iana",
"Folks, the bourgeois, they're no good, more and more people are saying it. All these workers— the biggest, we have the biggest workers— very handsome workers come up to me and say, Comrade Trump there is a specter haunting Europe, and you know what, they're right.These bourgeois are very nasty people, very very rude, and very unfair to the workers.They are stealing our surplus value and no one is doing anything about it. ",
"make sure to check in on your happy - go - lucky but really clinically depressed friends fr fr",
"mfs be like 'pasae crush on ______ 🫃' like I WANT NAMES",
"gg i j envisioned a whole ass future w my pas’crush 😭😭",
"core can we play we're not really strangers again plz",
"glad maddy's in pasae :)",
"Jamie thanks the idea that someone thought im charming made my day youre really sweet",
"I 👁️used to think 🧠🤔that I👁️ wasn't ❌fine💃 enough And I 👁️used to think🤔🧠 that I👁️ wasn't ❌wild🫄🙉🐰 enough But I👁️ won't ❌waste 🗑️my time ⏰tryna figure 🤓out why🧐 you 🫵playin' ⛹️🃏games What's 🤷‍♀️this all 🙅‍♀️about?❔⁉️ And I👁️ can't🙅‍♀️ believe🛐 You're🫵 hurting 🤕🩼me I met🤝 your girl♀️👩, what a difference➖ What you see 👀👀in her♀️ You ain't ❌🙅‍♀️seen👁️👁️ in me🤓 But I 👁️guess🤷‍♀️ it was all just make - believe🦄🦄 Oh, love 💓💞💘 Never 🙅‍♂️knew🤔 what I was missin'😢😖 But I knew🤓 once we start kissin'👨‍❤️‍💋‍👨😘 I found 🔍 Love💞💓💘 Never❌ knew 🤷‍♀️🤔what I 👁️was missin' But I knew 🤓once we start kissin'😘👨‍❤️‍💋‍👨👄 I found, found you🫵",
"I bet Cody's packing ong",
"Study sesh ? I want a make out sesh with some of these cuties >.<",
"Intern battle royale on the glade.Let's make it happen ",
"Please just make it official you two y'all are sooo cute together plssss its like watching a kdramaaa irl",
"spooky storytime: we're halfway through the semester",
"lets do more spooky szn activities 🎃🔮🦇",
"i love my interns",
"xavier is the reason i wake up in the morning",
"🖕🖕🖕 national boyfriend day 🖕🖕🖕",
"so we playing among us or what",
"my sleep paralysis demon is garrett",
"Xavier and Emmuelle have similar energies",
"maybe i still do think about him",
"joquin is sooo fine i wanna make beautiful royal pasae babies with him 😍",
"i feel like __ would give good pa'shlop 🤐"
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
