
document.getElementById("calculate").addEventListener("click", function() {
    document.getElementById("result").innerHTML = "Result: ";
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log(num1, num2);
    document.getElementById("result").innerHTML += (num1)+(num2)
   })

   document.getElementById("calculate2").addEventListener("click", function() {
    document.getElementById("result").innerHTML = "Result: ";
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    console.log(num3, num4);
    document.getElementById("result2").innerHTML += (num3)-(num4)
   })

   document.getElementById("calculate3").addEventListener("click", function() {
    document.getElementById("result").innerHTML = "Result: ";
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    console.log(num5, num6);
    document.getElementById("result3").innerHTML += (num5)*(num6)
   })
