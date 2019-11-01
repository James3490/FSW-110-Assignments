var i;
    
    var names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]
    for (i = 0; i < names.length; i++) {
    var newh1 = document.createElement("h1")
    newh1.textContent = names[i]
document.body.append(newh1)
newh1.style.textAlign = "center"
newh1.style.color = "blue"
}


