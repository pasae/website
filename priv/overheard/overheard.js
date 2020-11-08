overheard = [
    "I put the pee in depression|Camille",
    "God I spit everywhere, I'm such a whore|Audrey",
    "I need to be surrounded by J's because I'm a big pp|Audrey",
    "Camille: \"It's scary\" \n Audrey: \"No he's a sexy lizard man\"",
    "Do you want me to just shove the meat in there?|Camille",
    "He's not thick he's long|Camille",
    "\"Drew Seeley said. Fuck the PO-lice.\"|Audrey",
    "I'm definitely down to get my booty tickled|Ryan S.",
    "Come over, we have vodka|Camille",
    "*spanks fridge* \n\ \"Aw yeah you like that, fridge?\"|Audrey A",
    "*singing Do I Wanna Know* \n \"Have you got color in your cheeks?\" \n \"No cause I'm brown\" ",
    "I like my men like I like my tofu- brown and in my mouth|Audrey A",
    "He's a hot dad|AudreyA",
]

const autowrite = () => {
    let overheardToPost = '';

    overheard.sort((a, b) => b.length - a.length)

    for (let i in overheard) {
        const quote = overheard[i].split("|");
        if (quote.length == 1) {
            let card = `
            <div class="col-md-6">
                <blockquote style="border-left: none">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            ${quote[0]}
                        </ol>
                    </nav>
                </blockquote>
            </div>`;
            overheardToPost += card;
        } else {
            let card = `
            <div class="col-md-6">
                <blockquote style="border-left: none">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            ${quote[0]}
                            <br>
                            - ${quote[1]}
                        </ol>
                    </nav>
                </blockquote>
			</div>`;
            overheardToPost += card;
        }

    }
    console.log(overheardToPost)
    document.getElementById("overheard").innerHTML = overheardToPost;
}

autowrite();