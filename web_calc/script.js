function squareNumber() {
    var squarednumber = document.getElementById('square-input').value;

    alert("The result of squaring the number " + squarednumber + " is " + squarednumber*squarednumber);
}

function halfNumber() {
    var halfnumber = document.getElementById('half-input').value;
    alert("Half of " + halfnumber + " is " + halfnumber/2) ;
}

function percentOf() {
    var num1 = document.getElementById('percent1-input').value;
    var num2 = document.getElementById('percent2-input').value;
    alert(num1 + " is " + (num1/num2)*100 + "% of " + num2);
}

function areaOfCircle() {
    var circlenumber = document.getElementById('area-input').value;
    alert("The area of a circle with radius " + circlenumber + " is " + circlenumber*circlenumber*Math.PI);
}