confessions = [
  "You guys need to take the hint 🙄",
  "Michael what if we kissed at pas’karaoke",
  "tell me why emmuelle always catching my heart man",
  "I know valentines day already passed, but if anybody is looking for a bae 👀",
  "gelo i swear i'm in love w/ u",
  "Kiss me",
  "I have a crush on a core member",
  "michael ???",
  "i want ana's style",
  "yes daddy",
  "i love u joely!",
  "I love the way your glasses sit on your face as you do your homework you’re such a cute nerd 🥺",
  "I actually like you back",
  "kia is the best she runs this whole thing",
  "angelo how u gonna shoot ur shot from sweden",
  "boys, leave the baddies alone please 🙏🙏 they are for the girls.",
  "someone marry henzel asap",
  "henzel is my dream kuya <3",
  "drunk joely is so funny <3",
  "ana pls choke me i love you",
  "freya is a baddiee",
  "michael’s been looking so manly lately",
  "freya you deserve better :’(",
  "Henzel fr the goat",
  "therese is so pretty pls on my knees rn",
  "i thought someone was cute at the social for the first time",
  "y’all are not as slick as y’all think you are",
  "everyone say thank u therese for running confessions + webdev WE APPRECIATE U",
  "My heart beats faster when you walk into the room",
  "josh f",
  "stop talking to me when im drunk i have no filter !!",
  "if you have to anonymously ask someone’s relationship status, then you’re not close enough to them to even have a chance ‼️",
  "i dont fw pretty boys"
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
