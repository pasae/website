confessions = [
"i love these execs and just wanna have fun and hang out with them a lot",
"i love you mark",
"I HAVE SUPER HARD FRIEND CRUSHES ON ALL THE CORE 35 EXECS",
"kia is the nicest person ever and i love her and her presence for making me feel so safe and comfortable",
"i'm so happy to get to know Mila more during retreat, she's absolutely amazing and i and wait to make memories with her",
"reva you're absolutely beautiful in every shape or form and im so happy to be able to make memories with you",
"henzel thank you for being the kuya for not only pasae but the ENTIRE community we absolutely love and appreciate you",
"felix pls teach me your connect 4 tactics pls and thank you",
"core 35 is absolute treasure and so so amazing",
"matt you're the absolute sweetest person alive thank you for being so great",
"being with karlaine this weekend makes me question why she isn't cuffed yet 🤭­ an absolute baddie",
"ate kia knows how to take care of people under the influence strangely well...",
"If Freya and I were not taken, I would have ask her out <3 ",
"thank you so much exec and everyone who helped it run smoothly! you guys really put your whole pas'ussys into this",
"therese is very sweet, i needed that hug",
"i like therese's music taste",
"henzel is mvp",
"i like josh as prez",
"some people need to know their place",
"emmuelle is rlly funny",
"mark is my comfort character",
"karly is so sweet and funny, i'm so glad we've gotten closer this semester",
"nathan is a massive w for pasae",
"mahal ko si tito henzel <3",
"nahh bc howd they both have metal sheet plates??",
"michael i worry about u",
"thank you execs! you deserve a lot of big hugs <33",
"felix is a fun guy 😎",
"i love all the people on this core lineup",
"I HAVE A FRIEND CRUSH ON THERESE",
"creative's cooking be bussin",
"it feels like someone else throwing up can be a blessing in disguise meow ",
"josh, believe me. ultraset is not gonna do you any good",
"mark is best boi",
"josh screaming out of joy is the best form of music to my ears ",
"thank you nathan for being clutch in the social mixer- Henzel",
"adings are the best things in the world. i'd give them my whole life in a heartbeat ",
"Gelo, let's hang out a lot :3",
"kiana you're so sweet we don't deserve you :,(",
"kiana you literally deserve the world, i hope you know how positive of an effect you have on other people. please care for yourself because you deserve it :)",
"if exec was a playlist, it would just be bangers, each them are so amazing, quite literally the backbone, leg bones, everything bones of pasae",
"was crossed both nights and had some of the best sleep i had in a fat minute LOL",
"josh is pasae's dad",
"come on man"
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
