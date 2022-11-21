confessions = [
    "i love my interns -therese",
    "i know everything.",
    "i love my component -therese",
    "confessions need to get pas'spicier!!!",
    "you make me kilig sometimes",
    "Are we falling off",
    "Say my name in your confession again. SAY IT!!!",
    "anatori you’re f**k*n cute i swear to god!",
    "Karlaine you cute but you….. ",
    "Imagine writing your own confession - sad. LMFAO",
    "I ain’t never seen a more innocent boy than Angelo Braganza",
    "Matt I have a big crush on you ☺️ But I don’t think I’m your type",
    "S/o Emuelle, you do a lot of work for PASAE. ",
    "Josh did it for the city of Santa Clarita. ",
    "SAY MY NAME IN A CONFESSION AGAIN. DO IT. ",
    "I can't like you i'm scared",
    "i would like to be compensated for the emotional instability pas'crushes have given me",
    "matt is like a golden retriever ngl",
    "michael, can i step on you 🤤",
    "i'd let gelo step on me",
    "nathan has to bring his girl around more #core36firstlady",
    "I lowkey be missing Wilson's Stuart Little ass",
    "idea: big baller onlyfans but the content is just them verbally degrading each other",
    "mila",
    "nathan",
    "Core meetings should be on a roblox obby",
    "i agree with the roblox obby idea",
    "ice skating is fucking hard",
    "core bonding on minecraft",
    "henzel is the only religion i subscribe to",
    "i smell some FRUIT....",
    "i have another core crush but i was way too shy ",
    "i love you guys 💛",
    "I want to like you but i cant . like wtf",
    "seeing angelo b makes my day",
    "I'm craving the eau barbecue so bad rn",
    "i'm out here fighting demons while felix is fighting whales",
    "i feel like mila could invade another country and win",
    "drop ur fav songs pls",
    "kiana ur hot and it’s getting cold. id go to church twice a day and plant grass just for you to show up in my dreams ",
    "some people on pasae need to learn how to be kind :(",
    "anyone here play mobile legends? ",
    "when your intern is more qualified than you - a staffer",
    "I miss you Kia. Like you don’t need to do anything. I just want you to stay still and I give you plenty of hugs.",
    "josh you work so hard, please take care of yourself hun",
    "Nathan gives off sea sailor captain energy",
    "is michael ok",
    "winter is already approaching and my default’s been slacking",
    "eng rep best staffer-intern group this semester period ",
    "if you can’t stop thinking about your crush, it’s about time you start confessing ",
    "Irene’s laptop decals is the most goated things i’ve seen this semester ",
    "I just had a taste of a friendly hug from someone I like and now I’m wishing for a lot more. It doesn’t even have to be a friendly hug. You get what I mean?",
    "ana you look so pretty in every color 🥺",
    "pasaexy",
    "my adings are so cute I love them so much",
    "someone cuff m before I do 😤",
    "Cody and Bryan goated duo",
    "marks funny without even trying"
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
