const form = document["my-form"]
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const fName = form.fName.value
    const lName = form.lName.value
    const gender = form.option.value
    const age = form.age.value
    const destination = form.destination.value
    const diet = form.diet.value

    alert(('First Name: ') + fName +
    ('\nLast Name: ') + lName + ('\nAge: ') + age + ('\nGender: ') + gender + ('\nDestination: ' + destination) + ('\nDiet: ' + diet));
    })
