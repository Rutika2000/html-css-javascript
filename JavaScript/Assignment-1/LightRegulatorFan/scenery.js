var regulatorAngle = 0; // Initialize regulator angle
var fanSpeed = 0; // Initialize fan speed

function rotateRegulator(degrees) {
  var regulator = document.getElementById("cir");
  var fan = document.getElementById("blades");

  regulatorAngle += degrees;

  // Ensure the regulator angle is within the limit (0 to 300 degrees)
  regulatorAngle = Math.min(Math.max(regulatorAngle, 0), 300);

  regulator.style.transform = "rotate(" + regulatorAngle + "deg)";

  // Calculate fan speed based on regulator angle in a non-linear way
  if (regulatorAngle > 0) {
    fanSpeed = (300 - regulatorAngle) / 150 + 0.2; // Adjust the values as needed
    fan.style.animationDuration = fanSpeed + "s";
  } else {
    // If regulator is off, set fan speed to 0
    fanSpeed = 0;
    fan.style.animationDuration = "0s";
    // alert("You have reached starting")
  }
}

function turnOn() {
  var light = document.getElementById("trapezoid");
  var fan = document.getElementById("blades");
  var switchbtn = document.getElementById("switch");
  var hglow = document.getElementById("hglow");
  var hglow2 = document.getElementById("hglow2");

  if (light.style.display == "block") {
    light.style.display = null;
    switchbtn.style.backgroundPositionY = "37px";
  } else {
    light.style.display = "block";
    switchbtn.style.backgroundPositionY = "0px";
  }

  //fan
  if (fan.style.animationName == "fanRotate") {
    fan.style.animationName = null;
  } else {
    fan.style.animationName = "fanRotate";
  }

  //horizontal glow 1 and 2

  if (hglow.style.display == "block") {
    hglow.style.display = null;
  } else {
    hglow.style.display = "block ";
  }

  if (hglow2.style.display == "block") {
    hglow2.style.display = null;
  } else {
    hglow2.style.display = "block ";
  }
}

var switchBtn = document.getElementById("switch");
