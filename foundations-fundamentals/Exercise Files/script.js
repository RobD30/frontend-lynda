// define several functions
function firstFunction() {
    var a = 5;
    var b = 10;
    secondFunction();
    var c = a + b;
    alert(c);
}
function secondFunction() {
    var message;
    message = "Hello";
    alert(message);
    thirdFunction();
}
function thirdFunction() {
    var i = 0;
    var total = 0;

    while ( i < 100 ) {
        total = total + 100;
        i++;
    }

    fourthFunction();
}
function fourthFunction() {
    headline.innerHTML = "You clicked the headline!";
}

// grab the headline element

var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {
    firstFunction();
};





