const availableTags = ['AEROSPC',
'AFRICAM',
'ARESEC',
'AMERSTD',
'AHMA',
'ANTHRO',
'AST',
'ARABIC',
'ARCH',
'ARMENI',
'HISTART',
'ART',
'HUM',
'ASAMST',
'ASIANST',
'ASTRON',
'BANGLA',
'BIBLIOG',
'BIO ENG',
'BIOLOGY',
'BIOPHY',
'BOSCRSR',
'BUDDSTD',
'BULGARI',
'BURMESE',
'EWMBA',
'XMBA',
'MBA',
'PHDBA',
'UGBA',
'CATALAN',
'CELTIC',
'CHM ENG',
'CHEM',
'CHICANO',
'CHINESE',
'CY PLAN',
'CIV ENG',
'CLASSIC',
'COG SCI',
'COLWRIT',
'COMPBIO',
'COM LIT',
'CMPBIO',
'COMPSCI',
'CRWRIT',
'CRIT TH',
'CUNEIF',
'CZECH',
'DANISH',
'DATASCI',
'DATA',
'DEMOG',
'DES INV',
'DEV ENG',
'DEVP',
'DEV STD',
'DIGHUM',
'DUTCH',
'EPS',
'EA LANG',
'ECON',
'EDUC',
'EGYPT',
'EECS',
'EL ENG',
'ENE,RES',
'ENGIN',
'ENGLISH',
'ENV DES',
'ENVECON',
'ESPM',
'ENV SCI',
'ETH STD',
'EUST',
'FILIPN',
'FILM',
'MFE',
'FINNISH',
'FOLKLOR',
'FRENCH',
'GWS',
'GEOG',
'GERMAN',
'GMS',
'GPP',
'GLOBAL',
'GSPDP',
'GREEK',
'HMEDSCI',
'HEBREW',
'HINDI',
'HISTORY',
'HUNGARI',
'ICELAND',
'ILA',
'INDONES',
'IND ENG',
'CYBER',
'INFO',
'INTEGBI',
'ISF',
'IAS',
'IRANIAN',
'ITALIAN',
'JAPAN',
'JEWISH',
'JOURN',
'KHMER',
'KOREAN',
'LD ARCH',
'LAN PRO',
'LATAMST',
'LATIN',
'LEGALST',
'LGBT',
'L&S',
'LINFOST',
'LINGUIS',
'MAT SCI',
'MATH',
'MEC ENG',
'MEDIAST',
'MED ST',
'M E STU',
'MIL AFF',
'MIL SCI',
'MCELLBI',
'MONGOLN',
'MUSIC',
'NSE',
'NATAMST',
'NAT RES',
'NAV SCI',
'NE STUD',
'NEUROSC',
'NWMEDIA',
'NORWEGN',
'NUC ENG',
'NUSCTX',
'OPTOM',
'PACS',
'PERSIAN',
'PHILOS',
'PHYS ED',
'PHYSICS',
'PLANTBI',
'POLISH',
'POLECON',
'POL SCI',
'PORTUG',
'PSYCH',
'PUB AFF',
'PB HLTH',
'PUB POL',
'PUNJABI',
'RDEV',
'RHETOR',
'RUSSIAN',
'SANSKR',
'SCANDIN',
'SCMATHE',
'STS',
'SEMITIC',
'SLAVIC',
'SOC WEL',
'SOCIOL',
'SSEASN',
'SASIAN',
'SEASIAN',
'SPANISH',
'EDUCSPE',
'STAT',
'SWEDISH',
'TAMIL',
'TELUGU',
'THAI',
'THEATER',
'TIBETAN',
'TURKISH',
'UGIS',
'URDU',
'VIETNMS',
'VIS SCI',
'VIS STD',
'YIDDISH']

const getReview = () => {
    const class_name = document.getElementById("className").value;

    const temp_class = class_name.split(" ");
    const input_class = []

    // const classNumPattern  = "[A-Za-z0-9]+";

    if (temp_class.length < 2) {
        window.alert("Please input class number");
        return; 
    } 

    if (!/[A-Za-z0-9]+/.test(temp_class[temp_class.length - 1])) {
        window.alert("Please input class number");
        return; 
    }

    let i;
    for (i=0; i < temp_class.length - 1; i++) {
        console.log(temp_class[i])
        input_class.push(temp_class[i]);
    }
    const input_class_format = input_class.join(" ");

    if (!availableTags.includes(input_class_format)) {
        window.alert("Please follow the class format!")
        return; 
    }

    const url = `https://www.ocf.berkeley.edu/~pasae/flask/revs/${class_name}`;

    console.log(url);

    fetch(url)
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data);
            clearTable();
            showClasses(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

}

const showClasses = (classes) => {
    var table = document.getElementById("myTable");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = "Class Name" ;
    cell2.innerHTML = "Professor" ;
    cell3.innerHTML = "Rating (out of 10)";
    cell4.innerHTML = "Comments";
    cell5.innerHTML = "Review By";

    if (classes.length === 0) {
        window.alert(`Sorry, we don't have any reviews for ${document.getElementById("className").value}`);
        return;
    }

    var rowNum = 1;
    for (i = 0; i < classes.length; i++) {
        rev = classes[i];
        
        const {name, professor, rating, review, student} = rev;

        console.log(name);
    	var row = table.insertRow(rowNum);
        rowNum += 1;

    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	var cell4 = row.insertCell(3);
    	var cell5 = row.insertCell(4);

    	cell1.innerHTML = name;
    	cell2.innerHTML = professor;
    	cell3.innerHTML = rating;
    	cell4.innerHTML = review;
    	cell5.innerHTML = student;
    }
}

const clearTable = () => {
  var table = document.getElementById("myTable");

  for(var i = table.rows.length - 1; i > -1; i--) {
    table.deleteRow(i);
  }
}


const sendReview = () => {
    const class_name = document.getElementById("class-name").value;
    const professor = document.getElementById("professor").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;
    const student = document.getElementById("student").value;

    switch (true) {
        case class_name.length == 0:
            window.alert("Enter Class Name");
            return;
        case professor.length == 0:
            window.alert("Enter Professor Name");
            return;
        case rating.length == 0:
            window.alert("Enter Your Rating!");
            return;
        case review.length == 0:
            window.alert("Enter Review!");
            return;
        case student.length == 0:
            window.alert("Enter Your Name!");
            return;
    }

    const temp_class = class_name.split(" ");
    const input_class = []

    // const classNumPattern  = "[A-Za-z0-9]+";

    if (temp_class.length < 2) {
        window.alert("Please input class number");
        return; 
    } 

    if (!/[A-Za-z0-9]+/.test(temp_class[temp_class.length - 1])) {
        window.alert("Please input class number");
        return; 
    }

    let i;
    for (i=0; i < temp_class.length - 1; i++) {
        console.log(temp_class[i])
        input_class.push(temp_class[i]);
    }
    const input_class_format = input_class.join(" ");

    if (!availableTags.includes(input_class_format)) {
        window.alert("Please follow the class format!")
        return; 
    }

    var form = new FormData();
    form.append("class", class_name);
    form.append("review", review);
    form.append("rating", rating);
    form.append("professor", professor);
    form.append("student", student);

    console.log(form);

    document.getElementById("class-name").value = "";
    document.getElementById("professor").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("review").value = "";
    document.getElementById("student").value = "";

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    });

    const url = `https://www.ocf.berkeley.edu/~pasae/flask/revs/${class_name}`

    xhr.open("POST", url);

    xhr.send(form);

    const message = `Thank you, ${student} for your ${class_name} review!`
    window.alert(message);

}
