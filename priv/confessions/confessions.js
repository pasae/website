confessions = [
    "I'm proud of this year's Core! Y'all are so creative and appreciate everything you're doing to make PASAE a quality experience despite the virtual platform. Love y'all! ",
    "Hi to the new and returning interns! Can't wait to make memories with y'all ",
    "It's been 1 week and yall are simping over the new people already. im tired.",
    "Ali is cute hehe",
    "if i could marry anyone in the world it would be enma centeno",
    "I'm so glad Confessions is back. I have something to look forward to now in these trying times. Hope y'all continue the tradition of saying things with your chest. Can't wait to see all the horny posts. Love y'all.",
    "Guess who's going to submit the most confessions?",
    "The speed networking activity at IDD made me realize that there's so much potential for new connections and friendships this semester, even though we're all remote! I'm really hoping we all get to know each other better <3",
    "I'm just waiting to see which confessions Audrey sends in",
    "Annissa let's get high together :o",
    "I know this is dumb to do over confessions but im shy: Travis, here's me legit shooting my shot, if you've ever liked me back lmk",
    "I honestly miss intercore so much like i wanna get drunk and embarrass myself in front of y'all but i cant ",
    "tbh i feel rigel a lowkey freak and he could totally get it js....",
    "ok but.... when we were put into a breakout room twice i kinda felt a little connection, if you felt it too hmu bc i think ur rly cute haha jk... unless??",
    "i love when jr serves me with daddy looks like yes pleaseeee mhmmm",
    "I've been waiting literal months for confessions to be up again, so if my inner-most thoughts are too spicy for you I truly apologize but this frees my soul",
    "Everything about Annissa is so hot, her looks slay and her energy is straight power, all while being the sweetest human being uwu",
    "Normalize shooting your shot in PASAE!!!!!! (respectfully tho lol)",
    "istg all the girls on core are the sweetest tf",
    "why are all the new interns soooo nice?????? like omg ily",
    "Manny as my rap chair? nah more like Manny as my wap chair iykwim ;)",
    "Rigel we should date",
    "Lets just all collectively shoot our shots i mean its quarantine its not like we have to see each other in person ",
    "new J.A. u cute o whateva",
    "my interns are the best ahh i love them",
    "I miss being in-person like how else are we supposed to clown on travis, our worm chair :(",
    "i miss y'all i really really do :'(",
    "My favorite ppl at parties are rigel, travis, and wilson. It's something about their apartment lol. They seem so put together in their daily lives and professional events, but see them at intercore they sum else. They're the true definition of work hard, play hard. Props to them",
    "Ali u r the epitome of all that is good in the world i love u",
    "Ana could spit in my mouth and step on me and I'd say thank you tbh... it's her power (ﾉ≧ڡ≦)",
    "Core this year is so sexy OML",
    "Ayo travis lemme see that tree trunk ;p",
    "I'm really glad we have so many new faces this year! Looking forward to meeting you all, don't be pas'hy <3",
    "HUGE round of applause to core for making IDD such a fun time! It really set up a great semester ahead of us :)",
    "I'm really happy AJ M is back in the space! He has such chill vibes and a calming presence ",
    "I'm so proud of Travis! He's come a long way since freshman year, and you really do deserve the world uwu",
    "i’m too pas’shy to say this in person, but joanne, will you be my forever🥺👉🏻👈🏻",
    "some of my co-interns be looking like a SNACC. drop yo' numbers plss 😜",
    "if u play league ur a nerd. i dont make the rules",
    "Wondering if those 2 core members will end up together hehe",
    "You better not censor this Conner (imma frrl throw hands) because [REDACTED] 😜. ",
    "In every encounter we have, my heart JUMPS. I've had so many crushes in the past but you are definitely one of the first that I'd consider husband-material. You are have the brains, the personality, and the looks that make you just my type. We also have so much in common! You have no idea how much I think about you. I wish I at least cross your mind.",
    "i miss all of yalls faces :<",
    "I'm so excited to read all of these confessions!!!",
    "Hi, Conner"
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