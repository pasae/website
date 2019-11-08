confessions = [
    "I need Pas'gym to start already I haven't been to the RSF for months now",
    "If you want us to talk about new people, give us something new to talk about 🤧",
    "GET TO KNOW THE NEW INTERNS DON'T BE PA'SHY :D",
    "Travis do it don’t be a bitch",
    "Travis just shoot your shot bro",
    "no one's ever at the esh space when i'm there 🥺",
    "https://www.when2meet.com/?8331848-YjjEi",
    "pas'rave? ",
    "My staffer yells at me for just existing. My staffer is abusive. To clarify, this is a call for help. SAVE ME",
    "Intern meetings are fun because I get to know everyone better and watch some folx flirt with each other for 1.5 hours <3 ",
    "AJ S YOU GOT ME WEAK IN THE KNEES 😩💦"
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