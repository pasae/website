console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const overheard = [
        "'[hipster discord mod] was my first impression of you' - Xavier to Garrett",
        "'It's true. She's so mommy' - Co Erep X",
        "'Freya's so old she went to school with Jesus' - Tall boi e rep intern",
        "'You're the president? I thought you were just there!' - Christian Yim",
        "'Freya's so old, she has her own exhibit at Jurassic Park' - Co-erep G",
        "'PV=nRT right there' - Xavier",
        "'Q: What would want to do on your dream date? A: Fuck' - Noah Robles"
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
