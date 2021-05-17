confessions = [
    "i be pourin my heart out to my interns n they be like “___ loved a message” 😭😭liiike LETS BE FRIENDS",
    "hello psalm i think i do not say this enough but you are so cool and funny and nice and i really appreciate u!! ily sm!! pls stay friends w me after u graduate aaa",
    "psalm in pcn tho!! wooo congrats!! original music + ur voice <3 ",
    "gerald u deserve all the love and happiness in the world!! wish i could express how much i appreciate u!! u are the sweetest and nicest <3 also congrats on graduation :'-) ",
    "audrey yue ur hugs are great!!!! ",
    "audrey is so funny and fun to be around! i am so glad you have another semester otherwise idk what i would dooo",
    "y'all need to submit more confessions 😤 its been getting boring 😔 and its so much harder to suspect y'all for being horny & shit",
    "shoot ur shot i wanna see some tea ;)",
    "nyah is highkey cute and has an amazing personality I'd love to get to know her more 🥺",
    "y'all saying shoot your shot but I've been friendzoned without even trying 😬",
    "rigel... can i shoot my shoot or nah",
    "like fr who else am i competing with for rigel . we need to talk ",
    "i've never simped so hard for someone in my life. i'll tell u i love u once i meet you in person",
    "josh b ur cute",
    "i be pourin my heart out to my interns n they be like “___ loved a message” 😭😭liiike LETS BE FRIENDS",
    "thank you core 33 and thank you interns, i’m so proud of each and every one of you, y’all make pasae one of my favorite spaces and i can’t wait to see you in the fall <3",
    "omg nooo jr ur so sexy ",
    "im vaccinated.... kiss me ",
    "last batch of confessions better pop off ",
    "internal is the sexiest component",
    "external is the sexiest component",
    "creative is the sexiest component",
    "ily pasae",
    "So who shot their shot I’m still curious",
    "that one core member? yumm",
    "WHY ARE YALL SO HOT",
    "what if we kissed in the esh space? haha jk.... unless?",
    "sign up for tabling next sem i’ll be waiting ",
    "LOL that one intern who can’t stop gushing over their staffer :o",
    "Camille your memes in the chat are great and I think you’re cute",
    "my throat is bored",
    "i miss you all",
    "hi sir i like talking to you sir"
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