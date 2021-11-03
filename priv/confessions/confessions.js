confessions = [
    "ate ana is so cute !! <3",
    "looking for a power bottom wya",
    "reva ur so sweet :’)",
    "let’s go michael",
    "i hope we all have fun at pas’social",
    "emmuelle i want the best in life for you <3",
    "avery ur so swaggy xd",
    "andrei’s really cool B)",
    "therese you’re literally so funny i love your jokes so much",
    "i like the sound of conner’s voice",
    "ana i love you",
    "ali i love you",
    "wilson ur actually so sweet",
    "kiana you have my heart",
    "i think jared’s vibe is so cool",
    "I want to be Gelo’s friend but i’m shy 👉👈",
    "kaye i really really wanna be your friend",
    "joyce is a literal goddess",
    "Henzel is really nice!",
    "I love all y’all freshman and sophomores i can’t to meet you all",
    "emmmmuelllleeeee :)",
    "reva has like a billion kapatids at this point",
    "can pasae have a nightcore themed intercore",
    "306 stand up",
    "jared ur graphics are AMAZING !!!"
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