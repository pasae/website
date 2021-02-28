confessions = [
"Audrey can make my bedrock PLEASE",
"jr just say something if you feel it too",
"Camille is highkey kinda cute. ngl ",
"do u guys think the white house does leadership retreats",
"the things i would do for some of these pasae women / theys.....",
"ryan s....don't be shy do u have a significant other....everyone wants to know.....",
"one time i was cuddling w this guy and his heart was beating fast and i said hey why is ur heart beating so fast huh ;) and he said it was his anxiety ",
"does anyone know if anissa is single jlaksdfdfgkjfdjs;",
"Fuck, I've fallen so hard for you. ",
"Honestly, the only reason why j wanted to learn to play League was to get closer to you.",
"Hey Josh, I heard you play League. I can top your lane if you'd bottom for me 😜",
"Ngl, Wilson is the sexiest rat I've ever seen",
"Are staffers allowed to date interns? Gotta know for research. ",
"for what its worth, I'm really happy to see pasae thrive in a pandemic. a lot of orgs, especially pil ones, seem so much smaller and less engaged now that everything is virtual. not saying pasae hasn't gotten smaller, but we still have so many awesome interns and core members who seem so engaged and happy to be apart of pasae. i really wish we could be vibing at intercores or on the glade, but we are making do with what we have :') (back to me drinking during pasae zoom events)"
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