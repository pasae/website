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
    "Pregnant women are fat|someone in PASAE",
    "What's 8 plus 2? -- 0!",
    "There’s no time to DoorDash, can I just eat your pussy?",
    "“I hate it all your fucking weeb music are bops”|iykyk",
    "Dont worry guys, with me on your Jeopardy team, we'll win for sure!",
    "Don't worry guys, with me on your Jeopardy team, we'll win for sure!|Mikee, right before earning the team negative points",
    "Did they ask to bite?",
    "If corona hits Berkeley, can we have a forever intercore at someone's place?",
    "*talking about a guy people find cute* 'Wait, do you pity him ?'|your friendly neighborhood boy",
    "Do you believe in women's suffrage?|Mikee",
    "I can't compete with people who read!|PAS'Spelling Bee",
    "Don't do drugs|- best girl",
    "Honestly Joyce, I  didn’t think you were full Filipino|Mikee",
    "You seemed so fresh meat to me - too hyper and did too much|Mikee@Joanne",
    "“A little ditzy, but I fuck with it. She’s hella funny!”|Joyce @ Mikee",
    "Damn she cool. Ig she dances and shit but also, she hella well-rounded|Joyce@Joanne",
    "“Honestly don’t remember... You were really koreaboo” (first impression)|Joanne @ Mikee",
    "“A little ditzy, but I fuck with it. She’s hella funny!”|Joyce @ Mikee",
    "That's my daddy!|Travis",
    "college of engineering and design|joanne",
    "First time me and Psalm were on the same wavelength|Joanne 3/5/2020"
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