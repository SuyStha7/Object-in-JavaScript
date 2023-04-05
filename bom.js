// Browser Object Model(BOM) is used to interact with the window. The window object represents the window in broswer. All the JS objects, functions and variables with var keyword automatically becomes the member of the window object. Global variables and functions are the properties and the method of the window object respectively. window object is self default object so se can ignore it. alert(), confirm(), prompt() are the window method 

// window object
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.outerHeight);

// window.open(url, name, features);
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let url = "https://www.google.com";
let features = "height=500, width=500";
let win;

btn1.addEventListener('click', function(){
  win = window.open(url, 'google', features);
});

btn2.addEventListener('click', function(){
  window.open('https://www.yahoo.com', 'google');
});

btn3.addEventListener('click', function(){
  win.close();
});

// time out and interval

let timeoutId = setTimeout(function(){
  alert("Please subscribe...")
}, 5000)

clearTimeout(timeoutId);


var time = setInterval(function(){
  console.log("Hello");
}, 2000)

let clear = document.getElementById("clear")
clear.addEventListener("click", function(){
  clearInterval(time);
})

//location object
// property
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);

// method
function fun(){
  window.location = "https://www.google.com";
  location.href = "https://www.google.com";
  location.assign("https://www.google.com");
  location.replace("https://www.google.com");
  location.reload();
}

// navigator object
// property
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);
console.log(navigator.cookieEnabled);
console.log(navigator.userAgent);
console.log(navigator.platform);

//method
console.log(navigator.javaEnabled());

// screen object
console.log(screen.height);
console.log(screen.colorDepth);
console.log(screen.orientation);
console.log(screen.width);