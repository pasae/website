function findClass() {

  var x = document.getElementById("mySelect").selectedIndex;
  var input = document.getElementsByTagName("option")[x].value

	var myData = data;

	input = input.toLowerCase();

	var classes = [];


	for (i = 0; i < myData.length; i++) {
		var className = myData[i].Course.toLowerCase().replace(" ", "").replace(" ", "");

		if (input == className) {
			classes.push(myData[i]);
		}
	}

  if (classes.length == 0) {
    alert("It seems like we don't have a record of this class :/)");
    return;
  }

  clearTable();
	showClasses(classes);

}




window.onload = function addOption() {

  classes = ['AFRICAMW111', 'ANTHROR5B', 'ANTRHO3AC', 'ART8', 'ASAMST124',
       'ASAMST175', 'ASAMST197', 'ASAMST20A', 'ASAMST20AC', 'ASAMSTW20AC',
       'ASTRONC10', 'BIO1B', 'BIOE10', 'BIOLOGY1A', 'BIOLOGY1AL',
       'BIOLOGY1B', 'CHEM103', 'CHEM120A', 'CHEM120B', 'CHEM125',
       'CHEM12A', 'CHEM12B', 'CHEM135', 'CHEM1A', 'CHEM1AL', 'CHEM4A',
       'CHEM4B', 'CHEM96', 'CLASSIC28', 'CLASSICS10A', 'CLASSICS28',
       'COGSCI1', 'COGSCIC127', 'COMLITR1A', 'COMLITR1B', 'CS10', 'CS170',
       'CS186', 'CS188', 'CS61A', 'CS61B', 'CS61C', 'CS70', 'CS88',
       'CSC8', 'DATA100', 'DATA8', 'ECON1', 'EDUC130', 'EDUC131AC',
       'EE120', 'EE123', 'EE128', 'EE16A', 'EE16B', 'EE225B',
       'ENGLISH101', 'ENGLISH43A', 'ENGLISH98BC', 'ENGLISHR1A',
       'ENGLISHR1B', 'ENVDES1', 'EPSC82', 'ESPMC10', 'FIL1A/B',
       'FILIPINO100B', 'FILIPN100A', 'FILIPN100B', 'FILIPN1A',
       'FILIPN1A/1B', 'FILIPN1B', 'FILIPNW1Y', 'GAMEDESIGNDECAL',
       'GEOG183', 'GEOG70AC', 'GEOG80', 'GWS144', 'GWS50AC',
       'HAMRADIODECAL', 'HISTART88', 'HISTORY100AC', 'HISTORY124B',
       'IAS150', 'INDENG135', 'INDENG95', 'ISF61', 'ITALIAN130A',
       'L&SC70U', 'LINGUIS100', 'LINGUIS5', 'MATH10A', 'MATH10B',
       'MATH110', 'MATH128A', 'MATH151', 'MATH1A', 'MATH1B', 'MATH53',
       'MATH54', 'MATH55', 'MCELLBI/CHEMC110L', 'MCELLBI100B',
       'MCELLBI110', 'MCELLBI140', 'MCELLBI55', 'MCELLBIC100A/CHEM130',
       'MCELLBIC112', 'MCELLBIC64', 'MCELLBIW61', 'MLABDECAL',
       'MUSIC128B', 'MUSIC20A', 'MUSIC20B', 'MUSIC26AC', 'MUSIC27',
       'NUSCTX10', 'NUTRISCI10', 'PBHLTH162A', 'PHIL2', 'PHILOS25A',
       'PHILOS3', 'PHILOSW12A', 'PHYSICS7A', 'PHYSICS7B', 'PHYSICS7C',
       'PSYCH/COGSCIC126', 'PSYCH110', 'PSYCH160', 'PSYCHN117', 'PSYCHW1',
       'RUBYONRAILSDECAL', 'S,SEASN160', 'SCANDIN106', 'SEAS10B',
       'STAT133', 'STAT140', 'STAT20', 'STATC100', 'STATC8', 'STATS134',
       'THEATER118AC', 'THEATER52AC', 'UGBA10', 'UGBA96', 'UGIS187',
       'UGIS82', 'WEBDESIGNDECAL'];

  for (i = 0; i < classes.length; i++) {
    var x = document.createElement("OPTION");
    x.setAttribute("value", classes[i]);
    var t = document.createTextNode(classes[i]);
    x.appendChild(t);
    document.getElementById("mySelect").appendChild(x);
  }

}

function showClasses(classes) {
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
    cell5.innerHTML = "Core Member (Name)";


    var rowNum = 1;
    for (i = 0; i < classes.length; i++) {
    	// Insert new row
      rev = classes[i];

      if (rev['Comments'] == "") {
        continue;
      }

      console.log('Hello');

    	var row = table.insertRow(rowNum);
      rowNum += 1;

    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	var cell4 = row.insertCell(3);
    	var cell5 = row.insertCell(4);

    	cell1.innerHTML = rev.Course;
    	cell2.innerHTML = rev.Instructor;
    	cell3.innerHTML = rev["Rating (out of 10)"];
    	cell4.innerHTML = rev["Comments"];
    	cell5.innerHTML = rev["Core Member (Name)"];
    }
}

function clearTable() {
  var table = document.getElementById("myTable");

  for(var i = table.rows.length - 1; i > -1; i--) {
    table.deleteRow(i);
  }
}
