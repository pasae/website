const getReview = () => {
    const class_name = document.getElementById("className").value;

    const url = `https://www.ocf.berkeley.edu/~pasae/flask/revs/${class_name}`;

    console.log(url);

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    });

    xhr.open("GET", url);

    xhr.send(data);

    console.log(data);
    
    showClasses(data);

    // fetch(url)
    // .then(
    //     function(response) {
    //     if (response.status !== 200) {
    //         console.log('Looks like there was a problem. Status Code: ' +
    //         response.status);
    //         return;
    //     }

    //     // Examine the text in the response
    //     response.json().then(function(data) {
    //         console.log(data);
    //         clearTable();
    //         showClasses(data);
    //     });
    //     }
    // )
    // .catch(function(err) {
    //     console.log('Fetch Error :-S', err);
    // });

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
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
    });

    const url = `https://www.ocf.berkeley.edu/~pasae/flask/revs/${class_name}`

    xhr.open("POST", url);

    xhr.send(form);

}
