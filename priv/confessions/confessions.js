confessions = [
    "just a reminder that you are doing great and i am so proud of you! :) we are almost done with the sem, you got this! also feel free to reach out to anyone in pasae, esp core, we love you sm u dont even know!! ",
    "imma say it... pasae>>paa. like we got a discord , an active gc, and some lit socials. much love to paa but they need to step up their game 😤 ",
    "i need some more drama in my life, can core add a jaguar karaoke channel to the discord pls",
    "\"doshite rigel kaichou no koe make watashi no kokoro go ippai doki-doki?? itai yo . . . demo kimochii desu σ(≧ε≦σ) ♡  senpai!! anatta no koe hontou daisuki!!!! 	☆⌒ヽ(*'､^*)chu\"",
    "Y'all need to stop asking me about my core position!! I'm a bottom!!!!!",
    "everyone asking WHERE is To All Deboys I've Loved Before 2, never HOW is To All Deboy's I've Loved Before 2 😔😞",
    "ngl i still think about that missed connections berkeley confession like twice a week. please writer show yourself so i can beat your ass",
    "¿Puede el presidente Riggel grabar algo de ASMR? Estoy tan cachondo, oh Dios mío",
    "Come on and Pslam and welcome to the jam",
    "My hands are so cold.. I wish Manny were here to warm them with his flaming hot bars 🥵",
    "Its so hard coming up with confessions when im so busy being so dummy thicc all the time! Cant carry pasae when i got my hands full carrying this dumptruck wagon from my bed to the polls!",
    "i would like to be looked at disrespectfully please and thank you <3 ",
    "what if we all got tested and then went on retreat ",
    "Imagine Psalm reading you a bedtime story and sitting by your side until you fell asleep 😳",
    "Miss Ali Ongpin hand in marriage please I am free Thursday if you are available to marry me ALi I will be available Thursday night waiting for your hand in marriag",
    "just saw #bot-commands are y'all good?????",
    "can everyone please hang out in the discord more often i'm so lonely",
    "y’all aren’t posting confessions smh stop being shy here’s a REAL confession: there’s something viscerally horny about Avery and Angelo and tbh i kinda vibe w it ",
    "JR u were in my BL dream last night 😩🙊",
    "i can’t tell if manny is a top or a bottom but at this point I’m too afraid to ask ",
    "I’d let Conner tie me up",
    "Wilson i will drink your bath water ",
    "who tryna pas’moke🙈 socially distanced or over zoom LMK - Annissa",
    "yall need to stop being pas'shy and join discord calls ESPECIALLY INTERNS",
    "thank you audrey (and wellness component) for checking in and taking care of us! you are the embodiment of warmth and comfort, we love u ",
    "i swear WHOMST EVER is making these advances at G.F. yall better square up and C O N F E S S , instead of playing with her heart SHOW YOURSELF !!!",
    "i am genuinely curious about what goes on in manny’s head and what his thought process is like. he’s brilliant but also very random ?? all the projects he puts out are amazing but also how does he think of this stuff ??? references: bravis + JR songs 😩😩",
    "josh b is best boi",
    "I want wilson to break my back. Snap me in half like a glow stick 😩",
    "manny’s music taste is immaculate... i have a fat crush LMAO",
    "Wholesome confession: I honestly wish I could get to know everyone more but I'm just so busy with academia, I barely have time to take care of myself :(",
    "wow ok sorry i don't post confessions anymore i go to therapy now",
    "I didn't know Psalm could snowboard. That's hot.",
    "I think people who find snowboarders hot are beautiful. <3",
    "Fritzi, come back to PASAE",
    "We need more bondings so we can create spicier confessions",
    "it's always \"audrey where's the next confession fanfic\" never \"audrey here's $1000 please step on me\" and personally i think that this is very unfair ",
    "OK but why does Rigel have divorced dad energy highkey does someone wanna fill me in on something",
    "\"am i the only one with no relationship experience\" -> hell👏no👏comrade👏pasae👏virgins👏rise👏up👏",
    "I'm always ready to get down for the veterans 🚩🚩",
    "Oooo, Manny's 🍆 is big, I just know it 😏",
    "Lay that worm on me,  Daddy Travis plssss",
    "I would come to PAS'Squats just to see Josh's fine 🍑",
    "Conner is the only tree I wanna climb ",
    "Gelo, I lied to you. It me. ",
    "Romy, peg me too pls",
    "Angelo B. I heard you won championships in polo. You can take a dive in my pool and I'll play with your pole 👅",
    "AB, I heard you like BLs. Let's start one together ;) ",
    "I am literally so tired all the time and I just wanna go back to when I could just go to a PASAE party and have a core member take me home to rail me so hard I can't thinnk after 🥴🥴",
    "I want Wilson to h*ld my h*nd 🙈",
    "Really hoping that we all meet in person before the school year ends so y'all can shoot your shots... It can't be healthy to just post it on Confessions without acting on it",
    "The PAS'exual tension in this club 😳",
    "manny bad af ;))",
    "y'all gotta stop being pas'hy - manny",
    "manny got mad potential tbh",
    "john frias and michael balasbas are cute",
    "I ship A with C",
    "I’d let Wilson smoke me out ;)",
    "ugh papi Josh B plz rail me in both holes 🥺",
    "Even though you're not my first, you can be my last 😍",
    "a guy who can pull off a suit though 🤤 don't second guess yourself, this is directed towards you hehe",
    "when we meet in person I want a hug that lasts a lil too long for it to be between friends ",
    "we can take it slow"
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