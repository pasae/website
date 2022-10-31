confessions = [
    "Therese is amazing - one of her interns",
    "If Camille was a vampire, I would sacrifice babies to her and also sacrifice myself to her if needed",
    "CAMILLE IS MATLAB GOD >:)",
    "Camille where's Comrade I need to see him please",
    "uwu camille is such a cute anime girl <3",
    "i would jump off a cliff to hang our with camille",
    "pasae was born from camille’s womb",
    "Camille really has me at the edge of my seat sometimes and I love it",
    "reva is so pretty",
    "it might be too early to say, but I think this will work out",
    "hey Camille I just wanted to let you know that you are the greatest person to ever exist ever. slay ",
    "when Camille first walked in the room, sparks flew",
    "GUYS, PLEASE TELL ME WHY I AM SUCH A SIMP",
    "joely is my fav <3",
    "anyone down for late night drives? like pas' drive? pls",
    "stop making long confessions I cant read smh",
    "i would buy josh bautista's feet's onlyfans",
    "reva has a really cool left pinky fingernail. ",
    "nathan,  watch ur back. im replacing ur shoelaces w spaghetti ",
    "are y'all putting less cough syrup in the pasae punch?? i can't see carol christ when i close my eyes anymore :(",
    "i would personally lick every door knob clean for Mark to never get covid 🥴🫡",
    "I want JR to run me over in a Loop cart on his way to class, so studious 📕",
    "Can I pay for Avery's kpop dance group to make me a video, just with avery in it? (he must have his fake piercings in, thank u)",
    "Can Andrei make chlorine gas in my dorm uwu 😷😻",
    "JR you wheeled yourself into my heart 🚵🏼‍♀️🚴🏽",
    "the big ballers honestly do so much for pasae <3 huge thank you to josh, michael, angelo, and henzel for putting this org on your backs and for consistently being there for everybody. you guys are all goats",
    "JOSH, MATT, AND JEREMY ARE THE GREATEST PAAM LINE IN HISTORY",
    "i hope josh is able to get some rest, he pours his heart out and loses sleep over pasae </3 we appreciate all you do, pres!",
    "thank you core for all you do! please take care of yourselves because it's so tough seeing you guys going through it :/",
    "legend says if you say 'Comrade' in front of a mirror 3 times, Camille appears and sends Shrek memes",
    "the universe keeps giving me reality checks and I cannot get a break :(",
    "I FIND MYSELF FALLING IN LOVE EVERY 3-5 BUSINESS DAYS",
    "I have a friend crush on Matt, please hang out with me",
    "The interns this year are so active and productive and it's such a wholesome thing to see",
    "I just found out that being stepped on is such a wonderful experience and now I’m just imagining how awesome life is being a floor mat. I mean they don’t have lives but they’re living the dream. But still, they don’t have lives.",
    "its so wholesome that josh wears 35 on the back of his big baller jersey, he really loves his core",
    "Petition for alumnus Rigel to start an Onlyfans",
    "i would like to be on camille's crunchyroll watch list 😏",
    "camille can call me chicken and run me over with her car all day 😍",
    "audrey are you free this thursday night to have a negroni sbagliato with prosecco in it. if you would like to have a negroni sbagliato with prosecco in it i am free on thursday night when i am free to have a negroni sbagliato with prosecco in it uwu 😜",
    "to jr, magandang gabi, matamis na prinsipe 🤠",
    "kiana is such a sweetheart i love her",
    "Cant wait to play hot seat during a social 🤪 i need some spice  ",
    "I am not pas'slaying rn",
    "i wish matt cazas would choke me with those pearls 🥵",
    "aroan is the mfing goat #core36president #thebiggestballer #aroanatrainonme",
    "I WANNA CONFESS TO SOMEONE BUT IDK I THINK I MIGHT GET REJECTED AND THEN PEOPLE WILL KNOW AND THEN I WILL BE EMBARRASSED AND THEN WHAT? BUT I REALLY FIND THIS SOMEONE CUTE AHDKSFKL SEND HELP",
    "pasae is full of baddies",
    "Nathan I take it back ur p cool I will NOT be replacing your shoelaces I just chose a random name tbh",
    "emmuelle slayed so hard with her halloween outfit",
    "I'm going to miss the seniors so much 😭😭 It's not going to be the same without them",
    "thank u core + jeremy for coming to my bday🥺",
    "Lowk i feel like Im a bad staffer for my intern",
    "hi ate kia thank u for being my older sister away from home",
    "I see cody like all the time but he forgets how my name is pronounced :(",
    "KUYA AROAN☝🏽",
    "reva ily thank u for bringing ranch ",
    "im glad we’re getting closer :)",
    "the social was amazing, it was so nice seeing everyone in costume",
    "life is hard",
    "ana i miss you, come to more events",
    "Some of you guys have too much energy",
    "kiana i love you",
    "I hate cs, kinda ironic aint it?",
    "stream midnights by taylor swift",
    "someone please go ice skating with me",
    "nathan has been such a positive energy for pasae and i love that he’s part of the community, he makes me feel welcomed and safe :,)",
    "felix ur lw my type",
    "i like picking my scalp",
    "i literally shaved my legs for the pas'social",
    "Michael looks like Harry Potter",
    "Karlaine you lowkey cute but… ",
    "i wish Matt would notice me more ；（",
    "Nathan place nice for a workout",
    "WHAT IF WE DATED !!!!!",
    "ALL MY HOMIES LOVE THE BIG BALLERS",
    "aw josh and audrey doing princess and the frog was so sweet ❤️",
    "i loved mila's costume, she's so cool",
    "Reagan is a whole vibe, i'm really glad he's in pasae",
    "gelo i loved seeing you please hang :("
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
