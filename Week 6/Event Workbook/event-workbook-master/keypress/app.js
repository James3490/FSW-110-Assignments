/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

const box = document["output"]
document.addEventListener("keydown", function(e){
    event.preventDefault()
    console.log(event.key);
    console.log(event.code);
    document.getElementById('output').innerHTML = (event.key + ' ' + event.code + ' ')
 })
 