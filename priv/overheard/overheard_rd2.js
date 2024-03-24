console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "I died and came back to life in 1 day… I'm 3 times fast as Jesus. - Xavier",
        "what if we crossed streams - Matt",
        "Q: Who's the most degenerate in PASAE? A: (without skipping a beat) oh probably Garrett - Unnamed speaker",
        "i have a lot of leg hair. it reminds me of the sourdough starter - Matthew Mojica",
        "I actually almost started choking on some balls there for a second - Garrett"
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
