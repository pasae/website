overheard = [
    '*insert cancelled shit here*|probably rigel or wilson',
    '"I want the D👅👅💦💦"|Kendal',
    '"Are you guys down to drink- I MEAN EAT?"',
    '“I’d like the pad se ew” “Meat?” “Yes.”|hungry girl',
    '"We walked so horses can run"',
    '"Does everything in life have to have a purpose? "|Psalm walking home from mccone at 12:01',
    '"*insert super mega cancelled shit here*"|literally anyone from Random House',
    '"laptop trackballs are like clits"',
    '"so you fucked up your own immune system"|joanne to ryan',
    'Dont put anything unnecessary-- like minors',
    '"I have the hots for sexy grampa"',
    'I feel like Im above you.|Mikee"',
    "There's a reason winner and weeb start with the same letter",
    "Eyes are stronger than I thought.|Jo" ,
    "Did you know that Jose Rizal was 5\'4\" ? That king...",
    'Person 1: "Rihanna lives in Bel Air." Person 2: "Rihanna is Filipino?!?!"|Mikee',
    "I like intercores, they're like catalysts for change",
    "UGH I love him with my whole heart",
    "He's cute but isn't he gay?",
    "We do everything hard.|Joanne",
    "I have thoughts|psalm",
    '“name three facts about yourself” “I went to the gym. I like shaming people. And I dislike wearing clothes.”|Kendal 2020',
    "Well if I had to choose, I'd sit on Rigel's face",
    "Consent shouldn't be consensual.| Audrey A.",
    "No one will know the size by tasting it. 🙂",
    "*while mixing lumpia filling* that’s what good pussy sounds like|Audrey",
    "Don't be too generous with the meat.|Wholesome King",
    "'He seems like the type to like white'|Camille",
    "There\'s like grown-up women in data science, and then there\'s me - WOOOO\" *waves arms around*|Mikee",
    "I don't like the nuts!😉|Sheena",
    "Pregnant women are fat|someone in PASAE"
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