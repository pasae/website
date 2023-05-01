confessions = [
"Matt's kinda cute ngl 😘 would totally wanna kiss him on the lips or smth idk  🫦",
"last weekend got me not wanting to be Filipino for a few days",
"Not me having crushed on Mila 🫣 (then realized she was taken lolol)",
"maybe don’t confess if you’re not gonna do anything about it",
"I wish I got to see Iana a lot more in PASAE. ",
"We should have all of the interns fight in one big battle royale - winner gets to write their name on the PASAE sign - Nathan",
"bro Matt kinda my friend crush fr ",
"Emmuelle you have my whole heart i hope you know that",
"what do you mean i graduate in three weeks?!",
"Cody you're the sweetest and kindest person i have ever met i feel so honored to have met you",
"y'all see Avery, Cody, and Gelo during the afx showcase?! got me gagged fr!!",
"Josh you are the glue of what made PASAE",
"i miss Henzel wtf 😭",
"PA'Seniors i'm ready for the after-party to the after-party",
"I’d rather be your PASAE’bae than be your PASAE’bud",
"angelo always looks high",
"KAPA UP!!!!!",
"mahalo nui + maraming salamat core 35, i love you all so much. for the seniors graduating, you all have left a mark on me and i can not wait to see you guys tackle on the world and accomplish big things. i'm so glad to have been the bunso of core 35, and i am forever thankful for you guys being my bestest ever teachers, you all have been very patient with me, very gentle, very loving, and words can not explain how much i am grateful for my first ever core. ate kia, congratulations on graduating, i love u so much <3 thank u for being the older sister at berkeley that i didn't have<3 CONGRATULATIONS CLASS OF 2023! CHEEEEEEEEEEHUUUUUUU",
"mila and freya, as much as i say i'm not ready to lead pasae 36, i know we can work together and make shit look EASY, we are so ready, we've been ready,, and i can't wait to accomplish big things with you guys <3 #exec36bunso",
"rose, you make me the proudest ate ever. you are such a delight, thank you for being my ading. you bring me so much purpose as an ate, and i can't wait to see what berkeley has in store for you. i am so glad you came into my life, and it's bittersweet knowing you've grown up so fast even within the span of a few months. my biggest dream is for you to teach your ading the skills i taught you, to approach problems with logic instead of impulse, but to put your heart into everything you do <3 and i know that you will be a better ate than i will ever be :') i love you ading, you are so smart, powerful, hardworking, and a small bundle of joy! always strive to be the best you can be, and it will all work from there. kulia i ka nuu, strive to reach the summit, and that will provide you excellence. ",
"thomas, thank u for being my little e7 companion, my food vacuum,  the ading i paired my sib with :) thank u for being such a wonderful and ENERGETIC ading! you bring me so much life, and there is always something to laugh, smile and giggle about with you! take care ading, love you so much my dear! <3",
"my ading richard is not in pasae, but i hope he will join with his sibs! i love you dearly ading!! you are really the life of the party,  and i hope i can learn how to keep up with you HAHAHAH i am so old",
"my beautiful twin babies, raelin and denise <3 i love you both dearly and words can not explain how much i love both of your chemistries. thank you for being involved in pasae, it is so heartwarming to know i pasae'ified my adings! take care you two, be careful and always have fun! you both have grown up so much since we picked up both of you in october, and i hope you know that we will always be there for you! ate karly loves u<3 bye adingss",
"is it concerning that soju is starting to taste like water??",
"mark u are loved ",
"im excited for core 36 :)",
"josh b carrying this organization ",
"henzel fr got that kuya strength dude ",
"this year went by so fast, but i guess time flies when you're having fun 😭😭",
"seeing henzel again increased my lifespan by 4 years",
"mark is a ride or die fr",
"to whoever said they weren't sure about getting involved since it seemed like everyone knew each other, i knew literally no one when i applied for core but fuck it we ball and it turned out pretty good :)",
"karly inspires me",
"alumni mixer was a great time, one per semester would be really cool",
"i want to be breastfed",
"Mila brings the best vibes",
"Nathan could either form the next trillion dollar market cap company or spend life in Azerbaijan prison and it's great ",
"common pcn slayyyy ❤️❤️",
"so who tryna confess the confessions they wrote lmao",
"All the seniors leaving has that 'if you change all the pieces of a boat, is it still the same boat?' energy",
"drunk therese both concerns and amazes me I love her",
"matt I ask u release the rest of the bee movie",
"nathan u deserve the world and more",
"matt ur so goated for these confessions all year ",
"mark is one of the most passionate and devoted members I have seen in pasae in a long time! such a mf goat ",
"kiana u are such a sweetheart I wish I could have gotten to spend time with you more ",
"is r single???",
"sorry for almost killing you mark",
"michael u got some nice dance moves ",
"my hearts going thru the mfing wringer",
"issa u are so pretty!",
"core 35 leaving has me in my feelings",
"shout out to nathan for bringing all his friends to the last pasae general meeting this semester <3",
"last night was a movie",
"there’s no other support and love like the one i’ve had in pasae",
"aroan is intern of the year!",
"Nathan when u leading the pas'rizz workshop?",
"who's the hottest core in pasae history?",
"ohana means family",
"i need a hug",
"sabonis is ass",
"Matt's a prophet"
]

const autowrite = () => {
    let confessionsToPost = '';

    const cardColors = ['primary', 'danger', 'warning'];
    let cardNum = 0;

    confessions.sort((a, b) => a.length - b.length)

    for (let i in confessions) {
        const conf = confessions[i];
        const color = cardColors[cardNum];
        var size = 'h5'
        if (conf.length > 100) {
            size = "h6"
        }
        let card = `
        <div class="col-md-4">
            <div class="card text-white bg-${color} mb-3" >
                <div class="card-body">
                    <${size} class="card-text">
                        ${conf}
                    </v>
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

    // for (let i in confessions) {
    //     const conf = confessions[i];
    //     const color = cardColors[cardNum];
    //     let card = `
    //     <div class="col-md-4">
    //         <div class="card text-white bg-${color} mb-3" >
    //             <div class="card-body">
    //                 <h5 class="card-text">
    //                     ${conf}
    //                 </h5>
    //             </div>
    //         </div>
    //     </div>`
    //     confessionsToPost += card;

    //     if (cardNum == 2) {
    //         cardNum = 0;
    //     } else {
    //         cardNum += 1;
    //     }
    // }

    document.getElementById("confessions").innerHTML = confessionsToPost;
}

autowrite();
