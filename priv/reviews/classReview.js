function load() {
	var myData = data;
	var input = document.getElementById("class").value;

	input = input.toLowerCase();
	input = input.replace(" ", "")

	if (input.length == 0) {
		alert('Please put the class name');
		return;
	}

	var classes = [];

	for (i = 0; i < myData.length; i++) {
		var className = myData[i].Course.toLowerCase();
		if (className.includes(input)) {
			classes.push(myData[i]);
		}
	}

	




}