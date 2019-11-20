// make the box disapear when the user clicks it
// function addEventListeners() {}
// document.getElementsByClassName('red-box').addEventListeners('onclick', disappearing, false)

// function disappearing(){
//     red-box.style.visibility = hidden
// };
const box = document["red-box"]
document.addEventListener("click", function(e){
    event.preventDefault()
    // function removeElement(elementId) {
        // Removes an element from the document
        var element = document.getElementById('redBox');
        element.remove();
    })
   