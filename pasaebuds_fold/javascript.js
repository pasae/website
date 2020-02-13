function load() {
	var myData = data;
	var input = document.getElementById("myText").value;
	var original = input;
	input = input.toLowerCase();
	var pairs = [];
	if (input == '' || input == " ") {
		alert('Please put your name :)')
	}

	input = input.toLowerCase();

	var name = input.split(" ");
	var i;
	for (i = 0; i < myData.length; i++) {
		if (myData[i].First.toLowerCase().includes(name[0])) {
			pairs.push(myData[i]);
		} 
		// else if (myData[i].Second.toLowerCase().includes(name[0])) {
		// 	pairs.push(myData[i]);
		// }
	}

	if (pairs.length == 0) {
		alert('Please check the spelling of your name');
		return;
	}


	if (pairs.length == 1) {
		//if ((name.length == 1) && (pairs[0].First.split(" ")[0] == pairs[0].Second.split(" ")[0])) {
		//	alert("Please include your last name. We have more than one " + original + " in PASAE");
		//	return;
		//}
		if (pairs[0].First.split(" ")[0] == pairs[0].Second.split(" ")[0]) {
		 	alert("Please include your last name. We have more than one " + input + " in PASAE");
		 	return;
		}
	    if (pairs[0].First.toLowerCase().includes(name[0])) {
			console.log(pairs[0].First)
	      alert("Hi " + pairs[0].First + ", Your PASAEBuds are: " + pairs[0].Second);
	      return;
		} 
		// else if (pairs[0].Second.toLowerCase().includes(name[0])) {
	    //   alert("Hi " + pairs[0].Second + ", Your PASAEBud is: " + pairs[0].First);
	    //   return;
	    // }
	}

	if (pairs.length > 1) {
		for (i = 0; i < pairs.length; i++) {
			if (pairs[i].First.toLowerCase().includes(name[1])) {
				alert("Hi " + pairs[i].First + ", Your PASAEBud is: " + pairs[i].Second);
				return;
			} else if (pairs[i].Second.toLowerCase().includes(name[1])) {
				alert("Hi " + pairs[i].Second + ", Your PASAEBud is: " + pairs[i].First);
				return;
			}
		}
	}
	alert("Please include your last name. We have more than one " + original + " in PASAE");
	return;

}
