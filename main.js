// DOM => The Documnet Object Model(DOM) is an application programming interface(API) for XML manipulating HTML and documeents. (add, remove, and modify parts of the documents). When a webpage is loaded, the browser creates DOM of th page.

 //select an element by ID
 let elm = document.getElementById("list");
 console.log(elm.innerHTML); //to get
 elm.innerHTML = "<p> Hello </p> "; //to set

 // select an element by Class
 let ele = document.getElementsByClassName("cl");
 console.log(ele);
 // changes in multiple class we treat as array
 for (let i = 0; i < ele.length; i++) {
   ele[i].innerHTML = "<p> Hello </p> ";
 }

 // select an element by tag
 let div = document.getElementById("div");
//  select h2 element which is inside the div element
 let el = div.getElementsByTagName("h2");
 for (let i = 0; i < el.length; i++) {
   el[i].innerHTML = "Hello";
 }

 // select element by query selector
 // for single element
 let find = document.querySelector(".intro");
 find.innerHTML = "hello";

 // for multiple elements
 let fin = document.querySelectorAll(".intro");
 for (let i = 0; i < fin.length; i++) {
   fin[i].innerHTML = "Hello";
 }

 // traversing elements
 // selecting parent 
 let box = document.getElementById("intro")
 let p = box.parentNode;
 console.log(p);

 // selecting children 
 let box1 = document.getElementById("intro")
 let node1 = box.firstElementChild;//first child
 let node2 = box.lastElementChild;//last child
 console.log(node);

 // selecting all elements 
 let box2 = document.getElementById("intro")
 let node3 = box.children;
 console.log(node);

 // selecting siblings 
 let box3 = document.getElementById("intro")
 let node4 = box.previousElementSibling;
 let node5 = box.nextElementSibling;
 console.log(node);

// create and append element in existing html
let elem = document.getElementById("intro");
let h1 = document.createElement("h1");//creating h1 element
let text = document.createTextNode("This is h1 tag")//inserting value in h1 using method
h1.appendChild(text);//appending text variable in h1 variable
elem.appendChild(h1);//appending h1 variable in elem variable
h1.className = "hi"; //giving element class name 
h1.id = "hio"; //giving element id 
//inserting value in h1 using property
h1.textContent = "hloo"
//appendChild always insert at last element.

// insert before
//insertBefore(element, position)

//if you want to insert at first element use insertBefore method.
let pos = elem.firstElementChild
elem.insertBefore(h1, pos);

//if you want to insert after first element use insertBefore method with sibling selector.
let pos1 = elem.firstElementChild.nextElementSibling;
elem.insertBefore(h1, pos1);

// insert inside body
let parent = document.body;
let h2 = document.createElement("h2");
h2.textContent = "This is h2 tag";
let lis = document.getElementById("intro");
parent.insertBefore(h2, lis);


// remove child element
let pro = document.getElementById("menu");
let elo = parent.firstElementChild;
parent.removeChild(elo);
// remove parent element
document.body.removeChild(parent);

// clone element
let menu = document.getElementById("menu")
let clone = menu.cloneNode(true);
// true means child elements are copied otherwise use false
clone.id = "menu-box"//we change the id because there is same id for the menu
document.body.appendChild(clone);

// replace element
let menu-box = document.getElementById("menu");
let item = document.createElement("li");
item.textContent = "Services";
let replace = parent.firstElementChild.nextElementSibling;
parent.replaceChild(item, replace);

// insert adjacentHTML(powerful)

//have 4 positions(beforebeing, afterbeing, beforeend, afterend), dont have to use createElement
let slct = document.getElementById("intro")
let html = "<h1>New h1</h1>"
slct.insertAdjacentHTML("beforebegin", html)
slct.insertAdjacentHTML("afterbegin", html)
slct.insertAdjacentHTML("beforeend", html)
slct.insertAdjacentHTML("afterend", html)

// change attribute(id, class)
// setAttribute(name, value)
let btn = document.getElementById("btn");
btn.setAttribute("name", "form1");//setting attribute
let val = btn.getAttribute("name");
console.log(val);
let rm = btn.removeAttribute("name");//removing attribute
let rm = btn.hasAttribute("name");//check if there is attribute or not

// inline style in js
let btn1 = document.getElementById("btn");
btn1.style.cssText += "background-color: red; color: white";//using property
btn1.setAttribute("style", "background-color: red; color: white");//using setAttribute
btn1.style.color = "red";//changing unit style

// get computed style
//check css style we added
let btn2 = document.getElementById("btn");
let css = getComputedStyle(btn);
console.log(css.color);

