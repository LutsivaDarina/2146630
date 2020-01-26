let k = 1;
function but() {
  var x = document.getElementById("myText").value;
  if (k++) {
    let newDiv = document.createElement("div");
    newDiv.className = "block";
    
    newDiv.id = k;
    $(".content-main-review").append(newDiv);
    let variable = document.querySelector(".block").getAttribute("id");
    variable = x;
    newDiv.insertAdjacentText("afterBegin", variable);
  }
}
let hotKeys = e => {
  let windowEvent = window.event ? event : e;
  if (windowEvent.keyCode === 13 && windowEvent.ctrlKey) {
    but();
  }
};
document.onkeydown = hotKeys;
