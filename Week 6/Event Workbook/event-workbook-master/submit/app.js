// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
const form = document["submit-me"]
document.addEventListener("submit", function(e){
    event.preventDefault()
    const name = form.name.value
    const age = form.age.value
    alert(('Name: ') + name +
    ('\nAge: ') + age)})