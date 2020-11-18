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
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
        };
    });
});