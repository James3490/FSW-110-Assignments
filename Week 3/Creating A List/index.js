    // document.write("<h1>Hello World</h1>")
//     var i;
//     var h1;
//     const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]
//     for (i = 0; i < names.length; i++) {
//     document.write("<h1>Hello World</h1>")
// };
//     var world = document.getElementsByTagName("h1")
//     h1.innerHTML = "names[i]";
var i;
    
    var names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]
    for (i = 0; i < names.length; i++) {
    var newh1 = document.createElement("h1")
    newh1.textContent = names[i]
document.body.append(newh1)
newh1.style.textAlign = "center"
newh1.style.color = "blue"
}


