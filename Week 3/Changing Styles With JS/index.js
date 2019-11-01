
// var groceryList = ["deli meat", "apples", "oranges", "salad-mix", "milk", "sugar", "canned soup", "crackers", "bottled water"];
// for(let i=0; i < groceryList.length; i++) {
//    var newh1 = document.createElement("h1")
//     newh1.textContent = groceryList[i]
//     document.body.append(newh1);document.querySelector("h1").classList.add("border");
//     newh1.style.fontSize = "20px";
//     newh1.style.fontWeight = "lighter";
//     newh1.style.fontFamily = "sans-Serif";
//     newh1.style.color = "cornflowerblue";
//     ;
// }

var groceryList = ["deli meat", "apples", "oranges", "salad-mix", "milk", "sugar", "canned soup", "crackers", "bottled water"];
for(let i=0; i < groceryList.length; i++) {
   var newh1 = document.createElement("h1")
    newh1.textContent = groceryList[i]
    document.body.append(newh1);
    newh1.classList = "border";
    newh1.style.fontSize = "20px";
    newh1.style.fontWeight = "lighter";
    newh1.style.fontFamily = "sans-Serif";
    newh1.style.color = "cornflowerblue";
    ;
}