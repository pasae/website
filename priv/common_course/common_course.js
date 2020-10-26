window.onload = function addOption() {

    // CHANGE THIS EVERY SEMESTER BASED ON ROSTER CLASSES",
    const classes = ["ARCH 100A",
      "ARCH 110AC",
      "ARCH 130",
      "ARCH 170A",
      "ARCH 98",
      "ARCH198BC",
      "ART W23AC",
      "ASAMST 124",
      "ASAMST 197",
      "ASAMST W20AC",
      "BIO 1A",
      "BIO 1AL",
      "BIO 1B",
      "BIOENG 10",
      "BIOENG 102",
      "BIOENG 103",
      "BIOENG 105",
      "BIOENG 26",
      "BIOENG 98",
      "BIOENG C131",
      "BUDDSTD C50",
      "CHEM 103",
      "CHEM 104A",
      "CHEM 12A",
      "CHEM 135",
      "CHEM 1A",
      "CHEM 1AL",
      "CHEM 3A",
      "CHEM 3AL",
      "CHEM 4A",
      "CHEM 96",
      "CHEM C130",
      "CHINESE 51",
      "CHMENG 140",
      "CHMENG 40",
      "CIVENG 111",
      "CIVENG 122",
      "CIVENG 167",
      "CIVENG 170A",
      "CIVENG 199",
      "CMPBIO 156",
      "COGSCI 1",
      "COLWRIT R4B",
      "COMP SCI 198",
      "COMPSCI 161",
      "COMPSCI 162",
      "COMPSCI 170",
      "COMPSCI 186",
      "COMPSCI 188",
      "COMPSCI 198",
      "COMPSCI 294",
      "COMPSCI 61A",
      "COMPSCI 61B",
      "COMPSCI 61C",
      "COMPSCI 70",
      "COMPSCI C8",
      "CY PLAN 113",
      "CY PLAN 113A",
      "CY PLAN 115",
      "CY PLAN 118AC",
      "CY PLAN 119",
      "CY PLAN 140",
      "DATA C8",
      "DATA 102",
      "DATA 144",
      "DATA 198",
      "DATA C100",
      "DES INV 198-1",
      "ECON 100A",
      "ECON 162",
      "ECON 2",
      "ECON C3",
      "EDUC 98",
      "EECS 126",
      "EECS 16A",
      "EECS 16A",
      "ELENG 198",
      "ENERES W100",
      "ENGIN 26",
      "ENGIN 7",
      "ENVECON C151",
      "EPS 102",
      "EPS 82",
      "ESPM 108A",
      "ESPM 128",
      "ESPM 155AC",
      "ESPM 162A",
      "ESPM 173",
      "ESPM 60",
      "ESPM 98BC",
      "FILIPINO 1A",
      "FILIPN 100A",
      "FILIPN 101A",
      "FILIPN 1A",
      "FILM 20B",
      "GEOG 10",
      "GEOG 80",
      "GLOBAL 45",
      "HISTORY C184D",
      "IND ENG 195",
      "IND ENG 95",
      "INFO 188",
      "INTEGBI 118",
      "INTEGBI 131",
      "INTEGBI 131L",
      "INTEGBI 134L",
      "INTEGBI 139",
      "INTEGBI 35AC",
      "INTEGBI 77A",
      "Italian 120",
      "LDARCH 110",
      "LDARCH 140",
      "LDARCH C188",
      "LINGUIS 100",
      "LS 198",
      "MAT SCI 45",
      "MATH 113",
      "MATH 1A",
      "MATH 1B",
      "MATH 53",
      "MATH 54",
      "MATH 55",
      "MCELLBI 102",
      "MCELLBI 149",
      "MCELLBI 32",
      "MCELLBI C100A",
      "MCELLBI C62",
      "MEC ENG 104",
      "MEC ENG 108",
      "MEC ENG 40",
      "MEC ENG C85",
      "MEC ENG H194",
      "MEDIAST W10",
      "MUSIC 142",
      "MUSIC 198",
      "MUSIC 26AC",
      "MUSIC 44",
      "MUSIC 53B",
      "MUSIC R1B",
      "NUCENG 24 SEM 001",
      "NUCENG 24 SEM 003",
      "NWMEDIA 151AC",
      "PB HLTH 116",
      "PBHLTH 101",
      "PHYSICS 105",
      "PHYSICS 7A",
      "PHYSICS 7B",
      "PHYSICS 7C",
      "PHYSICS 89",
      "PHYSICS 8A",
      "PHYSICS 8B",
      "PLANTBI 135",
      "PLANTBI C112",
      "POLECON 100",
      "POLSCI 139D",
      "POLSCI 167AC",
      "PSYCH 140",
      "PSYED1",
      "RHETOR R1B",
      "S,SEASN 39",
      "S,SEASN R5A",
      "SOCIOL 120",
      "SOCIOL 167",
      "SOCIOL 198",
      "STAT 134",
      "STAT 198",
      "STAT 20",
      "UGBA 10",
      "UGBA 106",
      "UGBA 135",
      "UGBA 196",
      "UGIS 192B"];
  
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


    cell1.innerHTML = "<b>Student</b>" ;
    cell2.innerHTML = "<b>Email</b>" ;

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