confessions = [
"I'm so tired after revs, but my adings seem happy so worth it. ",
"It's all pa'spiraling out of control 🥲",
"I be thinking bout her all the time now like goddamn",
"I need someone who can put me in my place",
"God core is just so hot everytime i see anyone its like my pants shrink 2 sizes",
"october has been such a blessing and a curse",
"BOO!! 👻👻 Sorry did I scare you ? ! 😂😂 WASSUP HOES😉😉😊 ITS COCKTOBER 😈🌚🍂🍃🍁 AND IF YOU👈🏽 ARE GETTING THIS👇🏽😘 IT MEANS UR A HALLOWEEN 👻🎃👻👻🎃 👻🎃👻 HOE😏😩😩👅💦💦 every year in Cocktober the jack o slut🎃🎃🎃 comes to life🙀😻😻🙌🏽👏👏🙌🏽 coming to harvest 🍁🍂🍃 his hoes for THOT - O - WEEN😏😏💥💥🎈🎂🎉 send this to 10 other Halloween Hoes or else you a TRICK🎃👻👻 🎃 IF YOU GET 4 BACK UR A THOT - O - WEEN TREAT😋😋 IF YOU GET 6 BACK UR A SLUTTY WITCH BITCH👄😍✨🔮 BUT IF YOU GET 10 BACK UR THE SPOOKIEST SLUT",
"ghuarloigne is a great mom",
"This is being written on October 26th 2023, a day before pahmoween.I apologize in advance if spider - man truly returns.",
"It's close ➡️to midnight🌃🕛 And something 🧟evil's 😈lurking🥷 in the dark⬛ Under👇 the moonlight🌕 You see👀 a sight that almost stops🖐️🛑 your heart💓 You try to scream😱 But terror 👹takes the sound 🔊before you make it You start to freeze🥶🧊 As horror 🦹looks 👁️you right ➡️ between ⬅️ the eyes 👁️ You're paralyzed👨‍🦽 'Cause this is thriller, 🧟‍♂️thriller night 🌌 And no 🙅‍♂️one's gonna save ⛑️you from the beast 🐺 about to strike 🤛 You know it's thriller,🧌 thriller night 😴 You're fighting 🤼for your life🧬 inside a killer, 🧛 thriller 👻 tonight, yeah",
"It's ok i dont need you anyway",
"Kuya told me he's proud of us i legit almost cried",
"highlight of the party was definitely yelling the act of contrition",
"How can i have so many core memories in such a short amount of time ?",
"born to shit forced to wipe ✊😔",
"When will Garrett go a game of Rage cage without getting bitch cupped LMAOOO",
"my liver's ability to filter out alc quickly is equally impressive and scary ",
"I know to live in the present but i know it's gonna hurt like a bitch when you guys leave... pls don't graduate I love y'all <3",
"I was talking to this girl while waiting in line for the bathroom at pahmoween, and i thought she was cute but i never asked her name or contact: (THEN I GOT A SECOND CHANCE BY RUNNING INTO HER AGAIN BUT I STILL FUMBLED FML",
"ngl sober monitoring is kinda fun it makes me feel fulfilled as a person",
"i was talking to this guy at pahmoween who was down bad HORRENDOUSLY for senator duque 💀 you would not believe the shit that came out of this guys mouth like calm down dude ",
"the way your eyes glisten when you look up at the stars >> i'd rather watch the sky through them than have to ever look up",
"Jelo, Turtleneck CEO",
"really proud of pasae, and not just as core members / interns / general members, but as individuals making it through a difficult, world - class education.keep pushing",
"what the fuck its week 11 what the fuck",
"pa'sports lets run it 💯💯",
"nohl do u eat ass answer truthfully",
"hope none of you were planning to sleep during core'sassins",
"if u snitch on me during core'sassins ill end ur bloodline",
"bro i need to make it to couple costumes next year 😭",
"where was blue at pahmoween 😢",
"I love my 1 am stars 💖",
"I'm sorry"
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
