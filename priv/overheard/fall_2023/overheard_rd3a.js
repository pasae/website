console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
"i'll be the pa'scapegoat",
"im a little devious - Garrett",
"I believe in racial segre...equality - Garrett",
"[matt is] a pick-me homo erectus - Jelo",
"You want us to groom our interns?",
"I get enjoyment from watching people suffer - Garrett",
"HAR HAR HAR HAR - Garrett and TuhReiZe",
"The real eduroam was the ones we made along the way - Treasureese",
"That shit went gulp gulp",
"I'm shitting my fucking pants... You're pa'shitting yourself?",
"The Filipinos yearn for communism",
"No bro but like imagine Evan on his knees like bruhhh....",
"I'm just doing my autistic pace",
"every session in some way you end up touching each other",
"THATS WHY I SPEED THRU SCHOOL ZONES SO THEY WONT THINK IM A PEDOPHILE",
"Oh, so it's like an arranged friendship - Jelo",
"I sometimes forget that Reagan is actually smart",
"Being gay for Nohl?",
"Come a little bit closer you're my kind of man so big and so strong come a little bit closer I'm all alone and the night is so long",
"I use PASAE funds for Gigs to get Starbucks! - Chaurlayne",
"This water bottle feels purpose when you drink from it *glurglurlgurglryggrlr* - Xavier",
"I think I really need some pot right now",
"ay-rab",
"Maybe i should just drop out and become a stripper",
"You're coming in and i'm coming out",
"nomas sounds like mine and nohl’s ship name - Thomas"
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
