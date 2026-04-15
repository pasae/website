console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "brendan is so tall",
        "we are adam hacker we carry the code",
        "automaton landmine spotted on lower sproul",
        "we need a pasae esports center collab",
        "I got that brendan in me -Shane",
        "we all finished at the same time and shane had his mouth open -brendan",
        "francesca and gaby are the same aesthetic like lil uzi vert and baby keem -Matthew",
        "i dont have good foresight and i dont have any foreskin!!!!! -Francesca",
        "Bisexual...Cowboy... -Brendan",
        "It really looks good, especially on the left breast -Xavier",
        "a taste of honey is worse than no honey at all. That should be in the bible. -Xavier",
        "Probably all the peeing -Xavier",
        "Core 39 might get a bit creamy -Ethan",
        "I think about kissing boys -Brendan",
        "He tasted pretty gross -Shane",
        "I feel like a black cop that's 10 days before retirement at the start of an action movie -Xavier",
        "I didn't expect to win I thought you were gonna blow me out",
        "I didn't realize what it was until it was out of my mouth",
        "If im gonna be racist, Im gonna be a competitive racist. Im not with that casual shit -Garrett",
        "don't worry someone will want your wood someday -Judy",
        "Ours are the same length don't worry -Cody",
        "Can I inject -Jared",
        "'it was big' 'it was REALLY big' -Jared, Fran",
        "oh shit. oh shit its big. -Sophia",
        "do not call me gyatt... do NOT call me gyatt.... -grayson",
        "he made that taco shit -Sophia",
        "We're going to cream together",
        "There were three dudes that fucked me up -Garrett",
        "my mom said when i was born i came out orange because she just kept eating jolly spaghetti -ethan",
        "Let's get cracked -Shane",
        "I love CoC -Garrett",
        "Domain Expansion, Nohl Space -Garrett",
        "Target's a good place to fart -Matthew",
        "Have fun with your meat -Jared",
        "woah why are there so many PPs in here -shane",
        "i can't stop saying slurs -justin",
        "shane i want you to spread it -garrett",
        "they had all you can eat tacos -grayson",
        "they can always be bigger. -shane"

    ];

    const autowrite1 = () => {
        let overheardToPost = '';

        const cardColors = ['primary', 'danger', 'warning'];
        let cardNum = 0;

        overheard.sort((a, b) => b.length - a.length);

        for (let i in overheard) {
            const conf = overheard[i];
            const color = cardColors[cardNum];
            var size = 'h5';
            if (conf.length > 100) {
                size = "h6";
            }
            let card = `
            <div class="col-md-4">
                <div class="card text-white bg-${color} mb-3" >
                    <div class="card-body">
                        <${size} class="card-text">
                            ${conf}
                        </${size}>
                    </div>
                </div>
            </div>`;
            overheardToPost += card;

            if (cardNum == 2) {
                cardNum = 0;
            } else {
                cardNum += 1;
            }
        }

        const overheardElement = document.getElementById("overheard");
        if (overheardElement) {
            overheardElement.innerHTML = overheardToPost;
        }
    
    
    }
    autowrite1();
}
);
