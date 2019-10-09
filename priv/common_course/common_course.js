window.onload = function addOption() {

    const classes = ['AFRICAM 27AC', 'AMERSTD 191', 'ANTHRO 2AC', 'ANTHRO 3AC',
    'ANTHRO R5B', 'ARCH 11A', 'ARCH 171', 'ARCH 98', 'ASAMST 128AC',
    'ASAMST 132', 'ASTRON C162', 'ASAMST 198', 'ASTRON C10',
    'Ballet DeCal', 'BIOLOGY 1A', 'BIOLOGY 1AL', 'BIOLOGY 1B',
    'BIO ENG 10', 'BIO ENG 124', 'BIO ENG 26', 'BIO ENG 98',
    'BIO ENG 99', 'CHEM 1A', 'CHEM 1AL', 'CHEM 3A', 'CHEM 3AL',
    'CHEM 3B', 'CHEM 3BL', 'CHEM 4A', 'CHEM 96', 'CHINESE 186',
    'CIV ENG C30', 'CIV ENG 100', 'CIV ENG 60', 'CIV ENG 92',
    'CIV ENG 98', 'CIV ENG C30', 'CLASSIC R44', 'COG SCI 190-004',
    'COG SCI C100', 'COG SCI C127', 'COM LIT R1A', 'COMPSCI 10',
    'COMPSCI 161', 'COMPSCI 188', 'COMPSCI 198', 'COMPSCI 61A',
    'COMPSCI 61B', 'COMPSCI 61C', 'COMPSCI C8', 'CYPLAN 110',
    'CYPLAN 113A', 'CYPLAN 119', 'DES INV 199', 'ECON 1', 'ECON 100B',
    'ECON 101B', 'ECON C171', 'EL ENG 16A', 'ENGIN 25', 'ENGIN 26',
    'ENGIN 7', 'ENGLISH 165', 'ENV DES 1', 'ENV DES 102', 'ENV DES 4A',
    'EPS 7', 'EPS 80', 'EPS C20', 'EPS C82', 'ESPM 15', 'ESPM 50AC',
    'ESPM 175', 'ESPM 157', 'ESPM 132', 'ESPM 6', 'ETH STD 101A',
    'FILIPN 100A', 'FILIPN 101A', 'FILIPN 1A', 'FILIPN W100A',
    'FILM R1A', 'GERMAN R5A', 'GEOG 10AC', 'GEOG 188', 'GLOBAL 10B',
    'HISTART 21', 'HISTORY 100', 'HISTORY 132C', 'HISTORY 7A',
    'HISTORY C184D', 'IND ENG 160', 'INFO 188', 'INTEGBI 41',
    'INTEGBI 35AC', 'INTEGBI 153', 'KOREAN 1A', 'L & S 1W',
    'L & S C30T', 'LD ARCH 110', 'LD ARCH 12', 'LD ARCH C188',
    'LEGALST 151', 'LGBT 20AC', 'LINGUIS 10', 'LINGUIS 100',
    'LINGUIS 110', 'LINGUIS 121', 'LINGUIS C146', 'MAT SCI 45',
    'MAT SCI 45L', 'MATH 113', 'MATH 104', 'MATH 16B', 'MATH 1A',
    'MATH 1B', 'MATH 53', 'MATH 54', 'MATH 55', 'MCELLBI 198',
    'MCELLBI 32', 'MCELLBI 32L', 'MCELLBI 55', 'MEC ENG 132',
    'MEC ENG C85', 'MUSIC 20A', 'MUSIC 142', 'NATAM 20A',
    'PB HLTH 116', 'PHYSICS 24', 'PHYSICS 7A', 'PHYSICS 7B',
    'PHYSICS 8A', 'PHYSICS 110B', 'PSYCH 1', 'PSYCH 110', 'PSYCH 133',
    'PSYCH 167AC', 'PSYCH C143', 'S,SEASN 10A', 'S,SEASN 39',
    'S,SEASN R5A', 'SOCIOL 1', 'SOCIOL 167', 'SOCIOL 198BC',
    'SOCIOL 98', 'STAT 140', 'STAT 2', 'STAT 20', 'STAT C100',
    'UGBA 10', 'UGBA 190T', 'UGBA 135', 'UGBA 96', 'UGIS 188',
    'XENG R1A', 'XENG R1B', 'XETHSTD 21AC', 'XMATH 1A', 'XPHILOS 2',
    'XPSYCH 1', 'VIS STD 84'];
  
    for (i = 0; i < classes.length; i++) {
      var x = document.createElement("OPTION");
      x.setAttribute("value", classes[i]);
      var t = document.createTextNode(classes[i]);
      x.appendChild(t);
      document.getElementById("mySelect").appendChild(x);
    }
  
  }
  

const getPeople = () => {
    const x = document.getElementById("mySelect").selectedIndex;
    const input = document.getElementsByTagName("option")[x].value;

    const url = `https://www.ocf.berkeley.edu/~pasae/flask/common/${input}`;

    console.log(url);
    fetch(url)
    .then(
        function(response) {
        if (response.status !== 201) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data);
            clearTable();
            showPeople(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

}


const showPeople = (people) => {
    var table = document.getElementById("myTable");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = "Student" ;
    cell2.innerHTML = "Email" ;

    var rowNum = 1;
    for (i = 0; i < people.length; i++) {
        // Insert new row

        const {name, email} = people[i];

        var emailLink = `<a href="mailto:${email}" target="_blank">${email}</a>`;

        var row = table.insertRow(rowNum);
        rowNum += 1;
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = name;
        cell2.innerHTML = emailLink;

    }
}

const clearTable = () => {
  var table = document.getElementById("myTable");

  for(var i = table.rows.length - 1; i > -1; i--) {
    table.deleteRow(i);
  }
}