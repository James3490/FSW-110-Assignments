  
var document = document
var button = document.getElementById('button')
button.addEventListener('click', function(ev) {
    ev.preventDefault()
    let person = { 
    fName: document.getElementById('name').value,
   favColor: document.getElementById('color').value,
   favFood: document.getElementById('food').value}
   alert(person.fName + ' favorite color is ' + person.favColor + ' and loves to eat ' + person.favFood);
   document.querySelector('form').reset();

})