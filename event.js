// events in js
//DOM events are actions that occur as a result of the user action or as result of state change of the elements of the DOM tree.
//Event listeners are functions that are called when the event occurs.

// function btnClick(){
//   alert("button was clicked");
// }

let btn = document.getElementById("btn");
// btn.addEventListener("click", btnClick);

// mouse events
btn.addEventListener("click", function () {
  console.log("button was clicked");
});

btn.addEventListener("mouseover", function () {
  console.log("mouseover is activated");
});

btn.addEventListener("mouseout", function () {
  console.log("mouseout is activated");
});

btn.addEventListener("mousedown", function () {
  console.log("mousedown is activated");
});

btn.addEventListener("mouseup", function () {
  console.log("mouseup is activated");
});

btn.addEventListener("contextmenu", function () {
  console.log("contextmenu is activated");
});

btn.addEventListener("dblclick", function () {
  console.log("double click is activated");
});

// mutiple events
function click1() {
  console.log("click1 activated");
}
function click2() {
  console.log("click2 activated");
}

btn.addEventListener("click", click1);
btn.addEventListener("click", click2);

btn.removeEventListener("click", click2);

// page load event
// DOMContentLoaded
// The DOMContentLoaded event fires when the document has been loaded and parsed, which means that the document's body element has been parsed.
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM tree created");
});
let img = document.getElementById("image");
img.addEventListener("load", function () {
  console.log("Fully loaded");
});

//keydown event
window.addEventListener("keyup", checkKey);

function checkKey(e) {
  console.log(e.key);
}
// keydown is activated when key is pressed
// keyup is activated when we release the key

//scroll event
window.addEventListener("scroll", function () {
  console.log("scrolling...");
});

// vertical scroll
window.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    console.log("scrolling up...");
  } else if (e.deltaY > 0) {
    console.log("scrolling down...");
  }
});

// detecting the scroll
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 200) {
//     document.body.style.background = "blue"
//   }else{
//     document.body.style.background = "white"
//   }
// });

//input event
let form = document.getElementById("myInput");
form.addEventListener("focus", function () {
  form.style.background = "yellow";
});
form.addEventListener("blur", function () {
  form.style.background = "white";
});
form.addEventListener("change", function () {
  console.log(this.value);
});
form.addEventListener("input", function () {
  console.log(this.value);
});

// event bubbling and capturing
//  bubbling => it starts from child to parent while we click to any element
//  capturing => it starts from parent to child while we click to any element
// default value(false) means bubbling is active while we put true capturing active
let d = document.getElementById("myDiv");
let b = document.getElementById("btns");
b.addEventListener("click", btnClick);
d.addEventListener("click", divClick);
document.body.addEventListener("click", bodyClick);

function btnClick() {
  // console.log("btn clicked");
}
function divClick() {
  console.log("div clicked");
}
function bodyClick() {
  console.log("body clicked");
}

// only one element to be active
function btnClick(e) {
  console.log("btn clicked");
  // e.stopPropagation();
}

//prevent default
// to prevent(disable) the default in the DOM
let click= document.getElementById("anchor");
click.addEventListener("click", function(e){
  console.log("link clicked");
  e.preventDefault();
});
click.addEventListener("dblclick", function(){
  console.log("link clicked on double click");
});
// here we disable single click and pass double click to active