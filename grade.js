function submit() {
    let submitButton = document.getElementById("submitButton").innerHTML;

    let numbersT = document.getElementById("numbersT").innerHTML;
    let lettersT = document.getElementById("lettersT").innerHTML;
    let Quizes = document.getElementById("Quizes").value;
    let Midterm = document.getElementById("Midterm").value;
    let FinalTest = document.getElementById("FinalTest").value;
    let Oral = document.getElementById("Oral").value;



    let totl =  Quizes + Midterm + FinalTest + Oral;

    if (totl >= 90) {

      document.getElementById("numbersT").innerHTML = "A";
     parseInt(document.getElementById("lettersT").innerHTML = totl) ;
    }
     else if (totl >= 80) {

      document.getElementById("numbersT").innerHTML = "B";
      document.getElementById("lettersT").innerHTML = totl;
    } 
    else if (totl>= 70) {

      document.getElementById("numbersT").innerHTML = "C";
      document.getElementById("lettersT").innerHTML = totl;
    } 
    else if (totl >= 60) {

      document.getElementById("numbersT").innerHTML = "D";
      document.getElementById("lettersT").innerHTML = totl;

    } 
    else document.getElementById("numbersT").innerHTML = "F";
    document.getElementById("lettersT").innerHTML = totl;
  }
