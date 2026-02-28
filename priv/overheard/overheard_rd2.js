console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "Do Chinese people have this? Do they have a CHASAE? -Matthew",
        "i heard garret doesnt shower ewww grossss yuck",
        "im not lettin no boy eat my cum",
        "shout out my trans folk -Xavier",
        "i don’t hate gay michael, i hate taiwanese dan! -Garrett",
        "cum in my butt -Shane",
        "but my income !!!!!!!!",
        "peach! couple to throuple is my favorite show!",
        "I didn't mean to zoom in on his balls my bad -Francesca",
        "Are you comfortable getting on your knees? -Matthew",
        `(on the pasae instagram search bar)

        "sourdough basics"
        "sourdough"
        "how to dress basics men"
        "how to dress better men"`,
        "I want to hear you guys moan -Albie",
        "I wouldn't want to be named Pittsburgh -Xavier",
        "Everyone wants skinless chicken, but what about skinful chicken? -Garrett",
        "Take it from the goose -Francesca",
        "Did you feel like a loser back then"
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
