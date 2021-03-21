confessions = [
"JR what did you drink during the social and where can I get some??",
"anissa come over and smoke me out pls",
"hey i actually know how you feel, i dont know how to tell you though :(",
"a lot of the people here are my type omfg",
"i think i have a crush on josh b now, and if you’re reading this: hey lol you make me smile",
"I was only recently able to talk to you one on one but honestly you’re so lovely to talk to. You’re probably just a super nice person to everyone, which I know you are lol and this might just all be in my head, but I was genuinely surprised by how easy it was to talk to you. I don’t know what I’m even tryna say here haha. Maybe it’s just me stupidly letting out my feelings on this anonymous page where nothing really comes out of it. But, to tell you the truth, I feel like I could talk to you for hours without running out of things to say. Omg I’m so cringy but yeah haha",
"hey jr i have a rave happening at my place! it’s in my room and you’re the only one invited ;) *licks lips* *you wipe your lips* you ask “wtf? did you just lick my lips?” and then i **** *** ***** *** **** ******* **** ** ***** *** ",
"oh conner, the way you handle these confessions is so majestic. not only do you have a dump truck ass, you also have a dump truck heart, shake it for me aha ha",
"y’all i’m still shipping those two core members idgaf they’d be cute together",
"damn i’m down bad",
"everyone’s all like i’m down bad why can’t we all just be updog ",
"i’m excited to see these confessions this time around i bet they’re spicy",
"hey boy, you got that dump truck? that’s perfect bc i can be trashy just for you aha ha ;)",
"JR you’re so holesome ily <3 ",
"JR what dat mouf do",
"i want JR to wrap his arms around me",
"I should’ve joined internal so i could get closer to JR ",
"C*nner can I h*ld your h*nd",
"Nikki can u be the kim bok-joo to my jung joon-hyung",
"Violaine be my gamer girl gf ur so cool aha",
"imagine the sexual tension we’ll have once we meet in person goshdamn ",
"ur work ethic is literally so hot keep it up ",
"PASAE is literally the best club ever <3 I can’t wait to meet y’all in person next semester",
"Someone date somebody please im so bored",
"I’m really grateful for all the workshops we’ve had this semester. It’s been encouraging my last 2 brain cells to keep it together",
"hey Gelo, ur so fucking cute 🙈 wish you could see you from my pov 😜",
"did yall know that if u have a crush on someone for > 4 months it's considered love :3",
"the more i just observe you... I fall in love w u more lmao ugh i can't suppress my feelings anymore but i will ",
"Shout out to all the interns for being such an engaged crowd this semester i want to french kiss all of you next intercore",
"im such a hopeless romantic hahaha no one will ever know i have a crush on youuu bb",
"damn papa you a rare breed, no comparing, and it's motherfucking scary, tryna keep him cause i found him, let a hoe know, i aint motherfuckin sharing!!!!!!!!",
"pussy talented, it do cartwheels, and he pay cuz he like how that part feel, pussy give speeches heartfelt, said the pussy really talk like it garfield (it do!)"
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
            size = "h6" }
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