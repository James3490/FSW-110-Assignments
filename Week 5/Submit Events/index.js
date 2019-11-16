  const form = document["my-form"]
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const fName = form.fName.value
    const color = form.color.value
    const favFood = form.favFood.value
    alert(fName + (' favorite color is ') + color + (' and loves to eat ') + favFood);
    })
