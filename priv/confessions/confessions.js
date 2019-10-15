confessions = [
    'fucking travis man...',
    'trish cute or whateva',
    'can confirm Kendal is abusive',
    "geraldine yoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooou rock",
    "All of the interns are so hecking cool, I hope they all have a great time in the program this semester <3",
    "alvin seems really sweet and cool....i hope to get to know him better this sem! (are you taken?)",
    "Ok but Kendal and Mikee tho 👀",
    "can i get a keth? can u make it wast fowevew :3",
    "PASAE has some attractive people this year! Y'all are looking cute or whatevah ",
    "if you’re looking for a sign, this is it. SHOOT YO SHOT. SHOOTERS SHOOT. MAKE THAT FRIEND. TALK TO THAT PERSON YOUVE BEEN EYE-ING. MAKE THINGS HAPPEN BECAUSE CLIMATE CHANGE IS REAL AND YOURE RUNNING OUT OF TIME😤😌",
    "Love you, Travis",
    "I love Hans, I'm glad he's still with us",
    "Ayy Travis I see u at intercore 👀👀",
    "its not about aj m and alvin ... everyones wack... travis is where its at",
    "damn only core died during intercore. y'all are fucking disgraceful",
    "Travis better make a move soon or ima swoop :P",
    "kinda fucked up how PASAE has attractive people all of the sudden",
    "seeing erika pour those big boi shots at intercore got me wanting to shoot My shot 😳", 
    'I miss Jo',
    "PASAE's really out here with all these fresh faces and active interns. 😌 Proud of y'all",
    "when tf is Pas'D&D gonna happen",
    "I miss Pa'Study but if y'all are bringing it back, don't have it in McCone please 🥺",
    "Travis got all of these professionals in his DMs, but he's only looking for one👀"
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