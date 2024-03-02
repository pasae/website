console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "'hipster discord mod' was my first impression of you - xavier to garrett",
        "It's true. She's so mommy - Co Erep X",
        "Freya's so old she went to school with jesus - Tall boi e rep intern",
        "You're the president? I thought you were just there! - Christian Yim",
        "Freya's so old, she has her own exhibit at jurassic park - Co-erep G",
        "PV=nRT right there - Xavier",
        "Q: What would want to do on your dream date? A: Fuck - Noah Robles",
        "in n out is the burger of the people - xavier",
        "That shit made me feel so old i felt like Freya - CS rep nohlbear",
        "Garrett, why are you so good at looking pathetic and helpless? - Mila",
        "she park on my pickle til i weed",
        "[Garrett] You laugh like a cartoon villain. - Mila",
        "Everyone’s been in here. That’s the whoriest of apartments. - Mila",
        "… because we’re gonna go on top of him. - Garrett",
        "Yeah it's for the chronically online like ****s and femboys",
        "I'm currently starting world war 3 as china",
        "This is crazy, I'm the least autistic out of the E-reps",
        "Why do you have knives next to jesus christ",
        "It's ok i have my weed pen next to jesus christ",
        "They're a lot more attractive when the lights are off",
        "If you're not in a constant state of post nut clarity you're in a constant state of pre nut delusion",
        "I like the tip on this. I mean i only really need the tip",
        "“And all of a sudden…there were toes on my computer” - Garrett"
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
