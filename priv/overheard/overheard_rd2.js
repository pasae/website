console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "oh my god it's wet nevermind -francesca",
        "xavier cheese pull -christian",
        "'who tastes the most like sushi?' 'sophia'",
        "as the ambassador of the incels... -Xavier",
        "freshmen are easier",
        "You need to suck really hard shane -Xavier",
        "I sucked and i sucked -Brendan",
        "Suck and keep it in there -Xavier",
        "It’s in my butt now -Garrett",
        "Its good to be shooting them -Xavier",
        "I dont think he has autism i think he just likes minecraft -garrett",
        "you dont lick it, you SUCK IT -shane",
        "nobody wants xaviers small pickle -ethan",
        "in reference to sophia 'yeah you brownie' -grayson",
        "where's the estrogen -Matthew",
        "The thing is I'm not even a twink -Brendan"
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
