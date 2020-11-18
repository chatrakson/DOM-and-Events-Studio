// Write your JavaScript code here.
// Remember to pay attention to page loading!
let btnDown = null;
let btnUp = null;
let btnRight = null;
let btnLeft = null;
let btnTakeOff = null;
let btnLand = null;
let btnAbort = null;

window.addEventListener("load", function () {
    btnTakeOff = document.getElementById("takeoff");
    btnTakeOff.addEventListener("click", function(event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
        };
    });

    btnLand = document.getElementById("landing");
    btnLand.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    btnAbort = document.getElementById("missionAbort");
    btnAbort.addEventListener("click", function(event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        };
    });

    let newYPosition = document.getElementById("rocket").offsetTop;
    let newXPosition = document.getElementById("rocket").offsetLeft = 0;
    document.getElementById("rocket").style.left = newXPosition + "px";

    btnUp = document.getElementById("up");
    btnUp.addEventListener("click", function(event) {
        newYPosition = newYPosition - 10;
        document.getElementById("rocket").style.top = newYPosition + "px";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
    });

    btnDown = document.getElementById("down");
    btnDown.addEventListener("click", function(event) {
        newYPosition = newYPosition + 10;
        document.getElementById("rocket").style.top = newYPosition + "px";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
    });

    btnLeft = document.getElementById("left");
    btnLeft.addEventListener("click", function(event) {
        newXPosition = newXPosition - 10;
        document.getElementById("rocket").style.left = newXPosition + "px";
    });

    btnRight = document.getElementById("right");
    btnRight.addEventListener("click", function(event) {
        newXPosition = newXPosition + 10;
        document.getElementById("rocket").style.left = newXPosition + "px";
    });

});