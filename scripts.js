// Write your JavaScript code here.
// Remember to pay attention to page loading!
let btnDown = null;
let btnUp = null;
let btnRight = null;
let btnLeft = null;
let btnTakeOff = null;
let btnLand = null;

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
});