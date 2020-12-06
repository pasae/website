overheard = [
    "I put the pee in depression|Camille",
    "God I spit everywhere, I'm such a whore|Audrey",
    "I need to be surrounded by J's because I'm a big pp|Audrey",
    "Camille: \"It's scary\" <br> Audrey: \"No he's a sexy lizard man\"",
    "Do you want me to just shove the meat in there?|Camille",
    "He's not thick he's long|Camille",
    "\"Drew Seeley said. Fuck the PO-lice.\"|Audrey",
    "I'm definitely down to get my booty tickled|Ryan S.",
    "Come over, we have vodka|Camille",
    "*spanks fridge* <br>\ \"Aw yeah you like that, fridge?\"|Audrey A",
    "*singing Do I Wanna Know* <br> \"Have you got color in your cheeks?\" <br> \"No cause I'm brown\" ",
    "I like my men like I like my tofu- brown and in my mouth|Audrey A",
    "He's a hot dad|AudreyA",
    "ugh wish I had the guts to shoot my shot|someone who hates me and won't give me the drama I need to live",
    "\"Junior Transfers.... an untapped population\" |skskskskksk",
    "*Getting down to Panoramic*<br>\"This is for the veterans\|Audrey Yue",
    "\"Don't look at me mid-suck\"|Audrey",
    "\"It doesn't matter. I still have the power of god and anime on my side\"|Camille",
    "If someone gave me one pound of Reese's penis...",
    "\"I ate an apple and I shit myself\"",
    "\"I accidentally spit on my own choke\"|Audrey",
    "\"What if I accidentally lick it while I'm sleeping\"|Audrey",
    "\"Hisoka-chan, fight me ;P\"|Audrey",
    "\"Oh my god am I clownsexual?\"|Audrey"
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