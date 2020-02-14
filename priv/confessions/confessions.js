confessions = [
    "travis looking juicy af this meeting",
    "Sorry Geraldine, but Noah Centineo is just not doing it for us anymore. Please pick a different colonizer ;(",
    "Shoot ur shot travis",
    "there are some really cute girls here",
    "jo let’s smoke",
    "rigel sisig was the best thing that's ever happened to my peepee",
    "why's this not embedded i miss seth",
    "hey jo what u doing on tuesday 👀",
    "fuck travis",
    "My fav Filipino dish is Rigel Sisig",
    "Conner you a BITCH",
    "who tf is deboy alabaster",
    "i don't think we talk about how pretty our social chair is nearly enough",
    "Anatori really be killing the game showing up to intern meeting looking like that! The UNIQLO bitches could never!!!",
    "hi ali",
    "hi Mikee",
    "hi rigel",
    "I really enjoyed getting to know everyone during retreat! Huge shout out to AJ M. for putting it together!",
    "social chair is the only chair i would sit on 👅💦",
    "DeBoy shooting his shot better than any of y’all 😤🤭",
    "Travis got the biggest dick out of all of y’all. Jokes on you cuz we’re all travis except Dave ",
    "Geraldine Fabro is so nice and so pretty!",
    "AJ M, you’re cute",
    "im the real travis",
    "everyone in pasae seems really sweet 🥺 cant wait to get to know yall better",
    "happy valentines day to the loves of my life, pasae ❤️",
    "Travis should take his own advice and shoot his shot already too😤",
    "JR can hobble into my heart tbh",
    "can Erika powerlift me pls🤧",
    "can me and Anjo have some of our own community development🤭",
    "Geraldine can I be ur Peter Kavinsky",
    "Psalm is treasurer, but who treasures Psalm😢",
    "this is a popular opinion, but it must be said - Patty cool af and she's so wholesome",
    "i already know the Pathways to post-grad life - but what's the Pathways to External's heart",
    "Wilson and Ryan should be IVP",
    "audrey's and annissa's singing voice make my knees weak 😩",
    "Sisig has a really sexy raspy voice o-o",
    "Sorry I don’t smoke anymore -Jo",
    "Everclear Erika and Christal Meth powerlift my spirits UwU",
    "bruh where tf is gian i miss his appearance",
    "hi Wilson",
    "the new interns are so cute! pls talk to me and let's be friends uwu",
    "can't wait to see new couples at intercore",
    "wilson la my favorite chinoy boy",
    "wish we had pa'study everyday 🤧",
    "ERIKA PAS'IA LOOKIN LIKE A PAS'EAT 😳❤️💦",
    "IVPs really went sikee",
    "Psalm is a good man.",
    "there's something viscerally horny about both ajs and tbh i kind of vibe with it",
    "tree trunk travis serving worm both ways 😛",
    "i miss homewrecking pasae'dchicks wya 😩",
    "the only chocolate i be wanting this valentine's day is my morenx kings and queens. yasss give me that milo 😍",
    "aw but I want Noah Centineo to be the milk to my Koko Krunch 😜",
    "i want erika pasia to be my foreverclear 🥺💕",
    "ali ongpin really be an angel on earth i have never met anyone so pretty and kind",
    "Geraldine is so sweet!!!!! She really makes me feel welcome to PASAE!!! ☺️☺️",
    "Geraldine deserves the best valentaine’s day!!!",
    "I heard Connor's hometown specializes in buko pie.. I would like a taste of those cocoNUTS 🥴",
    "rigels new hairstyle doe >>>",
    "these new pasae guys be cute af pls stay",
    "why parkash kinda cute doe ",
    "so is no one gonna mention all the drawn out sexual tension between core members ",
    "sending love n happiness to joanne bc she is so kind and i appreciate her!!! <3",
    "Travis, Wilson, Rigel. Jo, and Kendal can like get it.",
    "Mikee badddddd thooooo",
    "I can’t believe wait for intercore!!! ",
    "Travis tell us about ur tree trunk 🥰🥰🥰",
    "Travis looking at Wilson some typa way 👀👀👀",
    "nyah is soo cute aff!!"
]

const autowrite = () => {
    let confessionsToPost = '';

    const cardColors = ['primary', 'danger', 'warning'];
    let cardNum = 0;

    confessions.sort((a, b) => b.length - a.length)

    for (let i in confessions) {
        const conf = confessions[i];
        const color = cardColors[cardNum];
        let card = `
        <div class="col-md-4">
            <div class="card text-white bg-${color} mb-3" >
                <div class="card-body">
                    <h5 class="card-text">
                        ${conf}
                    </h5>
                </div>
            </div>
        </div>`
        confessionsToPost += card;

        if (cardNum == 2) {
            cardNum = 0;
        } else {
            cardNum += 1;
        }
    }

    document.getElementById("confessions").innerHTML = confessionsToPost;
}

autowrite();