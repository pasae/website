confessions = [
    "i love ainsley torres and julian uy with all my heart",
    "you cute pls hmu hehe @Kat",
    "Ainsley and Kat are scrumptious ",
    "julian uy really be the baddest bitch out here",
    "ainsley is so cute with bangs",
    "julian uy is a chem god",
    "I know that pasae people got that good brain,,,, and i'm not talking gpa",
    "If you wana vibe with AJ M, PASS intern apps reopened 👀",
    "Say something that they said to you in the breakout rooms person trying to shoot their shot that was in a breakout room with the same person twice WE SHOOTING OUR SHOTS THIS SEM FRFR",
    "I'll be your forever if you'll be my now 🥰",
    "I miss Fritzi, I hope she joins the intern program again next year!",
    "Fritzi your uwu makes me uwu uwu uwu Stop making my heart go doki doki doki",
    "I miss Fritzi, I hope she comes back next semester so we can talk about A Goofy Movie",
    "Imagine Psalm but instead of the silent p, it's a silent s🤓",
    "JR can step on me and I would say thank you. Much love towards him and everything he does 💕💕",
    "Lowkey feeling a connection with my staffer 😳",
    "I just want to respectfully say that last year's Core was also rather pleasant to look at.",
    "Audrey Aniag u have mi corazon <3",
    "ok but ryan s................hml CUTIE PATOOTIE",
    "can audrey a serenade me w her angelic voice again",
    "kinda sad i joined this community so late & during a pandemic :( y’all are so cool",
    "I’d let Jo and Rigel step on me... at the same time😉😝",
    "Hey Ryan, I’d go 1v1 with you in the Gulag😉",
    "Ali is my queen! I shall defend her honor to my dying breath!",
    "Wilson and Ryan are soooooo fuccing good at thinking",
    "thank u jr for intern meetings! i always learn a lot and really enjoy talking and learning more about everyone! i am grateful for u :) ",
    "missing intercore and getting food before dropping everyone home :( ",
    "Every time I think about you, my heart beats faster :( ",
    "This is anonymous so let’s share our rice purity scores bc I’m curious (we love both high and low numbers) but I’m 26  ",
    "if i had to rate my mental health rn it’d be a zero ",
    "i have this huge fear that i’ll always be alone ",
    "d e p r e s h u n",
    "I love our socials so much! I love getting to know y’all better",
    "I’ve probably had a crush on more than half of pasae at this point",
    "I love you JR <3",
    "Rigel ur cute",
    "ik u swiped right 🤫🤫🤫",
    "okay asking all boys: if you like a girl what hints do you actually drop? ",
    "words of encouragement to the boys - so the girl may not seem to show an obvious interest in you BUT let me tell you, in reality the same girl thinks about you every night but is too shy to make the first move. so keep dropping hints and shoot your shot. you got this!",
    "i wish i could just hug you in person ",
    "I swear all of y'all crush on the same few guys :/",
    "Why do you have to be such a fuckboi?!?",
    "\"Wilson is so freakin cute, any girl would be lucky to date him\" \n -Not Wilson",
    "Does calling Jo a fuckboi still get published these days?",
    "****** a fuccboi with that UNIQLO style ",
    "what if the guy is taken or talking to someone? i'd be so heartbroken for someone i never even dated but i have hope for now...",
    "Missing making mistakes while drunk af with y'all🍾🍾",
    "actually nvm I DON’T NEED NO MAN. work on your self girls instead of thinking of him bc he’s probably talking to someone’s else at 2am while you’re thinking of him. ",
    "I love country music",
    "I hope all those other girls make you happy",
    "Rigel r u looking for something? ;)",
    "Conner u r an amazing human ",
    "Conner literally doin the most im so proud",
    "romy pls sit on my face",
    "I love hanging out with Camille!!!! uwu",
    "Someone date me so we can take swagapino couple pics ",
    "Someone shoot ur shot at Geraldine already she deserves all the love in the world ",
    "Ok y’all but I ship those 2 international students together ;) iykyk ",
    "The sexual tension on core tho :o",
    "Some seniors be giving off fuccboi vibes 👀 iykyk ",
    "Hilda ur rly pretty",
    "Angelo B, I feel like you are mega smart and organized pls teach me your ways ",
    "Let’s play hot seat I wanna spill and hear the tea",
    "I love you nikki",
    "Ryan S, u fine fine",
    "Annissa is my style inspiration",
    "i feel like me and wilson could vibe really well but im shy ",
    "Kiana is so nice i've only talked to her once but i wanna be her friend",
    "Waiting for the cute guy who's a 10 to shoot his shot at me ",
    "where'stheconfessionsdroppleaseineedtoseeitlol"
]
const autowrite = () => {
    let confessionsToPost = '';

    const cardColors = ['primary', 'danger', 'warning'];
    let cardNum = 0;

    confessions.sort((a, b) => b.length - a.length)

    for (let i in confessions) {
        const conf = confessions[i];
        const color = cardColors[cardNum];
        let card = `
        <div class="col-md-4">
            <div class="card text-white bg-${color} mb-3" >
                <div class="card-body">
                    <h5 class="card-text">
                        ${conf}
                    </h5>
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

    document.getElementById("confessions").innerHTML = confessionsToPost;
}

autowrite();