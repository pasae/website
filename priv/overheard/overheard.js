overheard = [
    "Wait what do you learn in Math 54? y = mx + b?",	
    "To food: “Get in my ball” | Mikee",
    `"I probably would've been a really good pole dancer as a child. I should've capitalized on that." | Audrey`,
    "It depends if you shove the whole thing in your mouth | Camille",
    `“I only go to my classes because of Camille” |	Audrey`,
    `Let's play a game-- the minority loses! | if you know, you know`,
    `Isang Bagsak? What is that, one clap? | one clap wonder`
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