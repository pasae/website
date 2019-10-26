overheard = [
    "Hence, that is why I look at those balls all the time.	| Mikee",
    "I'd try a lot of things before alcohol. Meth probably if I had access.	| Camille",
    "Sometimes I wish I was a big, burly man. |	Camille",
    `"It's like I always say, don't she where you sleep" | Parkash`,
    `"I'm probably gonna go home and do something fun... Like my taxes" | Alvin`,
    `“I didn’t steal their girlfriends. I was just there.” | JR Puerto 👅`,
    `“I’m not a scanner!” *touches clipper card* “BEEP”`,
    `I’m a crusty girl	| That one core member `,
    `"Kuya I went to the PASAE confessions page.  Everyone's thirsty." | Kyra`,
    `"It's like Call of Duty, but in person, but with paint" | JR describing paintball`,
    `"I need me a EECS mami." | The ringleader of PASAE`,
    `"Good night, my sweet rat." | Rigel`,
    `"I need me a freaky one." | Wriggle`,
    `"Why don't you have your scooter?" "I'm tired of falling when no one's there to catch me." | Psalm` ,
    `"If she ain't two years older than me... I don't want it."	| Head Clown`,
    `"Bababoonk" "No wait, Boonkadoonk"	| Travis and Rigel`,
    `Nobody: Kendal: “daddyyy”`	
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