confessions = [
"who tryna be a cute(and slightly insufferable) couple at PAS’ice skating with me ? 🥺🥺",
"xavier is best boy",
"to 61b project 3 peeps… good luck",
"we < 3 you carm",
"my post midterm burnout is too real",
"can’t wait for banquet :)",
"i’m so tired.",
"im scared to graduate and leave berkeley",
"semester too fast",
"what if u shot ur shot",
"if your spotify wrapped is wack you should honestly just end it all on the spot no hesi",
"please step on me id let you do anything to me",
"what if i apply to transfer to harvard for fun and actually get in",
"RETREAT SPRING SEM RETREAT SPRING SEM RETREAT SPRING SEM or IDD AFTERPARTY 2 IDD AFTERPARTY 2 IDD AFTERPARTY 2",
"single digit rice purity challenge ???",
"would you rather fuck your dad in your boyfriends body or your boyfriend in your dads body",
"thankful for u guys ❤️❤️❤️",
"They say eyes are the windows to the soul.But yours opened the door to my heart < 3",
"going through an especially rough time in life rn guys but i appreciate each and every one of yall sm",
"i wish yall happiness",
"36 ON TOP"
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
