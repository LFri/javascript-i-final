// Ray Martin 12/5/19
"use strict"

//Welcome Greeting - Window Alert & Prompt
alert("Are you ready to play?"); //window.alert()

let username = prompt("Great! What is your first name?"); //window.prompt()
console.log(username);

//1. Opening Question - Radio Buttons with custom greeting based on selection & includes data from prompt
let skillLevel;

function setSkillLevel () {
    if (document.getElementById("noob").checked) { //if... else
        console.log("is a noob");
        skillLevel = "noob";
        document.getElementById("experience") .innerHTML = "Don't be so hard on yourself, " + username + ", we all started as a " + 
        skillLevel + ", but don't be intimidated!"; //+ used to concatenate
    } else if (document.getElementById("student").checked) {
        console.log("is a student");
        skillLevel = "student";
        document.getElementById("experience") .innerHTML = "Welcome " + username + "! A wise " + skillLevel + " is always learning!";
    } else if (document.getElementById("pro").checked) {
        console.log("is a pro");
        skillLevel = "pro";
        document.getElementById("experience") .innerHTML = "Congratulations, " + username + "! Being a " + skillLevel + " means your hard work is paying off!";
    }
} 

document.getElementById("skillButton") .addEventListener ("click", setSkillLevel, false) //Event Listener activates the function

//2. Math Calculator
function calculateAnswer () {
    const n1 = (document.getElementById("number1").value) * 1; //document.getElementByID("something2").value
        console.log("Number 1 is: " + n1);
    const n2 = (document.getElementById("number2").value) * 1;
        console.log("Number 2 is: " + n2);
    const operator = document.getElementById("operation").value;
        console.log("The operator is: " + operator);
    const answer = document.getElementById("answer");
        let result = 0;
    switch (operator) { //switch with operators + - * / % **
        case "add": result = n1 + n2; break; //+ used to add
        case "subtract": result = n1 - n2; break;
        case "multiply": result = n1 * n2; break;
        case "divide": result = n1 / n2; break;
        case "remainder": result = n1 % n2; break;
        case "exponent": result = n1 ** n2; break;
    }
    answer.textContent = "The answer is " + result;
    console.log("The answer is " + result); //console.log used for debugging
}
document.getElementById("calculateButton").addEventListener ("click", calculateAnswer);

//3. Change Background Color- create an array of page colors.  Cycle through the colors by clicking a button.

var colors = ["red", "blue", "green", "purple", "yellow", "white", "black",] //array of colors
let availColors = document.getElementById("availColors");
let c = 0;

while (c < colors.length) { //while loop for managing the color array list
    let addColor = document.createElement("li");
    addColor.textContent = colors[c];
    availColors.append(addColor);
    c+=1; //Would normally increment with ++, but needed to use += operation
}

var num = 0; //var

function changeBackground () {
    var section = document.getElementsByTagName("section")[2]; //document.getElementsByTagName
    num++;
    if (num >= colors.length) {
        num=0;
    }
   section.style.backgroundColor = colors[num];
document.getElementById("color").textContent = "That's pretty, " + username + "!"; //document.getElementByID("something1").textContent
}

document.getElementById("background").addEventListener ("click", changeBackground);

function changeFont () {
    var content = document.querySelectorAll(".colors")[0]; //document.querySelectorAll("something4")
    num++;
    if (num >= colors.length) {
        num=0;
    }
   content.style.color = colors[num]; //changing a style for the class .colors
}
document.getElementById("font").addEventListener ("click", changeFont);

function changeAll () {
    num++;
    if (num >= colors.length) {
        num=0;
    }
    
    document.body.style.backgroundColor = colors[num];
    document.getElementsByTagName("footer")[0].style.backgroundColor = colors[num];
    document.getElementsByTagName("header")[0].style.backgroundColor = colors[num];
    document.getElementById("wrapper").style.backgroundColor = colors[num]; //document.getElementByID("something3").style

    var section = document.getElementsByTagName("section");
    for (let i = 0; //for loop to change all 4 of the <sections>
        i < 5; i++ ) { //console logged out that error! I had i<6 becase there are 5 sections, but we START at 0, not 1!
        section[i].style.backgroundColor = colors[num];
    }
}
document.getElementById("changeAll").addEventListener ("click", changeAll);



//4. Comparison Statements  > < >= etc. Answer True or False.

function compareAnswer () {
    const n3 = (document.getElementById("number3").value);
        console.log("Number 1 is: " + n3);
    const n4 = (document.getElementById("number4").value);
        console.log("Number 2 is: " + n4);
    const condition = document.getElementById("operator").value;
        console.log("The comparison is: " + condition);
    const answer = document.getElementById("answer2");
        let test = 0;
    switch (condition) { //> < >= <= === != since these are numbers === isn't going to find a different type
        case "greater": test = n3 > n4; break;
        case "less": test = n3 < n4; break;
        case "equal": test = n3 === n4; break;
        case "notEqual": test = n3 != n4; break;
        case "greaterEqual": test = n3 >= n4; break;
        case "lessEqual": test = n3 <= n4; break;
    }
    answer2.textContent = "The answer is " + test;
    console.log("The answer is " + test); //console.log used for debugging
}
document.getElementById("compareButton").addEventListener ("click", compareAnswer);


/*5. Simple Counter/Countdown to demonstrate ++ -- && || == !== depending on skillLevel it gives different messages
at 20 and 40, so if you take the time to hit the button that many times in either direction it displays a message */

let a = 0;
let counter = document.getElementById("counter");
function addOne () {
    a++;
    console.log(a);
    counter.textContent = a;
    if ( a >= 20 || a <=-20 ) {
        counter.textContent = a + " Whoa, take it easy, " + username + "!";
        }
    
    if ( skillLevel == "pro" && a >= 40 ) {
        counter.textContent = a + " Is this really PRO behavior, " + username + "?";
    } else if ( skillLevel == "pro" &&  a <= -40 ) {
        counter.textContent = a + " Is this really PRO behavior, " + username + "?";
    } else if ( skillLevel !== "pro" && a >=40 ) {
        counter.textContent = a + " Sure...keep going, " + username + "...";
    } else if ( skillLevel !== "pro" && a <= -40) {
        counter.textContent = a + " Sure...keep going, " + username + "...";
    }
}

function minusOne () {
    a--;
    console.log(a);
    counter.textContent = a;
    if ( a >= 20 || a <=-20 ) {
        counter.textContent = a + " Whoa, take it easy, " + username + "!";
        }

    if ( skillLevel == "pro" && a >= 40 ) {
        counter.textContent = a + " Is this really PRO behavior, " + username + "?";
    } else if ( skillLevel == "pro" &&  a <= -40 ) {
        counter.textContent = a + " Is this really PRO behavior, " + username + "?";
    } else if ( skillLevel !== "pro" && a >=40 ) {
        counter.textContent = a + " Sure...keep going, " + username + "...";
    } else if ( skillLevel !== "pro" && a <= -40) {
        counter.textContent = a + " Sure...keep going, " + username + "...";
    }
}
document.getElementById("up").addEventListener ("click", addOne);
document.getElementById("down").addEventListener ("click", minusOne);




/* Several custom functions created.  addEentListener() used to trigger all code.
Finish up by validating html, CSS, JS & Spell check.  Go back through instructions and comment out all requirements met. */