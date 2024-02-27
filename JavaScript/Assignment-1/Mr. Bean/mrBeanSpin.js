function clickHandler() {
  var lamp = document.getElementById("lamp");
  //   lamp.style.display = null;

  var bean = document.getElementById("light");
  console.log("bean", bean);
  console.log("bean.style.display", bean.style.display);
  if (!bean.style.display) {
    lamp.style.display = "block";

    bean.style.display = "block";
  } else {
    lamp.style.display = null;

    bean.style.display = null;
    bean.style.display = null;
  }
}

function clickSpinner() {
  let wheel = document.querySelector(".wheel");
  let spinBtn = document.querySelector(".spinBtn");
  let value = Math.ceil(Math.random() * 3600);

  wheel.style.transform = "rotate(900deg)";
  value += Math.ceil(Math.random() * 3600);
  const myTimeout = setTimeout(myGreeting, 5000);
}

function myGreeting() {
  //   var spinner = document.getElementById("spinner");
  let spinner = document.querySelector(".spin-container");
  console.log("spinner", spinner);
  console.log("spinner.style.display", spinner.style.display);
  spinner.style.display = null;
  console.log("spinner.style.display", spinner.style.display);
}
