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
    'I feel like Im above you.|Mikee"'
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