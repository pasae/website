confessions = [
"Iana's friendliness warms my heart :)",
"reese is one of the coolest people i know",
"ADRIEL ur hair is so cool",
"garret's onewheel is deadly 😭 DO NOT TRY IT",
"why can’t i get over this crushhhh",
"love my core 🥹",
"i ship some people on the board...  ;) ",
"i hate 61b",
"i love studying with core <3",
"I think nohl is really really cute 🙈",
"when is it my turn",
"retreat was so fun i miss it",
"Xavier is my favorite person on core",
"i love u guys",
"theres so much stress in pasae i hope u guys are gentle with urselves and know ur doing more than enough <333",
"jelo is so dad",
"Raelin is lowk chill. ",
"I have a friend crush on Matt",
"having an all-female exec is really inspiring to me. they make me feel like i can actually be someone in a male-dominated space like STEM.",
"i <3 core",
"freya's so cracked at tarot",
"kharlaine is a great mom",
" carm is one of the coolest people ive ever met.  she dresses like a poet at a 1960s jazz club",
"I LOVE ANNA!!!!",
"THANK YOU FOR ACCEPTING ME ONTO CORE EVEN THO I JOINED LATE I LOVE YOU ALL ALREADY SM YAAAY xoxo raelin hehe PLS TEXT IF U EVER WANNA HANG i love making friends and will gladly do a boba/coffee run with u or hang on the glade or anything tbh",
"cody more like codey",
"jelo saying ew is iconic",
"hi reese ur so good at dancing",
"only thing worse than missing a girl is missing her cooking",
"SOMEONE JOINING PASAE KEEPS HITTING ON ME AND IDK HOW TO TELL HIM IM NOT INTERESTED LMFAO",
"I was the one who vandalize garrett's space on the core meeting sheet last week. I also unintentionally spelled his name wrong.",
"pilipinx association of scientists architects and engineers? YOU MEAN PSI ALPHA SIGMA ALPHA EPSILON?",
"I LOVE PASAE C/O 26 iyam so grateful for u all--my 4.44 angel baes",
"If you👉 like❤️ 😍💜piña coladas🥂🍸🍹 And gettin' caught⚠️ in the rain☁️☔🌧️ If you're not✖️❌✖️ into yoga🧘🧘‍♀️🧘‍♂️🤸 If you have half a brain🧠🤯🥴 If you like makin' love 💏🥰🥵at midnight⏱️🕛🌌 In the dunes on the cape🛌🛏️ Then I'm the love❤️🥰💏 that you've looked 👀🕵️🤪for Write✍️📝✏️ to me and escape🏃🏃‍♀️💨",
"i miss her ",
"i miss him",
"i miss my cat",
"Nohl Abdelhadi, CS 61B TA.",
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
