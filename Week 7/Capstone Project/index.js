const form = document["my-todo-list"]
form.addEventListener("submit", function(event){ event.preventDefault();


    const whatToDo = form.whatToDoInput.value;
    const whoFor = form.WhoToDoIt.value;
    const ul = form.list;

    //creates li and appends to ul
    const li = document.createElement("li");
    li.textContent = whatToDo + ": " + whoFor
    document.body.append(li);

    //this resets the form after the form is submitted
    form.reset();

    //this creates the delete/closing X
const formedList = document.getElementsByTagName("li");
const span = document.createElement("span");
const txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
var i;
for (i = 0; i < formedList.length; i++) {
formedList[i].appendChild(span);
}

    //this allows the delete button to actually delete the clicked on line from the list
    const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}
    
   

    //this allows the form to submit with the return key instead of just having to use the submit button.
    document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      newItem();
    }
  };
 })

  
  
  



  
   // form.whatToDoInput, WhoToDoIt.value = "";
    // span.onclick = removeItem;
    
    // function removeItem(e) {
    // e.target.parentElement.removeChild(e.target);}