confessions = [
    "My guess for the sexual tension between core is... AJ M. and everyone",
    "Maaaaaan I rly miss being active in PASAE but this year has just been busy and shiddy....I miss u guys..",
    "omfg aj s lookin DUMMY THICC 😩👅",
    "I’m kinda mad rigel is getting all these confessions. I want the sisig for myself! 😤😋",
    "Smh y’all hopping on the Jo bandwagon I’ve been driving that fuckin truck for yrs y’all are fake fanz ",
    "brehhh I can’t believe I blew my back out ",
    "bitches in PASAE be like 'UwU i'm in wuv 💕' (i'm bitches)",
    "omg y'all actually writing about your crushes up in this bitch?? cornyyyyy 🤧",
    "might fuck around and start dropping confessions fanfic",
    "Your answer",
    "give us RAWRing 20s emocore you cowards",
    "AJ M who? It’s all about Jared now ",
    "intercore was fun as hell i really fw y'all 🥰",
    "i know y'all sick of hearing this typa shit but i just gotta say aj m lookin cute af w his lil pink hat",
    "who gave joyce permission to have all that cake??? get it ryan🤪🤪",
    "Yo Kendad-- you truly are one of the greatest people I've ever met at Berkeley. Your spirit, hardworking nature, and your passion for all things you put your life into are inspiring to me.  ",
    "hi",
    "Jared be getting more popular👏🏼👏🏼",
    "thinking about her ",
    "PETER KAVINSKY MADE GERALDINE PREGNANT!!!😮",
    "You have a cute smile 😊 I wanna see it more when you look at me 😉😘",
    "It's 2020, I'd hope by now that you have the vision to see the signs in front of you >:(",
    "hi Christal",
    "the only person i want is miss fabro herself🥺",
    "when she’s already with someone else in PASAE: 😔 But also homewrecking doesn’t sound like a bad idea🤪",
    "hey ali i think i got a crush you ",
    "Kyra is the superior Asprec.",
    "ckdlkdfljdfaljfa;fdalkjdfljkdfaljdfa;jfd;jfdlflkjfdaljfajfdjfdiodfoperamream.dflkmvcljkjklzilytravisfdkmfkl;jdslkfj askldjfkl;d jfl;kaj;gle",
    "I have a lot to say, actually.",
    "Wilson I will drink ur bath water",
    "Travis it doesn’t matter what kind of pants u wear ur tree trunk dick print is TOO DISTRACTING ",
    "On a scale from 1-10 Erika is a nat 20",
    "PASAE full of the 2016 song by country singer RaeLynn",
    "Prakash, please shoot your shot at me",
    "my favorite fkbois in pasae are rigel, prakash, and aj m",
    "i hope I don’t get picked up by kapa cuz they be looking cute. either way, i heard they’re into paamcest  👀",
    "Anissa... hello ma'am...... 😳💕",
    "im vegan (i Am VeGaN), but I still like my lumpia MEATY",
    "I'd like to thank everyone who submits a wholesome confession for not being extremely horny (extremely horny confessions scare me). ",
    "Im just tryna get into Psalm's private wrap party 👀",
    "Damn, these Autumn Leaves got me feeling some type of way. I don't want to be a Black Swan, but girl, do you wanna Make It Right with me? You'll be my 21st Century Girl, I'll be your Boy With Luv. u kno who u r😉",
    "Mikee, shoot ur shot ",
    "Can we bring JoKee back? Miss the simpler times ",
    "Anyone with a name that starts with J, they can go get it😉",
    "sometimes i feel like i don’t belong in pasae. the vibes are there, but i wonder if y’all just tolerate me",
    "wilsons arms tho 😳",
    "Psalm's such a good man! He's the Ted Mosby of PASAE😍",
    "Mikee who you lookin at👀👀",
    "joanne be the best pathways intern",
    "dat lumpia was awepsalm ",
    "i'm so annoying but john still talks to me ily john ",
    "Geraldine honestly deserves the world <3",
    "christal charge me for the uber bby",
    "Christal at the lumpia fundraiser tho😂",
    "ali and anatori so sweet! They have my heart <3",
    "Sheena and Audrey are out of my league 😳",
    "I luv meeting hidden kpop stans. You know who you are 👀😤🥺",
    "Avery coming in for the clutch with his big CS knowledge👌",
    "evps really working hard for all these networking events 😘",
    "Joyce can go get it!...or me😉",
    "how low can the fantastic four go tho ",
    "watashi wa think that senpai jo makes my heart go doki doki 💓💓",
    "Love this transfer representation!",
    "shoutout to the folx who came to pathways! We love the support ",
    "I’ll say it w my chest. Pathways is a PASS event 😤",
    "ryan’s ducks don’t even have ears",
    "I want Joanne to step on me",
    "Joanne step on my dragonBALLZ",
    "Where my hoes at? Looking at you KenHOE 👀",
    "duck duck RYAN"
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