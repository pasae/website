confessions = [
    "are confessions always meant to be wholesome bc I low-key miss the horny/matchmaking/shoot your shot type vibes :(",
    "Emmuelle I literally love u pls never change",
    "Therese ur such a baddie ilysm",
    "Gelo I never stop smiling when I'm with u ilysm",
    "come on ᶜᵘᵘᵘʰʰʰʰʰʰʰʰʰʰʰ",
    "Raphael is the kindest person ever :) I really hope Berkeley’s treating u well",
    "jared is such a cool guy :( I wanna be closer friends with him but I sCARED",
    "Ana literally you have my whole heart ilysm",
    "Henzel is the GOAT",
    "i think that A and N are cute together hehe",
    "romy i am respectfully asking u to sit on my face",
    "avery you can dance your way into my heart",
    "josh b why are you so tall what did your mother feed you",
    "hi conner",
    "i love pasae from the BOTTOM of my heart",
    "omg camille has such great taste in music and anime >o<",
    "i wish ally was one of my adings",
    "austin *thumbs up*",
    "papa rigel ",
    "i feel like rigel is like pasae god at this point, we are his children",
    "michael’s last name is celebrado bc he brings the party everywhere he goes ",
    "hi wilson hi travis hi rigel",
    "Avery got me bricked up rn",
    "Angelo b I love your singing at night <3",
    "angelo is a bully",
    "avery's the nice staffer ",
    "michael is nice",
    "I wouldn't mind if josh b pinned me to the ground like a starfish and pegged me",
    "where the REAL confessions at 😤😤😤",
    "Wilson those crocs are a smoove move",
    "Michael always playing smash when he should be smashing something else ;)",
    "my ate is so pretty !!",
    "audreys frog hat was so cute during pas'social :D ",
    "i think jared makes a good mr krabs n i want him to krabby my patty",
    "lol hi avery rawr xD rawr ",
    "so is travis gonna do the worm during the next pas'social or what",
    "are you happy michael :D ",
    "angelo's initials are AGB and by the commutative property of multiplication, that is equal to ABG. therefore, angel,o is an ABG, Q.E.D. :) ",
    "another day thinking if michael is happy",
    "michael's happiness is my priority",
    "freya ur hot, hmu ;)",
    "nyah can peg me 🥰😤",
    "thanks for filling out the agenda, josh a :)",
    "manny i think u roasting the wrong nuts 😳",
    "J <3 R",
    "avery u can kpop dance on my face",
    "can ppl start attending more events core tries really hard planning and coordinating things and its really sad to see when few people show up 😪",
    "Hannah seems so sweet I really want to meet her 🥺",
    "Joely seems super sweet I wish I could get to know her better :')",
    "Ayo when's Gabe coming through with his fresh lemonade again ",
    "reva be talking about chemistry but where's our chemistry?",
    "Conner swinging on that tree but when is he swinging into my heart :'(",
    "reva is so swaggy, one of my fave freshies",
    "joely ur my fav",
    "Christmas music before Thanksgiving is fine! ",
    "Pas’Ice was hella fun, can’t wait for the next social :)",
    "Here b4 the thirsty PASAE confessions",
    "i think avery is really cute! is he single?? :eyes:",
    "wilson is such a homie!!",
    "noah's transportation content gives me life ",
    "gelo is a baddie",
    "kiana i wanna give u a big hug ^_^",
    "freya is so pretty !",
    "I LOVE U JOELY!!!",
    "KATRINA IS SO COOL",
    "josh & audrey yall are so cute <3",
    "i better see some spicy confessions >:(",
    "The only thing stopping me from saying I have a fat crush on you is thinking about whether you act the same to ever,yone else you think is cute, not just me 😀 you’re my type so I hope you’re not talking to anyone else jfksksks",
    "reva ur adorable let's be closer c:",
    "Joely u a baddie be mine",
    "Tyrell's hot hmu",
    "is it bad im attracted to to one of my interns?",
    "I wish I could listen to Avery’s gravelly, monotone voice while he pegs me",
    "ethan = Michael's body + Avery's personality ",
    "Darius better trade me kd ",
    "kalana ur so sweet",
    "A can step on me (respectfully)"
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