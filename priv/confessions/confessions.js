confessions = [
    "Both audreys are so cute. Thank you for existing and being my sunshine in the rain my Tylenol when I’m in pain.",
    "Michael is the only Florida Man for me.",
    "I first met you last year in person and I thought we really vibed. You always made me smile when I saw you and I thought we could figure out what this was with time. But then Miss Rona hit and I wasn't able to see you so \"we\" just stopped. Valentine's Day got me thinking about you again...if I shoot my shot to see where this goes, would you say yes? - A pas'shy bear ",
    "Ngl the girl who showed off her cats at the last PASAE Zoom seemed sweet. She was hella cute too so if you're single this Valentines day, give me a sign so I can treat you right",
    "conner release the unfiltered cut!!!",
    "I miss all of you <3",
    "i love ur tiktoks hehe",
    "what do i do if i have a crush on my staffer.....",
    "ana is literally so powerful i would cri to have a chance w them",
    "This one's for the boys with the booming' system",
    "ummmmm i love creative component ",
    "Hi my name is Audrey and it’s getting pretty hot so come thru, dm me, and shoot ur shot. Pls be sure to double check ur door lock bc with consent i can make ur bedrock "
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