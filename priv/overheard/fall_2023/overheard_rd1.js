console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "'pa'sayonara' - :| garrett matt carm ",
        "'asthma hookah'",
        "'None of my business'",
        "'I like 'em segregated.' - talking about different colored clothes",
        "'2.5 inches is too big!'",
        "'my ex made a diss track about me with 1M streams on Spotify boohoo: ((' - guess",
        "'DO YOU SEE MY VISION OR WHAT'",
        "'    this article is so verbacious'",
        "'it's fickle bro' - matt",
        "'gee eye eff' - thomas",
        "'i have to solve climate change by 5pm'",
        "'    Dont punch me…Im sensitive. 🥺' - Freya",
        "'I don't even need to see, to see bro' - Garrett",
        "'I need to call Joaquin so he can walk me home.Joaquin be Joaquin(walking) ? '",
        "'Showerclap * clap clap shhhhhh * WE'RE PLAYING RAGE CAGE'",
        "'don't worry you're cracked'",
        "'hee hee hee har' - Cody (real)",
        "'What's 30 times 2? Oh 90' - Ate Karlaine",
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
