console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
"'ate what data structure am i working with? java ???? '",
"'cal cheese club'",
"'I want Xavier inside me'",
"'what race is your least favorite' - garrett",
"'instead of the wheel of fortune, its the wheel of racism' - garrett",
"'ill carry the overheard' - garrett",
"'dont you think that in real life, if mickey mouse were a real person, hed be a domestic abuser ? '",
"'Isn't the world so beautiful, bro?' - Adriel",
"'WHERES THA STIIIZY'",
"'DES'PASAE'CITO'",
"'put nohl in a roll...go to the park we have a nice stroll...go to the gym we get swole...go to the mine we get coal...we do laundry we put em in folds... mess on the internet we're a little troll... play some soccer make a goal... get on a mat put him in a chokehold... got ice in my veins im so cold... get that pineapple whip we call it a dole... we get a shovel we dig up some holes...  get on the bay bridge we pay the toll... pour some cereal in a bowl... it's telling past - tense we call it told... no role modelz call me j cole... listen to mike sherm call me an asshole.... i gt dat ps5 its that game console... i gotta sign up for school you know i gotta enroll... nohl's a baby frog you know he's a tadpole' - DJ G-FLO",
"'imagine[for halloween]if four of us were each of the four stages of a frog ...... or it could be the lifecycle of a butterfly: D' - DJ G-FLO",
"'if nohl was a dog he would be a french bulldog.he got the spirit of a bulldog but he's small'",
"'you know like those cream - filled donuts ? i want you to fill me up like that'",
"'theres 2.5 inches in a centimeter' - karlaine",
"'i put my plate on someone elses lap... and started eating from the lap'",
"'Is it not 3 inches ? I've been telling people it's 3 inches.' - Xavier",
"'DUDE.i could build a bomb'",
"'[Directed at Nohl] No wonder you are a little naughty dirty soy boy.' - Freya",
"'I only got four hours of sleep last night because of you'",
"'    (To Xavier) “Wow, you have friends! ?”' -Karly",
"'oh youre gonna go fill your water bottle up ? why dont you fill me up ?'",
"'actually 🤓☝️'",
"'matt thinks a lot'",
"'I hate redheads bruh.They don't have a soul'",
"'Bro you're just a typo of me '",
"'    (while tripping) 'i hear the whispers...'",
"'Are you a smart fella or a fart smella ?'",
"'    It doesn't accept my finger it only accepts the thinggg'",
"'EE E E EE E E EEEEE.EEE E E E E EE E.EEEEE E E EEE E E E E EEE EEEE' - mejia and mojica",
"'BUMFUZZLE!'",
"'It's hard to type thats why i said dog's pp!'",
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
