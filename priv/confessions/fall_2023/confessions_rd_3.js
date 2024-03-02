confessions = [
"adriel has a really nice voice",
"I’m doing so so so so so I’m doing so so so so so I’m doing so so so so so good good good good good good",
"if you saw me at idd, no you didn’t",
"qahrlein is a great mom",
"mila is the epitome of a cool person",
"if you saw me at idd afterparty... no you didn't",
"I love pasae! Thank you for coming to pa’sunrise!",
"I LOVE EVERYONE IN PASAE",
"my interns are so cute im so excited to be their staffer < 3",
"having a therapy session while drunk asf is crazy y'all. recommend lowkey but don't at the same time tbh ",
"I think the co's should do a 2 v 2 in something. idk what but let's see who the better duo is 😈 ",
"I think i could take nohl in a fight.i know he wrestled in hs but i wanna dom him soo bad and put him in his place like the little naughty dirty soy boy that he is",
"i think i might have a crush on someone in pasae but i'm not too sure yet... def wanna get to know them better but they sometimes be living in my head rent free fr",
"I think iana has very pretty eyes",
"SAVE THE DATE: OCT 28",
"you guys should go to my birthday",
"HONORARY MEMBER OF PASAE: KIAN",
"KIAN X PASAE!!!!!",
"i love core so much",
"i wanna play we are not really strangers with core again",
"SAVE THE DATE 10 / 28 FOR 2TURNT20 BIRTHDAY BASH",
"cal got me feeling like an academic utensil rn",
"go to my birthday",
"Why is six afraid of seven ? Six hasn't been the same since he left Vietnam. He can seldom close his eyes without opening them again at fear of Charlies lurking in the jungle trees. Not that you could ever see the bastards, mind you. They were swift, and they knew their way around the jungle like nothing else. He remembers the looks on the boys' faces as he walked into that village and...oh, Jesus.The memories seldom left him, either.Sometimes he'd reminisce - even hear - Tex's southern drawl.He remembers the smell of Brooklyn's cigarettes like nothing else. He always kept a pack of Lucky's with him.The boys are gone, now.He knows that; it's just that he forgets, sometimes. And, every now and then, the way that seven looks at him with avid concern in his eyes... it makes him think. Sets him on edge. Makes him feel like he's back there... in the jungle.",
"    Can't ❌count 🧮the years 🗓️on one hand✋ That we've 👩👦been together👫 I need🤲 the other 🦦one1️⃣ to hold💁 you🫵 Make you feel🫵, make you feel better🤗  It's not 🚫a walk 🚶in the park🏞️ To love 💓 each other👫 But when our fingers🖐️ interlock, 🔒 Can't deny🙅, can't deny you're worth it💲 'Cause after all this time⌛ I'm still into 🥴you🫵  I should be over ⏫all the butterflies🦋 But I'm into👉 you (I'm into you) And baby 👶even on our worst😡 nights🌃 I'm into 🫵you (I'm into you)  Let 'em wonder 🤔how we 🧑‍🤝‍🧑got this far✈️ 'Cause I don't❌ really need to wonder 🤔at all Yeah, after all this time 🕜I'm still into you👉👦",
"Who would win in a fight Goku or 30 billion Garretts",
"freya is one of my favs in pasae < 3",
"pasae is so much less horny now - an alumni",
"anna is so sweet",
"i need more chismis",
"make a fish needs streaks",
"those communion chips they give out during mass kinda good",
"what if i took a sproul squirrel home",
"___ got me like 😋",
"__ got me like 🫃…",
"i wanna take a little dip in matt’s brain………WHAT THE FUCK GOES IN THERE",
"internal is the best component 🫣🤭",
"stressing, tired, need to get back on the grind",
"says y’alls pas’crush next drop(bet you won’t 👀)",
"reese is so fucking pretty omg, i wanna be as slay as her when i grow up",
"mila your dog is so cute",
"i feel like this isn’t said enough but cody’s piercings are so cool",
"i love core 36 < 33333",
"cody is so cute",
"I LOVE MY SIBSSS #KAPAUP",
"u need to grow up",
"noah is the best",
"HAVE YOU EVER SEEN A GORILLA DO THE SPLITS ?",
"filipinos",
"creative component so swag",
"I went to Daniel Caeser and ima be real he's like a B tier artist. "
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
