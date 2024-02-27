function clickHandler() {
  var bean = document.getElementById("light");
  console.log("bean", bean);
  console.log("bean.style.display", bean.style.display);
  if (!bean.style.display) {
    bean.style.display = "block";
  } else {
    bean.style.display = null;
  }
}
