console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "External is black. -Ethan", 
        "Im black? -Gaby",
        "She (Gaby) doesnt just smoke cigarettes, she smokes ketamine.",
        "You guys should come out and watch us kill each other. -Garrett",
        "college is all about exploring your bisexuality.",
        "Are u ready to get creampied. -Brendan",
        "Get on your knees. -Brendan",
        "Devsisters. Sleep with one eye open.",
        "I prefer segragation. -Garrett",
        "The person was turning Mexican. -Xavier",
        "Maybe it is good to be Chinese. -Brendan",
        "Can we play Chief Keef at the next study jam.",
        "You should come out -Garrett",
        "He gave me the Jacob pass. -Matthew",
        "They were digging into each other -Matthew",
        "You can put as much cream on my face as you want. -Ethan",
        "That's my Achilles stomach it's huge. -Cody",
        "I have a brother in me. -Garrett"
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
