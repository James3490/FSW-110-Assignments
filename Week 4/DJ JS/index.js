function addEventListeners() {}
document.getElementById("box").addEventListener("mouseover", bckground, false); 
document.getElementById("box").addEventListener("mousedown", msedown, false);
document.getElementById("box").addEventListener("mouseup", mseup, false);
document.getElementById("box").addEventListener("dblclick", doubleclick, false);
window.addEventListener("scroll", scroll, false);
window.addEventListener("keydown", keypress, false);


function bckground() {
    box.style.backgroundColor = "blue"
};
function msedown() {
    box.style.backgroundColor = "red"
};
function mseup() {
    box.style.backgroundColor = "yellow"
};
function doubleclick() {
    box.style.backgroundColor = "green"
};
function scroll() {
    document.body.style.backgroundColor = "orange"
};
function keypress(e) {
    if (event.which == "66") {
        box.style.backgroundColor = "blue"   
    } else if (event.which == "82") {
        box.style.backgroundColor = "red"
    } else if (event.which == "89") {
        box.style.backgroundColor = "yellow"
    } else if (event.which == "71") {
        box.style.backgroundColor = "green"
    } else if (event.which == "79") {
        box.style.backgroundColor = "orange"
    }
};

