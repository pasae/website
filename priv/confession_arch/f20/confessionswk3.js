confessions = [
    "I'm still thinking about how fun that improv game was at IDD! Everyone who participated killed it",
    "these confessions are getting boring, did audrey stop writing? if not, you gotta step up your game girl🥱",
    "if i dont get to live w ali next sem im gonna be! so! pissed!",
    "nikki ily! dont forget to take care of urself bean!! ",
    "JR ur the sweetest!! u deserve the world ! how u out here taking care of everyone else all the time",
    "I used to be able to guess who sent in the simp-y confessions but now that we're in quarantine, everyone's a simp >:(",
    "I'm waiting for the next epic narrative from Audrey",
    "We need more socials so we can start talking to each other more! I feel like I don't know the other interns :(",
    "All the girls in PASAE are so funny and pretty <333",
    "lowkey i think manny is really cute sksks",
    "I finally got to hang out with Gabby and I swear she is so freaking cool and chill",
    "PASAE members out here doin illegal shii and im shook yall wildin",
    "Kiana you're hella cool and rly nice ",
    "Ryan S u r literally so cute pls love me back ",
    "i appreciate camille go off shrekretary",
    "emmuelle u have my heart",
    "josh a kinda cute",
    "ANA AND ALI I LOVE YOU",
    "annissa you are my capricorn queen",
    "i genuinely am loving all the love and support y'all give me. PASAE makes me so happy and keeps me grounded ily <3",
    "anywayssss PAS'Karaoke anyone????",
    "romy, peg me",
    "daddy justin ;p",
    "i swear this pandemic makes me so sad bc id hella wanna meet all of you irl bc i feel we'd all just vibe rly well",
    "JR and wilson 4ever",
    "after that pas'spooky social... im just tryna know if psalm is single",
    "COULD A BIH GET A HUG SHES STRUGGLING DAMN",
    "hi youre really cute tbh",
    "pls i wanna shoot my shot but i’m shyyyy",
    "can G.F. be my gf?",
    "Gelo, I have the fattest crush on you 🥺you're a softboi and it makes my heart go uwu ",
    "The fact that I would \"turn straight\" for Ana or Ali 😍ugh, their POWER. Men are TRASSSHHHHHH",
    "am i the only one with no relationship experience ",
    "I want someone to look at me the way Travis looked at the camera in those tiktok vids ",
    "Is Kaye single? "
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