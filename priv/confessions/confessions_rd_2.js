confessions = [
    "PCN planning try not to be horribly communicated challenge: FAILED",
    "Justin is a hyphy hustler",
    "Ay is Shane single",
    "Does shane have a gf",
    "Bring back elementary school shane yo",
    "Shane when he was an intern 👀",
    "I heard Shane lives in an apartment",
    "Sometimes when I talk to Shane I get really nervous but it's okay because he's really nice and funny so I don't get nervous any more.",
    "Aedann should be social chair next year",
    "Yo What The Fuck",
    "I feel like Brendan is Bisexual",
    "Brendan did a good job on the website",
    "I would let Lebron Raymone James fuck me in my tight ass, and if it fell out, I would put it right back in. He wouldn't have to put it back in for me. I mean this guy is 41 years old still puting up all star numbers in the NBA.",
    "Xavier can kiss me.",
    "Brendan should join a basketball team so he can have a heated rivalry ",
    "HEY GRAYSON",
    "HEY SHANE",
    "Christian can use my balls to wipe his face if he wants",
    "I think brendan lwk would like sub type shit like being called a little submissive breedable boy idk he gives that i think",
    "when is the pasae feet tier list droppin 🥵",
    "i'm sick of pasae smoking weed bc none of u can handle ur shit 😭",
    "nightmare blunt rotation: pasae",
    "I feel like adam would be the type of guy to rock my shit and then next day just give me some money for food and then leave to a consulting meeting",
    "can we have a pasae hog reveal soon plsplspls i neeeeeed that 🙏🙏🙏",
    "imagine ODing on molly at dabin and you look up and the most useless men in the world are all in one room",
    "all the pas'ladies r so beautiful :3",
    "IM SO EXCITED FOR CORE 39 🤟",
    "i love gabys fits"
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
