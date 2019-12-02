const goombaTotal = document.getElementById('goombaNumber');
const bobOmbTotal = document.getElementById('bobOmbNumber');
const cheepCheepTotal = document.getElementById('cheepCheepNumber');

let updateTotal = (event) => {
    document.getElementById('total').innerHTML = goombaTotal.value * 5 + bobOmbTotal.value * 7 + cheepCheepTotal.value * 11;
}

