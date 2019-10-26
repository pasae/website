confessions = [
    'Damn, i c u ali',
    'Ali being a tru CED student, out here laying foundations👀',
    'Yo so why is Joe always on the tabling spreadsheet',
    "Can we bring back Pas'rave? ",
    "Wait omg, I would love to play D&D :0",
    "i freakin love josh fajardo",
    "Everybody is talking about the same people as last year. Can y'all come up with something else!!!",
    "I should have joined PASAE",
    "Real talk, Travis has really neat handwriting.",
    "Booooooooo, I wanted a crew neck. ",
    "i wanna get to know the new interns but i'm too pa'shy 😔"
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