confessions = [
    "so these two core members...why is nobody shooting their shot let’s make things $picy🥱😴💤",
    "i didn't know that i wasn't the only one crushing on CN based on that last horny confession...  DONT CORRUPT HIM HE'S MINE FIGHT ME >:(",
    "ROMY AND ANA PEG ME AT THE SAME TIME????? GOD!!GOD!!! GOD I AM COMING I AM OMW ",
    "does the A in pasae stand for ana bc like",
    "omg manny acknowledged my existence... i'm too scared to hop in discord but pls i love endless rip",
    "https://youtu.be/65BrEZxZIVQ?t=28 it's a bop",
    "Whoever confessed they wanted Rigel or Jo to rail them idk what ur talking about...they can’t rail u....red stone minecart collision, maybe, but not like a train",
    "**** be packin ;) NO CAP ",
    "i ship J and A too hehehe",
    "you can get to know a lot about person just by googling their full name ssksksk y’all should try it ",
    "It was really cute when Joyce started showing everyone her pets during banquet :,) We must protect her (and her pets) at all costs!",
    "I had the perfect ship but then he turned out to be her kuya LMAO ",
    "if you ask me out i will say yes",
    "manny is cool and cute but younger :( ",
    "who we shipping",
    "How to shoot your shot tutorial: Hey [insert name here] I'm going to be honest with you. I have feelings for you, and I'd love to take you out on a date sometime. If you're not interested, that's completely okay, but shooters gonna shoot right? The ball is in your court now :)",
    "I'd give up my non-existent love life for Psalm's to blossom ",
    "Hey you. It's been a year but I think I still like you. But I don't want to so just let me know if you like me too or not and I'll stop. Thank you ",
    "i love joyce sm🥺",
    "\"Okay, so I'm in a real \"fuck it\" mood,  but Im still working on my shyness, so imma just do it here since there's a possibility you won't read this lol.'<br><br>I have had the fattest crush on you since the first day I talked to you and got paired up with you with that networking activity during IDD. Since then, I've been trying to get to know you better by sending you stupid TikToks or asking you random, out of the questions. Not only do I think you're cute, I also love how confident you are and you make me smile or laugh whenever I get the chance to talk to you. Like I said, I'm still working on my shyness, so I have trouble telling you this directly, even if it's as simple as sending you a text. And it might be pretty childish to do this on a fucking confessions page, bug fuck it? LOL. Anyway, whoever I'm talking to, if they're reading this, they'll know lol.<br><br><br>- JR",
    "the way i don't know if we are talking, dating, in a relationship or secretly married aksjlasd",
    "yall seem so fun i wish i could’ve met everyone in person :( ",
    "i know im a full fledged member of pasae now cause ive become a simp :D",
    "I’d marry Travis tbh",
    "Camille, I’m so happy you’re my sib, I’d never tell this to you’re face bc I’m just gonna say I fucking hate you, you weeb, but since I don’t have to see you for the rest of they year, ily (it makes me nauseous saying that) but I’m happy I live with you, bc you’re my mom",
    "Rigel are you available like seriously legitimately would you date someone in pasae bc I feel like you wouldn’t but I’d date you and if you would date me then say less sir",
    "AJ M and Josh A are twins ",
    "Gabby is literally a model",
    "JR we all love you, we all appreciate you, and we are all so proud of you, I can say with my whole heart that PASAE this year would not have been the same without you. You may have had so many difficult times this year, but never once did that ever stop you from giving your best to the org, once again we love you, and we will support you as much as we can <3",
    "Annissa is a dream",
    "Ana makes me feel things ",
    "Manny may be a goofball but I’m happy he actually cares so much about pasae",
    "I’d marry Ali ",
    "Adinggggggggg I love you (you know who you are) (don’t do drugs ;p)",
    "Conner, thanks for putting up with all my stupid, messy confessions, I hope I didn’t traumatize you too much, just be ready for next semester ;)",
    "Ryan s, you still are so gorgeous to me",
    "Geraldine deserves the world ",
    "Soffia, I think you are the coolest, swaggiest, dumb-thicciest, dopest chick in the whole wide world, I’d let you use me as a doormat, I hope I can get closer to you next semester",
    "Avery.............",
    "I wish I were close to Joanne and Joyce they seem so cool to be friends with",
    "Among us really got me wanting to be among y’all ",
    "Romy, I cant end this semester without saying this, but please step on me, choke me, peg me and all of the above",
    "Choke me mr president"
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