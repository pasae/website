console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
"'\€+]SHOWER CCLAP' - GARET",
"'im gonna pa'squirt on matt' - Adriel",
"'the only barrier to safe drug usage is ignorance'",
"'Why am i not gay? I wish i was gay, men are so good looking' - Garrett",
"'Um, actually if you knew your FNAF lore you'd know it's not the bite of '87 it's the bite of 83'🤓👆' - Nohlbear Fazzington",
"'I need some meat in my mouth, I need that weenie in my mouth.' - Garrett",
"'stomach full, head empty' - Carm",
"'You’re my ate' 'Not after your behavior tonight' 'Why, you wanna punish me?' - Jelo, Reese, Jelo",
"'I was an F girl' - Karlaine",
"'that fnaf quote was said by garrett not nohl' - god"
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
