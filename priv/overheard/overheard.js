overheard = [
    `"Hi, Seth!"	| everyone in PASAE, probably`,
    `"I'd rather die, than use Samsung Pay." |	Jizzelle Pollyran`,
    `What is this DAGA? | Andrew referring to the bunny during intercore #1`, 
    `Consent is irrevocable	| Audrey`,
    `I have a favorite amino acid, you know that right?	| Camille, a ChemE-loving girl`,
    `Are you an intercore member?`,	
    `"Did I just hear T-Test?" "Oh, I heard tea press" | tag urself :')`,
    `I like figuring people out... you know?`,	
    `Does it bother you when- *sees that their quote is being typed into overheard * - oH my gosh, you're actually doing it`	
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