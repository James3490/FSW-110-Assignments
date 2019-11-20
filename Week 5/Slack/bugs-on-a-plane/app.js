const form = document["airlineForm"]
form.addEventListener("submit", function(event){
    event.preventDefault()

    const firstName = form.first-name["firstName"].value;
    var lastName = form.last-name["lastName"].value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travel-location.value;
    var diet = {};
    if (form.elements['vegan'].checked) {
        diet.pop(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
        
        alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
        console.log(firstName)
    }})
