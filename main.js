var SUBJECT_NAMES = [
    "Data Structure & Algorithm Analysis", 
    "Data Structure & Algorithm Analysis (Lab)", 
    "Data Communication & Networking", 
    "Data Communication & Networking (Lab)", 
    "Object Oriented Analysis & Design", 
    "Computer Organization & Architecture", 
    "Professional Ethics", 
    "Probability & Statistics"
];

var CREDIT_HOURS = [
    3,
    1,
    3,
    1,
    3,
    3,
    2,
    2
];

var subjectNameText = new Array(SUBJECT_NAMES.length);
var subjectMarksInput = new Array(SUBJECT_NAMES.length);
var buttonGPA, buttonReset;
var totalGPAText;

window.onload = function() {
    // console.log("window.onload: ");
    console.log("window.onload: starts");
    console.log("window.onload: subjectNameTextView -> " + subjectNameText.length);
    for(var i = 0; i < SUBJECT_NAMES.length; i++) {
        subjectNameText[i] = document.getElementsByClassName("subjectName")[i];
        subjectNameText[i].innerHTML = SUBJECT_NAMES[i];
        console.log("window.onload: " + i + " -> " + subjectNameText[i].innerHTML);
        subjectMarksInput[i] = document.getElementsByClassName("subjectMarks")[i];
        console.log("window.onload: " + i + " -> " + subjectMarksInput[i].value);
    }

    buttonGPA = document.getElementById("buttonGPA");
    buttonReset = document.getElementById("buttonReset");
    totalGPAText = document.getElementById("totalGPA");

    console.log("window.onload: buttonGPA -> " + buttonGPA);
    console.log("window.onload: buttonReset -> " + buttonReset);

    buttonGPA.onclick = calculateGPA;
    buttonReset.onclick = reset;

    console.log("window.onload: ends");
}

function calculateGPA() {
    console.log("calculateGPA: starts");
    var totalGPA = 0, number, totalCreditHours = 0;
    for(var i = 0.00; i < SUBJECT_NAMES.length; i++) {
        number = Number(subjectMarksInput[i].value);
        if(number >= 80) {
            number = 4.00;
        } else if(number >= 75) {
            number = 3.67;
        } else if(number >= 70) {
            number = 3.33;
        } else if(number >= 65) {
            number = 3.00;
        } else if(number >= 60) {
            number = 2.67;
        } else if(number >= 55) {
            number = 2.33;
        } else if(number >= 50) {
            number = 2.00;
        } else if(number >= 45) {
            number = 1.00;
        } else {
            number = 0.00;
        }
        totalGPA += (number * CREDIT_HOURS[i]);
        totalCreditHours += CREDIT_HOURS[i];
    }
    totalGPA /= totalCreditHours;
    totalGPAText.innerHTML = totalGPA.toFixed(2) + "";
    console.log("calculateGPA: ends");
}

function reset() {
    console.log("reset: starts");
    for(var i = 0; i < SUBJECT_NAMES.length; i++) {
        subjectMarksInput[i].value = "80";
    }
    totalGPAText.innerHTML = "4.00";
    console.log("reset: ends");
}



